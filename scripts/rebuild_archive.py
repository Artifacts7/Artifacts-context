#!/usr/bin/env python3
"""Build faithful Markdown copies from saved, rendered Substack article bodies.

Requires pandoc and Python lxml. No network access or generated editorial text.
Usage: python3 scripts/rebuild_archive.py /path/to/captured-json
"""
import argparse
import hashlib
import json
import re
import subprocess
import unicodedata
from html import escape
from datetime import datetime
from pathlib import Path
from urllib.parse import quote, urljoin

from lxml import etree, html

ROOT = Path(__file__).resolve().parents[1]
CAPTURE_DATE = "2026-10-24"


def sha(value):
    return hashlib.sha256(value.encode()).hexdigest()


def pandoc(value, source, target):
    if source == "gfm":
        source = "gfm-autolink_bare_uris-tex_math_dollars-tex_math_gfm-emoji"
    return subprocess.run(
        ["pandoc", "-f", source, "-t", target, "--wrap=none"],
        input=value, text=True, capture_output=True, check=True,
    ).stdout


def norm(value):
    # Formatting changes can introduce whitespace at inline-node boundaries.
    return unicodedata.normalize("NFC", re.sub(r"\s+", "", value).replace("\u200b", "").replace("\ufeff", ""))


def links(tree):
    # HTML serializers percent-encode spaces/non-ASCII URL characters.
    return [quote(e.get("href"), safe=":/?#[]@!$&'()*+,;=%") for e in tree.xpath('.//a[@href]')]


def images(tree):
    return [(quote(e.get("src"), safe=":/?#[]@!$&'()*+,;=%"), norm(e.get("alt", ""))) for e in tree.xpath('.//img')]


def parse(value):
    return html.fragment_fromstring(value, create_parent="div")


def tidy_markdown(value):
    # Express hard breaks explicitly, including breaks before empty blocks.
    return "\n".join(
        "" if not line.strip() else line.rstrip() + ("<br>" if line.endswith("  ") else "")
        for line in value.splitlines()
    ) + "\n"


def markdown(cleaned, safe_emphasis=False):
    tree = parse(cleaned)
    targets = {}
    for i, element in enumerate(tree.xpath('.//a[@href]')):
        token = f"https://archive.invalid/link/{i:06d}"
        targets[token] = element.get("href")
        element.set("href", token)
    prepared = (tree.text or "") + "".join(html.tostring(e, encoding="unicode") for e in tree)
    if not safe_emphasis:
        result = pandoc(prepared, "html", "gfm")
        for token, target in targets.items():
            result = result.replace(token, target)
        return result
    # Markdown cannot express certain published emphasis boundaries (for
    # example bold starting immediately after an unbolded word). Preserve
    # those boundaries with inline HTML rather than changing the wording.
    ast = json.loads(pandoc(prepared, "html", "json"))

    def walk(value):
        if isinstance(value, list):
            result = []
            for item in value:
                tag = {"Strong": "strong", "Emph": "em", "Strikeout": "s"}.get(item.get("t")) if isinstance(item, dict) else None
                if isinstance(item, dict) and item.get("t") == "Image":
                    _, label, target = item["c"]
                    alt = pandoc(json.dumps({"pandoc-api-version": ast["pandoc-api-version"], "meta": {}, "blocks": [{"t": "Plain", "c": label}]}), "json", "plain").rstrip("\n")
                    attrs = f' src="{escape(target[0], quote=True)}" alt="{escape(alt, quote=True)}"'
                    if target[1]:
                        attrs += f' title="{escape(target[1], quote=True)}"'
                    result += [{"t": "RawInline", "c": ["html", "<img" + attrs + ">"]}]
                elif isinstance(item, dict) and item.get("t") == "Link":
                    _, label, target = item["c"]
                    attrs = f' href="{escape(targets.get(target[0], target[0]), quote=True)}"'
                    if target[1]:
                        attrs += f' title="{escape(target[1], quote=True)}"'
                    result += [{"t": "RawInline", "c": ["html", "<a" + attrs + ">"]}]
                    result += walk(label)
                    result += [{"t": "RawInline", "c": ["html", "</a>"]}]
                elif tag:
                    result += [{"t": "RawInline", "c": ["html", f"<{tag}>"]}]
                    result += walk(item["c"])
                    result += [{"t": "RawInline", "c": ["html", f"</{tag}>"]}]
                else:
                    result.append(walk(item))
            return result
        if isinstance(value, dict):
            return {k: walk(v) for k, v in value.items()}
        return value

    return pandoc(json.dumps(walk(ast)), "json", "gfm")


