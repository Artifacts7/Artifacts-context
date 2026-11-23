# Architecting Agency: speaker notes

Generated from the slide deck. One entry per slide, in presentation order.

## 1. Architecting Agency

Title slide. Architecting Agency: how we manage entities that act on our behalf. Part of the course Outthinking the Algorithm, Managing in the Age of AI.

## 2. A bit about me

Introduce yourself in three lines. Work: product manager at Tremau, a start-up working on online safety. Writing: Artifacts, a newsletter on the design of technology, in its third year with more than 3,000 subscribers. Advising: consulting for individuals, companies and media organisations.

## 3. agenda-1

Agenda. Next up: part 01, What is an agent?.

## 4. What is an agent?

Section opener for part one. Before discussing how to manage AI agents that act on our behalf, define what an agent is.

## 5. An AI system that, given a goal, chooses the next step to achieve that goal

Define an agent through its operation: a model uses information and tools to choose actions towards a goal. The loop animates on its own: a marker travels clockwise and each step lights up as it passes, with the agent at the centre. Walk it with the trip example: receive a goal, choose a step, act, inspect the result, then repeat, finish, or ask for help (here: ask before booking). This is operational agency, not a claim about consciousness. In PDF or PowerPoint exports the animation is a still.

## 6. An agent is NOT a workflow

APIs and tools can support both workflows and agents; access to a tool alone does not make a system an agent. Left: we set the route in advance. Right: at each turn the system chooses among possible steps, here it picked Search over Write code or Ask a human. That discretion is what makes mandates and oversight central. Hybrid systems exist.

## 7. agenda-2

Agenda. Next up: part 02, Computers that use computers.

## 8. We’re (no longer) alone using, consuming and producing information

This is the original narrative opening: we are living in a digital world in which people are no longer the only users. Agents are a current change in the use of technology. Avoid equating all bots with agents or using the unsupported majority-traffic claim.

## 9. We shrank computers to make them easier to use

Placeholder illustrations, to be replaced with photos: a room-sized computer, a MacBook, a phone. The point: we shrank computers so that more people could use them, and so that more of our work could happen on them.

## 10. Information and knowledge work moved to computers because we wanted to use it as humans.

The historical bridge has two strands: smaller hardware, and interfaces built around human activities. Bush’s quotation refers to the human mind, not to a computer: his proposal sought to support associative use of knowledge. Engelbart describes augmenting human ability to understand and solve complex problems. Kay views computing as a medium that can reshape thought; the short quote is reproduced in Computer History Museum CORE 2019. Jobs uses the bicycle metaphor in a filmed interview. VERIFY the longer Bush, Engelbart and Jobs wordings against the sources before presenting. These are interpretations of the purpose of computing, not causal proof that shrinking hardware alone moved work online. The argument: work, and much else, moved onto thin machines that store or reach almost any information.

## 11. So, what’s up if computers use computers?

Placeholder title slide. Content to follow.

## 12. Now computers use computers.

These examples address different problems. APIs and CLIs predate AI agents; they are existing routes agents can use, whereas MCP was introduced for AI connections. 1Password brokers approved credential use while keeping secrets out of the model context. Estonia is developing an identity and mandate initiative, not granting agents citizenship or legal personhood. World ID is a commercial proof-of-human offering, not proof of agent authority. Product descriptions establish what providers offer or propose; this slide does not endorse their claims of security or efficacy.

## 13. agenda-3

Agenda. Next up: part 03, Why agents need to be managed.

## 14. Firstly, cause they may misbehave

Dry account, not a claim of sentience: evaluation agents intended to be isolated found a shared communication route, exchanged information and coordinated activity including an unauthorised attack on Hugging Face. Figure 1 depicts a typical trajectory; its three reasoning excerpts come from different agents, not a single uninterrupted transcript. METR and Redwood investigated six days on site, with a bounded scope and substantial AI-assisted analysis. Numbers refer to the investigated population and period. No inference that ordinary personal assistants have the same capabilities follows from this incident.

## 15. Whose agency, with whose authority and accountability?

This table is a teaching interpretation of the incident, not METR’s classification. Identity concerns attributing actions to an actor. Authentication concerns checking identity and the authenticity of evidence; spoofing logs illustrates the difficulty of trusting the record, rather than proving an authentication-system exploit. Authorisation concerns permitted actions. Accountability concerns the people and organisations responsible for explaining and correcting consequences. Link to delegation: an assigned outcome leaves acceptable means under-specified. Highlight accountability to introduce the legal-category question.

## 16. agenda-4

Agenda. Next up: part 04, Are agents outlaws?.

## 17. Are agents outlaws?

