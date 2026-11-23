# Architecting Agency

## Managing entities that act on our behalf

**Outline v2 — 25 October 2026**  
Based on the original `Architecting Agency.txt` and our discussion. The original file is preserved unchanged. Case-study sections are frameworks to populate with Lorenzo’s examples, not descriptions of implementations already reviewed.

## Course context

- **Course:** Outthinking the Algorithm — Managing in the Age of AI.
- **Theme:** The Human–Machine Partnership: Redesigning Work for an AI World.
- **Audience:** Non-technical Sciences Po students, familiar with politics, governance and institutions.
- **Course goal:** Understand how governments, international organisations and businesses navigate technological disruption.
- **Course thesis:** AI requires organisations to decide what to keep human, what to delegate, and which human capabilities make that partnership work. Adoption depends on organisational choices as well as technology.
- **Original course emphasis:** AI does not simply automate tasks; it forces a redesign of what humans are for at work. The organisations that thrive will decide most intelligently what to keep human, what to delegate, and which human capabilities to build. The course proposes that the bottleneck in AI adoption is almost never the technology.

## Lecture summary

AI agents change how we use technology: we increasingly delegate outcomes to systems that choose steps and act on our behalf. This lecture explores the challenges that creates, then develops a practical response: making organisational knowledge available and usable by agents and preserving human judgment.

**Fil rouge:** Information increasingly needs to serve agents as well as people. Deciding what knowledge to make explicit, how agents can use it, and under what mandate is part of architecting agency.

**Learning objectives:** Students should leave able to explain what an agent does, distinguish identity from authority and accountability, identify the knowledge needed for delegation, and having foundations of how to architect context for agency.

## Timing — two hours

| Time | Section | Duration |
|---|---|---|
| 00:00–00:05 | 1. What is an agent? | 5 min |
| 00:05–00:15 | 2. Computers that use computers | 10 min |
| 00:15–00:30 | 3. Why agents need to be managed | 15 min |
| 00:30–00:45 | 4. Working with agents: writing things down | 15 min |
| 00:45–01:05 | 5. Architecting agency through context | 20 min |
| 01:05–01:20 | 6. Case study: building my second brain | 15 min |
| 01:20–01:35 | 7. Case study: the Nima context repo | 15 min |
| 01:35–01:45 | 8. Safeguards and limits | 10 min |
| 01:45–02:00 | Discussion and questions | 15 min |

The first three sections occupy 30 minutes. Sections 4–7 occupy 65 minutes; they can expand to 75 minutes by using 10 minutes of the final discussion. Short audience questions can be integrated into the case studies.

## 1. What is an agent? — 5 minutes

**Purpose:** Give students a working definition before showing the wider shift.

An agent combines a model, information and tools with a process for deciding what to do next. It can take actions towards an assigned outcome, with varying degrees of discretion.

- Contrast asking for an answer with delegating an outcome: explaining an administrative procedure, preparing an application, and submitting it are different tasks. [not in slide]
- Explain the basic cycle in ordinary language: receive a goal, choose a step, act, inspect the result, continue or ask for help.
- Distinguish a predefined workflow from a system that chooses some of its own steps.
  - here interesting to mention how the new nature of agents is that they're not deterministic systems: Workflows are systems where LLMs and tools are orchestrated through predefined code paths Agents, on the other hand, are systems where LLMs dynamically direct their own processes and tool usage, maintaining control over how they accomplish tasks. -> this has to be clear cause it establishes the fact that agents to take decisions.
- Establish that operational agency does not imply consciousness, legal personhood or moral responsibility. [not in slide]

**Question to carry forward:** What changes when we specify the destination and let software choose parts of the route?

