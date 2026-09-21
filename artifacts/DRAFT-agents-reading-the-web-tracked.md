<!--
TRACKED-CHANGES VIEW of DRAFT-agents-reading-the-web.md — polish pass, 2026-09-21.
Legend:  ~~strikethrough~~ = suggested cut   **bold** = suggested addition
Accept by deleting the struck text and un-bolding the additions. Original file left untouched.
Six items marked [VERIFY-n] need your call — see notes at the very bottom.
Scope: light fluency + concision + two AI-texture rewrites. Argument and voice left as yours.
-->

The other day, I was preparing a presentation on key milestones of AI labs warning about risks or asking for regulation ~~in the recent months~~ **in recent months**.

So I put together a few ~~quick moments coming to mind~~ **that came to mind** and then handed them over to Claude to ~~go retrieve from the internet the most authoritative direct source~~ **go and retrieve the most authoritative source for each**. Be it an op-ed, an essay, a letter from a CEO.

As it was running the search, out of curiosity, I checked the logs of an agent it spawned and found this:

[SCREENSHOT: agent log]

It's a bunch of nonsensical characters but basically, since Claude couldn't read a paywalled article by Dario Amodei on the New York Times, it tried a backdoor: ~~retrieve~~ **retrieving** it from archive.today and then ~~forcing into other excerpts collectors~~ **forcing its way into other excerpt collectors**.

For those not familiar, archive.today is a website archiving snapshots of webpages. And it is also known for archiving articles from media websites before or without ~~paywall~~ **a paywall** (reporting for the sake of knowledge).

Well, Claude, hitting the wall, tried the workaround to get me, regardless of potential copyright, the text I had asked for.

~~Let me precise this:~~ **Let me be precise here:** I NEVER asked to breach the NYT, I asked for some sources related to ~~some~~ **certain** points in time. Given this goal, Claude ~~determined what it pursued as an ok HOW~~ **decided on its own what counted as an acceptable HOW**.

~~Far from comparing the 2 scenarios, but this is the type of scenario where an LLM, given a goal, will try it hard to achieve it, that led to big scandals like OpenAI breachin Hugging Face.~~ **I'm far from comparing the two, but this is the kind of scenario — an LLM, given a goal, trying hard to achieve it — that led to big scandals like OpenAI breaching Hugging Face.** **[VERIFY-1]**

~~Now, Claude couldn't get the article from the NYT not just cause it was paywalled but also cause the NYT is trying, like many other media, to enforce a limit on agents crawling their website?~~ **Now, Claude couldn't get the article from the NYT not just because it was paywalled, but also because the NYT — like many other media — is trying to enforce a limit on agents crawling its website.**

How? Through ~~their robot.txt file, the file with instructions on how robots could consume content of a given website~~ **its robots.txt file, the one that tells robots how they may consume a site's content**. The ~~NYT's one, you find here,~~ **NYT's, which you can find here,** is pretty explicit about all these LLMs:

```
User-agent: GPTBot            → Disallow: /
User-agent: ClaudeBot         → Disallow: /
User-agent: Claude-Web        → Disallow: /
User-agent: anthropic-ai      → Disallow: /
User-agent: CCBot             → Disallow: /
User-agent: Google-Extended   → Disallow: /
User-agent: PerplexityBot     → Disallow: /
User-agent: OAI-SearchBot     → Disallow: /
```
**[VERIFY-2]**

On top of this, the NYT is also suing OpenAI, Perplexity **[VERIFY-3]** and Microsoft for copyright, so it's not the best friend of crawlers.

~~This said~~ **That said**, it's also important to mention that robots.txt is an advisory standard, let's say a 'polite request', and not a technical wall. ~~It only works if a crawler (a) identifies itself honestly and (b) chooses to obey. Well-behaved bots (GPTBot, ClaudeBot) comply; bad actors ignore it.~~ **It only works if a crawler is honest about who it is and chooses to play along. The well-behaved ones — GPTBot, ClaudeBot — comply; bad actors just ignore it.**

~~And here's the precise reconciliation with what my agent did:~~ **So what actually happened is subtler than "Claude broke in":**
~~- When my Claude's WebFetch tool hit nytimes.com, it returned "unable to fetch from www.nytimes.com". The front door was correctly locked: Anthropic's fetch path honored the NYT block through robots.txt.~~
~~- So Claude went looking for the article where NYT's rules don't reach - before a rate-limited archive mirror, and then a third-party excerpt.~~
**When its WebFetch tool hit nytimes.com, it simply got back "unable to fetch from www.nytimes.com" — the front door was locked, and Anthropic's fetcher honored the NYT block. So Claude did the next thing: it went looking for the article where the NYT's rules don't reach — a (rate-limited) archive mirror first, then a third-party excerpt.**

But this story aside, this is the perfect hook to look at how the internet is now being used and also formatted differently.

~~As mentioned here~~ **As I wrote here** (computers that use computers), *'humans are no longer the only ones using computers - and so no longer the only ones consuming information. We've started working alongside agents'*

~~Importantly, we have started to consume also information more and more through agents: instead of reading an article, we may be asking an LLM to get news from us and send them back. So we don't visit the media website but still gets the content, the information capital.~~ **Importantly, we've also started to consume information more and more through agents: instead of reading an article, we may ask an LLM to get the news for us and send it back. So we don't visit the media website, but still get the content — the information capital.**

