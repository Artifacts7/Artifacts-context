# The artifacts I use for Artifacts

**Subtitle:** How I built an editorial infrastructure of AI agents to help me think and write
**Date:** 2026-02-25
**URL:** https://artifactstech.substack.com/p/the-artifacts-i-use-for-artifacts
**Status:** Published — captured from live article on 2026-10-24
**Archive format:** Original article text; Markdown formatting conversion. Images retain source URLs; media embeds are linked, not transcribed.

---

[In the last Artifacts,](https://artifactstech.substack.com/p/writing-is-thinking) I argued that using LLMs to produce text **may mean skipping the thinking that makes writing worth doing.**

Yet, I’m definitely not a Luddite or sceptical of AI helping with daily tasks. It’s just that I don’t buy ‘the perfect prompt’ or other tricks with chatbots.

And so, while busy ranting against chatbots, **I was also studying AI agents:** *artifacts* that don’t just generate text on demand but can coordinate and use other tools, memory, **and - more importantly - can perform actions.**

And I started to wonder **how I could use these artifacts to write Artifacts.**

**I moved from the tasks I do every day for the newsletter:** pulling interesting articles or podcasts, storing them somewhere with labels or notes, finding moments to make sense of a lot of unshaped knowledge, but also trying to find that old article or books I read that may be relevant to a certain topic.

People working in product would say I started from the **jobs to be done.**

The more I researched, **the more I realised that [Claude Code](https://www.lennysnewsletter.com/p/head-of-claude-code-what-happens) was the perfect orchestra director** of the different flows I was tinkering with. But let not be boring with the technicalities :)

[![](https://substackcdn.com/image/fetch/$s_!VSEM!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F75e0782e-ae50-4c4f-9ffb-6513c93d9aa4_1024x1024.png)](https://substackcdn.com/image/fetch/$s_!VSEM!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F75e0782e-ae50-4c4f-9ffb-6513c93d9aa4_1024x1024.png)

music :)

What matters is that a few weeks in, **I found myself with something I hadn’t expected at the outset:** **a full editorial infrastructure** that autonomously gets relevant articles from multiple sources, organizes them and - **when I decide on what to write about** - supports me with the research and the refinement, tapping in everything I’ve read for the past 3 years.

All in all, I don’t think it’s an overstatement to say I got **a small team of artifacts that help me write Artifacts.**

Ah, a few important **caveats**:

- I use Claude Code, which is built for engineers, **but works just fine for other tasks as well.** A good alternative could be [Claude Cowork.](https://claude.com/blog/cowork-research-preview)

- This whole infrastructure costs **19 euro per month.**

- It’s hard to quantify how long it took, but **it’s definitely** ***easy*** **to build something like this with AI**, now.

Here’s a bit of the **story** of how it went.

> **First,** **the** **foundation**

If there’s one thing that matters with AI agents, it’s **context**. Not copy-pasting the prompt of who you are, what you do, etc., but **a more solid understanding and ‘memory’ of what you’re writing on**, how you do things, what good looks like.

So when I started thinking about how to make Claude Code useful for Artifacts, the question was simple: *where’s the best place to pull that context from?* The answer was obvious: **Artifacts itself.**

**I had Claude fetch and read every Artifacts I’d ever published** - years of writing, including the early ones still in Italian, when the newsletter was heavier on policies and regulation and lighter on technologies.

![](https://substackcdn.com/image/fetch/$s_!bO4H!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffd6e6bd6-fde4-4ac4-b0f6-98e180027da9_1572x764.png)

**And it was quite fun to ‘talk’ with the old newsletters**, see how Artifacts has evolved and, implicitly, how I’ve evolved in writing them.

It was also the opportunity to rethink a bit how I describe this newsletter, settling on ***‘stories & ideas on the design of technology’***

[![](https://substackcdn.com/image/fetch/$s_!XdpJ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F10b73ba9-ef30-47dd-9ca1-ae35a05670d2_1188x640.png)](https://substackcdn.com/image/fetch/$s_!XdpJ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F10b73ba9-ef30-47dd-9ca1-ae35a05670d2_1188x640.png)

Claude then used all this context to fill in the `Claude.md`, **a file that loads automatically at the start of every session**, where it’s clear who you are, what you do, where things are, what’s your style etc. **Much better than the perfect prompt :)**

[![](https://substackcdn.com/image/fetch/$s_!r8gi!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F16915354-00d4-46fc-8f0b-5fe9df7cdcea_1604x1318.png)](https://substackcdn.com/image/fetch/$s_!r8gi!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F16915354-00d4-46fc-8f0b-5fe9df7cdcea_1604x1318.png)

Most developers use it to document code architecture. **I** **use it to document Artifacts and how it is written.**

**CLAUDE.md is the most important piece in this stack.** Everything else runs on top of it.

The second foundational piece is **Notion**. I’ve used it for years as a database where to automatically store all the articles, papers, podcasts, books, I read - basically, **the knowledge that has been powering Artifacts for years.**

Now, I’ve connected it to Claude (via MCP, for nerds out there), so that **whenever I’m thinking of, say, age verification, it will return to me anything I’ve came across in the past 3 years**, be it a podcast or a book highlight. Not too bad.

[![](https://substackcdn.com/image/fetch/$s_!h-SG!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdb85fe36-462f-4cc5-bfe6-ce88597aec79_1280x720.gif)](https://substackcdn.com/image/fetch/$s_!h-SG!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdb85fe36-462f-4cc5-bfe6-ce88597aec79_1280x720.gif)

`Claude.md` and the Notion plug are where the full context lives: **they don’t generate content but they make my agents aware of what Artifacts is** and what I know already.

So I’m not always starting from zero, or chasing the perfect prompt :)

> **Then,** **the** **flow**

Once the infrastructure knew Artifacts, **I started using it.**

First task is getting sources. **As Artifacts is where I try to make sense of a lot of what I read, I try to read a lot.** But as the newsletter subscription counter grows, it’s not the case for time - and sometimes I struggle to catch up.

So I built an automation in n8n that **every day at 9 PM pulls articles from TechCrunch, The Verge, The Markup, and WIRED, plus whatever newsletters landed in my inbox**, then filters, clusters, and analyses them with an AI tuned to ask one question: ***what matters here for Artifacts?***

[![](https://substackcdn.com/image/fetch/$s_!jkFR!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff50e3e5f-c69c-4fdc-9d8a-eae47cd22bba_2226x1128.png)](https://substackcdn.com/image/fetch/$s_!jkFR!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff50e3e5f-c69c-4fdc-9d8a-eae47cd22bba_2226x1128.png)

The output is some **notes sent to a Notion page and in a Telegram message** on my phone. I usually read it in the evening or first thing in the morning.

[![](https://substackcdn.com/image/fetch/$s_!bFVP!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ae940f5-1880-4c9a-ae27-c50bf97aaa1c_1166x1016.png)](https://substackcdn.com/image/fetch/$s_!bFVP!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ae940f5-1880-4c9a-ae27-c50bf97aaa1c_1166x1016.png)

Sometimes nothing sticks, other times one item connects to something I’ve been turning over for weeks, **and that’s when the idea of a piece begins.**

Important point: **I decide what to write about.** For now, I don’t want AI suggesting topics. **I enjoy connecting the dots myself.**

Once I pick a topic, **I open Claude Code and start looking into my Notion for pieces on the subject.** It helps me re-read, draw an outline, ditch ideas, explore new angles - building the shape of what I want to write before I actually write it.

![](https://substackcdn.com/image/fetch/$s_!opUL!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff2484393-58bc-49d5-876f-49c50b45fe93_1196x466.png)

**So I can draw on my notebook the mental schema** I need before writing Artifacts.

**Writing itself I keep for myself,** and I think I’ve explained at length why :)

What I have built is`/artifacts-polish`, **a skill that helps me clean language and keep it consistent with older editions,** having ‘read’ the others.

[![](https://substackcdn.com/image/fetch/$s_!JIDD!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F296a062d-7c4d-4d3b-ad49-7b1ab57ed008_1454x824.png)](https://substackcdn.com/image/fetch/$s_!JIDD!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F296a062d-7c4d-4d3b-ad49-7b1ab57ed008_1454x824.png)

In Claude, **skills are fixed instructions on repeated tasks** - say every morning you want a recap of your emails, you built a skill that knows what to do.

Once the draft is ready, **I run this skill and it helps me go through what I’ve written with fresh eyes.**

And when I’m happy, I send it out to your inbox :)

**But it doesn’t end there.** As some of you know, I always republish on LinkedIn - with some effort to avoid the annoying flattened language of that platform. So I built another skill,`/artifacts-linkedin`, **that turns my piece into a post I’m actually happy with, based on all my previous ones.**

[![](https://substackcdn.com/image/fetch/$s_!EoV8!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F05387444-bfa3-4880-b29a-843a64204b12_1614x1082.png)](https://substackcdn.com/image/fetch/$s_!EoV8!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F05387444-bfa3-4880-b29a-843a64204b12_1614x1082.png)

Last but not least, **Claude, the context and the agents keep learning from the process**, so the infrastructure improves with me.

> **So, what?**

I want to be careful not to oversell it. **These artifacts don’t write Artifacts** - but they help by surfacing topics I might have missed, pulling up pieces I read months or years ago, and keeping consistency across publications.

And I built this not to have someone else writing, but **to do better some tasks and leverage more my very own work of the past years.**

So it’s not just a writing assistant but more **an AI-powered thinking and writing infrastructure**, designed around what Artifacts is and has been, and with flows for how I want to be writing and keep doing it.

The critical decisions stay with me: **picking the topic, building the argument, doing the writing.** That’s intentional, and I don’t plan on changing.

But I must say that I’m having a lot of fun in having **these artifacts that help me write Artifacts,** and I’d encourage anyone to try it out for their projects!

[Leave a comment](https://artifactstech.substack.com/p/the-artifacts-i-use-for-artifacts/comments)

> ### **Save for Later**

Why institutions are [artifacts of cooperation.](https://aeon.co/essays/institutions-are-how-we-scale-up-cooperation-among-millions)

What are [the political effects of X’s algorithms](https://www.nature.com/articles/s41586-026-10098-2).

Why [we never asked](https://www.nytimes.com/2026/02/10/technology/personaltech/ai-google-meta-opt-out.html) for this Internet. And indeed [we don’t really need](https://www.wired.com/story/the-search-engine-for-onlyfans-models-who-look-like-your-crush/?bxid=5f43a3c889a7356e7e1b2114&cndid=61968307&hasha=dca445e23e26114858a48ad35040e287&hashc=2107626209cd615da922d357ec59a2f4a769eeec7e75a95e874cf17f98f1a7c1&esrc=MARTECH_ORDERFORM) these technologies probably.

What are the consequences of [AI speaking without bearing the consequences of it.](https://www.theatlantic.com/technology/2026/02/words-without-consequence/685974/) Btw, [AI doesn’t like Naples](https://github.com/algorithmwatch/city-comparisons/blob/main/Analysis.ipynb).

[Get bored](https://www.mdpi.com/2076-3425/15/8/794), please!

> ### **The Bookshelf**

[![](https://substackcdn.com/image/fetch/$s_!esBy!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fede6edeb-e20f-4525-8b0a-dbf74741b695_1620x1620.png)](https://substackcdn.com/image/fetch/$s_!esBy!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fede6edeb-e20f-4525-8b0a-dbf74741b695_1620x1620.png)

As we discussed infrastructures, I recently wrapped up ***‘Building and Dwelling’***, a terrific book by Richard Sennett on **how the cities we build shape how we live them.** Not a tech book, but worth a read for those interested in Artifacts more broadly.

📚 **All the books** I’ve read and recommended in Artifacts are [here.](https://airtable.com/appK7fMPX1DMkQYzL/shrRh8TgI7GtmgBxM)

> ### **Nerding**

[![](https://substackcdn.com/image/fetch/$s_!Y9Pm!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb8ecc0ef-7963-4623-b319-b3ed916b80e8_1080x1080.png)](https://substackcdn.com/image/fetch/$s_!Y9Pm!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb8ecc0ef-7963-4623-b319-b3ed916b80e8_1080x1080.png)

To complement work with Claude Code, but also to connect ideas and create your knowledge base, **[Obsidian](https://obsidian.md/)** is a good one. **Needs an investment, but take a look!**

> ### **☕?**

If you want to know more about Artifacts, where it all started, or just want to connect...

[Let's grab a virtual coffee ☕](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ibxlzyU7rgnuoTgqXb_DFc19dfHmJeu1OAu17IY0_oHrtcJtvtctAJnMabirgZNx5Z5NAPGs0)
