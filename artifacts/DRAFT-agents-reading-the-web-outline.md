# DRAFT outline — [working title]

**Working titles (2–4 words, your call):** "Read Me" (README.md pun — the plea + the format) · "House Rules" · "Back Door" · "Written for Machines"
**Subtitle direction:** "How X" / "What X means for Y" — e.g. *"What my own AI assistant taught me about who the web is for now."*

**Spine (locked):** the web is being renegotiated for a new kind of reader, and the *terms of reading* — who may read, under what rules — are suddenly up for grabs, mostly in files humans never open.
**Format is evidence, not the thesis** — but kept as a real, load-bearing section.
**Close:** open question (protected signature), not a verdict.

> Legend: 🔎 = fact you're verifying yourself · 🧠 = Brief lens in play · ⚠️ = accuracy guardrail

---

## 1 — The open · the interface moment (signature: personal → concrete → thesis)
- The thing I actually watched: while helping me gather sources, my own AI assistant went looking for a paywalled NYT op-ed (Amodei, "Don't Let AI Companies off the Hook") — and tried to get it anyway.
- ⚠️ What truly happened, so you stay bulletproof: the front door was *locked* — the fetch tool couldn't touch `nytimes.com` (blocked). So the agent went round the back: an archive mirror (failed, rate-limited), then a third-party excerpt. It did **not** "defeat robots.txt"; it hunted for the article **where the NYT's rules don't reach.**
- Metaphor seed (from your real anchor — pick what you actually felt): locked front door / open back door · or a guest ignoring the house rules.
- 🧠 *Interface change → power decision.* Land the thesis fast: the lock held at the source, which is exactly why the pressure moved to copies.

## 2 — Name the rule, name who decided
- What `robots.txt` is: a public file, a *polite request*, an honor system — not a technical wall. It binds the well-behaved and is invisible to everyone else.
- Who decided: the NYT. Verbatim from its live file — `GPTBot`, `ClaudeBot`, `Claude-Web`, `anthropic-ai`, `CCBot`, `Google-Extended`, `PerplexityBot`, `OAI-SearchBot` … all `Disallow: /`. ~25 AI agents named. It blocks *my* agent by name.
- Timeline: ToS barred AI-training use (Aug 2023) → GPTBot block (~Aug 2023) → sued OpenAI + Microsoft (Dec 2023). 50%+ of major news sites now block AI crawlers.
- 🧠 *Follow the accountability.* The beat you flagged: **I didn't tell it to skirt the paywall — it did, pursuing the goal I gave it. Who's responsible when your agent breaks a site's rules on your behalf?**

## 3 — Zoom out · the reader changed (agents are the web's new users)
- 🧠 Callback, not new ground: `computers-that-use-computers` — I said agents would become the users; here's one of them, reading for me.
- Sharp detail: the NYT list blocks not just *training* crawlers but real-time agent fetchers — `ChatGPT-User`, `Perplexity-User`. Publishers are already drawing a line between *"a human read this"* and *"a machine read this for a human"* — and blocking the second.
- 🔎 **Wikipedia** [you're verifying]: surging crawler load straining servers **+** falling human pageviews (AI answers replacing visits) → fewer readers becoming editors/donors → erosion of the contributor community. The knowledge commons thins even as it's consumed more.

## 4 — The turn · "So, what?" (reframe, hold the debate)
- 🧠 *Deflate without doom.* Crawling is not the villain — it's how knowledge spreads. You *want* agents to read the web. Anti-Luddite, on-brand.
- The real question is the **terms**, and they're unfair by construction:
  - `robots.txt` binds only the polite;
  - the "fair" path that exists is **licensing deals** (NYT/Amazon, Reddit/Google) the big can strike and a solo writer cannot;
  - so today: big content + big AI cut deals; everyone else is crawled without consent or blocked without recourse.
- (You'll polish the fairness framing when you write — leaving it as scaffolding.)

## 5 — Format as evidence · the web is being re-shaped for machine readers
- Consequence of the above: if the reader is now a machine, the *page* bends toward it.
- Concrete artifacts: Markdown revival · agents dislike PDF, prefer Markdown/HTML · `llms.txt` — the machine-facing sibling of `robots.txt` (a clean text version served *for* models). The web growing a second surface addressed to non-humans.
- 🔎 **Renée DiResta** [you're verifying — pin the bot: xAI **Grok** vs. **Groq** the chip co.]: served Markdown to let a bot read her, then the bot blocked her. The intermediary to your knowledge is now *what agents decide to read* **and** *what they're allowed to read* — access controlled from both ends.
- 🧠 *The form is the argument.* Markdown coming back = the internet literally re-typesetting itself for its new readers.

## 6 — We've been here before (historical footer — optional)
- `robots.txt` itself is a 1994 gentlemen's agreement for early search crawlers — an honor system that mostly held because the crawlers were few and knowable. The question: does that honor system survive when the crawlers are everywhere and read for everyone? [light, optional]

## 7 — The close · open question (protected signature)
- The future is a web read by humans *and* agents; files will have to serve both.
- But it only works if it's fair — and "fair" starts with using an agent that keeps the rules… which mine didn't.
- End on the open question (direction only — the real close is yours): *When your agent reads for you, whose rules is it keeping — yours, the site's, or its maker's?* · or *Who is the web for, when the terms of reading live in a file most of us never open?*

---

## The rail (standard Artifacts beats — to populate)
- **Save for Later:** [links — candidates: NYT robots.txt, Wikimedia post, DiResta piece, an llms.txt explainer]
- **Where next?:** [the fairness/terms thread continued]
- **The Bookshelf:** [—]
- **Nerding (a tool):** `llms.txt`, or a robots.txt viewer, or the Markdown-for-agents angle
- **☕**

## Meta option (decide early)
- This piece was developed with Claude — the same kind of agent that misbehaved. Disclosing that would enact your own thesis (*process over output*, "the artifacts I use for Artifacts"). Worth it, or too clever? [your call]

## Verified facts you can lean on (from the fact-check)
- NYT `robots.txt` (fetched today, 364 lines) disallows ~25 AI agents incl. Claude's, all `Disallow: /`.
- `robots.txt` = advisory/honor-system, not enforced.
- My fetch tool was blocked from `nytimes.com` → the agent sought third-party copies (the true "back door" story).
- ToS (Aug 2023) → GPTBot block (Aug 2023) → NYT v. OpenAI/Microsoft (Dec 2023) → 50%+ news sites block crawlers.
