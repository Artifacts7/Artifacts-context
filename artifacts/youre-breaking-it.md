# You're breaking it

**Subtitle:** How Iran's block of the Internet contradicts what the Internet is supposed to be
**Date:** 2026-01-28
**URL:** https://artifactstech.substack.com/p/youre-breaking-it
**Status:** Published — captured from live article on 2026-10-24
**Archive format:** Original article text; Markdown formatting conversion. Images retain source URLs; media embeds are linked, not transcribed.

---

You may have heard of the tough situation that Iran is going through right now. <strong>And probably at one point you may have stopped seeing content coming from there, at least on social media.</strong>

That’s why, far from Artifacts diving into geopolitics, the Iran situation has a technological angle to it: <strong>the Internet has been shut down.</strong>

Indeed, as protests over economic collapse and political repression swept through all, <strong>Iran’s authorities triggered one of the most severe internet blackouts in the country’s history.</strong>

<a href="https://substackcdn.com/image/fetch/$s_!SMmI!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1c77f25c-c5a4-481a-acec-9b1655afe8f9_1280x720.jpeg"><img src="https://substackcdn.com/image/fetch/$s_!SMmI!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1c77f25c-c5a4-481a-acec-9b1655afe8f9_1280x720.jpeg" alt="Graph from NetBlocks showing network connectivity in Iran from January 2, 2026 to January 26, 2026. The y-axis represents normalized connectivity, ranging from 0% to 100%, and the x-axis represents the dates. The green line representing Iran&#x27;s observable internet connectivity, with a sharp drop on the evening of January 8 from high levels to near zero and only a short-lasting recovery on the morning of January 24. The drop in connectivity aligns with an internet shutdown imposed by authorities during protests across the nation. The minimum and current connectivity levels are indicated as 1% and 1%, respectively. The chart has a dark background with a red horizontal arrow labeled &#x27;SHUTDOWN&#x27; indicating the period of disruption, which is ongoing." title="Graph from NetBlocks showing network connectivity in Iran from January 2, 2026 to January 26, 2026. The y-axis represents normalized connectivity, ranging from 0% to 100%, and the x-axis represents the dates. The green line representing Iran&#x27;s observable internet connectivity, with a sharp drop on the evening of January 8 from high levels to near zero and only a short-lasting recovery on the morning of January 24. The drop in connectivity aligns with an internet shutdown imposed by authorities during protests across the nation. The minimum and current connectivity levels are indicated as 1% and 1%, respectively. The chart has a dark background with a red horizontal arrow labeled &#x27;SHUTDOWN&#x27; indicating the period of disruption, which is ongoing."></a>

current status of connectivity in Iran

Starting around January 8, <strong>mobile data, broadband, and even text messaging were largely cut off,</strong> plunging a nation of more than 90 million into digital silence. <strong>Connectivity dropped to near zero,</strong> isolating families, crippling small businesses that depended on online platforms, and leaving daily life — from banking to emergency communication — fractured and precarious.

At the same time, <strong>independent reporting and social media feeds went dark,</strong> making it harder to verify what was happening on the ground and <strong>easier for the state to control the narrative of the crackdown.</strong>

What might have seemed like technical disruption is, in fact, <strong>a deliberate effort to stifle communication, suppress dissent, and limit the outside world’s view of events unfolding inside Iran.</strong>

<strong>This is not the first time Iran has pulled the plug.</strong> Over the past decade, nationwide and regional internet shutdowns have become a recurring response to moments of protest and political tension.

This blackout combines a central “kill switch” in the national backbone with multiple layers of filtering, routing changes, and physical network controls.

All international traffic runs through a small number of state-controlled providers — MCCI, Irancell, and TCI — <strong>which connect to the outside world via the government backbone.</strong>

Around the evening of January 8, routing announcements from these networks collapsed by 90–95% within minutes, as they withdrew most of their IP prefixes from the global Border Gateway Protocol (BGP) tables — the internet’s core routing system, <strong>which works like a postal service to find the best paths for data between large networks (Autonomous Systems) worldwide.</strong>

In practical terms, <strong>this meant that most URLs in Iran effectively vanished from the global map</strong>: external users could no longer reach them, while only a few tightly controlled routes remained for select institutions.

To picture it, <strong>imagine Iran’s network as a vast city:</strong> the government closes the bridges and highways to the outside world, blocks most inner streets, and leaves only a few heavily policed lanes open. <strong>The map still exists, but almost nobody can move, and the flow of information collapses.</strong>

Additional measures quickly reinforced the shutdown: <strong>VPNs, messaging apps, and streaming services were largely disabled at the border gateways,</strong> while mobile base stations were switched off, landlines disrupted, <strong>and SIM cards of activists or journalists were deactivated or throttled.</strong>

