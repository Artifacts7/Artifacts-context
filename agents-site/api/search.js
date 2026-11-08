import { readFileSync } from "node:fs";
import { join } from "node:path";

let index;
const load = () => (index ??= JSON.parse(readFileSync(join(process.cwd(), "search-index.json"), "utf8")));
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { q = "", lang, limit = "10" } = req.query;
  const stem = (t) => (t.length > 4 ? t.replace(/(ing|ed|es|s)$/, "") : t);
  const terms = norm(q).split(/[^a-z0-9]+/).filter((t) => t.length > 1).map(stem);
  if (!terms.length) {
    return res.status(400).json({ error: "Missing q. Example: /api/search?q=defaults+power", docs: "https://agents.artifactstech.com/agents.md" });
  }
  const results = [];
  for (const d of load()) {
    if (lang && d.lang !== lang) continue;
    const title = norm(d.title + " " + d.subtitle), text = norm(d.text);
    let score = 0, first = -1, hit = 0;
    for (const t of terms) {
      let i = -1, n = 0;
      while ((i = text.indexOf(t, i + 1)) !== -1 && n < 20) { if (first < 0 || i < first) first = i; n++; }
      const inTitle = title.includes(t);
      if (inTitle || n) hit++;
      score += (inTitle ? 10 : 0) + n;
    }
    if (!score) continue;
    score *= hit; // reward issues that match more of the query terms
    const from = Math.max(0, first - 120);
    results.push({
      score, title: d.title, subtitle: d.subtitle, date: d.date, language: d.lang,
      url: `https://agents.artifactstech.com/issues/${d.slug}.md`,
      json: `https://agents.artifactstech.com/issues/${d.slug}.json`,
      canonical: d.canonical,
      snippet: first < 0 ? "" : "…" + d.text.slice(from, from + 280).replace(/<[^>]+>|[*_]{1,3}/g, "").replace(/\s+/g, " ") + "…",
    });
  }
  results.sort((a, b) => b.score - a.score);
  res.setHeader("Cache-Control", "s-maxage=3600");
  res.status(200).json({ query: q, count: results.length, results: results.slice(0, Math.min(+limit || 10, 50)) });
}