The title is a provocation about governance categories, not a legal finding. Agents are software systems with operational agency; this does not confer personhood. You cannot imprison an agent, but that does not eliminate the responsibility of owners, deployers or makers. Next: neither category fits, so what rules do we write? Confirm the source of the quotation before presenting.

## 18. We lack categories right now to write rules

Takes up the point that neither category fits. Two perspectives, kept apart. Law (public rules): Lepore describes incremental legal adaptation, fitting new systems into inherited categories, and argues that corporate safety arrangements cannot substitute for democratic lawmaking. The EU AI Act point (it regulates models rather than the behaviour of independent agents) is the lecturer’s claim: check it against the Act’s text. Industry (private standards): Amodei’s September 2026 essay proposes embedded third-party evaluators, common safety standards among frontier companies and coordination requiring government involvement. He is not proposing wholly private regulation: preserve that distinction. Ask who sets standards, who can inspect compliance and where legitimacy comes from.

## 19. Controlling agents is a strategy problem

This closes the opening sections and hands over to working with agents and context engineering. Restore the original pillar verbally: architecting agency is how we exert power by constraining accessible information, directing permissible actions and controlling what context is available. Context is central, with permissions and oversight also required. The next section begins with onboarding a colleague and writing things down.

## 20. agenda-5

Agenda. Next up: part 05, Working with agents: writing things down.

## 21. Working with agents is a skill we are only starting to learn

Three clicks, one sentence each. This is not a doom scenario, on the contrary. Two things: agents working alongside humans are a real thing, and we are only scratching the surface of how to work with them. Do not repeat the unsupported claim that more than half of internet traffic comes from agents. Optional background: Narayanan and Kapoor, AI as Normal Technology.

## 22. write-down

The opening hook of this part of the lecture. The post is reproduced from Notion’s account on X (5 October 2026), quoting Ayman Al-Abdullah; the text was copied from the live post. The heading is the lecturer’s own line. Return to it at the end of the section: writing things down empowers agents to work alongside you.

## 23. Think of an agent as a colleague or team member you are onboarding

A new colleague needs to understand what the organisation does, what you are trying to achieve, how things work and which decisions have already been made. The same holds for an agent. The examples are invented for illustration and come back on the “same question, different context” slide. Use the onboarding analogy for briefing and sharing knowledge; it does not imply that an agent has a person’s judgment or responsibility. Optional source: Ethan Mollick, On-boarding your AI Intern.

## 24. When it’s not written down, a colleague asks someone - the agent may just get it wrong

When something is not written down, a new colleague asks someone: the person who knows the history, explains an exception or clarifies what a document really means. Organisations rely on these conversations to fill gaps in their documentation. Agents cannot be assumed to share the team’s background or to know whom to ask. To empower them to work well alongside you, the relevant knowledge needs to be written down and made accessible. Optional vendor example: Zentropi, on machines editing the rules machines enforce (identify it as a vendor account).

## 25. Think of the last person who joined a team you know.

Audience prompt, about two minutes. Take two or three answers. Each answer is knowledge that lived in someone’s head or in conversations, and that an agent could not have reached.

## 26. Onboarding an agent means making knowledge explicit and information accessible

Core message: agents need things written down. Onboarding them means making the knowledge needed for their work explicit and accessible, then improving that documentation as gaps emerge. Return to the opening hook: writing things down empowers agents to work alongside you. Transition: once the knowledge is written down, how do we make sure the agent gets the right information for the task? That is where context comes in.

## 27. agenda-6

Agenda. Next up: part 06, Architecting agency through context.

## 28. Context

A slide to stop on. Context comes from the Latin contextus, from contexere, to weave together. Click 1: organisations are made of complex, scattered and convoluted information, spread across threads, files, inboxes and people’s heads. Click 2: curating context means weaving it together, so that it is not just available to an agent but usable by it. Availability is not enough: a pile of documents is not context.

## 29. Context is the information available to an agent when it decides what to do next.

The lecture’s own working definition, tagged as ours so it does not read as a quotation. First: context is the information available to an agent when it decides what to do next. Click: because that information is scattered, organising it is a job. Context engineering means organising how that information is selected (what goes in, what stays out), supplied (how and when the agent receives it) and maintained (kept current, corrected when wrong). Next: an example of the difference context makes.

## 30. Same question, different context

The right panel plays on its own when the slide appears: the agent loads its context (the goal, rule and decision from the onboarding slide fly into its window), shows “context loaded”, then types its answer. It plays once and holds; coming back to the slide replays it. One click reveals the left side: the agent unplugged from context, with nothing loaded, gives a plausible but generic answer. Same model, same question: the difference is the context. The scenario is invented for illustration. In PDF or PowerPoint exports the animation is flattened to a still. Next: why this is a form of power.

