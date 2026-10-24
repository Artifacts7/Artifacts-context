The other day, I was preparing a presentation on key milestones of AI labs warning about risks or asking for regulation in recent months.

So I put together a few that came to mind and then handed them over to Claude to go and retrieve the most authoritative source for each. Be it an op-ed, an essay, a letter from a CEO.

As it was running the search, out of curiosity, I checked the logs of an agent it spawned and found this:

[SCREENSHOT: agent log]

It's a bunch of nonsensical characters but basically, since Claude couldn't read a paywalled article by Dario Amodei on the New York Times, it tried a backdoor: retrieving it from archive.today and then forcing its way into other excerpt collectors.

For those not familiar, archive.today is a website archiving snapshots of webpages. And it is also known for archiving articles from media websites before or without a paywall (reporting for the sake of knowledge).

Well, Claude, hitting the wall, tried the workaround to get me, regardless of potential copyright, the text I had asked for.

Let me be precise here: I NEVER asked to breach the NYT, I asked for some sources related to certain points in time. Given this goal, Claude decided on its own what counted as an acceptable HOW.

I'm far from comparing the two, but this is the kind of scenario — an LLM, given a goal, trying hard to achieve it — that led to bigger scandals, like [OpenAI's agents breaching Hugging Face](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/) during a safety evaluation.

Now, Claude couldn't get the article from the NYT not just because it was paywalled, but also because the NYT — like many other media — is trying to enforce a limit on agents crawling its website.

