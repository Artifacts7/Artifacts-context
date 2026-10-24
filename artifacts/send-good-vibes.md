# Send good vibes

**Subtitle:** A few words away from a decent product
**Date:** 2025-03-26
**URL:** https://artifactstech.substack.com/p/send-good-vibes
**Status:** Published — captured from live article on 2026-10-24
**Archive format:** Original article text; Markdown formatting conversion. Images retain source URLs; media embeds are linked, not transcribed.

---

Last weekend, **in just 36 minutes**, I built, developed, and deployed this [web app.](https://inthebox-newsletter.com/)

[![](https://substackcdn.com/image/fetch/$s_!1p4f!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fadb16a82-851c-4535-9fdd-8e48e870bc65_800x493.gif)](https://substackcdn.com/image/fetch/$s_!1p4f!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fadb16a82-851c-4535-9fdd-8e48e870bc65_800x493.gif)

*I need more newsletter recommendations!!*

It’s called **In The Box** - a repository of newsletters that I plan to expand into a full-fledged community. I’ll be focusing on it more in the coming weeks **(I’ll need to populate it - send tips if you have!)**

But what’s more striking isn’t the tool itself, which is fairly basic, it’s ***how*** **it came to exist.**

I built it entirely through **Lovable**, a sort of ChatGPT for web development, which quickly assembled the UI, set up a [GitHub repository](https://github.com/Artifacts7/in-the-box), and **handled deployment** with a custom domain.

[![](https://substackcdn.com/image/fetch/$s_!UxJN!,w_1456,c_limit,f_auto,q_auto:good,fl_lossy/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F25a0be33-be7a-4393-bbbf-1bea0bc7a90c_800x435.gif)](https://substackcdn.com/image/fetch/$s_!UxJN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F25a0be33-be7a-4393-bbbf-1bea0bc7a90c_800x435.gif)

*feeling like Alan Turing*

**And I didn’t write a single line of code.** I just reviewed it.

Sure, I could have manually coded the database, **but not as fast as Lovable did.**

Also, **I’m not an expert in web design, but I got exactly the vintage,** Windows XP vibe I was looking for.

------------------------------------------------------------------------

What’s all this about, anyway? Andrej Karpathy, former AI guru at Tesla and X, [calls it](https://x.com/karpathy/status/1886192184808149383) **[“vibe coding.”](https://x.com/karpathy/status/1886192184808149383)** In simple terms: **you describe what you want in natural language, and AI generates the code.** No syntax struggles. No late-night Stack Overflow deep dives.

**Just vibes.**

As he put it: ***“It’s not really coding** - I just see things, say things, run things, and copy-paste things, and it mostly works.”*

**And this isn’t theoretical.** It’s happening now. **A growing wave of tools** is making software development as simple as describing a product in plain English.

[![](https://substackcdn.com/image/fetch/$s_!-jzr!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc5fc3f7b-8e5a-48b7-9609-f0056c9ff97a_700x394.png)](https://substackcdn.com/image/fetch/$s_!-jzr!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc5fc3f7b-8e5a-48b7-9609-f0056c9ff97a_700x394.png)

*and many more actually*

This goes far beyond ChatGPT writing Python snippets for your university coursework. **These tools don’t just generate code - they build and deploy infrastructure.**

You tell them what you need, and they make it happen.

[![](https://substackcdn.com/image/fetch/$s_!ASQo!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F68f1b43c-837c-4355-ae4c-2596766c577b_1200x818.png)](https://substackcdn.com/image/fetch/$s_!ASQo!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F68f1b43c-837c-4355-ae4c-2596766c577b_1200x818.png)

The numbers say it all:

- In March 2025, **Y Combinator** reported that **25% of startups** in its Winter 2025 batch had codebases that were **95% AI-generated.**

- **Bolt** scaled to a **\$20M revenue run rate**, while **Lovable** hit **\$10M** just two months after monetizing.

- And according to **Amjad Masad, CEO of Replit** (another vibe-coding tool), *“75% of Replit customers never write a single line of code.”*

------------------------------------------------------------------------

Vibe-coding is part of what [Pete Sena](https://uxdesign.cc/cracking-the-code-of-vibe-coding-124b9288e551) called the ***"Great Democratization Cycle".*** We’ve seen it in photography as it evolved from darkrooms to digital cameras, which eliminated film processing, to smartphones and Instagram filters, making everyone a high-end “photographer.”

**Now, AI is lowering the barriers to coding.** If you have an idea, you’re just a few prompts away from a working product.

No, this doesn’t mean you can launch a billion-dollar startup while sipping coffee. **But you can spin up an MVP in a few hours** - something that once took weeks or months.

From a technical, economic, and product perspective, this shift is fascinating. **And worth digging into.**

In this edition of **Artifacts**, we’ll break down: the tech that makes vibe coding possible, the ripple effects across the software development chain, what this (may) mean for the future of product - and who gets to build it.

> ### **The Story**

Before moving any forward, **good to understand a bit of how these systems work.**

**Imagine you have an idea for an app - a simple task manager with login functionality.** Instead of coding it yourself, you describe what you want in plain language. That’s where the system takes over, breaking your request down into components and assembling them into a working application.

[![](https://substackcdn.com/image/fetch/$s_!_Vqe!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F39146d4a-51a5-4b69-b532-ec21e8bf5c61_1536x779.png)](https://substackcdn.com/image/fetch/$s_!_Vqe!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F39146d4a-51a5-4b69-b532-ec21e8bf5c61_1536x779.png)

*pls nerds don’t kill me*

**1. Understanding Your Request: The Role of the LLM**

The Large Language Model (LLM) is the brain of the operation. It takes your prompt - *“Build a task manager with login support”* - and translates it into structured code. **It understands that you’ll need a front-end UI, a backend to handle tasks, and user authentication.** More than just generating code, the LLM anticipates what’s needed, ensuring that each piece fits together logically. If you later say, *“Add dark mode”* or *“Make it mobile-friendly”*, the LLM adjusts accordingly, refining the app iteratively.

**2. Bringing It to Life: The Agent Runtime**

The LLM doesn’t work alone. The Agent Runtime acts as an orchestrator, making sure everything generated by the LLM is functional, cohesive, and follows best practices. **It’s like a project manager, coordinating tasks, managing dependencies, and integrating external tools when necessary.** If your app needs a workflow to send reminder emails, the Agent Runtime ensures the right services are wired in properly.

**3. Your Control Panel: The UI**

You interact with this whole process through a user-friendly interface. Instead of writing complex commands, you type in your idea, and the UI streams responses in real time. **As the LLM generates code, the UI displays it dynamically, showing a preview of your app as it takes shape.** Want to make changes? Just describe them, and the system updates the app accordingly.

**4. Expanding Capabilities: Third-Party Integrations**

Some app features require specialized services. **Rather than reinventing the wheel, the system pulls in third-party components based on what your app needs:** *Resend* handles email notifications, *Supabase* provides a backend database and authentication, *Clerk* manages user identity.

**5. Testing on the Fly: Execution Environments**

Before you deploy your app, you’ll want to see it in action. This is where execution environments come in. With **WebContainers**, your Node.js app runs directly in the browser - no local setup needed.

------------------------------------------------------------------------

**All of this comes with a set of potential implications** I’ve been parsing, gathering, and brainstorming.

Vibe coding could split ***developers*** into two camps:

- Those who **understand the foundations** and can wield AI effectively.

- Those who **rely entirely on AI**, oblivious to what’s happening under the hood.

**Less coding, more reviewing.** Instead of writing code, engineers will vet, optimize, and integrate AI-generated solutions. (especially as code generated by these tools seems to be a bit dirty as of yet)

[![](https://substackcdn.com/image/fetch/$s_!bTHS!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F533e4d58-4157-4be7-8ada-3ea6eea71df8_720x666.png)](https://substackcdn.com/image/fetch/$s_!bTHS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F533e4d58-4157-4be7-8ada-3ea6eea71df8_720x666.png)

*a lot of memes today*

***For product managers***, it’s an opportunity - and a reckoning. Non-technical folks would get a seat at the table, but they couldn’t hide behind wireframes and docs. Prototypes are just clicks away. No excuses.

***As for products?*** Interfaces could be [churned out by LLMs](https://medium.com/paychex-ux/interfaces-are-disappearing-are-you-ready-fffc298595b7), built on existing templates and past designs. Good for efficiency. Bad for originality. We may expect sameness.

***And coding itself?*** More disposable, less reusable. Open-source libraries and Stack Overflow might fade as AI generates fresh code on demand. Already, starting a new project is easier than editing an old one - because context is hard. If this trend holds, things could get weird.

------------------------------------------------------------------------

This raises big questions. Pete Sena put it well: ***What happens when makers are separated from their materials?***

Would we celebrate a world where painters never touch paint? Where sculptors never feel clay? Where chefs never taste their ingredients?

**It’s not just about shipping software.** It’s about understanding systems deeply - so when things break (and they will), you can actually fix them.

One CTO warned that AI reliance leads to “hidden complexities” - quick fixes that spiral into chaos at scale. It’s also about creating elegant, maintainable solutions that last. **Good software isn’t just functional; it endures.**

**The job market could also shift.**

**AI will take over repetitive coding** - web development, scripting, testing, deployment - shrinking the need for junior developers who typically start with those tasks. At the same time, companies will prioritize mid-to-senior engineers who understand AI-assisted workflows and system architecture.

Entry-level jobs won’t disappear, **but they’ll get harder to land.**

Instead of cutting their teeth on grunt work, **newcomers will be expected to think strategically from day one.**

[![](https://substackcdn.com/image/fetch/$s_!Lj1E!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F407ea2b5-4a83-41a9-a9ac-bdde83297181_1536x1024.png)](https://substackcdn.com/image/fetch/$s_!Lj1E!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F407ea2b5-4a83-41a9-a9ac-bdde83297181_1536x1024.png)

One thing, however, will stay the same - maybe even grow in importance: **what drives new products and the ideas behind them.**

More than ever, **the real skill will be identifying concrete problems and crafting solid solutions (and ideas of products) to tackle them.**

If vibe coding takes off, the technical barriers between idea and execution will shrink. Moving from concept to a working product will be faster, but **the hardest part - figuring out what’s worth building - will still be the priority.**

[Leave a comment](https://artifactstech.substack.com/p/send-good-vibes/comments)

> ### Save for Later

**Decentralisation** and [the good it comes with](https://www.noemamag.com/the-great-decentralization/) + some very vey nice slides on [rebuilding the Internet.](https://docs.google.com/presentation/d/1_Q7ywvZQ9fOhgVmF78MHfvOy51Kc-9d7A4tWUvFg-OY/edit#slide=id.g33500eac627_0_159)

**Wikipedia** is making some [enemies](https://www.newyorker.com/news/the-lede/elon-musk-also-has-a-problem-with-wikipedia).

What the far right thinks about [content moderation in the EU](https://www.techpolicy.press/the-far-rights-war-on-content-moderation-comes-to-europe/) + some very very interesting guidelines on **(re)designing products** from the Commission.

**AI coding assistant** are also [lazy](https://www.wired.com/story/ai-coding-assistant-refused-to-write-code-suggested-user-learn-himself/?bxid=6356a0ac954628036104e708&cndid=71263277&hasha=a178aed566dad9b9207d7512a3761040&hashc=0d97a5714def290b2c11deb8040d3e6327437efa2dafbf41a6dda10ecac01028&esrc=AIHub-regGate), yet [here’s](https://simonwillison.net/2025/Mar/11/using-llms-for-code/) how to use them properly.

Technology is increasingly **[boring](https://www.youtube.com/watch?v=P-TANCVoHlc)**?

Learning **languages**? [Nah](https://www.bloomberg.com/news/articles/2025-03-13/apple-plans-ios-19-feature-that-lets-airpods-live-translate-conversations?sref=CrGXSfHu)

Such a **cool adv** from Perplexity:

[\[Embedded media — view original\]](https://www.youtube-nocookie.com/embed/4UKM_yvTexI?rel=0&autoplay=0&showinfo=0&enablejsapi=0)

> ### Someone said this before

*“The only failure in your twenties is inaction. The rest is trial and error.”*

> ### The Bookshelf

[![](https://substackcdn.com/image/fetch/$s_!Z_XF!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed577bef-ebe8-4a36-a4ca-20e0028a0375_1080x1080.png)](https://substackcdn.com/image/fetch/$s_!Z_XF!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed577bef-ebe8-4a36-a4ca-20e0028a0375_1080x1080.png)

Speaking of products and low latency, “***The Lean Product Playbook”*** by Dan Olsen is a solid choice - packed with actionable insights and genuinely inspiring moments. It’s highly practical - maybe even too practical.

📚 **All the books** I’ve read and recommended in Artifacts are [here.](https://airtable.com/appK7fMPX1DMkQYzL/shrRh8TgI7GtmgBxM)

> ### Nerding

[![](https://substackcdn.com/image/fetch/$s_!2jfY!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d2f12a4-e48d-44b8-927c-1fb914e00953_1080x1080.png)](https://substackcdn.com/image/fetch/$s_!2jfY!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d2f12a4-e48d-44b8-927c-1fb914e00953_1080x1080.png)

To move fast with all those time consuming tasks like **merging PDFs, cutting videos,** etc. all in one suite. [Try out 123apps.](https://123apps.com/)

> ### ☕?

If you want to know more about Artifacts, where it all started, or **just want to connect...**

[Let's grab a virtual coffee ☕](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ibxlzyU7rgnuoTgqXb_DFc19dfHmJeu1OAu17IY0_oHrtcJtvtctAJnMabirgZNx5Z5NAPGs0)
