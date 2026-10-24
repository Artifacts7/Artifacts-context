# Not just the model

**Subtitle:** A chat with Joshua Tan, CTO at CurrentAI, on the full stack for a truly open AI.
**Date:** 2026-09-15
**URL:** https://artifactstech.substack.com/p/not-just-the-model
**Status:** Published — captured from live article on 2026-10-24
**Archive format:** Original article text; Markdown formatting conversion. Images retain source URLs; media embeds are linked, not transcribed.

---

What makes the headlines about AI is often the latest model, breaking this or that benchmark, with the flashy name, etc.

**This is a bit misleading: it lets us think AI is all about powerful models,** with companies engaged in a race towards AGI, and that’s it.

**But there’s much more:** AI is also infrastructure, deployment, data, safety and guardrails, evaluations, protocols etc. All these pieces come together to give us the technology that is changing how we work and, probably, think.

And all these pieces could be proprietary or, as it’s often the case with the foundations of breakthrough technologies, **open and built in public**, for everyone to benefit and build on top.

**This is the intuition from which CurrentAI started**, trying to [first map](https://www.aipotluck.org/map/gap-map) the open landscape the full stack of AI, and then making an effort to build the missing pieces.

[![](https://substackcdn.com/image/fetch/$s_!KCXS!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdfae8deb-013d-4e8e-8d65-2c7c3d3627ca_1744x966.png)](https://substackcdn.com/image/fetch/$s_!KCXS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdfae8deb-013d-4e8e-8d65-2c7c3d3627ca_1744x966.png)

To know more, Artifacts talked to [Joshua Tan](https://www.linkedin.com/in/joshuaztan/), **CTO at CurrentAI**, in a deep chat about what gaps are in AI stack but also **what’s needed to promote open technologies.**

You can **watch** it here or **read** below!

[\[Embedded video — view original\]](https://artifactstech.substack.com/p/not-just-the-model#media-c6322dca-5d1d-4b68-997f-e6760133c0a2)

> **Hey Josh, welcome to Artifacts! Could you introduce yourself and explain what Current AI is trying to build?**

Sure! I’m the CTO of Current AI, and by training I’m a mathematician and computer scientist, although these days I spend a lot of time writing emails 😂

**Current AI is a global public-interest partnership trying to build a public option for AI: a full-stack, open source alternative to systems like Claude and ChatGPT.**

Our strategy is to build as little as possible ourselves. **We want to bring together the work that already exists across the open source community**, integrate it, orchestrate it and productize it so that the experience feels seamless and intuitive. You can learn more at [aipotluck.org](https://aipotluck.org).

> **When you say “full stack,” what does that mean? How is it different from simply using an open-weight model?**

You can think of Claude and ChatGPT as closed-source stacks built on top of closed-source models. You can think of products like Perplexity as closed-source stacks built on top of notionally open models. Mistral also offers a closed serving stack on top of more open models.

**What we are trying to build is a truly open source stack on top of a fully open source model.** That means the parameters are available, but so are the datasets and the complete pipeline used to build the system. You can inspect and change every part of it.

We want to bring all of that together as a product and deploy it through an API that is as easy to use as the Claude or OpenAI APIs.

> **Why should ordinary users, companies or governments care whether the AI stack is open?**

There are several reasons. First, **open source options can be cheaper**. They are often not yet as simple to use as closed-source products, but the underlying economics can be much better.

Second, there is **control**. When you use open source rather than closed source, you can configure the system for your enterprise, community or country. You are not limited to whatever options a frontier lab decides to provide.

Third, there is **vertical integration**. Closed frontier labs connect the product, the data they capture from users and the model-development process. That gives them a large feedback loop. **In open source, there usually is not an equivalent data flywheel between users and model builders.**

That missing feedback loop slows open source down in some directions. **One of our goals is to connect the different parts of the ecosystem so that open source can achieve some of the same advantages without giving up openness.**

> **Open source is often presented as the principled option. Can it also outperform closed infrastructure on practical measures such as cost and efficiency?**

Yes. Some people may not realize that **many parts of the open source serving stack are already better than the closed alternatives.**

Independent inference providers are extremely motivated to improve as quickly as possible. If you look at their published benchmarks, they are often much more efficient at serving inference than large hyperscalers such as AWS and Azure.

**Open source is not only a values proposition. In several parts of the stack, it is already a strong performance and efficiency proposition.**

> **Let’s focus on Current AI and the Open Source AI Gap Map you built. Why are you working on it?**

The idea came from several directions. Our CEO, Ayah, had been thinking for years about the need for better ecosystem intelligence across open source AI.

For me, the motivation was extremely practical. I am responsible for building this stack, organizing an engineering team and working with partners. I have to make choices about what goes into the product. In other words: **what is the supply chain for a full-stack open source AI system?**

That requires evaluating a large number of projects: how they compare with other open alternatives, how mature they are and how their performance compares with closed-source products. There is so much happening across open source AI that this requires both data and judgment.

So, selfishly, I needed the map to understand what to invest in, whom to partner with and what we should build. **But we developed it in the open because we believed it could be useful to many other people too.**

There are existing classifications for models, but there has not been the same kind of deep analysis across every layer of the stack, including orchestration and infrastructure. **The map can also help people understand that open source AI is not just about models.**

> **What did the analysis reveal that surprised you so far?**

One of the most interesting findings was that **openness is not a yes-or-no question**.

Not every project uses a standard open source license or fits a definition of “fully open.” **There are many open-ish repositories:** open-core models, staggered release schedules, open code with unusual licenses or other constraints. **That is true across the entire AI stack, not only for models.**

That may be acceptable, depending on what you are comfortable with, but you need to understand the constraints before deciding to build on a project.

The second finding is **fragmentation**. There are many new repositories, and good projects appear constantly. It is difficult to keep the dataset current and even harder to measure adoption reliably.

**The ecosystem moves quickly, while rigorous data about what people actually use moves slowly.** That creates a real challenge when you are trying to make investment and product decisions.

> **I did run an analysis myself with Artifacts and found that that more than half of the highly capable open tools remain under-adopted. Over the next 12 months, is the main challenge capability or distribution?**

For general use cases, I would say **distribution is more than 50% of the challenge**.

There are power users, such as software developers, who will always want the latest and greatest model and are willing to pay for it. **But most people do not need frontier capability. They need the product to be easy.** They need quality-of-life improvements and integrations with the places where their data and context already live.

Until those problems are solved, most users will continue to default to the closed labs because those products make everything convenient.

**The decisive word is “default.” Open source does not only need to be capable; it needs to become the easiest option to choose.**

> **Current AI also launched a [Chatbot](http://aipotluck.org/chat) alongside the Gap Map. What is it meant to demonstrate?**

I want to be clear: it is not supposed to replace ChatGPT today. It is a demo aimed primarily at open source builders.

**The purpose is to illustrate how the open source community can build together.** It highlights the contributions of different members of the AI ecosystem rather than presenting the product as one organization building yet another chatbot.

There is still a lot of work required before an experience like this can become a feasible replacement for the products ordinary users rely on every day.

> **Finally, looking at open source AI technologies, MCP is definitely the open standard that has achieved strong capability and adoption. Could open standards become the foundation of AI in the same way that open protocols became the foundation of the internet back in the day?**

Obviously, I believe the answer is yes. Otherwise, I would not be doing this work!

**I see a particularly large opportunity around inference.** My background is in theoretical machine learning, but today I spend a lot of time thinking about inference and deployment, because that is where you need to be if you want to create products people actually use.

![](https://substackcdn.com/image/fetch/$s_!xdxC!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2ea85afc-d5e8-49cc-ac8e-62b0d23471f3_1512x522.png)

**There is a huge opportunity for open standards and protocols to create something like a worldwide web—or an internet—for AI.** You could imagine a more permissionless protocol into which different providers and systems can plug.

**There is also a broader vision of decentralized inference,** with intelligence served from many different places. It may not always be as efficient as a hyperscaler’s giant data center, but we could organize inference networks or smaller clusters at the level of an ISP, a community or a region.

We are already seeing companies promote sovereign inference: GPUs located in Spain, Italy, Germany or elsewhere, serving local needs. The question is how to make that capacity accessible and as affordable as possible. **Open protocols can be a key part of the answer.**

> **To wrap this up, you also published a paper titled [“If Open Source Is to Win, It Must Go Public.”](https://arxiv.org/abs/2507.09296) Can you expand on it?**

The paper came from an assessment of where the open source AI community- especially the model-building community - is heading.

I do not want to be unnecessarily provocative, but **in some ways open source AI is contracting.** Organizations that historically built open models are pulling back. Meta is pulling back, and Alibaba appears to be deprecating some major open releases. Open weights are catching up in capability, but fewer organizations are funding the work required to build them at the frontier.

At some point, you have to ask: **where will the money come from, and how can open models continue competing with closed ones?**

From a public-AI perspective, **these models can and should be treated as public resources.** If we organize their economics appropriately, they can function as public goods.

That makes it reasonable for governments, states and communities to pool resources to ensure that this technology remains available to the public.

**That is the core idea of public AI: if open models are foundational infrastructure, sustaining them cannot depend solely on the incentives of a handful of private companies.**

> ### Save for Later

The people building AI can’t stop warning us about it. Anthropic’s alignment lead put the [odds AI “kills all humans” this decade above 10%](https://www.theverge.com/ai-artificial-intelligence/991927/anthropic-ai-kill-all-humans); Dario Amodei’s answer is to [pace the frontier](https://darioamodei.com/post/we-must-pace-the-frontier). The [real threat, though, may be us](https://www.nytimes.com/2026/09/11/opinion/ai-safety-threat-technology.html), not the machines — and the New Yorker asks whether AI can even [truly “go rogue.”](https://www.newyorker.com/culture/open-questions/can-ai-go-rogue)

And for those reading 🇮🇹, check the latest piece by [Carlo](https://open.substack.com/users/24633886-carlo?utm_source=mentions) **on why, well, AI could lead us to extinction.**

[![](https://substackcdn.com/image/fetch/$s_!SITK!,w_56,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0565c4a2-8c41-422d-96b6-2c8c76861501_1024x1024.png)Fuori tempo massimoSì, l’IA potrebbe provocare la nostra estinzione. Come e perché, spiegato dall’inizioGrazie a Costanza Albè, Edoardo Maggio, Lorenzo Ancona, Riccardo Conte, Stefano Pisciotta e Fable 5.1 per aver letto le bozze di questo articolo e avermi dato critiche costruttive e suggerimenti ❤️…Read morea month ago · 11 likes · 7 comments · Carlo](https://carlomartinucci.substack.com/p/si-lia-potrebbe-provocare-la-nostra?utm_source=substack&utm_campaign=post_embed&utm_medium=web&embedding_publication_id=1770844)

And it keeps clearing our bars: OpenAI says agents [cracked a \$1M Millennium math problem](https://www.theverge.com/ai-artificial-intelligence/992953/openai-math-millennium-prize-navier-stokes), amid a [credit fight](https://www.nature.com/articles/d41586-026-02842-5). Yet most research can’t even say [which “AI” it means](https://arxiv.org/abs/2606.31755). Govern it, maybe, but name it first.

Kids and platforms: Newsom signed the [strongest child-safety laws yet](https://www.nytimes.com/2026/09/10/technology/californias-governor-gavin-newsom-online-child-safety-bills.html) — no addictive feeds under 16 — while Meta reportedly [ran 300+ AI child-abuse ads](https://www.bloomberg.com/news/articles/2026-09-08/meta-ran-hundreds-of-ads-showing-ai-child-sexual-abuse-ngo-says). The abuse was in the ad slots.

Two against the optimized life: the Atlantic on [living “as though living were another job”](https://www.theatlantic.com/magazine/2026/10/modern-life-maxxing-antidote/688344/), and Gen Z [paying for slowness](https://giftarticle.ft.com/giftarticle/actions/redeem/f0fb17a3-6b89-4c59-8339-8592f0daa380) to spite the slop. Btw, navigation apps [funnel us onto the same roads](https://www.nature.com/articles/s41467-026-75254-8) (CO2 savings gone). And the AI bill hits your pocket — [a RAM shortage](https://www.theverge.com/tech/988225/ram-shortage-supply-chain-micron-apple-iphone) as datacenters eat the memory, right as Apple ships a [\$1,999 foldable](https://www.nytimes.com/2026/09/10/technology/personaltech/iphone-duo-foldable-phones.html). Not cheap :)

> ### **The Bookshelf**

[![](https://substackcdn.com/image/fetch/$s_!HwyF!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc227af76-cd5c-4c03-854d-ef0749674142_1620x1620.png)](https://substackcdn.com/image/fetch/$s_!HwyF!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc227af76-cd5c-4c03-854d-ef0749674142_1620x1620.png)

This book left me with a big question mark. It’s interesting, but maybe slightly doomsaying, or maybe right? I feel like it’s a reading that needs to be complemented with others, made with grain of salt, and needs the right context. But, it’s one of those shaping the debate, so worth checking it out.

📚 **All the books** I’ve read and recommended in Artifacts are [here.](https://airtable.com/appK7fMPX1DMkQYzL/shrRh8TgI7GtmgBxM)

> ### **Nerding**

[![](https://substackcdn.com/image/fetch/$s_!2X5S!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F39d4be34-7eb9-436c-81ca-4c6bec3947bd_2546x1350.png)](https://substackcdn.com/image/fetch/$s_!2X5S!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F39d4be34-7eb9-436c-81ca-4c6bec3947bd_2546x1350.png)

Well, that’s exactly what we’ve been talking about: the [Gap Map](https://www.aipotluck.org/map/gap-map) by CurrentAI. It’s a huge tool, super interesting to run your analysis but also to contribute with your insights and research. Go check it out!

**NEW:** All the tools suggested in Nerding have been collected [here](https://airtable.com/appM6aktg3WF5m3Ve/shr2PeJvTe1dukYjZ)! ⚙️

> ### **☕?**

If you want to know more about Artifacts, where it all started, or just want to connect...

[Let's grab a virtual coffee ☕](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ibxlzyU7rgnuoTgqXb_DFc19dfHmJeu1OAu17IY0_oHrtcJtvtctAJnMabirgZNx5Z5NAPGs0)