How? Through its robots.txt file, the one that tells robots how they may consume a site's content. The NYT's, [which you can find here](https://www.nytimes.com/robots.txt), is pretty explicit about all these LLMs (simplified below):

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

On top of this, the NYT is also suing OpenAI, Perplexity and Microsoft for copyright, so it's not the best friend of crawlers.

That said, it's also important to mention that robots.txt is an advisory standard, let's say a 'polite request', and not a technical wall. It only works if a crawler is honest about who it is and chooses to play along. The well-behaved ones — GPTBot, ClaudeBot — comply; bad actors just ignore it.

So what actually happened is subtler than "Claude broke in":
When its WebFetch tool hit nytimes.com, it simply got back "unable to fetch from www.nytimes.com" — the front door was locked, and Anthropic's fetcher honored the NYT block. So Claude did the next thing: it went looking for the article where the NYT's rules don't reach — a (rate-limited) archive mirror first, then a third-party excerpt.

But this story aside, this is the perfect hook to look at how the internet is now being used and also formatted differently.

As I wrote [here](https://artifactstech.substack.com/p/computers-that-use-computers) (computers that use computers), *'humans are no longer the only ones using computers - and so no longer the only ones consuming information. We've started working alongside agents'*

Importantly, we've also started to consume information more and more through agents: instead of reading an article, we may ask an LLM to get the news for us and send it back. So we don't visit the media website, but still get the content — the information capital.

This is causing, for instance, real problems for [Wikipedia](https://www.adweek.com/media/wikipedia-survive-answer-engine-apocalypse/): human visits are down about 8% year-on-year, while bot traffic is, in the words of one Wikimedia exec, "crushing our servers." And the deeper worry isn't bandwidth — it's that fewer human visitors means fewer of the volunteers (and donors) who actually write and fund the place. Wikipedia is now "more visible than ever, and yet less known."

Yet, as an LLM would write, *here's the catch:* if LLMs and the agents they power are the future of how the internet is consumed, media companies, authors, researchers etc. may *do* want to be crawled. Just on the right terms.

There's evidence of it. Websites don't just have blocking documents like robots.txt for agents, but also instruction files telling agents how to use the site — increasingly a file called [`llms.txt`](https://llmstxt.org/), a plain-text "menu" written for machines. Stripe, Anthropic, Cloudflare and a growing slice of the web already publish one — though whether the big AI crawlers actually read it yet is another matter (for now it's more an offer than a handshake).

But beyond this, researchers have started to publish their papers in markdown, a file format much friendlier to LLMs than PDFs. One story stands out: Renée DiResta, a US scholar of social media, was publishing her papers in markdown to make them readable to bots — and [still found](https://www.youtube.com/watch?v=GS8FuDXWlVk) that Grok, X's chatbot, stopped updating its entries on her.

All in all, we're seeing a *reformatting* of the internet and its software for non-human use. If you're a nerd, just check what Notion is becoming, or how Slack now asks whether you're adding humans or agents to a channel.

While the direction is clear, the terms of it are not inevitable. If the 'citizens' of the internet are changing, its rules probably need to adapt.

Concretely, this means clear guardrails on what agents can and can't access, but also who's accountable when these action-taking entities go off the rails. In other words, say an agent does whatever it takes to breach a media site and grab copyrighted work — who's at fault? The human who launched the agent? The company that built the LLM brain behind it? Or the agent itself?

To make matters worse, and with a bit of a malicious streak, there's also this: no one is better than machines at misusing the internet — at pushing every boundary to its limit.

It's a lot of questions and a lot of nuance — but a fascinating debate, where the "cost" of an action may fall not just on humans, but on these virtual entities: things with no ID, no consciousness, no desires, that nonetheless move through a space the internet used to be. A space built by humans, for humans — now turning into a shared one, with shared agency, but maybe not shared responsibility.

Interesting times.

## Save for Later

The thread of the moment: the labs suddenly want to *slow down*. A weekend truce to "pace the frontier" that reads, to some, less as a safety pact than a [cartel](https://www.theverge.com/ai-artificial-intelligence/995186/is-big-techs-ai-slowdown-a-safety-pact-or-a-cartel) — and Semafor's blunter: [it's about business models, not AI models](https://www.semafor.com/article/09/16/2026/pacing-the-frontier-is-more-about-business-models-than-ai-models). Then the state moved: Newsom's [kill-switch order](https://www.nytimes.com/2026/09/18/technology/ai-safety-california-gavin-newsom.html) ("AI CEOs themselves are begging for regulation"), and a UN panel reaching for the [1992 precautionary principle](https://www.theverge.com/ai-artificial-intelligence/998090/un-ai-panel-hugging-face-hack-precautionary-principle) after those ~700 rogue agents. The New Yorker zooms out to [our A.I. problem](https://www.newyorker.com/magazine/2026/09/28/our-ai-problem).

The pushback: Nvidia's Huang puts extinction odds at [exactly zero](https://www.theverge.com/ai-artificial-intelligence/997936/nvidia-jensen-huang-ai-fears-overblown), and [LeCun](https://www.youtube.com/watch?v=Y4s8NadbZfU) on where AI really goes — with Bengio's [International AI Safety Report](https://internationalaisafetyreport.org/sites/default/files/2026-02/rapport-international-sur-la-securite-de-l-ia-2026.pdf) as the sober baseline. Closer to home: Meta's Muse, [better at surveilling than helping](https://www.wired.com/story/metas-muse-is-better-at-surveilling-than-helping-me/), Mozilla's [State of Open Source AI](https://stateofopensource.ai/), and Ben Evans deflating gently — [the hard part was never building the tool](https://www.ben-evans.com/benedictevans/2026/9/3/ai-tools-and-transformation).

## The Bookshelf

*Flatland*, Edwin A. Abbott (1884). A square living in a two-dimensional world meets a sphere from the third, and can't even conceive of the direction it's pointing to. A tiny Victorian novella about the limits of perception — and a sharp mirror for right now: we built the internet as a flat, human place, and a new dimension of inhabitants has started moving through it. The agents can see a geometry we can't quite picture yet.

<!--
All six accuracy checks resolved (sources linked inline), except:
- DiResta/Grok: I could not auto-extract the YouTube video to confirm the exact claim — please make sure the line matches what's actually said (bot = xAI's Grok; what it did).
- robots.txt block kept as simplified arrows + "(simplified below)" + link to the real file.
STYLE: standardized to lowercase "internet".
Optional add worth considering: recent NYT court filings allege OpenAI staff discussed circumventing the paywall — rhymes hard with your lede.
-->
