// 1) Content negotiation: agents asking for text/markdown get the markdown twin.
// 2) Private request log (user-agent, path, country; no IPs) in Upstash Redis.
import { waitUntil } from "@vercel/functions";

export const config = { matcher: ["/((?!_astro/).*)"] };

const AGENTS = [
  [/GPTBot/i, "GPTBot"], [/ChatGPT-User/i, "ChatGPT-User"], [/OAI-SearchBot/i, "OAI-SearchBot"],
  [/ClaudeBot/i, "ClaudeBot"], [/Claude-User/i, "Claude-User"], [/Claude-SearchBot/i, "Claude-SearchBot"],
  [/anthropic/i, "anthropic-other"], [/PerplexityBot/i, "PerplexityBot"], [/Perplexity-User/i, "Perplexity-User"],
  [/Google-Extended|Googlebot|Google-Agent/i, "Google"], [/bingbot/i, "Bing"], [/CCBot/i, "CCBot"],
  [/Bytespider/i, "Bytespider"], [/Applebot/i, "Applebot"], [/Meta-External|facebookexternalhit/i, "Meta"],
  [/DuckDuckBot|YandexBot|Amazonbot|MistralAI|cohere/i, "other-bot"],
  [/claude-code|claude-cli|claudecode/i, "claude-code"], [/Cursor\//i, "cursor"],
  [/vscode|Visual Studio Code|copilot/i, "vscode-copilot"], [/windsurf|cline|zed\//i, "ide-agent"],
  [/mcp|modelcontextprotocol/i, "mcp-client"],
  [/curl\//i, "curl"], [/python|aiohttp|httpx|requests/i, "python-client"], [/node|undici|axios|got\b/i, "node-client"],
  [/Mozilla\/5\.0.*(Chrome|Safari|Firefox|Edg)/i, "browser"],
];
const SCANNER = /\.php|\/wp-|\.env|\/\.git|\/admin|\/phpmyadmin|\.aspx?$|\/cgi-bin/i;
const classify = (ua, path) =>
  SCANNER.test(path) ? "scanner" : (AGENTS.find(([re]) => re.test(ua))?.[1] ?? (ua ? "other" : "no-ua"));

function log(req, url, negotiated) {
  const base = process.env.KV_REST_API_URL, token = process.env.KV_REST_API_TOKEN;
  if (!base || !token) return;
  const ua = req.headers.get("user-agent") || "";
  const accept = req.headers.get("accept") || "";
  const agent = classify(ua, url.pathname);
  const now = new Date();
  const day = now.toISOString().slice(0, 10);
  const entry = JSON.stringify({
    t: now.toISOString(), p: url.pathname, m: req.method, agent,
    ua: ua.slice(0, 200), accept: accept.slice(0, 120),
    c: req.headers.get("x-vercel-ip-country") || "", md: negotiated,
  });
  const cmds = [
    ["LPUSH", "log", entry], ["LTRIM", "log", "0", "19999"],
    ["HINCRBY", "stats", "total", "1"], ["HINCRBY", "stats", `agent:${agent}`, "1"],
    ["HINCRBY", "stats", `day:${day}`, "1"], ["HINCRBY", "stats", `path:${url.pathname}`, "1"],
  ];
  if (negotiated) cmds.push(["HINCRBY", "stats", "markdown-negotiated", "1"]);
  waitUntil(
    fetch(`${base}/pipeline`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(cmds),
    }).catch(() => {}),
  );
}

export default async function middleware(req) {
  if (req.headers.get("x-internal")) return; // our own self-fetch below: don't log, don't negotiate
  const url = new URL(req.url);
  const wantsMd = (req.headers.get("accept") || "").includes("text/markdown");
  const negotiate = wantsMd && ["/", "/issues", "/issues/"].includes(url.pathname);
  log(req, url, negotiate);
  if (!negotiate) return;
  const r = await fetch(new URL(url.pathname === "/" ? "/agents.md" : "/llms.txt", url), {
    headers: { "x-internal": "1" },
  });
  return new Response(r.body, {
    status: r.status,
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      vary: "Accept",
      "access-control-allow-origin": "*",
    },
  });
}
