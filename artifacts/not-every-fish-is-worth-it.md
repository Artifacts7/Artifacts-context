# Not every fish is worth it

**Subtitle:** Meta's about-face and why it's a math choice, beyond the politics of it
**Date:** 2025-01-28
**URL:** https://artifactstech.substack.com/p/not-every-fish-is-worth-it
**Status:** Published — captured from live article on 2026-10-24
**Archive format:** Original article text; Markdown formatting conversion. Images retain source URLs; media embeds are linked, not transcribed.

---

You’ve probably heard the buzz: **Meta’s doing a big shake-up.**

**What’s allowed (and not allowed) to be said** on its platforms is about to look a whole lot different. **And how they’ll check and control what you say?** That’s shifting too.

In complex terms, Meta is overhauling its **content moderation policies** (only in the US, for now).

Mark Zuckerberg kept it brief - **5 minutes**, to be exact:

[![Meta official blasts CEO Mark Zuckerberg for 'buckling to political pressure'](https://substackcdn.com/image/fetch/$s_!3BOp!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F44d7192c-cd24-4a8b-bdb5-05b93445c49d_700x1024.jpeg "Meta official blasts CEO Mark Zuckerberg for 'buckling to political  pressure'")](https://about.fb.com/news/2025/01/meta-more-speech-fewer-mistakes/)

Zuck in his new style!

Here’s the breakdown:

- **Fact-checking? Out.** They’re replacing it with something called Community Notes, which sounds a lot like X’s approach. Instead of expert fact-checkers tagging content, they’re putting the responsibility in the hands of the users - free of charge, of course.

- **Restrictions on harmful speech? Relaxed.** Now, you can say that, for instance, a gay person is mentally ill. Call it “freedom of expression,” if you wish.

- **Moderation overhaul.** Meta’s recalibrating its automated systems to focus only on the big, truly harmful violations—like drugs or child exploitation. The rest? They’ll scrutinise less.

- **Politics are back in play.** Meta’s resurrecting political content, which they were trying to bury just a couple of years ago, as we saw [here](https://artifactstech.substack.com/p/la-piazza-al-centro-del-villaggio) on Artifacts.

- **Moderators are moving.** Goodbye, California. Hello, Texas. Because, well, Texas has different ideas.

In a [tagline](https://about.fb.com/news/2025/01/meta-more-speech-fewer-mistakes/) (provided by Meta), they want ‘**More Speech and Fewer Mistakes’**

------------------------------------------------------------------------

The comms strategy around this announcement has been pretty straightforward. In Zuck’s words, Meta wants to **“get back to our roots”**, which happens to coincide with (at least) **2019**, when he delivered [this speech,](https://www.youtube.com/watch?v=nYMX-ArjYz8) he referenced to.

**Not a random year.** That was before the Biden administration took the reins, when Trump was president, and when platform accountability laws—like the DSA in the EU—were still in the making. **A pivotal time, indeed.**

**This is 100% an about-face for Meta.** Remember, the fact-checking program kicked off in 2016 amidst accusations of misinformation flooding its platforms. **By 2021, Meta was actively reducing political content**, and Zuck wasn’t exactly holding back his disdain for Trump:

[![](https://substackcdn.com/image/fetch/$s_!28yX!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3932bda7-7c7c-4173-9b6e-58c100d7d1fc_762x619.png)](https://substackcdn.com/image/fetch/$s_!28yX!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3932bda7-7c7c-4173-9b6e-58c100d7d1fc_762x619.png)

**But political tides shift, and so do corporate strategies.** What we’re seeing is a repositioning—Meta tracing back its steps to protect its interests and its business. Predictable? Sure. Surprising? Not so much.

------------------------------------------------------------------------

**Let’s leave the politics aside, though.** I don’t have all the pieces to comment on that, and much has already been said.

What’s more fascinating is what lies beyond politics. Behind the mantra of “more speech and fewer mistakes” are **calculations, statistical trade-offs, and artifacts—the tools and decisions shaping it all.**

> ### The Story

First, Meta isn’t changing how it handles **illegal content**. The definition of what’s illegal might be fuzzy and context-dependent, but it’s ultimately grounded in the law. That stays.

Yet, **illegal content are just a** ***limited*** **part of the issues of speech online.**

What Zuck seems to be changing his mind about is ***harmful content,*** which is inherently a slippery middle ground between legality and illegality.

Harmful content encompasses speech or media that isn’t outright illegal **but may have negative consequences.** Think of cyberbullying, disinformation, or glorification of eating disorders. These are - bear with me - **also** forms of freedom of expression. **Which can be harmful, but still not illegal.**

**This is where platforms exercise discretion.** They decide how safe—or how harmful—they want their spaces to be. By making these choices, they define the boundaries of their communities.

Yet, [as Florent Joly brilliantly puts it](https://www.threads.net/@florent.joly/post/DEiVXuJpIV2), **framing this as a battle between “censorship” and “free speech” is oversimplifying things.** Relaxing harmful content policies isn’t just about “freedom”—it’s about the real-world consequences that come with that freedom. **There’s more at stake than just free speech.**

------------------------------------------------------------------------

Zuck, for his part, seems to **care deeply about ensuring no one gets censored.** The cost of this? As Zuck puts it, they’re *“gonna catch less bad stuff but also reduce the number of innocent people whose content is taken down”.*

[![](https://substackcdn.com/image/fetch/$s_!bp5O!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F57e1af79-5096-43d3-aab5-d4f0ddfe2cad_210x362.gif)](https://substackcdn.com/image/fetch/$s_!bp5O!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F57e1af79-5096-43d3-aab5-d4f0ddfe2cad_210x362.gif)

Please appreciate the gif replacing the video

You see: **fewer mistakes, more speech.**

Which brings us to the concept of **precision vs. recall**—yes, the dreaded terms that sound more like a math exam than content moderation. But stick with me.

Now, before moving forward, it’s worth **defining** these two seemingly complex terms. Borrowing from [Simon Cross](https://www.simoncross.com/p/precision-and-recall):

- *“Precision”* is a measure of the **accuracy** of a detection system.

- *“Recall”* is a measure of the **coverage** of a detection system.

  [![](https://substackcdn.com/image/fetch/$s_!defk!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb47b86d0-eac6-467c-931d-c763be5e2661_350x637.png)](https://substackcdn.com/image/fetch/$s_!defk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb47b86d0-eac6-467c-931d-c763be5e2661_350x637.png)

To make things simpler, **picture a fisherman looking for fish with golden scales.**

A **precision fisherman** casts their line carefully, catching only 20 golden fish without wasting time. They might miss a few, but every catch is golden. A **recall fisherman** throws a wide net, catching 100 fish to ensure no golden ones escape—but they have to sort through a lot of plain fish too.

**Meta wants to be the precision fisherman.** They’d rather remove 20 harmful pieces of content with near certainty than remove 100 less harmful pieces and risk taking down some innocent posts by mistake.

**Content moderation is always a trade-off between precision and recall.** A (new) decision has been taken at Meta. Only some very harmful fishes are worth it.

*(Ok, I may be spending too much time in markets when in Paris)*

[![](https://substackcdn.com/image/fetch/$s_!nTOG!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F95ee8b4d-b419-46af-9d6f-75ef19ff9adc_1024x1024.png)](https://substackcdn.com/image/fetch/$s_!nTOG!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F95ee8b4d-b419-46af-9d6f-75ef19ff9adc_1024x1024.png)

A basic fish, *created with DALL-E*

This is where we are: **Meta**, a private company, **deciding how to handle harmful content based on its own priorities.**

What does this mean for us? Simply put, **social media is a business.** The people in charge will adjust their policies to serve their interests, **even if that means relaxing standards for harmful content to maximize engagement.**

As frustrating as this might be, we have to accept these decisions for what they are. While we often view online platforms as public spaces, **they’re ultimately private, managed by entities whose goals don’t necessarily align with ours.**

Despite years of effort to create healthier online spaces—driven by companies and, to some extent, nudged by regulators—**social media platforms prioritize engagement and the time we spend there.** This often comes at the expense of some harmful discourse slipping through.

This isn’t about excusing or condemning these platforms.

It’s about recognizing the realities of how they operate and the **shifting incentives** behind them. Expecting the same level of safety and moderation as we might in public spaces? **That’s wishful thinking.**

[Leave a comment](https://artifactstech.substack.com/p/not-every-fish-is-worth-it/comments)

*(All views expressed here are my own and do not reflect any role I hold in any organisation).*

> ### Save for Later

All the AI models rolled out in the past 12 months, [here](https://huggingface.co/spaces/reach-vb/2024-ai-timeline) + a new [AI tool](https://storm.genie.stanford.edu/) to generate Wikipedia-like pages.

[What’s a fact](https://www.newyorker.com/news/the-weekend-essay/whats-a-fact-anyway), nowadays? And why we’re not [distracted](https://www.newyorker.com/magazine/2025/01/27/the-sirens-call-chris-hayes-book-review) but just focused on something else.

Content moderation: the [tough life](https://fieldofvision.org/shorts/the-moderators) of humans behind it + a [nice tool](https://huggingface.co/spaces/zentropi-ai/cope-demo) to play with your own policies.

TikTok was dead, [then no longer](https://www.platformer.news/tiktok-restored-immortal-app/). And why it has won a [different battle.](https://www.theatlantic.com/technology/archive/2025/01/tiktok-already-won/681343/)

Are you a founder? Better ask [these questions](https://review.firstround.com/25-hard-questions-every-founder-should-ask-themselves/).

[A looooot of nice visuals](https://ozo.blog/) from one of my favourite creators.

🟢 Join the **[Artifacts Community on WhatsApp](https://whatsapp.com/channel/0029Val57bZ4Y9lnnOssMQ2K)** [](https://whatsapp.com/channel/0029Val57bZ4Y9lnnOssMQ2K) to get other Save for Later content!

> ### Someone said this before

*“We need to understand what we mean by understand”* - someone I bumped across yesterday night.

> ### The Bookshelf

[![](https://substackcdn.com/image/fetch/$s_!6HNL!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3d76f378-f85a-414e-a532-1ed81a29da6f_1890x1890.png)](https://substackcdn.com/image/fetch/$s_!6HNL!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3d76f378-f85a-414e-a532-1ed81a29da6f_1890x1890.png)

So, this is not necessarily about tech. But ***“The Art of Uncertainty”*** by David Spiegelhalter a huge book on statistics, math, fate and how we perceive luck. To learn how to compute it and cope with, eventually, uncertainty.

📚 **All the books** I’ve read and recommended in Artifacts are [here.](https://airtable.com/appK7fMPX1DMkQYzL/shrRh8TgI7GtmgBxM)

> ### Nerding

[![](https://substackcdn.com/image/fetch/$s_!qHYT!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F93a77b01-7158-44dc-9801-13b4f284be9c_2025x2025.png)](https://substackcdn.com/image/fetch/$s_!qHYT!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F93a77b01-7158-44dc-9801-13b4f284be9c_2025x2025.png)

Sure, simple enough. But let’s face it—everyone’s buzzing about it. **Deepseek**, the latest AI sensation out of China. They built it on a shoestring budget with a handful of GPUs, yet somehow, it’s delivering shockingly impressive results.

> ### ☕?

If you want to know more about Artifacts, where it all started, or **just want to connect...**

[Let's grab a virtual coffee ☕](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ibxlzyU7rgnuoTgqXb_DFc19dfHmJeu1OAu17IY0_oHrtcJtvtctAJnMabirgZNx5Z5NAPGs0)
