# Breaking the chains

**Subtitle:** And why, again, AI is pretending to think
**Date:** 2025-02-11
**URL:** https://artifactstech.substack.com/p/breaking-the-chains
**Status:** Published — captured from live article on 2026-10-24
**Archive format:** Original article text; Markdown formatting conversion. Images retain source URLs; media embeds are linked, not transcribed.

---

Back in November 2022 - feels like ages ago, doesn’t it? - ChatGPT took off because it was… <em>a chat</em>.

Sure, OpenAI had a powerful model, but that wasn’t new. The real breakthrough? <strong>They made AI</strong> <em><strong>simple</strong></em><strong>.</strong> No coding, no weird interfaces - just a basic, familiar format: dialogue. <strong>One of the oldest interfaces of (online) life.</strong>

<strong>Just type, hit enter, and get a response.</strong>

<a href="https://substackcdn.com/image/fetch/$s_!rPcB!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F408942e2-6bce-47c7-a392-fa4efbdb81d7_1080x924.jpeg"><img src="https://substackcdn.com/image/fetch/$s_!rPcB!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F408942e2-6bce-47c7-a392-fa4efbdb81d7_1080x924.jpeg" alt=""></a>

Isn’t it like that?

A lot has happened since. But one thing remains clear: <strong>the more</strong> <em><strong>natural</strong></em> <strong>(I’m not using “human” on purpose) the interaction, the more engaging AI becomes.</strong>

That’s why voice was the next big leap - why OpenAI’s advanced voice mode and NotebookLM felt so uncanny. AI now writes, speaks, listens, and draws, <strong>mimicking what we instinctively recognise as intelligence.</strong>

The missing piece? <em><strong>Thinking</strong>.</em>

Or at least, something that <em>resembles</em> it.

------------------------------------------------------------------------

<strong>And that’s where DeepSeek comes in.</strong>

The latest big name in AI didn’t just ride the wave of better models, more GPUs, and geopolitics. It introduced something else: <strong>an AI that appears to</strong> <em><strong>think</strong></em><strong>.</strong>

<a href="https://substackcdn.com/image/fetch/$s_!lA6l!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F005b5f77-f2d7-465e-84ed-075856c6112f_1198x1304.png"><img src="https://substackcdn.com/image/fetch/$s_!lA6l!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F005b5f77-f2d7-465e-84ed-075856c6112f_1198x1304.png" alt=""></a>

Using it through Perplexity as I tend to care about my personal data

<strong>Yet, this “thinking” is more a design choice</strong>. A nice one, but a design one, as claimed by <a href="https://www.platformer.news/deepseek-design-user-interface-chain-of-thought-ai/">Casey</a> and <a href="https://darioamodei.com/on-deepseek-and-export-controls">Amodei</a>. It has relatively little to do with the actual inner functioning but it reveals a lot about the training of Deepseek’s models.

For the IT guys reading Artifacts, this DeepSeek’s “thinking” is, rather, <strong>exposing its chain of thought</strong> - <em>what you see above.</em>

Which is not, actually, a brand new thing as OpenAI released it before, but DeepSeek made it popular, widespread.

<a href="https://substackcdn.com/image/fetch/$s_!vQPj!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F59f2adf4-dc3f-4df6-9ead-544b9cf170ad_1280x827.jpeg"><img src="https://substackcdn.com/image/fetch/$s_!vQPj!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F59f2adf4-dc3f-4df6-9ead-544b9cf170ad_1280x827.jpeg" alt="zdnet.com" title="zdnet.com"></a>

Is AI really thinking? What does this reveal about DeepSeek’s inner workings? <strong>And why does it matter?</strong> This <em>Artifacts</em> is here to unpack it all.

> ### The History

To fully grasp what is going on, it’s good to understand what a <strong>chain of thought</strong> even is.

Chain-of-thought in DeepSeek is a reasoning technique that enables the AI models to <strong>break down complex problems into logical,</strong> sequential steps before providing a final answer. It:

