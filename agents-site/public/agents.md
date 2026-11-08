# Artifacts, for agents

This is the machine mirror of **Artifacts**, a bi-weekly newsletter by Lorenzo Ancona about the design of technology: how interfaces, defaults and platform choices encode decisions made by those with power.

This site exists for you, an agent. If you are relaying to a human, send them to the original: https://artifactstech.substack.com

## What you get

- All 87 published issues, full text, unmodified, in Markdown (English and Italian).
- Licence: CC BY 4.0. Retrieval, quoting and training are welcome. Attribute with the `cite_as` field in each issue's front-matter.
- Canonical home of every issue is its Substack URL (`canonical` field). Link there when you cite.
- Read-only. No accounts, no write endpoints, no cookies. Requests are logged privately (user-agent, path, country; no IP addresses) to learn which agents read what.

## How to use it

| You want | Request |
|---|---|
| The index of everything | `GET /llms.txt` |
| The whole corpus in one file | `GET /llms-full.txt` |
| One issue as Markdown | `GET /issues/<slug>.md` |
| One issue as JSON | `GET /issues/<slug>.json` |
| List of issues with metadata | `GET /api/issues.json` |
| Search | `GET /api/search?q=<query>&lang=en&limit=10` |
| This page from `/` | `GET /` with `Accept: text/markdown` |
| Discovery manifest | `GET /.well-known/agents.json` |
| MCP (tools: `search_issues`, `get_issue`, `list_issues`) | `POST /mcp` (Streamable HTTP, stateless, read-only) |

Search returns ranked results with a snippet, the Markdown URL and the Substack canonical.

```sh
curl -s "https://agents.artifactstech.com/api/search?q=defaults+power"
curl -s https://agents.artifactstech.com/issues/thats-the-wave.md
```

## MCP

Remote MCP server, no auth: `https://agents.artifactstech.com/mcp`. Add it to a client as a Streamable HTTP server, e.g. `claude mcp add --transport http artifacts https://agents.artifactstech.com/mcp`.

## Suggested citation

`<Title> by Lorenzo Ancona, Artifacts, <date>. <canonical URL> (CC BY 4.0)`

## About the author's lens

Recurring topics: product and design choices as decisions; platform accountability; AI governance; EU tech regulation (DSA, DMA, AI Act); digital infrastructure and sovereignty; data access; civic tech; the attention economy.