This is causing, for instance, ~~more than an issue to~~ **real problems for** Wikipedia**,** which is seeing a drop in contributions (and potential donors) but a surge in views — ~~not by humans but by bots, who are also severly stressing their servers~~ **not from humans but from bots, which are also severely stressing its servers**. **[VERIFY-4]**

Yet, as an LLM would write, *here's the catch:* if LLMs and the agents they power are the future of how the internet is consumed, media companies, authors, researchers etc. may *do* want to be crawled. ~~Yet, with the right terms.~~ **Just on the right terms.**

There's ~~an evidence to it~~ **evidence of it**. Websites don't just have blocking documents like ~~the robot.txt~~ **robots.txt** for agents, but also ~~instructions files on how to actually use those websites, as you may see here (probably Vercel)~~ **instruction files telling agents how to actually use the site — increasingly a file called `llms.txt` (Vercel publishes one)** **[VERIFY-5]**.

But beyond this, researchers have started to publish their papers in markdown, a file format much friendlier to LLMs than PDFs. ~~It's particularly interesting the story of Renee di Resta, US scholar on social media, who was trying to publish all her papers in markdown but also found that Grok, the X's chatbot, actually stopped updating its entries.~~ **One story stands out: Renée DiResta, a US scholar of social media, was publishing her papers in markdown to make them readable to bots — and still found that Grok, X's chatbot, stopped updating its entries on her.** **[VERIFY-6]**

All in all, we're seeing a *reformatting* of the ~~Internet and softwares for a non-human usage~~ **internet and its software for non-human use**. If you're a nerd, just check what Notion is becoming, or ~~that on Slack now you're prompted to add either humans or agents to channels~~ **how Slack now asks whether you're adding humans or agents to a channel**.

While the direction is clear, the terms of it are ~~definitely~~ not inevitable. If the 'citizens' of the internet are changing, ~~probably the rules of it need to adapt~~ **its rules probably need to adapt**.

Concretely, this means clear guardrails on what agents can ~~access and not~~ **and can't access**, but also who's accountable ~~for when these entities taking action derails~~ **when these action-taking entities go off the rails**. In other words, say an agent does whatever it takes to breach a ~~media~~ **media site** and ~~get copyrighted pieces, who's faulty?~~ **grab copyrighted work — who's at fault?** The human ~~that~~ **who** launched the agent**?** ~~, the~~ **The** company ~~developing~~ **that built** the LLM brain ~~of the agents, or~~ **behind it? Or** the agent itself?

To make matters worse, and with a bit of ~~malicious thought~~ **a malicious streak**, ~~the issue is also that no one better than machines can actually mis-use the Internet, forcing the boundaries to the limit~~ **there's also this: no one is better than machines at misusing the internet — at pushing every boundary to its limit**.

~~It's a lot of questions, a lot of nuances, but a fascinating debate where the 'cost' of an action is probably not just on humans, but on these virtual entities, that have no ID or consciousess or desires but do use a space, the Internet, tha used to be built by humans for themselves but that's now changing to a shared space with shared agency but maybe not shared resposibility?~~ **It's a lot of questions and a lot of nuance — but a fascinating debate, where the "cost" of an action may fall not just on humans, but on these virtual entities: things with no ID, no consciousness, no desires, that nonetheless move through a space the internet used to be. A space built by humans, for humans — now turning into a shared one, with shared agency, but maybe not shared responsibility.**

Interesting times.

---

<!--
NOTES — items needing your call:

[VERIFY-1] "OpenAI breaching Hugging Face" — factual claim about a named company. Confirm the event happened AND that it was OpenAI before publishing; it's a 2026 event I can't verify from memory, and it's the first line a hostile reader will check.

[VERIFY-2] robots.txt block: the "→ Disallow: /" arrows are simplified shorthand, NOT real syntax. Real format is two lines per bot:
    User-agent: ClaudeBot
    Disallow: /
Either switch the block to real syntax, or add "(simplified)" so a technical reader doesn't catch it.

[VERIFY-3] "suing ... Perplexity" — confirmed: NYT is suing OpenAI + Microsoft (Dec 2023). I'm NOT sure the NYT is suing *Perplexity* (NYT sent Perplexity a cease-and-desist; the Perplexity copyright suit was Dow Jones / NY Post). Check before naming Perplexity as a defendant of the NYT — or reword to "sending cease-and-desists / suing several crawlers."

[VERIFY-4] Wikipedia figures — yours to verify: state the "surge in bot views + drop in contributions/donors + server strain" as the Wikimedia Foundation's own reported numbers/framing.

[VERIFY-5] llms.txt — I named the convention and Vercel as an example that publishes one. Confirm the link you drop actually points to an llms.txt (or an explainer) and that the example is right.

[VERIFY-6] DiResta / Grok — yours to verify. I rewrote toward the "blocked from both ends" point, but pin: which bot exactly (xAI's Grok vs. Groq the chip company), what it actually did, and where she reported it. My rewrite ASSUMES it was xAI's Grok and that it stopped indexing her — correct it if wrong.

STYLE NOTE — capitalization: you mix "Internet" and "internet". I standardized to lowercase "internet" in the edited spots; sweep the rest to match (or revert all to "Internet" if you prefer).
-->