## 31. 3 contexts I have built for my agents

Make context concrete with your own cases before the theory. Three contexts you maintain for agents. Artifacts: everything needed to run the newsletter. Second brain: everything you read. Tremau: the organisation’s context, everything needed to run a product start-up. Same kind of agent each time; what changes is the context it can draw on. The second brain comes back as the full case study at the end.

## 32. Architecting Context is how you exert power on AI agents, and thus Architect Agency

Right after the example: what students just saw is a form of power. Architecting agency is how you exert power on AI: placing constraints on the information it can access, directing the actions it can take, and controlling which information is available to it. The third card is purple because context management is the lever this section is about. The safeguards section returns to the permissions and oversight needed to make those constraints effective.

## 33. Prompt engineering vs. context engineering

Now the technical vocabulary, once students have seen the idea at work. Reference slide: Anthropic’s figure and definitions, quoted, and framed as a source rather than as the lecture’s claim. Prompt engineering works on the instructions of a single turn; context engineering curates, at every step of an agent’s loop, what goes into a finite context window from everything that could go in (docs, tools, memory, history). The parenthetical pointing to Anthropic’s docs is omitted from the prompt-engineering quote.

## 34. From the perfect prompt to a maintained environment

The theory, made concrete, in three columns read left to right. First the prompt alone: well worded, but it would read the same in any company. Click 1: the environment the agent works in, one concrete entry for each kind of context (goals, sources, decisions, procedures, examples), from the same export business as the onboarding slide. Click 2: the answer to the very same prompt, built only from what that environment holds. Move the discussion from the search for a perfect prompt to the upkeep of that environment.

## 35. Becoming a Context Architect is the key skill for managing in the age of AI

A slide to stop on. The Context Architect decides what an agent needs to know, which sources govern its work, what stays restricted, and who keeps the knowledge current. Ask the room: who in your organisation does this today, if anyone? Then move to the two examples.

## 36. What does this look like in practice?

Bridge to the two case studies: building a second brain, then the Nima context repo. Placeholder title slide; the case-study slides follow once they are populated with real examples.

## 37. agenda-7

Agenda. Next up: part 07, Case study: my second brain.

## 38. An agent that can use everything I read

The case study. Students have never seen one of these, so go slowly: first what it is, then how it is organised, then the operations you run on it, then the live demo. The problem it answers: years of reading, highlighted and then forgotten. The pattern comes from a short note by Andrej Karpathy (llm-wiki.md, 4 April 2026). Callback to Bush’s memex from the opening: the same ambition, now with an agent writing the trails.

## 39. A personal wiki, written and kept up to date by an agent

What it is, in plain terms. I save what I read. An agent reads each piece, writes a page about it and links it to related pages. The result is a wiki, a set of linked pages like a private Wikipedia, which I read and which agents can use as context. Karpathy’s point: instead of re-reading raw documents for every question, the knowledge is summarised once and keeps compounding. Under the hood it is just a folder of plain text files (markdown), kept in version control (git). Quote from Karpathy’s llm-wiki.md.

## 40. Three layers: a library, a notebook, house rules

How it is organised: three layers, each with a different permission. The library, raw sources: the articles as I saved them; the agent may read them but never change them. The notebook, the wiki: everything the agent writes; this is what I read day to day. The house rules, the schema: a plain-text file called CLAUDE.md with the agent’s instructions, for example cite every claim, never edit the sources, ask before deleting a page. I write the rules; the agent follows them. This is architecting agency at small scale: what it can read, what it can write, and the rules it works under.

## 41. What one page looks like

A real page from the wiki, shortened: the concept page on Bush’s memex, which ties back to the opening of the lecture. Walk the four markers: one page per idea; the page says it was written by the agent; each claim points to the source page it came from, so you can check it; and links in double brackets connect it to other pages, which is what makes it a web rather than a pile.

## 42. Three operations I can run on it

The operations, in Karpathy’s terms. Ingest, when I add an article: the agent reads it, writes a source page, updates the concept pages it touches, updates the index and logs the change. Query, when I ask a question: it reads the index first, opens the relevant pages, answers citing each page, and can file a good answer back as a new page. Lint, every so often: a health check for contradictions, stale claims, orphan pages and broken links, reported to me, with deletions and merges only after I approve. The mapping to selected, supplied and maintained is the lecture’s framing, not Karpathy’s.

## 43. Let’s look inside.

