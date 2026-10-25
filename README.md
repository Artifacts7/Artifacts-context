# Artifacts context

Context and published writing for [Artifacts](https://artifactstech.substack.com), Lorenzo Ancona's newsletter on the design of technology.

## Published archive

Start with [ISSUES.md](ISSUES.md). The archive contains 87 published entries, from 1 September 2023 to 10 October 2026, captured from the live archive on 24 October 2026. It includes English and Italian originals, interviews, event recaps, and short announcements.

- `artifacts/`: one Markdown copy per published entry. Original wording, links, emphasis, captions, and newsletter sections are preserved, including typos. These are not summaries or polished versions.
- `.archive/sources/`: original captured article-body HTML and rendered text, with title, subtitle, publication date, and source URL, saved as JSON. These are article-body captures, not full webpage or offline media backups.
- `.archive/manifest.json`: source and Markdown hashes, word counts, media references, and conversion verification for each entry.
- `.archive/archive-list.json`: the complete list of 87 entries discovered in the live archive.
- `drafts/superseded/`: preserved local drafts of articles that have since been published. These are not the published versions.
- `.archive/previous-local-2026-10-24/`: backups of the old local issues and context files. Many old issue files were summaries or incomplete drafts. Never use these as published-text or voice references.

The Markdown conversion removes subscription forms and image/player controls. It retains image URLs and captions; audio and video embeds become links without generated descriptions or transcripts. Images remain hosted remotely. Embedded post cards and poll text may have simpler layouts. Inline HTML is used where Markdown would alter emphasis or break a link or image. Whitespace, equivalent Unicode composition, and URL escaping may change during formatting conversion; prose is not edited. Comments, likes, navigation, and site footers are outside the article body and are excluded.

Every copy is checked against its captured source for text preservation, link destinations and order, and image sources and alt text. This verifies the conversion; it does not fact-check the published writing or inspect the contents of embedded media. The archive reflects the versions visible on the capture date, not necessarily the original email editions.

## Using the context

`AGENTS.md` and `CLAUDE.md` describe the newsletter and editing preferences. Consult the index, then read only relevant issues. Recent English issues are the best reference for the current voice; earlier Italian issues support historical coverage. Do not load every issue into context by default.

`commands/` contains the polishing, LinkedIn, and Save for Later instructions. New drafts and editorial working files belong outside `artifacts/`.

## Updating the archive

Capture the live article's `h1.post-title`, `h3.subtitle`, publication `time`, and `.body.markup` HTML/rendered text into the same JSON structure as `.archive/sources/`. Include the issue in the inventory as `{ "title": "Published title", "url": "Canonical post URL" }`. Do not use search excerpts or model-written reconstructions as archival sources. A partial or inaccessible article must be recorded as such rather than represented as a full copy.

The deterministic converter requires Pandoc and Python with `lxml`:

```bash
python3 scripts/rebuild_archive.py .archive/sources
```

The stored inventory in `.archive/archive-list.json` is used automatically when rebuilding from `.archive/sources`. The converter regenerates the issue copies, index, and manifest and stops if conversion changes text, links, or images. For a new live capture, pass its date using `--capture-date YYYY-MM-DD` and preserve any existing local work. Keep published text separate from summaries or editing notes.

Changes are local until committed and pushed to the repository.

## Skills

`.claude/skills/` holds reusable skills kept with this repo. `artifacts-slides` builds presentation decks in the Artifacts visual identity (see its `SKILL.md`). It works project-scoped automatically when working inside this repo.

To make it available globally (in every project) on a machine, symlink it into your user skills folder:

```bash
ln -s "$(pwd)/.claude/skills/artifacts-slides" ~/.claude/skills/artifacts-slides
```

Run that from the repo root after cloning. The symlink keeps a single source of truth, so edits stay in the tracked repo copy.