def clean(data):
    root = parse(data["html"])
    removed = {"subscription_widgets": 0, "image_controls": 0}
    embeds = []
    for element in list(root.xpath('.//div')):
        cls = element.get("class", "").split()
        if any(c in cls for c in ("subscribe-widget", "subscription-widget-wrap")):
            element.drop_tree()
            removed["subscription_widgets"] += 1
    for element in list(root.xpath('.//iframe|.//audio|.//*[@data-component-name="VideoEmbedPlayer"]')):
        if element.getparent() is None:
            continue
        kind = "video" if element.get("data-component-name") == "VideoEmbedPlayer" else "media"
        src = element.get("src") or data["url"] + "#" + element.get("id", "")
        attrs = element.get("data-attrs")
        label = "Embedded " + kind + " — view original"
        if attrs:
            metadata = json.loads(attrs)
            label = metadata.get("title") or label
            src = metadata.get("url") or src
        p = etree.Element("p")
        a = etree.SubElement(p, "a", href=urljoin(data["url"], src))
        a.text = "[" + label + "]"
        p.tail = element.tail
        element.getparent().replace(element, p)
        embeds.append({"type": kind, "url": a.get("href"), "label": label})
    for element in list(root.xpath('.//button|.//svg|.//input|.//form|.//source|.//script|.//style')):
        if element.getparent() is None:
            continue
        # Preserve poll option text; remove image expansion and other UI controls.
        if element.tag == "button" and element.xpath('ancestor::*[contains(@class,"poll-embed")]'):
            element.tag = "span"
            element.attrib.clear()
        elif element.tag == "source":
            # lxml's HTML parser may nest the img under the HTML5 source
            # element. Unwrap it; dropping the subtree would lose the image.
            element.drop_tag()
        else:
            if element.tag == "button":
                removed["image_controls"] += 1
            element.drop_tree()
    for element in root.iter():
        if not isinstance(element.tag, str):
            continue
        if element.tag == "figcaption":
            element.tag = "p"
        for attr in list(element.attrib):
            if attr not in {"href", "src", "alt", "title", "start"}:
                del element.attrib[attr]
        for attr in ("href", "src"):
            if element.get(attr):
                element.set(attr, urljoin(data["url"], element.get(attr)))
    for element in list(root.xpath('.//div|.//span|.//picture|.//figure'))[::-1]:
        if element.getparent() is not None:
            element.drop_tag()
    return root, removed, embeds