For users, this meant that <strong>most attempts to connect, communicate, or share content simply failed,</strong> leaving only a very limited, controlled connection within the country.

<a href="https://substackcdn.com/image/fetch/$s_!Cwr6!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d144d55-6c3b-4e6b-95d9-a5c4f081b85a_1024x1024.png"><img src="https://substackcdn.com/image/fetch/$s_!Cwr6!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d144d55-6c3b-4e6b-95d9-a5c4f081b85a_1024x1024.png" alt=""></a>

and so they pulled the plug

Yet, as you know, <strong>the architecture of the internet was just never meant to work this way and be controlled by a state.</strong>

By design, <strong>the internet infrastructure should rest on principles of decentralization, universality, and end-to-end connectivity:</strong> networks coordinate via protocols, not territorial authority, allowing anyone to send or receive data without relying on a central controlling entity.

<strong>States were never intended to sit at the core of this system, dictating who can or cannot communicate.</strong>

<strong>When a government shuts down large swaths of connectivity, it violates these principles,</strong> imposing control that the network’s architecture explicitly discourages.

This gap between the internet’s intended design and the way it is governed is not just a technical quirk, but <strong>a derailing of governance.</strong>

It is helpful to take <strong>two references:</strong>

- <a href="https://www.unesco.org/en/internet-universality-indicators">UNESCO’s Internet Universality framework</a> stresses that the <strong>internet should be open, accessible, and universally available:</strong> connectivity is not a privilege, but a precondition for participation in digital life.

- But also the <a href="https://contractfortheweb.org/principles/principle-2-keep-all-of-the-internet-available-all-of-the-time/">2nd principle of the Contract for the Web</a> is to <em><strong>‘Keep all of the internet available, all of the time’</strong></em>. Tim Berners Lee, that promoted it, in his latest book explicitly calls out Iran and the blocks they’ve been applying.

What is happening in Iran directly contradicts these principles. By shutting down the internet, <strong>the state is asserting control over the infrastructure itself.</strong>

<strong>It is appropriating a space that was designed to remain open and shared,</strong> turning connectivity into something conditional and revocable.

<strong>This is very different from digital sovereignty as it is often discussed.</strong> Legitimate forms of digital sovereignty aim to shape how the internet is used: enforcing laws, protecting users from illegal content, promoting local ecosystems, or reducing strategic dependencies - something that Europes is experincing a lot.

None of this requires breaking the network: <strong>Iran’s shutdown crosses a different threshold.</strong>

When a government can turn the internet on and off, <strong>the very idea of governance through code and protocol collapses</strong>. The internet stops being coordinated through shared standards and technical consensus, <strong>and becomes subject to territorial command.</strong>

<strong>This is a deformation of digital sovereignty that directly contradicts the internet’s original vision.</strong> It stops treating the infrastructure of the Internet as a common foundation, and it rather <strong>turns it in a lever of power.</strong>

Applied repeatedly, <strong>this logic breaks the Internet.</strong>

And it is how the <a href="https://en.wikipedia.org/wiki/Splinternet#:~:text=The%20splinternet%20(also%20referred%20to,religion%2C%20and%20divergent%20national%20interests.">Splinternet</a> emerges: <strong>what was meant to be a single network is broken down,</strong> with connectivity becoming conditional, access suddenly political, and interoperability erodes.

<a href="https://substackcdn.com/image/fetch/$s_!_z1Z!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff1ce49df-0e21-40f0-a284-7becc6ef5008_1440x960.jpeg"><img src="https://substackcdn.com/image/fetch/$s_!_z1Z!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff1ce49df-0e21-40f0-a284-7becc6ef5008_1440x960.jpeg" alt=""></a>

this was a nice visual I found while reading about the splinternet

And so <strong>the internet shifts from a universal space for communication and innovation into a patchwork of controlled networks.</strong>

And with that shift, something else may be lost as well: the internet’s capacity to function as a space of openness and - at times - <strong>as a space of resistance to political oppression.</strong>

<a href="https://artifactstech.substack.com/p/youre-breaking-it/comments">Leave a comment</a>

> ### <strong>A few words on the Political Tech Summit</strong>

<a href="https://artifactstech.substack.com/p/in-between">As announced in the interview with its founder,</a> <strong>Artifacts took part in the Political Tech Summit in Berlin.</strong>

<a href="https://substackcdn.com/image/fetch/$s_!MCzB!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F37821884-8676-4f4d-a28c-423197f5dcdb_707x804.jpeg"><img src="https://substackcdn.com/image/fetch/$s_!MCzB!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F37821884-8676-4f4d-a28c-423197f5dcdb_707x804.jpeg" alt=""></a>

And it really delivered. It was a great event, with many thoughtful people speaking and attending.

My three main takeaways:

