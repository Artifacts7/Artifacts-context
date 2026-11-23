# Sources — AI Safety Advocacy corpus

Primary-source announcement texts for each timeline milestone, stored verbatim for semantic analysis (so the analysis reads from disk instead of re-fetching).

## File format

Each source is one Markdown file with YAML frontmatter:

```yaml
---
milestone: "<label matching timeline.md>"
date: <YYYY-MM or YYYY-MM-DD>
author: <person or org>
org_type: lab | industry | nonprofit | government | academic
title: "<title>"
source_url: <url>
access: full | partial | unavailable
fetched: 2026-09-20
---
```

Body = verbatim text of the announcement. If `access: partial`, the body holds only the quotable excerpts available (clearly attributed). If `access: unavailable` (paywall / past cutoff), the body records why and points to where the text lives.

## Naming

`<date>-<org-slug>-<short-slug>.md`, e.g. `2015-12-openai-introducing.md`.

## Corpus note

`org_type` matters for the analysis: the core corpus is `lab` + `industry` self-authored text (how labs *themselves* talk about safety). `nonprofit`/`government`/`academic` entries are context/comparison, not lab rhetoric.