1.  articulates its thought process step by step.

2.  reflects on its own reasoning.

3.  even double-checks itself along the way.

Remember when AI experts told you to prompt models step by step to improve responses? <strong>Now, AI does it on its own.</strong> The gurus can rest.

------------------------------------------------------------------------

<strong>What’s different about DeepSeek is</strong> <em><strong>how</strong></em> <strong>it learned this.</strong> Instead of traditional supervised learning (where models are fed labeled examples) or unsupervised learning (where they find patterns in data), DeepSeek’s training relies on <em><strong>reinforcement learning</strong></em><strong>.</strong>

This reinforcement learning of DeepSeek is something worth scrutinising. With <strong>an example</strong>, of course, trying to unraveling <a href="https://arxiv.org/abs/2501.12948">their complex paper.</a>

<strong>Imagine solving a math problem by writing down each step in a notebook.</strong> DeepSeek's AI does something similar internally, <strong>breaking complex questions into smaller steps.</strong> What's unique is how it <em>learned</em> this skill:

1.  <strong>Self-Teaching Brain</strong>: Instead of being shown examples of step-by-step solutions first, t<strong>he AI figured out how to break down problems on its own through trial and error</strong>.

2.  <strong>Built-In Fact Checker</strong>: As it works through problems, the AI automatically double-checks its steps (like re-doing calculations) before finalizing answers. This wasn't programmed - <strong>the AI developed this error-checking ability naturally.</strong>

Importantly, along this process, these models earn rewards for <strong>good thinking steps</strong>, not just correct answers.

------------------------------------------------------------------------

Even more importantly, DeepSeek does not rely on trial and error one step at a time but on <strong>multiple solutions simultaneously.</strong>

<strong>For each problem, it generates several potential answers, evaluates them collectively, and ranks them.</strong> By comparing different approaches, it learns to prioritize the most effective strategies over weaker ones..

In jargon, this is called <strong>Group Relative Policy Optimization (GRPO),</strong> namely like teaching a group of students who can share what they learn with each other instead of single students studying in isolation.

<img src="https://substackcdn.com/image/fetch/$s_!2gdz!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F688fed65-e0e7-49d1-8ffe-a0c57f8adc45_710x335.png" alt="">

This process is what enables DeepSeek to display its <em>chain of thought</em> so clearly. It even has <em><strong>aha</strong></em> <strong>moments</strong> - instances where it retraces its steps and realizes it made a mistake.

<a href="https://substackcdn.com/image/fetch/$s_!EhQ4!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7e3467b7-5c6e-46a5-b37e-ef14e6543cbb_1600x1008.jpeg"><img src="https://substackcdn.com/image/fetch/$s_!EhQ4!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7e3467b7-5c6e-46a5-b37e-ef14e6543cbb_1600x1008.jpeg" alt="DeepSeek R1 exhibits an &#x27;aha moment&#x27; during training" title="DeepSeek R1 exhibits an &#x27;aha moment&#x27; during training"></a>

read the red!

DeepSeek has undeniably pushed AI training forward, making models appear more cautious and deliberate.

But let’s be clear: <strong>AI is</strong> <em><strong>not</strong></em> <strong>thinking.</strong> Not even close.

The chain of thought is the reflection of a real training technique, j<strong>ust made it digestible to human beings.</strong>

Internally, <strong>AI models do not "think" in words or sentences as we do.</strong> Instead, they process input data through layers of mathematical computations, resulting in output that can be interpreted as text.

The CoT approach is a way to structure these computations to <em><strong>mimic</strong></em> <strong>a step-by-step reasoning process</strong>, making the model's operations more interpretable to users.

<a href="https://substackcdn.com/image/fetch/$s_!tsdM!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7211e686-5f64-4f1d-89d5-c1d8ce71c1e2_1024x1058.png"><img src="https://substackcdn.com/image/fetch/$s_!tsdM!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7211e686-5f64-4f1d-89d5-c1d8ce71c1e2_1024x1058.png" alt=""></a>