- <strong>The market for tools that improve engagement between politics and citizens is flourishing.</strong> There are lots of interesting ideas and concepts, and already some strong products, like <a href="https://fr.qomon.com/">Qomon</a>.

- <strong>Events where researchers speak are simply better:</strong> less fluff, more solid reasoning grounded in data, with brilliant minds like <a href="https://www.favstats.eu/">Dr. Votta</a> on stage.

- <strong>People outside the industry are increasingly interested in what good technology can unlock for politics</strong> — and that’s very encouraging.

> ### <strong>Save for Later</strong>

If AI gets <a href="https://www.theverge.com/ai-artificial-intelligence/865185/anthropic-claude-constitution-soul-doc?ueid=dca445e23e26114858a48ad35040e287&amp;bxid=64dfbb0779ab3b7bf90f75a0">a constitution</a>, by Anthropic. But also <a href="https://www.theverge.com/news/863428/openai-chatgpt-shopping-ads-test">if it gets advertising</a> and what companies are trying to do to <a href="https://www.theverge.com/ai-artificial-intelligence/860989/apple-google-gemini-siri-ai-deal-what-it-means?ueid=96a55b54e6d43d3670b25de0961b221b&amp;bxid=69468ecb72da97d98604c10f">get some margins</a>

What if computers use computers <a href="https://www.theverge.com/ai-artificial-intelligence/860730/anthropic-cowork-feature-ai-agents-claude-code">better than we do?</a> More to come on this…

It was Wikipedia’s Birthday! <a href="https://www.theverge.com/news/861935/wikipedia-25th-anniversary-2026">What really lies behind</a> one of the most beautiful places of the Internet. But also <a href="https://www.nytimes.com/2026/01/13/world/asia/myanmar-scam-center.html?campaign_id=319&amp;emc=edit_col_20260113&amp;instance_id=169206&amp;nl=in-short&amp;regi_id=196469256&amp;segment_id=213586&amp;user_id=a178aed566dad9b9207d7512a3761040">the terrifying truth behind organised scams and spams organisation.</a>

How we now <a href="https://jurgengravestein.substack.com/p/how-the-sparkle-icon-became-the-universal?publication_id=1153665&amp;post_id=184316453&amp;isFreemail=true&amp;r=2d3svm&amp;triedRedirect=true">all see the same design icons everywhere.</a>

On the X case, <a href="https://www.theverge.com/news/859715/x-grok-ai-deepfakes">UK and Europe are investigating.</a> But <a href="https://www.theverge.com/policy/859902/apple-google-run-by-cowards?ueid=96a55b54e6d43d3670b25de0961b221b">maybe app stores could’ve been bolder?</a>

Finally, social media promised freedom, but <a href="https://www.noemamag.com/the-last-days-of-social-media/">we’re actually exhausted.</a> But maybe we can build better ones? <a href="https://open.spotify.com/episode/5vAXzvxUKvYMz3u7iJ8OAQ?si=qPtokZyjSC-nvOi8PUCg4A">A 1 year experiment.</a>

> ### <strong>The Bookshelf</strong>

<a href="https://substackcdn.com/image/fetch/$s_!f-Zf!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc74045f7-221c-48a9-87ad-e8af76f2b8c2_1080x1080.png"><img src="https://substackcdn.com/image/fetch/$s_!f-Zf!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc74045f7-221c-48a9-87ad-e8af76f2b8c2_1080x1080.png" alt=""></a>

<em><strong>‘Human Compatible’</strong></em> is a great socio-technical book on AI alignment. It’s good for people into the matter but also for those who are approaching it. Good to read if you’ve questions on what it really means to govern AI.

📚 <strong>All the books</strong> I’ve read and recommended in Artifacts are <a href="https://airtable.com/appK7fMPX1DMkQYzL/shrRh8TgI7GtmgBxM">here.</a>

> ### <strong>Nerding</strong>

<a href="https://substackcdn.com/image/fetch/$s_!GcsS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff6bf5458-77cf-4c6d-8e5c-5a321b6ffa70_1080x1080.png"><img src="https://substackcdn.com/image/fetch/$s_!GcsS!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff6bf5458-77cf-4c6d-8e5c-5a321b6ffa70_1080x1080.png" alt=""></a>

Ok, this is for real nerds. <strong><a href="https://bugzmanov.github.io/bookokrat/index.html">Bookokrat</a></strong> is to <strong>read books on the terminal of your computer</strong>, so that then you can easily interact with them through tools like Claude Code. It does makes sense if you’re into research and need to ingest lot of information.

> ### <strong>☕?</strong>

If you want to know more about Artifacts, where it all started, or just want to connect...

<a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ibxlzyU7rgnuoTgqXb_DFc19dfHmJeu1OAu17IY0_oHrtcJtvtctAJnMabirgZNx5Z5NAPGs0">Let's grab a virtual coffee ☕</a>
