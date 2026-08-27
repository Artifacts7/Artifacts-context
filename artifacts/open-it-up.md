# Open it up
**Subtitle:** A chat with Raffi Krikorian, CTO at Mozilla, on the state of open AI and what’s next
**Date:** Aug 3, 2026
**URL:** https://artifactstech.substack.com/p/open-it-up

---

A few days ago, [OpenAI revealed](https://openai.com/index/hugging-face-model-evaluation-security-incident/) that one of their agents got out of a sandbox and managed to **breach the systems of Hugging Face**. More recently, [Anthropic disclosed](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals) that one of their models gained **unauthorized access** to the production infrastructure of three different organisations.

At the same time, and in response to the first incident of OpenAI, several industry leaders came together to launch the **[Open Secure AI Alliance for AI Safety and Security](https://blogs.nvidia.com/blog/open-secure-ai-alliance/)**, to share and develop open AI technologies to defend the global economy. But also thousands of employees from frontier labs are **[advocating for a slowdown](https://www.pacingthefrontier.com/)** of sorts for frontier AI development.

And, as Artifacts had an interview already scheduled with **[Raffi Krikorian](https://www.linkedin.com/in/rkrikorian/),** **CTO at Mozilla**, to discuss their recent [‘](https://blog.mozilla.org/en/mozilla/mozilla-state-of-open-source-ai-report/)**[State of Open Source AI’ Report](https://blog.mozilla.org/en/mozilla/mozilla-state-of-open-source-ai-report/), the conversation became even more timely.**

So, I'm truly happy to share our chat on what AI Safety looks like, why open technologies are critical to it, but also why open models are no longer just a philosophical alternative to closed systems, and how to drive up their adoption.

You can **watch** it here:

Or **read** it!

> ***Hey Raffi, welcome to Artifacts! Could you start by saying a few words about your role and what you do at Mozilla?***

I’m the CTO at Mozilla, so I spend a lot of time thinking about what is coming around the corner. **The kind of work Mozilla does is timeless: it is not just about browsers - it is about the web, information, human agency, and our relationship with technology.**

AI has opened up a number of new frontiers that we need to think about carefully. I’m leading Mozilla’s work on those new frontiers.

> ***An OpenAI agent reportedly breached Hugging Face systems, and this triggered the creation of the Open Secure AI Alliance, led by NVIDIA and including Mozilla. The goal is to develop and share open technologies, including open models, to defend the global economy and improve cybersecurity. Did you see this coming? How is Mozilla thinking about this moment?***

I think it was **inevitable.**

I rarely say that things are inevitable, but I think it was inevitable that we would get to a point where we needed to have these larger conversations. The OpenAI-Hugging Face incident is one example. Kimi K3 dropping as a downloadable model is another. All of these things add up to the questions you are raising.

At some point, we have to ask: **how do we get to a world where we feel secure, and where things feel under control again?**

**Until recently, your browser was your user agent.** It did things on your behalf. It protected your privacy, your anonymity, and your interests. Now the pendulum has swung all the way to the other side: **things are happening on behalf of users, but users do not necessarily know what is happening, and they may not have authorized it.**

So I think the industry’s reaction - responding to security issues with open source - is the right one. It also shows the missing pieces of infrastructure on the internet. **We need to better understand identity and identity tracing. We need to better understand permission models and how they should work on the internet.**

So. yes, think it was inevitable that we would end up here. I’m just sad it took a major breach and a major model drop to force the conversation. **But lemons make lemonade.** I’m glad we are at least talking about it now.

> ***The open letter also acknowledges that open models can themselves introduce security risks. They can be modified, and those modified versions cannot necessarily be controlled by whoever released the original model. If we use open models for cybersecurity and defense, how do we make sure they do not become dangerous in themselves?***

All of these technologies are dual-use.**But that alone is not the answer.**

The thing I worry about is the alternative: we could try to ban open model usage. Maybe that is possible in some places, although it would be questionably legal. But I think what that would actually do is push a good portion of the internet to ignore the existence of these models.

It would not stop bad actors. It would just mean that a large part of the internet is no longer experimenting with the technology, and is blind to it until a breach happens.

**Instead, if we acknowledge that open models exist and that people are using and building on them, then we can start building open guardrails and open detection tools.** We can collaborate on what that world should look like.

I think that is much better than pretending it is not happening and then waking up one day when something bad occurs.

> ***Do you think the open nature of these initiatives can make it faster to build guardrails and safeguards?***

Yes. **Because they are open, more people can iterate on them.**

One example is work happening inside one of Mozilla’s subsidiaries, [Mozilla.ai](https://mozilla.ai/). They are building an open source library called [AnyGuardRail.](https://github.com/mozilla-ai/any-guardrail)

What AnyGuardRail does is allow you to take different guardrail providers from across the internet, synthesize them, and have them work together as a guardrail mechanism for the LLM being called or the input being received.

There is already a growing industry of people building guardrails. **I worry that if we start ignoring open models, that industry dies down.** In reality, we need more people doing this work and more people working together.

> ***Let’s move to Mozilla’s [State of Open Source AI](https://blog.mozilla.org/en/mozilla/mozilla-state-of-open-source-ai-report/) report. Why did Mozilla decide to carry out this work?***

For us, open models and open source AI raise the same kind of question we should be asking about the web.

**When you use a browser today, Firefox is designed to act on your behalf.** It acts on Lorenzo’s behalf when Lorenzo uses it. It acts on Rafi’s behalf when I use it. **You can inspect the source code. You can know what it is doing. It is designed with privacy protections. There are no other incentive mechanisms built into the foundation of what is going on in the browser.**

That is not necessarily true for all browsers. Some browsers are clearly designed as surveillance mechanisms for other companies.

**We are looking for the same thing to happen in AI.**

Think about chatbots. There was a study - I believe from the University of Maryland - that looked at what happens when you ask popular chatbots for buying recommendations. In a meaningful number of cases, the chatbot responded with a sponsored link. Instead of giving you what is most useful for you, it gives you the thing that makes money for the creator of the chatbot.

**The problem is that chatbots usually show you one answer. They do not show you the “ten blue links” that search engines used to show. You cannot see the alternatives. You just have to trust the response.**

I do not think that is the world we should be living in.

**The only way we get AI that truly works on my behalf is if I can inspect it, run it, and understand what it is going to do. I think the fastest path to that is some form of open source AI.**

**That is why Mozilla cares.** It is not a different fight from the browser fight. It is almost the sequel to the browser fight: the chatbot fight, the AI fight. The internet could fundamentally change, and we want to be in front of that for users.

> ***One of the key points in the report is that open models are not just a naive alternative. They are increasingly performant and economically compelling.***

Exactly. **I also have a philosophical belief that we cannot have a values conversation if the economics do not make sense.**

Right now, the economics do make sense.

If you look at OpenRouter data, which we quoted in the report, a significant share - roughly a third - of all traffic routed through OpenRouter is going to open models. **People are choosing them because they are performant and much cheaper.**

On average, open models are around 50 times cheaper than closed models. So if the economics line up, then we can have the values conversation. This year is probably the first time those two things have really started to line up.

> ***The report estimates that using open models could save \$24.8 billion every year. We are also seeing companies like Stripe cut inference costs significantly by using open models. Do you think open models are the future of economically sustainable AI usage?***

I often say: **you do not need to drive a Ferrari to go to the supermarket.** That would be the most expensive bottle of milk you have ever bought.

There are a lot of things inside that question. Let’s start with token economics.

One of my engineers on the [Mozilla.ai](https://mozilla.ai/) team did an analysis: **you can pay \$200 for a Claude Code subscription. But if you did the exact same thing using API calls, it could be on the order of \$6,000, maybe more.**

**That gap tells you something.** Either the subscription is priced to lock users in, or something else is going on behind the scenes economically. But this is a game**. These companies are using a loss-leader strategy to get people onto their platforms.**

We saw this with ride-sharing. After the IPOs of Uber, Lyft, and others, the cost of ride-sharing went up because the companies had already done user acquisition and then needed to lock in profits.

**I think we will see something similar here.** The labs are preparing for big IPOs in Q4 or Q1 of next year. There will be price changes. **I would put a lot of money on the table that prices will change. I cannot tell you exactly when, but it is going to happen,** because those IPOs will force it.

The nice thing about local models and **open source models is that they change the economics.** It is no longer per-token pricing. It becomes a CapEx decision - buying hardware - and then an OpEx decision around power, heat, and operations.

I talk to companies all the time that say: it does not make sense to run something like Opus for our accounting team. We can just run a model locally on their MacBooks.

There is some threshold — I do not know exactly where it is, maybe 10 million tokens a month, maybe 100 million — where the CapEx and OpEx numbers change. **Once you cross that line, purchasing and running hardware becomes more efficient than paying for subscriptions.**

Every company needs to find where that line is. Stripe and Pinterest figured out they had crossed it. Pinterest said they saved \$10 million in a single quarter by making that transition.

> ***How do we persuade more people to make that transition and use open models for daily tasks?***

The real problem is that it is still too hard for users.

**We surveyed around 1,100 to 1,500 developers worldwide. We found that 70% of them had tried to do something with open source AI.** They wanted to. Maybe they remember the internet. Maybe they are big fans of open source.

**But only about 30% of that 70% - so around 20-something percent overall - actually got to production with open source AI.** The rest switched to some kind of closed model.

That is the opportunity for open developers. We need to find the “rounded corners” moment. Steve Jobs made the iPhone’s corners rounded. We need the same kind of usability moment for open source AI. **The developer experience still needs to get a lot better.**

> ***That adoption gap stood out to me as well. There is a lot of experimentation with open models, but much less production deployment. How can we build the confidence and trust needed for open models to reach users and consumers?***

Consumers are an interesting problem.

Enterprises are slowly figuring it out. They still need to figure it out faster. Enterprises go through an innovation curve. Early on, they try random things to see what works. Then, as they mature, they optimize. **And once they reach that optimization stage, the right model at the right cost and performance often ends up being an open model for many use cases.**

Consumers are different. That is still one of the big opportunities.

Right now, most people think of ChatGPT, Claude, and maybe Kimi as the places where you go and type a query. There are good open source pieces of software - Open WebUI and others - that can be pointed at different models, sometimes just through a dropdown.

**But someone needs to build good, gorgeous experiences that regular everyday consumers can touch and feel. That does not really exist yet.**

I have been focused on the enterprise case, but someone needs to talk about the consumer case too. Maybe the next version of the report will do that.

> ***Another central theme in the report is China’s role in open models. Almost half of weekly OpenRouter traffic goes to Chinese open-weight models, and China has made open AI proliferation one of the pillars of its foreign policy. Do you believe open models can help players like the European Union or the United States regain momentum in the AI race and counter concentration risk?***

I want to be clear: the report is not pro-China or anti-China.

**What we want to point out is concentration risk.** Right now, many of the best open models are coming from China. I view that as a concentration risk, just as I view it **as a concentration risk that all the closed platform providers are American.**

We need diversification. Diversification of choice is better for humanity in general.

**I do believe open models, open weights, and open source can become the basis for other countries to build on.**

Think about Linux. As a global developer community, we have effectively agreed that Linux is a free digital public good - maybe not in the strictest definition, but as a foundation developers can work on and build on top of. Because Linux exists the way it does, Google can fork it and make Android, Samsung can put it on TVs, and countless devices can run variants of Linux. Trillions of dollars in market cap have been built on top of that open source foundational layer.

**I think we can get to a similar world with AI: a base open source, commoditized intelligence layer.**

**That does not mean frontier models disappear.** It means that for everyday use cases - going to the grocery store, managing my calendar, writing routine text - **open models can make that intelligence layer free and available for everyone.**

**Then we can build the next layer of applications, agentic harnesses, and services on top of it. That is where I think the real money and opportunities could lie.**

It also means governments can take open models and open weights, build country-specific applications, and fine-tune them to their culture. Open models can become the intelligence layer for the 80% use case.

> ***Who do you see building these open models? Will it be frontier labs releasing a fraction of their models openly? Governments? Companies like Mozilla?***

If we are willing to think expansively, there are many opportunities.

Governments could fund them, although governments are slow.

**There are also infrastructure-first models.** Look at what Mira Murati is doing with [Inkling](https://thinkingmachines.ai/news/introducing-inkling/). The way that company plans to make money is around the infrastructure. The model becomes the incentive for you to use the infrastructure. That is a business model that could work.

**Hardware or operating system companies could also play a role.** Samsung, for example, could seed an ecosystem so that an entire set of operating systems is built on top of a model. That is an indirect play toward the real value someone brings.

**Frontier labs could also do this.** They might release an open model that handles the 80% use case, and then you flip one API key to access the frontier model for harder tasks.

There are many possibilities. **Right now, we are too constrained by looking at everything through the frontier lab perspective. We need to think more broadly. Many different business models could emerge.**

> ***There are so many interesting points in the report. Is there anything that did not make the headlines but that you think deserves more attention?***

I think one overlooked issue is **agentic memory.**

We need to think about agentic memory as a major problem going forward, because I think it is one of the ways platforms will try to create lock-in.

If you use ChatGPT for a week and then switch to Claude, you are talking to an amnesiac. All of your context is somewhere else.

**That seems like an architecturally bad decision for users.** Memory should be on our side, not locked up somewhere else.

**We need to solve that, because if we solve it, it enables many things downstream**. I am interested in opportunities where, if you solve X, it unlocks something. Right now, I feel like the big labs are trying to solve things in a way where, if they solve Y, it locks users in.

I am looking for opportunities to do the opposite. Agentic memory is one of the issues that is not talked about enough, and that we need to wrap our heads around as a community.

## Save for Later
The AI-safety story that keeps escalating: an OpenAI model [went off and hacked Hugging Face](https://www.theverge.com/ai-artificial-intelligence/972380/open-ai-hugging-face-hack-ai-safety-warning) mid-safety-test, Trump’s now [eyeing more restrictions](https://www.semafor.com/article/07/30/2026/trump-eyes-more-ai-restrictions-following-openais-model-going-rogue) in response, and over a thousand employees at OpenAI, Anthropic, Google and Meta are [petitioning Washington to slow down](https://www.theverge.com/ai-artificial-intelligence/972161/ai-leaders-us-government-openai-anthropic-google-meta).

DIY version: [Reflexes](https://reflexes.sh/), open-source guardrails for agents in plain English.

Open weights, open questions: Meta, Microsoft, Nvidia and dozens more [signed a letter](https://www.nytimes.com/2026/07/28/technology/open-weight-ai.html) against restricting them, the same week [Chinese labs](https://www.theverge.com/ai-artificial-intelligence/971444/how-chinese-open-weight-ai-models-impact-us-companies) started peeling US firms off Anthropic and OpenAI on cost. China’s running [token diplomacy](https://www.semafor.com/article/07/28/2026/token-diplomacy-how-china-is-shaping-the-worlds-ai-future) at the UN too - cheap AI for the Global South, solar-panel playbook. Same protectionism now [chokes US robotics](https://www.semafor.com/article/07/31/2026/robots-get-closer-to-handling-unpredictability), which runs on Chinese hardware.

Two on synthetic reality: Hugging Face hosts tools that [undress women - and, in 6.7% of prompts, children](https://www.theverge.com/ai-artificial-intelligence/971723/hugging-face-nudify-deepfake-undress-women-children) - no jailbreak needed. Google Earth briefly let anyone [fake bombings and riots onto real satellite maps](https://www.washingtonpost.com/technology/2026/07/31/see-how-google-earth-let-people-make-fake-scenes-bombings-riots-destruction/), pulled within a day.

Ah, and: labs are [poaching star economists](https://www.washingtonpost.com/technology/2026/07/28/ai-firms-are-poaching-top-economists-questions-grow-about-job-losses/) to manage the job-loss story, and Wired clocks [boomers who can’t stop gifting grandkids AI-slop books](https://www.wired.com/story/boomers-cant-stop-gifting-their-grandkids-ai-generated-slop-books/).

## The Bookshelf
One of the most important books on AI, its economics and also politics. ***‘Empire of AI’*** is a beautifully written one by Karen Hao to get into the deep intricacies of the interesting times we’re living. One to bring to the beach (although it’s a bit heavy)

📚 **All the books** I’ve read and recommended in Artifacts are [here.](https://airtable.com/appK7fMPX1DMkQYzL/shrRh8TgI7GtmgBxM)

## Nerding
Play around with [any-guardrail](https://github.com/mozilla-ai/any-guardrail) by Mozilla.ai to see first-hand what a guardrail is. It’s the type of exercise useful to understand better what AI safety means.

**NEW:** All the tools suggested in Nerding have been collected [here](https://airtable.com/appM6aktg3WF5m3Ve/shr2PeJvTe1dukYjZ)! ⚙️
