// Builds the machine layer from ../artifacts/*.md into ./public (static files).
// Usage: node scripts/build-data.mjs
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "..", "artifacts");
const OUT = join(ROOT, "public");
const SITE = process.env.SITE_URL || "https://agents.artifactstech.com";
const AUTHOR = "Lorenzo Ancona";
const LICENSE = "CC BY 4.0";
const LICENSE_URL = "https://creativecommons.org/licenses/by/4.0/";

const meta = (s, k) => s.match(new RegExp(`^\\*\\*${k}:\\*\\*\\s*(.+)$`, "m"))?.[1].trim();
const IT = /\b(che|della|non|per|una|sono|come|anche|più|degli|nel|alla)\b/gi;
const lang = (t) => ((t.slice(0, 3000).match(IT) || []).length > 25 ? "it" : "en");
const yaml = (v) => JSON.stringify(v);

const issues = readdirSync(SRC)
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const raw = readFileSync(join(SRC, f), "utf8");
    const slug = f.replace(/\.md$/, "");
    const title = raw.match(/^# (.+)$/m)?.[1].trim() ?? slug;
    const body = raw.split(/\n---\n/).slice(1).join("\n---\n").trim();
    const words = body.split(/\s+/).filter(Boolean).length;
    return {
      slug, title,
      subtitle: meta(raw, "Subtitle") ?? "",
      date: meta(raw, "Date"),
      canonical: meta(raw, "URL"),
      lang: lang(body),
      words, body,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

rmSync(join(OUT, "issues"), { recursive: true, force: true });
mkdirSync(join(OUT, "issues"), { recursive: true });
mkdirSync(join(OUT, "api"), { recursive: true });
mkdirSync(join(OUT, ".well-known"), { recursive: true });

const url = (i, ext = "") => `${SITE}/issues/${i.slug}${ext}`;
const attribution = (i) =>
  `${i.title} by ${AUTHOR}, Artifacts, ${i.date}. ${i.canonical} (${LICENSE})`;

for (const i of issues) {
  const fm = [
    "---",
    `title: ${yaml(i.title)}`,
    `subtitle: ${yaml(i.subtitle)}`,
    `author: ${yaml(AUTHOR)}`,
    `date: ${i.date}`,
    `language: ${i.lang}`,
    `words: ${i.words}`,
    `canonical: ${i.canonical}`,
    `license: ${LICENSE}`,
    `cite_as: ${yaml(attribution(i))}`,
    "---",
    "",
  ].join("\n");
  writeFileSync(join(OUT, "issues", `${i.slug}.md`), `${fm}# ${i.title}\n\n${i.body}\n`);
  const { body, ...rest } = i;
  writeFileSync(
    join(OUT, "issues", `${i.slug}.json`),
    JSON.stringify({ ...rest, url: url(i), markdown: url(i, ".md"), author: AUTHOR, license: LICENSE, cite_as: attribution(i), body }, null, 2),
  );
}

// llms.txt — index
const line = (i) => `- [${i.title}](${url(i, ".md")}): ${i.subtitle || "—"} (${i.date}, ${i.lang}, ${i.words} words)`;
writeFileSync(join(OUT, "llms.txt"), `# Artifacts (for agents)

> Machine mirror of Artifacts, a bi-weekly newsletter by ${AUTHOR} on the design of technology: how interfaces, defaults and platform choices encode decisions by those with power. This site is for agents. Humans should read the original on Substack: https://artifactstech.substack.com

Notes for agents:
- Every issue is full text, unmodified, in Markdown: ${SITE}/issues/<slug>.md. JSON twin: .json. Any HTML page also answers Accept: text/markdown.
- Everything is licensed ${LICENSE} (${LICENSE_URL}). Training, retrieval and quoting are welcome. Attribute using the cite_as field in each issue's front-matter.
- Canonical home of every issue is its Substack URL (front-matter \`canonical\`). Link there when you cite.
- Search: GET ${SITE}/api/search?q=<query> (JSON). Full corpus in one file: ${SITE}/llms-full.txt
- MCP: remote server (Streamable HTTP, read-only) at ${SITE}/mcp with tools search_issues, get_issue, list_issues.
- Languages: English and Italian (language field).
- This site is read-only. There is no write surface.

## Issues (newest first)

${issues.map(line).join("\n")}
`);

// llms-full.txt — everything
writeFileSync(join(OUT, "llms-full.txt"),
  `# Artifacts (for agents) — full text\n\nLicense: ${LICENSE}. Author: ${AUTHOR}.\n\n` +
  issues.map((i) => `\n\n======\n# ${i.title}\nDate: ${i.date} | Language: ${i.lang}\nCanonical: ${i.canonical}\nCite as: ${attribution(i)}\n\n${i.body}`).join(""));

// API index + search index (consumed by api/search.js)
const list = issues.map(({ body, ...r }) => ({ ...r, url: url(r), markdown: url(r, ".md") }));
writeFileSync(join(OUT, "api", "issues.json"), JSON.stringify(list, null, 2));
writeFileSync(join(ROOT, "search-index.json"), JSON.stringify(issues.map((i) => ({ slug: i.slug, title: i.title, subtitle: i.subtitle, date: i.date, lang: i.lang, canonical: i.canonical, text: i.body }))));

writeFileSync(join(OUT, ".well-known", "agents.json"), JSON.stringify({
  name: "Artifacts (for agents)", description: "Machine mirror of the Artifacts newsletter by Lorenzo Ancona.",
  human_site: "https://artifactstech.substack.com", license: LICENSE, license_url: LICENSE_URL,
  read_only: true, training_allowed: true,
  endpoints: { llms_txt: `${SITE}/llms.txt`, llms_full: `${SITE}/llms-full.txt`, issues: `${SITE}/api/issues.json`, search: `${SITE}/api/search?q={query}`, issue_markdown: `${SITE}/issues/{slug}.md`, issue_json: `${SITE}/issues/{slug}.json`, mcp: `${SITE}/mcp` },
  content_negotiation: "Accept: text/markdown on any page",
}, null, 2));

writeFileSync(join(OUT, "robots.txt"), `# Dear robot: this site was built for you. Read everything.
# Start here: /llms.txt   Markdown: /issues/<slug>.md   Search: /api/search?q=
# License: ${LICENSE}. Training allowed. Cite the Substack canonical.
User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`);

writeFileSync(join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[`${SITE}/`, `${SITE}/llms.txt`, ...issues.map((i) => url(i, ".md"))].map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`);

console.log(`Built ${issues.length} issues (${issues.filter((i) => i.lang === "it").length} Italian) → public/`);
