import { search } from "./_lib.js";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { q = "", lang, limit } = req.query;
  const results = search(q, { lang, limit });
  if (!results) {
    return res.status(400).json({ error: "Missing q. Example: /api/search?q=defaults+power", docs: "https://agents.artifactstech.com/agents.md" });
  }
  res.setHeader("Cache-Control", "s-maxage=3600");
  res.status(200).json({ query: q, count: results.length, results });
}