def build(capture_dir):
    inventory_path = capture_dir / "archive-list.json"
    if not inventory_path.exists() and capture_dir.resolve() == (ROOT / ".archive" / "sources").resolve():
        inventory_path = ROOT / ".archive" / "archive-list.json"
    inventory = json.loads(inventory_path.read_text())
    sources = ROOT / ".archive" / "sources"
    sources.mkdir(parents=True, exist_ok=True)
    issues = ROOT / "artifacts"
    issues.mkdir(exist_ok=True)
    manifest = []
    prepared = []
    for entry in inventory:
        slug = entry["url"].rstrip("/").split("/")[-1]
        raw = (capture_dir / (slug + ".json")).read_text()
        data = json.loads(raw)
        assert data["url"].rstrip("/") == entry["url"].rstrip("/")
        assert data["title"].strip() == entry["title"].strip()
        assert len(data["html"]) > 100
        date = datetime.strptime(data["date"], "%b %d, %Y").date().isoformat()
        root, removed, embeds = clean(data)
        if len(parse(data["html"]).xpath('.//img')) != len(root.xpath('.//img')):
            raise ValueError("Source image lost during cleanup: " + slug)
        cleaned = (root.text or "") + "".join(html.tostring(e, encoding="unicode") for e in root)
        body = tidy_markdown(markdown(cleaned))
        rendered = parse(pandoc(body, "gfm", "html"))
        safe_emphasis = False
        if (norm(root.text_content()) != norm(rendered.text_content()) or
                links(root) != links(rendered) or images(root) != images(rendered)):
            body = tidy_markdown(markdown(cleaned, safe_emphasis=True))
            rendered = parse(pandoc(body, "gfm", "html"))
            safe_emphasis = True
        # Every non-widget character must survive HTML -> Markdown -> HTML.
        if norm(root.text_content()) != norm(rendered.text_content()):
            raise ValueError("Text round-trip mismatch: " + slug)
        original_links = links(root)
        output_links = links(rendered)
        if original_links != output_links:
            raise ValueError("Link round-trip mismatch: " + slug)
        original_images = images(root)
        output_images = images(rendered)
        if original_images != output_images:
            raise ValueError("Image round-trip mismatch: " + slug)
        header = (
            f'# {data["title"].strip()}\n\n'
            f'**Subtitle:** {(data.get("subtitle") or "").strip()}\n'
            f'**Date:** {date}\n'
            f'**URL:** {data["url"]}\n'
            f'**Status:** Published — captured from live article on {CAPTURE_DATE}\n'
            '**Archive format:** Original article text; Markdown formatting conversion. '
            'Images retain source URLs; media embeds are linked, not transcribed.\n\n---\n\n'
        )
        result = header + body
        prepared.append((slug, result, raw))
        manifest.append({
            "slug": slug, "title": data["title"].strip(), "subtitle": data.get("subtitle"),
            "date": date, "url": data["url"], "captured": CAPTURE_DATE,
            "file": "artifacts/" + slug + ".md", "source": ".archive/sources/" + slug + ".json",
            "source_sha256": sha(raw), "markdown_sha256": sha(result),
            "normalized_text_sha256": sha(norm(root.text_content())),
            "words": len(root.text_content().split()), "links": len(original_links),
            "images": len(original_images), "embeds": embeds,
            "inline_html_emphasis": safe_emphasis,
            "removed_ui": removed, "verification": "text, links, and images round-trip passed",
        })
    manifest.sort(key=lambda x: x["date"], reverse=True)
    # Validate the complete inventory before changing any existing issue.
    for slug, result, raw in prepared:
        (issues / (slug + ".md")).write_text(result)
        (sources / (slug + ".json")).write_text(raw)
    (ROOT / ".archive" / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
    (ROOT / ".archive" / "archive-list.json").write_text(json.dumps(inventory, ensure_ascii=False, indent=2) + "\n")
    lines = ["# Published issues", "", f"{len(manifest)} issues captured from the live Artifacts archive on {CAPTURE_DATE}.", "",
             "Original wording is preserved, including typos. Only subscription forms and player/image controls are removed. Images and captions are retained; embedded media are linked without invented descriptions or transcripts. Comments, likes, navigation, and page footers are outside the article body and are not archived.", "",
             "Each copy passed automated text, link, and image checks against its captured article body after the documented UI/media conversion. This verifies the conversion, not the factual claims in the writing or the contents of external media. Source captures and hashes are in `.archive/`; older local copies and superseded drafts are not published-text references.", "",
             "Use recent English issues for current voice; use earlier Italian issues for historical coverage. Do not load the whole archive into context by default: select relevant issues here.", "",
             "| Date | Issue | Words |", "|---|---|---:|"]
    lines += [f'| {m["date"]} | [{m["title"]}]({m["file"]}) | {m["words"]:,} |' for m in manifest]
    (ROOT / "ISSUES.md").write_text("\n".join(lines) + "\n")
    print(f"Built and verified {len(manifest)} published issues ({sum(m['words'] for m in manifest):,} words).")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("capture_dir", type=Path)
    parser.add_argument("--capture-date", default=CAPTURE_DATE, help="Date of the saved live captures (YYYY-MM-DD)")
    args = parser.parse_args()
    datetime.strptime(args.capture_date, "%Y-%m-%d")
    CAPTURE_DATE = args.capture_date
    build(args.capture_dir)
