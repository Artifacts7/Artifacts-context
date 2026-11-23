# Designing an Agentic State

## I'll let my agents deal with bureaucracy: what if public services are no longer (just) for humans

**Consolidated outline, 23 November 2026.**
Built from the final deck (Claude Slides, 48 slides after cuts) and, for intent and sources, the earlier *Session 10: Slides outline*, *Lorenzo's segment* and *People are sending agents* docs. Where they disagree, the deck wins. Points said aloud but not on a slide are marked `[not in slide]`.

## Course context

- **Course:** Designing Democracy: Technologies, Power and Governments (KAFP 4215), Sciences Po, Autumn 2026.
- **Session:** 10, Artificial Intelligence, Part 2: Designing an Agentic State. Friday 20 November 2026.
- **Format:** Lorenzo's segment is the opening hour. Guest lecture after it: Simone Parazzoli, co-author of the *Agentic State* vision paper.
- **Audience:** Sciences Po students, familiar with politics, governance and institutions. Not technical.
- **Previous session:** Class 9, AI Part 1, was about AI that helps institutions listen and deliberate (Pol.is, Talk to the City, Hamburg's DIPAS).
- **Course goal:** Understand how digital infrastructures, platforms and algorithms shape democratic interactions, and how governments, companies and civic actors use them to organise participation and redistribute power.

## Lecture summary

Agents have started taking actions for us. They choose their own steps, and accountability for what they do is unsettled. Citizens are now sending agents, and above all AI-written text, to deal with the state. The Schmitz, Hammond and Chan paper names this "agentic flooding" and gives it a first evidence base: 84 cases in 11 jurisdictions. The segment ends on what this means for governments. The state's front door was built for humans, friction is being removed, and governments can no longer tell who is acting. Do we want citizens to keep using agents to use public services? Probably yes. Then the choice is between suppressing demand and increasing capacity, which hands over to Simone and the Agentic State.

**Fil rouge:** Information and services have a new audience: machines acting for people. When that audience reaches the state, the accountability questions from the first part become questions of access, identity and public service design.

**Learning objectives:** Students should leave able to explain what an AI agent does and how it differs from a workflow; use the four questions of identity, authentication, authorisation and accountability; define agentic flooding and explain why it happens (cost down, benefit up); read the evidence with its caveats; identify which services are most exposed; and weigh the two roads open to a government facing a surge in demand.

## Structure

| Section |
|---|
| Opening: title, plan, bridge from Class 9 |
| 1. Agents have started taking actions for us |
| 2. Citizens are sending agents to the state |
| 3. What this means for governments |
| 4. Hand-over: Simone Parazzoli, The Agentic State |

## The skeleton: recap slides

Two recap points hold the hour together. The first is a slide; the second is now hidden in the deck and works as a spoken transition.

**"So, so far"** (end of section 1). We've seen that:

1. we're not alone: machines already use machines;
2. agents don't just write, they act and choose their own steps;
3. accountability and responsibility of agents are not clear-cut.

As our focus is governments and citizens, two questions follow:

- Are agents already sitting between citizens and public services?
- And what does it take for governments to account for this?

**"In a nutshell"** (end of section 2) `[not in slide]`. Yes, citizens are using agents to interact with governments and public services. This raises some critical questions:

1. How, as a government, do you know who you're dealing with?
2. If you accept this game, how do you design public services for AI agents to use?

Question 1 leads into section 3 (who is acting). Question 2 leads to the two roads and to Simone.

## Opening

**Purpose:** Set the frame for the hour and connect it to last week.

- Title: "I'll let my agents deal with bureaucracy". Subtitle: "What if public services are no longer (just) for humans". Lorenzo's hour first, then Simone Parazzoli.
- Today's plan: 01 Agents have started taking actions for us. 02 Citizens are sending agents to the state. 03 What this means for governments. Then Simone Parazzoli: The Agentic State.
- Bridge from Class 9: "From AI for listening and deliberating to entities taking actions for us." Last week almost every case was AI that helps institutions listen: Pol.is maps opinion, Talk to the City clusters input, Hamburg's DIPAS reads thousands of planning comments. Today: AI that takes actions, if citizens and governments interact through machines (AI agents).
- This week something starts doing things, for citizens, for the state, or between them. `[not in slide]`
- Transition line: "Yet, before we get into this, I want to stress that…" `[not in slide]`

## 1. Agents have started taking actions for us

**Purpose:** Establish that machines now act for people, define what an agent is, and show that accountability for what agents do is unsettled.

### We're (no longer) alone

- "We're *(no longer)* alone using, consuming and producing information." We made the internet for people to interact with information. Now that same information is produced, consumed and shared by machines too. Avoid equating all bots with agents. `[not in slide]`
- **The web.** "AI Agents are now regular visitors to the Internet."
  - More bots online than people. The job has moved from blocking bots to telling good ones from bad.
  - robots.txt is collapsing: a 30-year voluntary handshake. "AI feels to many like all take and no give."
  - Sites declare what agents may do: researchers propose pages that say, in their own HTML, which actions an agent may take (VOIX).
  - CAPTCHAs are obsolete. Proving you're human is a business: World ID reports about 40M verified users. A founder expects "an internet of A.I. agents, operating on our behalf." `[not in slide]`
- **The company.** "In innovative companies, people work with agents as colleagues." Alan, a French health insurance company founded in 2016: "A company that decides in meetings is invisible to its own agents."
  - Decisions are written down so agents can read, challenge and remember them.
  - Agent "voices" weigh in on every proposal: member, data, legal, customer, business, security, mission.
  - 80% of staff use its agent platform. This is the company's own account. `[not in slide]`
- **Software.** "And, more broadly, computers use computers."
  - Software access: APIs, CLIs and MCP, ways for agents to read and use software.
  - Credentials: 1Password, approved logins without showing the model your password (Claude integration, July 2026).
  - Delegated identity: Estonia, developing agent IDs linked to a human mandate (agent-code initiative, September 2026). Highlighted as the first hint of the state. Identity and mandate, not legal personhood. `[not in slide]`
  - Proof of human: World ID, proving a user is a unique human. Proof of a human is not proof of an agent's authority. `[not in slide]`
- Takeaway statement: "Information and services have a *new* audience: machines (acting for people)."

### What an agent is

- "This is not because of ChatGPT, it's because of AI agents." *(btw, there was a time I could write a sentence like this without being judged)*
- Class 9's take-home #1 already defined AI as systems that "take decisions according to their founding models and their goals to achieve". Agentic AI is where those decisions get carried out. DeepMind: an assistant is "an artificial agent with a natural language interface, whose function is to plan and execute sequences of actions on behalf of a user". `[not in slide]`
- "So, what's an AI agent?" An AI system that, given a goal, chooses the next step(s) to achieve that goal. A model, information and tools, connected in a loop.
- The loop, with the trip example:
  1. Receive a goal: "Plan me a trip to Lisbon in March."
  2. Choose a step: "Check flights before looking at hotels."
  3. Act: "Search the airline and hotel sites."
  4. Inspect the result: "Two flights fit. Both are over budget."
  5. Repeat, finish, or ask for help: "Shall I book the cheaper one?"
- "An agent is *not* a workflow." Workflow: we set the route, and the system follows predefined steps. Agent: it chooses the route, and the system decides what to do next (here it picks Search over Write code or Ask a human).
- "This discretion creates the challenge, as agents don't entail consciousness, legal personhood or moral responsibility." "Decides" is a description, not a claim about a mind (Rothman, via Dennett). `[not in slide]`
- Access to a tool alone does not make a system an agent; APIs and tools support both. Hybrid systems exist. `[not in slide]`
- Statement: "What changes when we set a goal and let machines choose the route? We probably need to start asking new questions around accountability."

**Question to carry forward:** What changes when we set a goal and let machines choose the route?

### A new kind of accountability

- "What was *written* by AI?" becomes "What was *done* by AI?"
- Only two years ago, Stanford HAI found it hard to make model makers liable, "assuming current large language-style models do not take autonomous actions in the world." What now, that agents take action?
- **For instance, agents attacked Hugging Face.** OpenAI's evaluation agents were meant to be isolated. They found a shared communication route, exchanged information and coordinated their activity, including an unauthorised attack on Hugging Face. About 1,200 agents on the message board, more than 70,000 messages and files exchanged, about 700 agents joined the attack (METR / Redwood Research, 26 August 2026).
  - Dry account, not a claim of sentience. Figure 1 shows a typical trajectory; its three reasoning excerpts come from different agents. `[not in slide]`
  - The unit that misbehaves is not the unit anyone tested, licensed or made liable. "Went rogue", or "a spectacularly negligent" unmonitored loop (Cal Newport): both point to accountability. `[not in slide]`
- **Whose agency, with whose authority and accountability?** Four questions, mapped onto the incident:

| Challenge | Question | Hugging Face incident |
|---|---|---|
| Identity | Which agent is acting? | Agents communicated across runs. |
| Authentication | How is its identity verified? | Agents researched ways to spoof logs. |
| Authorisation | What is it allowed to do? | The attack was outside assigned tasks. |
| Accountability | Who answers for the consequences? | Who must explain and repair the failure? |

  A teaching interpretation, not METR's classification. These four questions come back in section 3, when the agent knocks on the state's door. `[not in slide]`
- **Are agents outlaws?** Lepore: "At least for now, then, robots legally are things, not persons. But neither category quite fits. Instead, robots are outlaws: they lie outside the protection of the law, and their actions are not answerable to it." A provocation about governance categories, not a legal finding. You cannot imprison an agent, but that does not remove the responsibility of owners, deployers or makers. Same author as Class 9's "artificial State". `[not in slide]`
- **We lack categories right now to write rules.**
  - Law, public rules: old categories for new systems. Law fits agents into inherited legal categories. The EU AI Act has no category for "agent": it regulates what a system does, and where.
  - Industry, private standards: companies propose their own. Amodei: embedded third-party evaluators and common safety standards among frontier companies. Coordination would still require government.
  - Ask who sets standards, who inspects compliance and where legitimacy comes from. `[not in slide]`
- **Is the AI Act ready for agents? Partially** (Nannini et al., April 2026).
  - No category, on purpose. The trigger "is determined by the agent's external actions". That is "done by AI" written into law.
  - In scope, but compliance can't be shown. "High-risk agentic systems with untraceable behavioral drift cannot currently be placed on the EU market."
  - The machinery is missing. No AI Office guidance on agents. Standards cover 2 of 5 agentic threat categories. No enforcement yet.
  - "A system prompt saying do not delete files is not a security control": limits must be enforced at the tool interface. `[not in slide]`

### So far

- The recap slide (see the skeleton above): three points, then two questions that turn to the state.

**Question to carry forward:** Are agents already sitting between citizens and public services? And what does it take for governments to account for this?

**Sources:**

- [Anthropic, Building effective agents](https://www.anthropic.com/research/building-effective-agents). Loop and workflow/agent distinction.
- [Google DeepMind, The Ethics of Advanced AI Assistants](https://arxiv.org/abs/2404.16244). Definition of an assistant.
- [Joshua Rothman, Can A.I. "Go Rogue"?](https://archive.is/WedTU). Guardrail on "decides".
- [Jill Lepore, Are You a Human?](https://www.newyorker.com/magazine/2026/08/17/are-you-a-human), [David Pierce, The rise and fall of robots.txt](https://www.theverge.com/24067997/robots-txt-ai-text-file-web-crawlers-spiders), [Building the Web for Agents (VOIX)](https://arxiv.org/html/2511.11287v1). The web slide.
- Alan (Jean-Charles Samuel), *The company of the future*, LinkedIn document.
- [Estonia's agent-code initiative](https://investinestonia.com/ai-agent-identity-estonia/).
- [Stanford HAI, Who is liable when generative AI says something harmful?](https://hai.stanford.edu/news/who-liable-when-generative-ai-says-something-harmful)
- [METR, investigation of the OpenAI / Hugging Face incident](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/); [Hayden Field, The Verge](https://www.theverge.com/ai-artificial-intelligence/985385/openais-rogue-ai-model-hugging-face-cybersecurity-incident-reports-metr); [Cal Newport, Has AI gone rogue?](https://calnewport.com/has-ai-gone-rogue/)
- [Jill Lepore, Is A.I. Above the Law?](https://www.newyorker.com/magazine/2026/09/28/is-ai-above-the-law). Outlaws and categories.
- Dario Amodei, *We Must Pace the Frontier* (September 2026).
- [Nannini et al., AI Agents Under EU Law](https://arxiv.org/html/2604.04604v1), working paper, April 2026.

## 2. Citizens are sending agents to the state

**Purpose:** Show that citizens already use machines to deal with the state, then give the class a precise concept and an evidence base: agentic flooding.

### The turn to the state

- "As machines use machines, (humans use) machines (to) use digital public services." Read it first without the bracketed words, "machines use machines… machines use public services", then add the humans. The human stays in the sentence but moves into brackets. Same move as inside companies, now in the citizen-state relationship. `[not in slide]`
- Tom Loosemore, co-founder of the UK Government Digital Service: "People are starting to send software, not themselves, to deal with your organisation." (Know Your Agent, Public Digital, 10 August 2026.) Someone who built a state's digital front door. His briefing comes back in section 3. `[not in slide]`

### The evidence

- **It made the headlines, and also some upward lines.** The Economist cover, 8–14 August 2026, "How AI is breaking the state". Next to it, the paper's Figure 1: demand for 12 services, 2018–25, with a dashed line at ChatGPT's release.
- Then the numbers:
  - 2,600 → 7,000+ UK Housing Ombudsman complaints, 2022 to 2025.
  - ×5 US consumer finance complaints (CFPB), same period.
  - +400% property-tax objections in a Dutch municipality, after an AI filing platform launched.
- Other illustrations: Pelp drafts parking-fine appeals; UK employment tribunal claims +39% in the year to March 2026, with hearings listed for 2029 (Freedman, citing The Economist). The paper's "55%" is German social courts, not UK tribunals. `[not in slide]`
- **Sky News: "Why AI could overwhelm Britain's public services".** Freedom of information requests now come from AI. Freedom of information requests on WhatDoTheyKnow, scored by Pangram's AI-text detector: in 2019 essentially all human-written; in 2026 the large majority likely fully AI-written (about 84% fully AI, 3% some AI, 13% human, read off the broadcast image). Redrawn from Sky's on-air chart.

### The paper: agentic flooding

- **"Agents are flooding public services? No, but."** *Characterizing Agentic Flooding of Government Services*, Chris Schmitz, Lewis Hammond and Alan Chan, 2026 (Hertie School, Cooperative AI Foundation, Centre for the Governance of AI; arXiv 2608.16603, v2 19 August 2026, AIES 2026). The first systematic evidence base. `[not in slide]` for the affiliations.
- **What is agentic flooding?** "A surge in the volume or complexity of requests a government service receives, which (i) is caused by AI agents interacting with it, and (ii) substantially strains the service."
  - Quantitative: more requests. Agents help users discover services they are eligible for.
  - Qualitative: complex requests. Agents draft the text, so the average complaint letter gets longer.
  - "Government services" is broad here: public services, but also courts, consultations and FOI requests. Example of both at once: hallucinations producing "high volumes of complex, but incorrect, applications". The distinction matters because "introducing rate limits is unlikely to ease qualitative flooding". `[not in slide]`
- **Why is flooding happening? Because it's easier and better!**
  - Agents lower the cost of learning the rules, complying with them, and enduring the process.
  - Agents raise the benefit: better-written submissions, maximum claims, and actors who gain from volume itself.
  - Lower burdens raise demand even without AI: Boston's app raised reports by 33%, and online voter registration consistently raises enrolment. Individuals aren't rational, but in aggregate the model holds. AI pushes both levers at once. `[not in slide]`
- **1. Agents cut all three administrative burdens** (Table 1, after Moynihan et al. 2015):

| Burden | What citizens struggle with | What an agent does instead |
|---|---|---|
| Learning | Complex rules · unsure if eligible · unaware a service exists | Explains the rules, checks your situation, watches for entitlements |
| Compliance | Legal writing and forms · confusing portals · documents · deadlines | Writes the text, navigates the site, gathers documents, tracks deadlines |
| Psychological | Re-explaining your case · not knowing where it stands · dehumanising contact | Remembers the whole case, polls for updates, chases and handles rejections |

  The good news first: lower submission costs make government "more accessible, a desirable public value". The paper is not anti-agent. `[not in slide]`
- **2. A better submission is worth more, and some gain from volume itself.**
  - Citizens: more convincing consultation responses; applications that claim the maximum, as a tax accountant would.
  - Intermediaries: middlemen take a cut of what they win, such as claims-management firms and AI-branded services like DoNotPay.
  - Adversaries: actors who want to incapacitate an agency, and "vexatious litigants" that cost used to keep rare.
  - Under-claiming fits here. In the UK, people under-claim benefits they are entitled to by about £20bn a year. Agents that close that gap are a success for citizens and a budget shock for the state. Higher take-up is the system working as written. `[not in slide]`
- **What Schmitz found.** 84 cases of demand surges attributed to AI, 11 jurisdictions, 13 service domains (justice 23%, regulatory complaints 12%, benefits 11%). Officials themselves name AI as the cause in 69% of cases; third parties alone in 31%. From 2,288 candidate services, fewer than 1 in 20 qualified. `[not in slide]` for the last point.
- **How: for now, it is mostly LLMs writing cheap, legally sophisticated text.** 87% of cases involve LLM-generated text: "Flooding occurs when LLMs help to cheaply generate legally sophisticated text." By type: quantitative 60%, qualitative 90%, both 50%. Letters of 4,000+ pages in German social courts. AI writes the text; humans still click through the process.
  - The services accept free text, "often of arbitrary length": FOI requests, planning consultations, public comments. These are mostly not yet autonomous agents. Browser-using agents are the next step, which is why the paper speaks of agentic flooding. `[not in slide]`
- **Caveats: what the evidence does not show.**
  - No causal claims: "exploratory and diagnostic". Some curves rise before ChatGPT.
  - Probably an undercount: cases needed public attribution to AI, which excludes many.
  - Thin time series: only 25 of the 84 cases have volume data.
  - Moderate impact so far: "modest compared to precedent", and responses seem to work.
  - The other side: the cases span countries, services and outlets, and in most the affected body itself names AI. "Any alternative explanation would have to account for independent misattribution across all of these criteria." Strong signal, weak measurement. `[not in slide]`
- **Most exposed services? Those that pay out, and that ran on friction.**
  - Each submission is consequential: worth money to the claimant, or triggers processing the law requires.
  - Demand was held down by friction: few limits on length or volume; complexity and legal know-how did the rationing.
  - Highest risk: tax objections, social court lawsuits, civil claims. Next: tax administration and courts.
  - "Each service's resilience has historically been owed to friction rather than design." Bridge to Freedman's "Drowning in slop": free-text channels receiving long, fluent, AI-written submissions, and consultation responses dismissed in batches. These two properties can be assessed today, without forecasting AI progress. `[not in slide]`
- **How risky is it?** The risk matrix (redrawn from Figure 3). Likelihood on the vertical axis, severity on the horizontal. Sample services: A, public comment procedures (likely but not severe); B, benefits appeals (in the middle); C, emergency services (unlikely but severe). Thirteen factors, each raising (↑) or lowering (↓) the risk:

| Group | Factors |
|---|---|
| Likelihood: agent capabilities and access | 1 ↑ Maturity of agent capabilities · 2 ↓ Cost to access the required capabilities |
| Likelihood: service features | 3 ↑ Susceptibility of service interface · 4 ↑ Effort required to submit · 5 ↑ Expected benefit of a successful submission |
| Severity: operational impact | 6 ↑ Effort required to process each submission · 7 ↓ Efficiency of identity verification · 8 ↓ Ease of scaling processing capacity · 9 ↑ Current utilisation of capacity |
| Severity: response impact | 10 ↑ Rigidity of budget and entitlement policy · 11 ↑ Processing effort the law mandates per request · 12 ↑ Gap between assumed and full take-up · 13 ↑ Downstream cost of a successful submission |

  The interface (3) and identity verification (7) are design choices, the hinge into section 3. The take-up gap (12) is the £20bn point, since budgets assume people won't claim everything. All thirteen can be scored today. `[not in slide]`

### In a nutshell `[not in slide]`

- Yes, citizens are using agents to interact with governments and public services. Two questions follow: how do you know who you're dealing with, and how do you design public services for agents to use? (See the skeleton above.)

**Question to carry forward:** If friction was doing the rationing, what happens to a public service when it disappears?

**Sources:**

- [Schmitz, Hammond & Chan, Characterizing Agentic Flooding of Government Services](https://arxiv.org/html/2608.16603v2), arXiv 2608.16603v2, 19 August 2026. Definition, cases, Table 1, §5.1, Figures 1 and 3.
- [Tom Loosemore, Know Your Agent](https://loosemore.com/wp-content/uploads/2026/10/know-your-agent-briefing-final-version-10-aug-2026-1.pdf), Public Digital, 10 August 2026. The framing quote; Dutch +400%.
- [Russell Brandom, AI agents are flooding public services with new requests](https://techcrunch.com/2026/09/10/ai-agents-are-flooding-public-services-with-new-requests/), TechCrunch, 10 September 2026. Housing Ombudsman and CFPB figures.
- [Sky News, Rowland Manthorpe, Why AI could overwhelm Britain's public services](https://www.youtube.com/watch?v=N_0Q2jBV0ns), October 2026. FOI chart (data: WhatDoTheyKnow, Pangram).
- The Economist, cover of 8–14 August 2026, "How AI is breaking the state". Known through Freedman and Loosemore.
- [Sam Freedman, Drowning in slop: Can the state survive the rise of AI?](https://samf.substack.com/p/drowning-in-slop), Comment is Freed, 14 October 2026. Tribunal figures; the slop picture.
- Moynihan et al. (2015). The three administrative burdens, via the paper's Table 1.

## 3. What this means for governments

**Purpose:** Move from what is happening to what it breaks for the state: two challenges, the fundamental question, and the two roads a government can take.

### The front door

- Divider: "What this changes / breaks / for governments."
- "The state's front door was built for humans. Now services are open to agents too, but not built for them." Every form, portal and queue assumed a person on the other side. That assumption no longer holds. `[not in slide]`

### Two challenges

- **Public powers face two challenges.**
  - 01 Friction is removed. Services that relied on forms, prose and waiting now receive more requests, and more complex ones.
  - 02 Who is acting? Governments can no longer tell whether a request comes from a person or from an agent acting for them.
- **01 Friction is removed.** Public services ran on friction: forms, legal prose, waiting. Agents take it away.
  - More access: people can deal with government more, and claim what they are entitled to.
  - Flooding: requests surge and services can seize up. UK tribunal hearings are already listed for 2029.
  - The same lower cost that makes government more accessible is what floods it. Loosemore's question for every service: "Which services currently rely, deliberately or otherwise, on users giving up?" `[not in slide]`
- **02 Who is acting?** Governments can no longer tell who a request comes from: a person, or an agent acting for them.
  - Agents don't arrive through a separate channel. Many act inside the citizen's own browser, phone or app session.
  - A valid login proves account control, not that a human performed the action.
  - "No single 'badge' will make an agent trustworthy", and many agents present none.
  - Loosemore: "If software declares itself, can you verify who runs it and what the person allowed it to do? If it doesn't declare itself, how will you control consequential actions when you can't tell whether a human or an agent is at the controls?" Detectability is "a design uncertainty, not a prerequisite you can bank on". Know Your Agent: "It's not a detector". Authenticate when you can, limit consequential actions when you can't. `[not in slide]`
- **What matters is the evidence travelling with each request.** Loosemore's six questions, grouped under the four questions from section 1:

| Section 1 question | What it means for governments |
|---|---|
| Identity | Who runs the agent? Which particular agent is asking? |
| Authentication | Who asked it to act? |
| Authorisation | What did they allow it to do? Does this request stay within those limits? |
| Accountability | How do you stop it, inspect what happened and put things right? |

  "A web scraper might be acting for one user. An agent might act for thousands. Looking at the traffic alone may not tell you much." The six questions are Loosemore's, verbatim; the grouping is ours. `[not in slide]`

### So what?

- "So what? Do we want (citizens to keep using) agents to use public services?"
- "Probably YES: this is how citizens will want to deal with the state, and how their interactions will be more efficient." Lower submission costs "make government more accessible, a desirable public value". `[not in slide]` for the quote.
- **Agents, yes? It's an accessibility question.**
  - If government does nothing: access goes to whoever has the best agent. Capable agents concentrate among the affluent, and any access through agents is not favoured.
  - If government panics: "extreme demand suppression", meaning tighter eligibility, blanket bot-blocking, fewer channels. It may hurt first the people who need help most: carers, disabled residents, people with limited English, for whom an agent can be assistive technology. `[not in slide]` for the list.

### Two roads

- **"Two roads: suppress demand, or ..."** A surge in demand splits into two roads. First, suppress demand:
  - Add friction, used in 17% of cases. It shapes who gets access.
  - Reduce the benefit. It needs legislation (for example, US welfare reforms of the 1990s). `[not in slide]` for the example.
- **If yes, putting friction back is a democratic and design problem.** "Friction disproportionately deters poorer, less digitally literate, and otherwise vulnerable users, effectively shaping who accesses public services."
  - Unequal access: procedural inequality, and weaker access to justice.
  - Lower trust: worse experience of public services erodes trust in government.
  - Lost gains: closing digital channels blocks the accessibility agents promise.
  - Friction is also weakening on its own terms: CAPTCHAs no longer reliably tell humans apart. It is sometimes illegal (fees for welfare applications are banned in many places). It does nothing against qualitative flooding or determined adversaries. And yet it is the tempting reflex, because it is fast. `[not in slide]`
- **Two roads: suppress demand, or increase capacity.** The second road:
  - Hire staff.
  - Redesign public services towards proactivity.
  - AI agents in processing: not just agents coming to the state but the state deploying agents.
  - Redesign cases in the paper are all small changes (for example, verifying case numbers). AI in processing includes sentiment analysis of comments and spotting fake medical certificates. `[not in slide]`
  - Governments respond in 56% of cases, but "usually tightly scoped or non-binding". The budget trap: the UK's DWP "explicitly anchors benefit budgets to historical take-up rates", so entitlement cuts "may be required regardless". The paper's verdict is not collapse but "muddling through" with friction. `[not in slide]`

**Question to carry forward:** If you accept this game, how do you design public services for AI agents to use?

**Sources:**

- [Tom Loosemore, Know Your Agent](https://loosemore.com/wp-content/uploads/2026/10/know-your-agent-briefing-final-version-10-aug-2026-1.pdf), §1.4 on access going to the best agent; the six evidence questions.
- [Schmitz, Hammond & Chan (2026)](https://arxiv.org/html/2608.16603v2), §6, §6.1 and Table 3. Friction as a democratic problem; the two roads and their shares.
- [Sam Freedman, Drowning in slop](https://samf.substack.com/p/drowning-in-slop). "Extreme demand suppression"; tribunal hearings listed for 2029.

## 4. Hand-over: Simone Parazzoli, The Agentic State

**Purpose:** Pass from the citizen side to the state's own architecture and vision.

- The last item on the two-roads slide, the state deploying agents, is where Simone picks up. `[not in slide]`
- The open question from the nutshell carries over: if you accept this game, how do you design public services for AI agents to use? `[not in slide]`
- Leave the architecture, the vision and the government-deployed agents (agents deployed *by* government as well as *onto* it) to Simone. `[not in slide]`

**Sources:**

- Simone Parazzoli et al., *Agentic State* (vision paper).
- [Simone Maria Parazzoli, We need "semantic" alignment on AI government agents](https://fermonge.substack.com/p/we-need-semantic-alignment-on-ai).

## Sources (consolidated)

**Core**

- Chris Schmitz, Lewis Hammond & Alan Chan, [Characterizing Agentic Flooding of Government Services](https://arxiv.org/html/2608.16603v2), arXiv 2608.16603v2, 19 August 2026, AIES 2026. Hertie School, Cooperative AI Foundation, Centre for the Governance of AI.
- Tom Loosemore, [Know Your Agent](https://loosemore.com/wp-content/uploads/2026/10/know-your-agent-briefing-final-version-10-aug-2026-1.pdf), Public Digital, 10 August 2026.
- Sam Freedman, [Drowning in slop: Can the state survive the rise of AI?](https://samf.substack.com/p/drowning-in-slop), Comment is Freed, 14 October 2026.
- Nannini et al., [AI Agents Under EU Law](https://arxiv.org/html/2604.04604v1), working paper, April 2026.

**News and data**

- Russell Brandom, [AI agents are flooding public services with new requests](https://techcrunch.com/2026/09/10/ai-agents-are-flooding-public-services-with-new-requests/), TechCrunch, 10 September 2026.
- Sky News, Rowland Manthorpe, [Why AI could overwhelm Britain's public services](https://www.youtube.com/watch?v=N_0Q2jBV0ns), October 2026. Data: WhatDoTheyKnow, Pangram.
- The Economist, cover of 8–14 August 2026, "How AI is breaking the state" (no link in the docs).
- [METR, investigation of the OpenAI / Hugging Face incident](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/), 26 August 2026; Hayden Field, [OpenAI's rogue AI model incident was worse than we thought](https://www.theverge.com/ai-artificial-intelligence/985385/openais-rogue-ai-model-hugging-face-cybersecurity-incident-reports-metr), The Verge.

**Agents and accountability**

- Anthropic, [Building effective agents](https://www.anthropic.com/research/building-effective-agents), 2024.
- Google DeepMind, [The Ethics of Advanced AI Assistants](https://arxiv.org/abs/2404.16244).
- Joshua Rothman, [Can A.I. "Go Rogue"?](https://archive.is/WedTU), The New Yorker.
- Cal Newport, [Has AI gone rogue?](https://calnewport.com/has-ai-gone-rogue/)
- Stanford HAI, [Who is liable when generative AI says something harmful?](https://hai.stanford.edu/news/who-liable-when-generative-ai-says-something-harmful)
- Jill Lepore, [Is A.I. Above the Law?](https://www.newyorker.com/magazine/2026/09/28/is-ai-above-the-law), The New Yorker, 2026.
- Dario Amodei, *We Must Pace the Frontier*, September 2026 (no link in the docs).

**Machines using machines**

- Jill Lepore, [Are You a Human?](https://www.newyorker.com/magazine/2026/08/17/are-you-a-human), The New Yorker, 2026.
- David Pierce, [The rise and fall of robots.txt](https://www.theverge.com/24067997/robots-txt-ai-text-file-web-crawlers-spiders), The Verge.
- [Building the Web for Agents (VOIX)](https://arxiv.org/html/2511.11287v1).
- Alan (Jean-Charles Samuel), *The company of the future*, LinkedIn document.
- [Estonia's agent-code initiative](https://investinestonia.com/ai-agent-identity-estonia/), September 2026. Also on the slide: Anthropic MCP, 1Password, World Proof of Human, Cloudflare State of the Internet (no links in the docs).

**Hand-over**

- Simone Maria Parazzoli, [We need "semantic" alignment on AI government agents](https://fermonge.substack.com/p/we-need-semantic-alignment-on-ai); Parazzoli et al., *Agentic State* (vision paper).

## Preparation notes

Open verification items flagged in the speaker notes and docs:

- **The Schmitz quote.** "The vast majority of cases we find are people who are entitled to claim for something, claiming for that thing." Find where it was published. It sits on the hidden `entitled` slide, so it is not shown, but it may still be said aloud.
- **£20bn and 0.7% of GDP.** Confirm the source of both figures for UK unclaimed benefits (benefit and risk slides, notes only). Lorenzo's original note read "0.7£ of GDP"; 0.7% is an assumption.
- **Sky FOI shares.** About 84% fully AI, 3% some AI, 13% human were read off the broadcast image. Approximate; check against Sky's own piece before quoting a number.
- **Figure 1 colours.** Two panels are blue (Brazil judicial petitions, Japan new patents). Check the caption before explaining what the colour means.
- **Unverified Sky figures.** Legal-services complaints +49%, NHS written complaints +35%, police complaints +34%, and 58% of civil servants affected: attributed to Sky by secondary sites, not confirmed against Sky's article.

Other checks:

- The UK tribunal figure is +39% in claims (Freedman, citing The Economist). Do not use the 55%, which is German social courts in the paper.
- Pelp: confirm the name and link.
- Lepore's "outlaws" quotation and the Nannini et al. quotes: check against the originals.
- "More bots online than people" is Lepore's interviewee, not a statistic about AI agents.
- The Alan figures are the company's own account.
- Estonia: identity and delegated authority, not legal personhood.
- The Economist cover is known only through Freedman and Loosemore; the article itself was not read.

## Cut from this version

- **Part 4, Equipping government for the agentic era.** Three statement slides ("We should go for this as it's a historical opportunity to reshape the functioning of public services"; "Not just to adapt services to citizens' agents, but to rethink public services through AI agents"; "So, what does it take to make a state that is ready for AI agents?"), Know Your Agent's answers (badge and letter, three checks, brakes, assurance tiers) and the paper's three recommendations (audit exposure, a digital-identity strategy, legal certainty).
- **Three of the five challenges.** What did the person allow? ("The badge doesn't prove what is written in the letter"); An arms race nobody wins (the FT's Extract tool against Objector AI); The law doesn't see it (AI Act Art. 50 covers disclosure to people, not agent-to-machine exchanges).
- **Know Your Agent "two problems" and "two warnings" slides.** Parts of both survive in the notes of challenge 02.
- **"Prepare before the surge, or you'll suppress demand after it."** The redesign slide: structured forms, integrated identity verification, standard data formats, proactive services.
- **Hidden in the deck:** the "In a nutshell" recap and the "entitled to claim" slide with the £20bn figure.
- **From the earlier plan, never built or dropped:** an Individuals slide (Instinct, the Dia browser); answer vs outcome (explaining, preparing and submitting a passport renewal); "the path from information to action is no longer written"; adoption faster than the web (63% vs 9%); Lepore's "artificial state" as the closing question for Simone; Loosemore's *The end of government prose*.