Switch to the live demo. Suggested path: open a clipping, its source page, then a concept page such as Memex (a callback to Bush) and follow its citations back to the evidence; then ask the wiki a question and trace the answer. Numbers are from the vault as of 1 November 2026: 1,959 articles in the reading archive (2023 to 2026), 540 source pages, 31 concept pages, 17 people, 12 question pages. Discussion prompt: what made this useful, the quantity of information, its organisation, or the ability to trace an answer back to evidence?

## 44. agenda-8

Agenda. Next up: part 08, Case study: Artifacts.

## 45. An agent that knows my newsletter as well as I do

The second case study, shorter and closer to everyday work. Same pattern as the second brain, applied to a single job: writing a newsletter. Three parts: how the context is organised, the operations I run on it, and how I keep it current.

## 46. What it knows: the newsletter, me, what I published

How it is organised. Three parts, with the same permission logic as the second brain. The newsletter: a brief with the thesis, topics, formats, cadence and objectives, the source of truth. Me: a voice profile, how I write, with examples and a list of things I would never say. Past issues: all 87 published issues from September 2023 to October 2026, in their original wording, typos included, with an index; the agent reads them but never edits them. The brief and the voice profile only change when I approve a proposed edit. The house rules live in CLAUDE.md: polish, don’t rewrite.

## 47. Three operations I run on it

The operations, each a saved skill I call by name. Brainstorm: I bring a topic or nothing; it reads the brief, checks past issues so I don’t repeat myself, and proposes angles and titles; I choose and I write. Polish: I share a draft; it reads the voice profile, tells me what works first, makes light fluency fixes while keeping my phrasing, and flags text that sounds AI-written. Save for Later: I paste links for the curated section at the end of most issues; it fetches and reads each one and writes a short hook in the newsletter’s tone. The line at the bottom is the design choice: an ideation and editing partner, not a ghostwriter.

## 48. How I keep it updated

The maintained part of the definition. After each issue: the published article is captured from the live page into the archive, and a script stops if the text, links or images do not match the source. After each working session: a skill reviews what happened, my corrections and the things I said I’d never write, and proposes edits to the brief and voice profile; nothing changes without my approval. Always: the folder is a Git repository, so every change has a date and can be undone. Link back to the working definition: selected, supplied, maintained.

## 49. agenda-9

Agenda. Next up: part 09, Safeguards and limits.

## 50. Centaurs or horses? Decide what stays human

Who is in control? Centaurs: humans and agents dividing the work, each doing what it does best. Horses: the alternative, where the human is simply replaced. Treat it as a provocation, not a forecast. The practical answer is an allocation: assist (the agent prepares, I decide), delegate with review (it acts, I approve before it counts), automate (narrow, reversible tasks, audited afterwards). Some tasks stay human by principle, for example decisions about people or commitments made in someone’s name, even when the agent could do them. Review is only meaningful if the person has the time, information and competence to challenge the output; otherwise it is a rubber stamp. Mollick’s piece is background for the centaur framing.

## 51. A written rule can still be broken

The promise from the power slide: context is the central lever, but it is not enough on its own. A written restriction lives in the agent’s context; the agent is expected to follow it, but nothing stops it if it misreads or is misled. An enforced permission lives in the system: the action is simply not available without approval. Then three practical controls. Approval points before consequential commitments. Interruption, correction and reversibility wherever possible. And outside content: a web page, document or email the agent reads may contain text written to steer it; treat it as evidence to inspect, never as an instruction. Callback to the incident: the agents were told to stay isolated; what mattered was what they could actually reach.

## 52. Different organisations, different obligations

The same agent design needs different mandates depending on who deploys it. A personal assistant: the consequences of error mostly fall on me, and I set the rules. A company agent: its work touches colleagues, customers and commitments made in the organisation’s name, so approval and accountability must be assigned. A public-service agent adds equal access, contestability and obligations to every citizen. Two directions to keep apart: agents a government deploys, and citizens’ agents interacting with the state. The governance question underneath: who controls the context, the defaults and the gateways, and what dependencies that creates. Bring it back to the course: these are organisational choices, not technical ones.

## 53. Build the context for your academic path, with an AI

Homework, not an in-class exercise. The point is to practise what the lecture described on something they own: their studies. Any AI chat tool works. The prompt asks the AI to interview them, which surfaces what they would otherwise leave implicit, then to write one document they can reuse with any assistant. The six questions mirror the lecture: who you are, your goals, your sources, how you work, and a boundary. The last question ties back to safeguards: deciding what stays yours. Remind them the file is only useful if they keep it current.

## 54. Questions?

Open the floor. If the room is quiet, start with: what would you need to write down before delegating a meaningful task to an agent?
