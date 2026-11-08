// Private log reader. Usage: vercel env pull .env.local && node --env-file=.env.local scripts/logs.mjs [recent=20]
const base = process.env.KV_REST_API_URL, token = process.env.KV_REST_API_TOKEN;
if (!base || !token) { console.error("Missing KV_REST_API_URL / KV_REST_API_TOKEN. Run: vercel env pull .env.local"); process.exit(1); }
const recent = +process.argv[2] || 20;

const r = await fetch(`${base}/pipeline`, {
  method: "POST",
  headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify([["HGETALL", "stats"], ["LRANGE", "log", "0", String(recent - 1)]]),
});
const [{ result: flat }, { result: log }] = await r.json();
const stats = {};
for (let i = 0; i < (flat || []).length; i += 2) stats[flat[i]] = +flat[i + 1];

const by = (prefix) => Object.entries(stats).filter(([k]) => k.startsWith(prefix)).map(([k, v]) => [k.slice(prefix.length), v]).sort((a, b) => b[1] - a[1]);
const show = (title, rows, n = 10) => { console.log(`\n${title}`); rows.slice(0, n).forEach(([k, v]) => console.log(`  ${String(v).padStart(6)}  ${k}`)); };

console.log(`Total requests: ${stats.total ?? 0}   Accept: text/markdown negotiated: ${stats["markdown-negotiated"] ?? 0}`);
show("By agent", by("agent:"));
show("By day", by("day:").sort((a, b) => b[0].localeCompare(a[0])), 14);
show("Top paths", by("path:"), 15);
console.log(`\nLast ${recent}:`);
(log || []).map((l) => JSON.parse(l)).forEach((e) => console.log(`  ${e.t.slice(5, 19)}  ${e.agent.padEnd(14)} ${e.m} ${e.p}${e.md ? "  [md]" : ""}  ${e.c}`));