So what does this mean? The exposure of a chain of thought isn’t a window into the model’s actual inner workings - <strong>it’s a design choice, a tool for making AI seem more understandable.</strong>

This may seem obvious (is it?), but it’s worth repeating. Human minds <em>think</em>. <strong>Statistical models don’t.</strong> Words aren’t even a concept to them—they’re just patterns.

None of this is meant to diminish DeepSeek’s achievements. In fact, making AI reasoning more transparent is a win for AI safety and usability. But we should recognize it for what it is: <strong>an interpretative layer, not a fundamental shift in machine intelligence.</strong>

<a href="https://artifactstech.substack.com/p/breaking-the-chains/comments">Leave a comment</a>

> ### Save for Later

A gallery of <a href="https://www.ft.com/content/4b39c2d8-56d0-439f-9eb5-0b16b31bd301">memes</a> on DeepSeek.

Alternatives for legacy social media, <a href="https://networkcultures.org/blog/publication/unlike-us-reader-social-media-monopolies-and-their-alternatives/">all here</a>

We’ll <a href="https://www.oneusefulthing.org/p/the-end-of-search-the-beginning-of?publication_id=1180644&amp;post_id=156359450&amp;isFreemail=true&amp;r=2d3svm&amp;triedRedirect=true">research</a>, not search!

Running out of ideas for San Valentine? A <a href="https://www.theverge.com/good-deals/596123/valentines-day-2025-gift-ideas-boyfriend-girlfriend-couples-husband-wife-partner">tech guide</a> for you.

OpenAI is doing Apple at the <a href="https://www.theverge.com/openai/608476/openai-super-bowl-chatgpt-commercial">SuperBowl?</a>

AI & us in the words of…the <a href="https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_ddf_doc_20250128_antiqua-et-nova_en.html">Vatican</a>!

For the 🇮🇹s here, <a href="https://www.eventbrite.it/e/biglietti-digital-journalism-fest-1234532593219?aff=oddtdtcreator">come join</a> the <strong>Digital Journalism Festival</strong> organised by <a href="https://open.substack.com/users/2719906-francesco-oggiano?utm_source=mentions">Francesco Oggiano</a> in Milan on March 22nd!

> ### Someone said this before

<em>“What you're suited for depends not just on your talents but perhaps even more on your interests.”</em> - Paul Graham

> ### The Bookshelf

<a href="https://substackcdn.com/image/fetch/$s_!AXDP!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe0593c9c-e06e-4601-a023-9a2660867097_1620x1620.png"><img src="https://substackcdn.com/image/fetch/$s_!AXDP!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe0593c9c-e06e-4601-a023-9a2660867097_1620x1620.png" alt=""></a>

The whole DeepSeek story is also deeply tied to chips and computational power. For full context and all the intricate details, <em><strong>“Chip War”</strong></em> is the go-to book.

📚 <strong>All the books</strong> I’ve read and recommended in Artifacts are <a href="https://airtable.com/appK7fMPX1DMkQYzL/shrRh8TgI7GtmgBxM">here.</a>

> ### Nerding

<a href="https://substackcdn.com/image/fetch/$s_!S1Rt!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d3de7ba-12e2-4a33-97ef-817c121747df_1080x1080.png"><img src="https://substackcdn.com/image/fetch/$s_!S1Rt!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d3de7ba-12e2-4a33-97ef-817c121747df_1080x1080.png" alt=""></a>

More and more, I’m seeing intrusive bots taking part alongside their human bosses. A bit annoying, tbh. <a href="https://www.granola.ai/">Granola</a> fixes it, taking notes behind the scenes as if it was your Apple Notes on steroids.

> ### ☕?

If you want to know more about Artifacts, where it all started, or <strong>just want to connect...</strong>

<a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ibxlzyU7rgnuoTgqXb_DFc19dfHmJeu1OAu17IY0_oHrtcJtvtctAJnMabirgZNx5Z5NAPGs0">Let's grab a virtual coffee ☕</a>
