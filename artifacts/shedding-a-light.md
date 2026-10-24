# Shedding a light

**Subtitle:** How not to leave users in the dark (patterns)
**Date:** 2025-03-05
**URL:** https://artifactstech.substack.com/p/shedding-a-light
**Status:** Published — captured from live article on 2026-10-24
**Archive format:** Original article text; Markdown formatting conversion. Images retain source URLs; media embeds are linked, not transcribed.

---

This is how turning off data collection in ChatGPT <strong>does (not) work.</strong>

<em>(Yes what you should do if you've ChatGPT writing confidential emails)</em>

<a href="https://substackcdn.com/image/fetch/$s_!ZDlW!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4309fe54-76f5-494d-b284-9354f49cbac0_800x493.gif"><img src="https://substackcdn.com/image/fetch/$s_!ZDlW!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4309fe54-76f5-494d-b284-9354f49cbac0_800x493.gif" alt=""></a>

Or rather, you can pull it off - eventually. But <strong>it’s not exactly intuitive</strong>, nor is it easy. And that’s for a few reasons:

- first of all, it takes <strong>4 (!) clicks</strong> to get there;

- the language is - to say the least - convoluted: <em>"improve the model for everyone"</em> sounds almost noble, like some crowdsourced act of AI altruism. <strong>It subtly frames opting out as selfish</strong>, as if withholding your data means stalling progress, depriving the world of some grand technological enlightenment;

- This setting is <strong>ON by default</strong>;

- If you want out, there’s no simple “Off” button. Instead, <strong>you get a chevron ( \> ) - a tiny, easily missed nudge toward another screen.</strong> More friction, more effort, more chances to give up and leave the setting as it is.

To be clear, <strong>I’m not picking on OpenAI specifically.</strong> They do get some things right - like warning users that AI-generated answers can be wrong. A reminder that, despite its confidence, <a href="https://techcrunch.com/2023/04/03/the-great-pretender/">ChatGPT is the Great Pretender.</a>

<strong>And they’re not alone.</strong> Take Perplexity. It doesn’t exactly set a gold standard for transparency either.

<a href="https://substackcdn.com/image/fetch/$s_!eTLB!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F612a696d-78cb-4805-8dbf-2a555d8a0628_1276x724.png"><img src="https://substackcdn.com/image/fetch/$s_!eTLB!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F612a696d-78cb-4805-8dbf-2a555d8a0628_1276x724.png" alt=""></a>

But I’m not here to talk about AI or data collection. <strong>This is just the hook</strong>, the spark that led to this edition of Artifacts.

Because what really matters is what all these frustrating UX journeys have in common: a specific, insidious concept - <strong>dark patterns.</strong>

Back in 2010, UX designer <strong>Harry Brignull</strong> gave this name to something we’ve all experienced: <strong>deceptive design choices that subtly push users toward actions they might not otherwise take.</strong>

He even cataloged them, putting together a <a href="https://www.deceptive.design/hall-of-shame">hall of shame</a> full of the most <strong>shameless examples.</strong>

And he was onto something. Fast-forward to today, and <strong>“dark patterns” are recognized in tech regulation</strong>, from the EU’s Digital Services Act to California’s CCPA

------------------------------------------------------------------------

What he got right is that design matters and, importantly, shapes users’ behaviour.

<strong>Because design isn’t just about aesthetics.</strong> It’s a language - one that dictates what we notice, how we navigate, and what choices feel possible and, eventually, our agency over the (digital) world

Like words in a sentence, <strong>design structures our experience.</strong> It can clarify or obscure, guide or mislead. <strong>It can empower users</strong> - or trap them in a maze of friction, confusion, and manipulation, as dark patterns do.

In this edition of Artifacts, <strong>we’re shining a light into that darkness.</strong> And tracing it back to some core principles of design—not just digital UX, but the very fundamentals of how we interact with everyday things.

> ### The Story

At its core, <strong>design is a system of control.</strong> The real question isn’t <em>how</em> something is designed, but for <em>whom</em> —\> <em>Whose interests are being served?</em>

This isn’t just a theoretical musing - it’s baked into the very nature of how we interact with the world, both physical and digital. A door handle, a software setting, a checkout button - <strong>each one is designed to nudge us toward an intended action.</strong>

<strong>Don Norman</strong>, in <em>“The Design of Everyday Things”</em>, breaks this down into a <strong>set of principles & criteria</strong> that make objects easy to use. They’re just as relevant to websites and apps as they are to coffee makers and light switches:

- <em><strong>Affordances</strong></em> <strong>tell us what something can do.</strong> A handle invites pulling, a button suggests clicking. When design is done well, this feels obvious. When it’s not, you push when you should pull - or worse, click when you shouldn’t.

- <em><strong>Signifiers</strong></em> <strong>guide where to act.</strong> A blue underlined link looks clickable. A toggle switch with unclear states? That’s bad signification - you’re left wondering if it’s on or off.

- <em><strong>Mapping</strong></em> <strong>is how controls relate to their effects.</strong> A volume knob turns right to increase sound. But in a digital setting, mapping can be twisted: a privacy setting buried deep inside a “General” menu is mapped to be hard to find on purpose.

- <em><strong>Feedback</strong></em> <strong>lets you know something happened.</strong> Click “Delete Account,” and you should get a confirmation. If you don’t? You’re left in limbo, unsure if your action even worked.

<a href="https://substackcdn.com/image/fetch/$s_!0BML!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe02de39b-d52d-41fc-bad7-c6cd45ca4663_3431x3431.jpeg"><img src="https://substackcdn.com/image/fetch/$s_!0BML!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe02de39b-d52d-41fc-bad7-c6cd45ca4663_3431x3431.jpeg" alt="Affordance - Sketchplanations" title="Affordance - Sketchplanations"></a>

For instance

These lead to two broader design principles:

- <em><strong>Discoverability</strong></em><strong>,</strong> whether we can figure out what actions are possible and <em>where</em> and <em>how</em> to perform them;

- <em><strong>Understanding</strong></em>: How a product is supposed to be used and what do all the different controls and settings mean.

These are the criteria we can use to evaluate the design of anything - <strong>the worse it performs, the closer we get to a dark pattern</strong> or, more simply, to a design that harms users.

Now, here’s where things get interesting. If an interface lacks these qualities by accident, <strong>it’s just bad design.</strong> <em>Annoying</em>, but not sinister.

<em>But when these principles are deliberately weakened?</em> <strong>That’s when we enter the realm of dark patterns.</strong>

<a href="https://substackcdn.com/image/fetch/$s_!uUni!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F559cb115-8725-4a41-99c6-0707f226e09f_1024x1024.webp"><img src="https://substackcdn.com/image/fetch/$s_!uUni!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F559cb115-8725-4a41-99c6-0707f226e09f_1024x1024.webp" alt=""></a>

Which is, actually, well different from a <em>bad</em> design.

Dark patterns don’t make a product <em>unusable</em> - <strong>they make it work against you.</strong> They constrain options, push defaults, and make it harder to act in your own interest. <strong>They turn users into passengers rather than drivers of their own experience.</strong>

And where does that lead? <strong>To a world where control shifts from the user to the designer</strong> - not in service of usability, but of someone else’s bottom line.

------------------------------------------------------------------------

So, what? Playing around with Don Norman’s toolkit—more understanding, more discoverability—<strong>we can rethink how OpenAI’s opt-outs work.</strong>

<a href="https://substackcdn.com/image/fetch/$s_!JYAq!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F52f3ee43-d179-48c6-8e6e-404d5d60185d_2158x1358.png"><img src="https://substackcdn.com/image/fetch/$s_!JYAq!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F52f3ee43-d179-48c6-8e6e-404d5d60185d_2158x1358.png" alt=""></a>

as a reminder

Which, again, doesn’t just mean <em>fixing</em> what’s broken. <strong>It means making the system explain itself so users don’t have to reverse-engineer it.</strong>

Right now, the setting has a vague phrase paired with an <strong>On</strong> toggle. What does “improve” mean? What data is being collected? Can I see what’s shared? These are <strong>black boxes where transparency should be</strong>.

And then there’s the toggle itself - <strong>a tiny, unclear switch with no real signifier of its state.</strong> Does “On” mean I’m sharing data? Does “Off” mean I’m private? A simple binary like:

✅ <strong>“Allow my chats to be used for AI training”</strong>

🚫 <strong>“Do not use my chats for AI training”</strong>

…would be far clearer. Even better? <strong>A proper switch component</strong> - one that explicitly changes state instead of a vague, text-based indicator.

And that’s it for <em>signifiers</em> and <em>affordances:</em> <strong>we know better what to do and are better guided.</strong>

On top of this, <strong>we can reimagine the</strong> <em><strong>mapping.</strong></em>

Currently, this option sits under <strong>“Data Controls,”</strong> which sounds neutral, almost administrative. But <strong>data-sharing is a privacy decision, not just a settings toggle.</strong> It belongs under <strong>Security</strong> - or at least should be cross-referenced there. If a user has to hunt for it, they’re already at a disadvantage.

Needless to say, <strong>making it less than 4 clicks away</strong>, possibly in the home page, <strong>would make things even more understandable and usable.</strong>

------------------------------------------------------------------------

These aren’t sweeping changes or demands for a full system overhaul. They’re small but meaningful adjustments—simple ways to make the system clearer, giving users more control and, ultimately, more power over their own data.

<strong>So they’re not left in the dark.</strong>

<a href="https://artifactstech.substack.com/p/shedding-a-light/comments">Leave a comment</a>

> ### Save for Later

Silicon Valley has its new <a href="https://www.nytimes.com/2025/02/11/business/silicon-valley-christianity.html">God</a>.

Paris has been the AI capital for a few days, <a href="https://www.nytimes.com/2025/02/10/technology/ai-summit-paris-technology.html">so what?</a>

Please just say <a href="https://openreview.net/forum?id=Wc0vlQuoLb">“I don’t know”</a>, AI! And don’t tell me how and what to <a href="https://www.nytimes.com/2025/02/24/opinion/i-human.html?smid=nytcore-ios-share">write.</a> (one of the best pieces read in the past year)

Building products and <a href="https://www.youtube.com/watch?v=T3VRz18ntjQ">what not to do.</a>

What <a href="https://www.nytimes.com/interactive/2025/02/24/opinion/tiktok-users-focus-group.html?smid=nytcore-ios-share">life with TikTok</a> can end up being, after a while.

<a href="https://www.nytimes.com/interactive/2025/02/27/us/politics/doge-staff-list.html">Who’s</a> powering the DOGE?

Lol:

<a href="https://substackcdn.com/image/fetch/$s_!Q6Ka!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fad1eb33e-4a9a-4e5e-9fd5-e321b4dbc441_1200x628.jpeg"><img src="https://substackcdn.com/image/fetch/$s_!Q6Ka!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fad1eb33e-4a9a-4e5e-9fd5-e321b4dbc441_1200x628.jpeg" alt="Image" title="Image"></a>

> ### Someone said this before

<em>“Knowledge is knowing that a tomato is a fruit. Wisdom is knowing not to put it in a salad”</em>

> ### The Bookshelf

<a href="https://substackcdn.com/image/fetch/$s_!wKhN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdc85d9b9-034b-4001-8505-103dcc21c56e_1080x1080.png"><img src="https://substackcdn.com/image/fetch/$s_!wKhN!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdc85d9b9-034b-4001-8505-103dcc21c56e_1080x1080.png" alt=""></a>

I’ve gone on about this enough, but trust me - it’s a gem, whether you’re into tech or not. It changes the way you see everything in daily life. Soon enough, you’ll find yourself obsessed with door handles. :)

📚 <strong>All the books</strong> I’ve read and recommended in Artifacts are <a href="https://airtable.com/appK7fMPX1DMkQYzL/shrRh8TgI7GtmgBxM">here.</a>

> ### Nerding

<a href="https://substackcdn.com/image/fetch/$s_!adWL!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6e23dc3b-4a4e-4cf1-913f-89a3ab218d1d_1080x1080.png"><img src="https://substackcdn.com/image/fetch/$s_!adWL!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6e23dc3b-4a4e-4cf1-913f-89a3ab218d1d_1080x1080.png" alt=""></a>

If you want to post on Bluesky straight from Twitter, email anyone who fills out your form, or automate just about anything else, <strong><a href="https://zapier.com/app/home">Zapier</a></strong> is your best bet. No-code, foolproof, and perfect for dummies!

> ### ☕?

If you want to know more about Artifacts, where it all started, or <strong>just want to connect...</strong>

<a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ibxlzyU7rgnuoTgqXb_DFc19dfHmJeu1OAu17IY0_oHrtcJtvtctAJnMabirgZNx5Z5NAPGs0">Let's grab a virtual coffee ☕</a>

###