**Source:** [Anthropic — Building effective agents](https://www.anthropic.com/research/building-effective-agents). Use the workflow/agent distinction without introducing implementation detail.

## 2. Computers that use computers — 10 minutes

**Purpose:** Show that agents are already changing who uses software and consumes information.

We’re living in a world—or at least a digital world—where we’re not alone. AI agents, which I like to describe as virtual entities that take on tasks once reserved for humans, working alongside us, are already here.

- Brief historical bridge: computers became smaller and more accessible, with interfaces designed around human work. Bush’s information trails and Engelbart’s augmentation provide sufficient anchors; Kay or Jobs can remain optional references.
- Work—and not only work—moved onto computers: thin machines that store, or reach, almost any piece of information in the world, and that have drastically changed how we handle it.
- Humans are now increasingly joined by agents, systems that navigate information and operate software on their behalf.
  - Software providers expose ways for agents to use their services. (Explain APIs, CLIs and MCP collectively as ways software can communicate and act, without teaching the acronyms.)
- Information and services now have another audience: machines acting for people.
- Introduce identity and credential infrastructure as evidence of practical adaptation; develop the governance questions in section 3.

**Examples to choose from:** Agent access to applications, controlled credential use through 1Password, Estonia’s agent-identity initiative. Two examples are sufficient.

**Additional example retained from the original:** CAPTCHA and World’s proof-of-human initiatives illustrate the question of distinguishing humans from automated actors. Verify the specific product and claims before delivery. Proof of humanity does not establish an agent’s mandate.

**Transition:** If software can act on our behalf, how do we establish its mandate and keep track of its actions?

**Sources:**

- [Artifacts — Computers that use computers?](https://artifactstech.substack.com/p/computers-that-use-computers).
- [Vannevar Bush — As We May Think](https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/).
- [From TCP/IP to MCP: Security and Governance Lessons from Internet Protocols for Agentic AI](https://arxiv.org/abs/2610.26624). Background on standards and their governance; no protocol deep dive.

## 3. Why agents need to be managed — 15 minutes

**Purpose:** Use a concrete incident to establish the challenges, then give students a delegation framework.

### Start with the Hugging Face - OpenAI story

- Explain the assigned evaluation tasks and intended boundaries.
- Describe the unauthorised communication and collective activity documented by METR.
- Focus on what was delegated, what became possible, and what escaped oversight.
- Distinguish the investigators’ observations from interpretations of the agents’ motives. A bounded investigation does not establish every wider claim about AI autonomy.

### Then introduce delegation and discretion

- Giving an outcome does not fully specify acceptable means.
- A principal cannot continuously observe every action taken on their behalf.
- A task can appear successful while the process violates its mandate.
- Human delegation is a useful analogy, but agents do not inherit professional obligations or reliable judgment through the metaphor.
- Distinguish **initiative**—who starts—from **discretion**—how far the agent may go before checking back.

It’s a fundamental question that traces back to what agents really are: not just language models that are asked a question and answer back, but entities that take action on our behalf. That is why accountability matters when we delegate to them.

### Four questions form the spine

| Challenge | Governing question |
|---|---|
| Identity and authentication | Who or what is acting, and how do we verify it? |
| Authorisation | On whose behalf, with which rights and limits? |
| Oversight | What can the delegator observe, approve or interrupt? |
| Accountability | Who must explain, correct or answer for the consequences? |

Use Estonia to distinguish identifying an agent from granting personhood. Use credential access to distinguish being able to log in from being authorised to perform every available action.

### Are agents outlaws?

Keep this as a provocation: existing responsibility and unresolved questions can coexist. Briefly revisit the course’s pacing problem introduce by Leonardo, and ask who makes the rules while institutions adapt. Private safety commitments and democratic lawmaking have different sources of authority.

**Original reflections retained:** Law can respond incrementally by fitting new technologies into existing doctrines, rather than creating new categories immediately. Meanwhile, firms propose their own standards. Bring back Amodei’s *We Must Pace the Frontier* as an example of industry proposing governance responses; distinguish his stated proposal from the interpretation that risk warnings position companies as the institutions best equipped to govern. Lepore supplies the question of democratic legitimacy.

**Transition:** These challenges make management necessary. What knowledge must an organisation provide before it can delegate well?

**Sources:**

- [METR — Independent investigation of the OpenAI / Hugging Face incident](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/).
- [Jill Lepore — Is A.I. Above the Law?](https://www.newyorker.com/magazine/2026/09/28/is-ai-above-the-law).
- [Simone Maria Parazzoli — We need “semantic” alignment on AI government agents](https://fermonge.substack.com/p/we-need-semantic-alignment-on-ai). Initiative, discretion and ownership.
- [Estonian RIA — Reason Reserve / Aruait](https://www.ria.ee/en/state-information-system/artificial-intelligence/reason-reserve-aruait).
- [Estonia’s agent-code initiative](https://investinestonia.com/ai-agent-identity-estonia/).

## 4. Working with agents: writing things down — 15 minutes

**Purpose:** Use onboarding a new colleague as the starting point for understanding what agents need.

Yet, as AI becomes a normal technology, and agents act more and more for and on our behalf, knowing how to work with agents—and, thus, managing agents—is probably the most important skill for future leaders.

Turns out that the reason why you want to write things down is not just for humans, but also for agents. [Notion post](https://x.com/NotionHQ/status/2107211717805752822?s=20).

Think of an agent as someone you are onboarding. A new colleague needs to understand what the organisation does, what you are trying to achieve, how things work, and which decisions have already been made. You would not expect them to do good work from a task description alone.

When something is not written down, a new colleague asks someone. They find the person who knows the history, explains an exception or clarifies what a document really means. Organisations rely on these conversations to fill the gaps in their documentation.

Agents need that knowledge too. They cannot be assumed to share the team’s background or know whom to ask. To empower them to work well alongside you, the relevant knowledge needs to be written down and made accessible.

- What would you explain to a person joining your team before giving them this task?
- Which goals, terms, procedures and previous decisions would they need to understand?
- Where would they get stuck and have to ask someone?
- Can those answers become documentation the agent can use again?
- When an answer is missing, who should the agent ask rather than guess?

**Core message:** Agents need things written down. Onboarding them means making the knowledge needed for their work explicit and accessible, then improving that documentation as gaps emerge.

Use the onboarding analogy for briefing and sharing knowledge; it does not imply that an agent has a person’s judgment or responsibility.

**Audience prompt:** Think of the last person who joined a team you know. What did they have to ask because it was not written anywhere?

Return to the opening hook: writing things down empowers agents to work alongside you.

**Transition:** Once the knowledge is written down, how do we make sure the agent gets the right information for the task? That is where context engineering begins.

**Sources:**

- [Ethan Mollick — On-boarding your AI Intern](https://www.oneusefulthing.org/p/on-boarding-your-ai-intern). The onboarding analogy, used with its limits made explicit.
- [Original Notion post supplied in the lecture brief](https://x.com/NotionHQ/status/2107211717805752822?s=20). Check its exact wording before quoting.
- [Zentropi — Machines editing the rules that machines enforce](https://blog.zentropi.ai/machines-editing-the-rules-that-machines-enforce/). Illustrates gaps previously filled through colleagues’ explanations; identify it as a vendor account.
- Second-brain concept: [Rules Written for Machines to Read](wiki/concepts/Rules%20Written%20for%20Machines%20to%20Read.md).

## 5. Architecting agency through context — 20 minutes

**Purpose:** Translate context engineering into managerial decisions about information.

Architecting agency is how you exert power on AI: placing constraints on the information it can access, directing the actions it can take, and controlling which information is available to it.

Context management is central to this power. Section 8 returns to the permissions and oversight needed to make those constraints effective.

**Working definition:** Context is the information available to an agent when it decides what to do next. Context engineering means organising how that information is selected, supplied and maintained.

- Move from the search for a perfect prompt to a maintained environment of goals, sources, decisions, procedures and examples.
- Explain why giving an agent every document is insufficient: it needs relevant information and clear relationships between sources.
- Retain the original attention-budget explanation: a context window is finite, and putting more information within reach does not guarantee the model will use it reliably. Explain this as a practical limitation rather than equating model attention with human cognition.
- Distinguish knowledge stored in a repository from the information actually available during a task.
- Show how current decisions, historical evidence and unresolved questions should remain distinguishable.
- Assign ownership for updating the knowledge and correcting mistakes.

### Questions for the person managing the agent

| Decision | Question |
|---|---|
| Purpose | What outcome should the agent pursue? |
| Relevant knowledge | What does it need to understand this task? |
| Authority of sources | Which decisions and documents govern its work? |
| Freshness and provenance | Where did this information come from, and is it still current? |
| Boundaries | What information is restricted, and when must the agent ask? |
| Continuity | What should remain available for subsequent tasks? |

These are dimensions within context engineering, not a separate lecture block. Use an ordinary briefing analogy to keep the discussion accessible.

**Transition:** The next two examples show these choices in practice: first for personal knowledge, then for product work.

**Sources:**

- [Anthropic — Effective context engineering for AI agents](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents). Selection, retrieval and maintaining useful context.
- [Artifacts — The artifacts I use for Artifacts](https://artifactstech.substack.com/p/the-artifacts-i-use-for-artifacts). The existing personal account of building context around a working practice.
- [Narayanan and Kapoor — AI as Normal Technology](https://knightcolumbia.org/content/ai-as-normal-technology). Optional background for treating organisational adaptation as a central task.

## 6. Case study: building my second brain — 15 minutes

**Purpose:** Show how personal readings and accumulated knowledge become a resource agents can use.

**To populate with Lorenzo’s demonstration:**

- The starting problem: what was difficult about finding and connecting previous reading?
- How the second brain was built and why its structure was chosen.
- Walk through a source, its synthesis, and its connections to other knowledge.
- Show how original material remains distinguishable from generated interpretation.
- Demonstrate a real research or Artifacts question using this resource.
- Identify the decisions retained by Lorenzo, and what still requires correction or maintenance.

**Discussion prompt:** What made this useful—the quantity of information, its organisation, or the ability to trace an answer back to evidence?

**Takeaway:** Accumulated information becomes more useful for delegation when its structure, meaning and provenance are made explicit.

## 7. Case study: the Nima context repo — 15 minutes

**Purpose:** Move from personal memory to the context needed for product management in an organisation.

**To populate with Lorenzo’s examples; contents and implementation have not been reviewed for this outline:**

- The product-management problem the repository addresses.
- What an agent needs to know about Nima to contribute usefully.
- How relevant product knowledge and decisions are organised.
- One concrete task showing how the agent uses that context.
- How the agent should handle gaps, conflicting information or decisions requiring approval.
- What changes when information concerns colleagues, customers and organisational commitments.

**Comparison with the second brain:** Explore differences in ownership, confidentiality, authority, maintenance and consequences of error using the actual examples.

**Discussion prompt:** What additional requirements appear when an agent’s work can affect people beyond its user?

## 8. Safeguards and limits — 10 minutes

**Purpose:** Explain how to retain human agency and adapt safeguards to institutional obligations.

### Human judgment and practical controls

- Decide which tasks remain human by principle as well as by capability.
- Allocate work between assistance, delegation with review, and limited automation.
- Make review meaningful: the person needs time, information and competence to challenge the output.
- Distinguish a written restriction from a permission enforced by the system.
- Set approval points for consequential commitments; preserve interruption, correction and reversibility where possible.
- Explain briefly why external content is evidence to inspect, not automatically an instruction to obey.

### Different organisations, different obligations

- A personal knowledge assistant, a company agent and a public-service agent require different mandates and safeguards.
- Public administration adds questions of equal access, contestability and obligations to citizens.
- Distinguish agents deployed **by** a government from citizens’ agents interacting **with** it.
- Ask who controls the context, defaults and access gateways, and what dependencies this creates.

**Closing proposition:** Architecting agency means deciding what an agent can know, what it may do with that knowledge, and how people retain the ability to challenge and correct its actions.

**Sources:**

- [Ethan Mollick — On-boarding your AI Intern](https://www.oneusefulthing.org/p/on-boarding-your-ai-intern). Task allocation, including work deliberately kept human.
- [Mollick — Centaurs and Cyborgs on the Jagged Frontier](https://www.oneusefulthing.org/p/centaurs-and-cyborgs-on-the-jagged). Human–AI collaboration and uneven capabilities.
- [Parazzoli — Semantic alignment on AI government agents](https://fermonge.substack.com/p/we-need-semantic-alignment-on-ai). Institutional differences and agents deployed by or onto government.
- [Anthropic — Computer and browser use guidance](https://claude.com/blog/best-practices-for-computer-and-browser-use-with-claude). Background on hostile instructions embedded in external content.
- Second-brain concepts: [Defaults as Governance](wiki/concepts/Defaults%20as%20Governance.md) and [Digital Public Infrastructure](wiki/concepts/Digital%20Public%20Infrastructure.md).

## Discussion and questions — 15 minutes

- What would you need to write down before delegating a meaningful task to an agent?
- What could it prepare, and what could it commit you or your organisation to?
- What should remain human even if automation becomes technically possible?
- How would your answers change in a ministry, an international organisation or a business?

## Preparation notes

- Keep the definition brief and the technical vocabulary optional. Use governance, delegation and institutional memory as familiar anchors.
- Populate both case studies with actual demonstrations and prepare a static fallback for each.
- Recheck dated examples and incident details before delivery.
- Do not reuse the original claim that a majority of internet traffic comes from AI agents: bot traffic includes many other forms of automation.
- Describe Estonia’s initiative as digital identity and delegated authority, not established legal personhood.
- Omit the original unsourced GitHub commit percentage and unspecified Australian incident unless a precise source is added.
- Keep the historical references selective so the opening three sections stay within 30 minutes.
- No standalone architecture-as-governance section is included. Its necessary practical distinction—written instructions versus enforced permissions—appears in safeguards.

