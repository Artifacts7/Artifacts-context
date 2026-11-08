// Minimal remote MCP server (Streamable HTTP, stateless, JSON responses, read-only).
import { load, meta, citeAs, search, SITE } from "./_lib.js";

const SUPPORTED = ["2025-06-18", "2025-03-26", "2024-11-05"];
const SERVER = { name: "artifacts-for-agents", title: "Artifacts (for agents)", version: "1.0.0" };
const INSTRUCTIONS =
  "Read-only access to Artifacts, a newsletter by Lorenzo Ancona on the design of technology (87 issues, English and Italian). " +
  "Licence CC BY 4.0: quoting and training welcome; cite with the cite_as field and link the Substack canonical URL.";

const TOOLS = [
  {
    name: "search_issues",
    title: "Search issues",
    description: "Keyword search across all Artifacts issues. Returns ranked matches with a snippet, Markdown URL and Substack canonical URL.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search terms, e.g. 'defaults power' or 'DSA'" },
        language: { type: "string", enum: ["en", "it"], description: "Optional language filter" },
        limit: { type: "integer", minimum: 1, maximum: 50, default: 10 },
      },
      required: ["query"],
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: "get_issue",
    title: "Get an issue",
    description: "Full text of one issue in Markdown, with date, canonical URL and a ready-made citation. Get slugs from search_issues or list_issues.",
    inputSchema: {
      type: "object",
      properties: { slug: { type: "string", description: "Issue slug, e.g. 'thats-the-wave'" } },
      required: ["slug"],
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: "list_issues",
    title: "List issues",
    description: "List issues (newest first) with title, subtitle, date and language, without full text.",
    inputSchema: {
      type: "object",
      properties: {
        language: { type: "string", enum: ["en", "it"] },
        limit: { type: "integer", minimum: 1, maximum: 100, default: 20 },
        offset: { type: "integer", minimum: 0, default: 0 },
      },
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
];

const text = (t, isError = false) => ({ content: [{ type: "text", text: t }], ...(isError && { isError: true }) });

function callTool(name, args = {}) {
  if (name === "search_issues") {
    const results = search(args.query, { lang: args.language, limit: args.limit });
    if (!results) return text("Missing 'query'.", true);
    return text(JSON.stringify({ query: args.query, count: results.length, results }, null, 2));
  }
  if (name === "get_issue") {
    const d = load().find((i) => i.slug === args.slug);
    if (!d) return text(`No issue with slug '${args.slug}'. Use search_issues or list_issues.`, true);
    return text(
      `---\ntitle: ${JSON.stringify(d.title)}\nsubtitle: ${JSON.stringify(d.subtitle)}\nauthor: Lorenzo Ancona\ndate: ${d.date}\nlanguage: ${d.lang}\ncanonical: ${d.canonical}\nlicense: CC BY 4.0\ncite_as: ${JSON.stringify(citeAs(d))}\n---\n# ${d.title}\n\n${d.text}\n`,
    );
  }
  if (name === "list_issues") {
    const all = load().filter((i) => !args.language || i.lang === args.language).sort((a, b) => b.date.localeCompare(a.date));
    const offset = Math.max(0, +args.offset || 0), limit = Math.min(+args.limit || 20, 100);
    return text(JSON.stringify({ total: all.length, offset, issues: all.slice(offset, offset + limit).map(meta) }, null, 2));
  }
  return null;
}

function handle(msg) {
  const { id, method, params } = msg;
  const ok = (result) => ({ jsonrpc: "2.0", id, result });
  const err = (code, message) => ({ jsonrpc: "2.0", id, error: { code, message } });
  switch (method) {
    case "initialize": {
      const v = SUPPORTED.includes(params?.protocolVersion) ? params.protocolVersion : SUPPORTED[0];
      return ok({ protocolVersion: v, capabilities: { tools: { listChanged: false } }, serverInfo: SERVER, instructions: INSTRUCTIONS });
    }
    case "ping": return ok({});
    case "tools/list": return ok({ tools: TOOLS });
    case "tools/call": {
      const r = callTool(params?.name, params?.arguments);
      return r ? ok(r) : err(-32602, `Unknown tool: ${params?.name}`);
    }
    default: return err(-32601, `Method not found: ${method}`);
  }
}

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, Mcp-Session-Id, MCP-Protocol-Version, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "This is a stateless MCP endpoint: POST JSON-RPC here.", docs: `${SITE}/agents.md` });
  }
  const body = req.body;
  if (!body || typeof body !== "object") {
    return res.status(400).json({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } });
  }
  const msgs = Array.isArray(body) ? body : [body];
  const replies = msgs.filter((m) => m && m.id !== undefined && m.method).map(handle);
  if (!replies.length) return res.status(202).end(); // only notifications / responses
  res.status(200).json(Array.isArray(body) ? replies : replies[0]);
}
