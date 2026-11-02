Context on the Course I'm going to:

Title: Outthinking the Algorithm — Managing in the Age of AI
The Human–Machine Partnership: Redesigning Work for an AI World

Goal: *Teach students how governments, international organizations, and businesses navigate technological disruptions.*

The fundamental thesis: AI does not simply automate tasks. It forces a redesign of what humans are for at work. The organisations that thrive will not be those that automate the most, but those that decide most intelligently what to keep human, what to delegate to machines, and how to build the human capabilities that make the partnership work.

The main goal of the course it to prove the bottleneck in AI adoption is almost never the technology.

----

**My lecture**: Architecting Agency

Summary: The core purpose of this lecture is how do you manage entities, agents, that can act on your behalf - how to be architecting agency

Key concepts:
- what are even these entities - ok
- identity, and proving it ok 
- accountability - ok
- who's in control
	- centaurs or horses
- what all of this means for government too - ok 
	- are AIs outlaws?

# Outline

Turns out that the reason why you want to write things down is not just for humans, but also for agents - <https://x.com/NotionHQ/status/2107211717805752822?s=20>

## It's a new world
We're living in a world - or at least the digital world - where we're not alone. AI agents, which I like to describe as virtual entities that take on tasks once reserved for humans, working alongside us, are not a far thing.

It is estimated that more than half of the online traffic now comes from agents.

Software companies - also those that *do not* build agents - are building versions of their softwares for agents to use them: MCP, CLI, API.

1Password just unveiled how agents can have access to secured valuts for passwords.

% of commits to GitHub come from AI

Estonia is giving agents a legal entity.

Before, the Internet was checking whether bots were trying to acess a website through Captchas, now you've got startups like World issuing certificates of humanity.

It's a complete different world where we're not alone. At least online, the Internet is more and more used by agents. Computers that use computers.

### The online world is already significantly different
This is a new era, contradicting maybe what the history of interactions of humans and machines have been. As noted in Artifacts (<https://artifactstech.substack.com/p/computers-that-use-computers>), the the history of computers is a story of shrinking: from machines that filled entire rooms and were a nightmare to maintain, to machines that sat on a desk in everyone’s home, to machines we carry around - all while the power went up as the size came down. All the while trying to make computers more usable and intellegible by humans:

- what Douglas Engelbart called “augmenting human intellect” ('increasing the capability of a man to approach a complex problem situation, to gain comprehension to suit his particular needs, and to derive solutions to problems. Increased capability in this respect is taken to mean a mixture of the following: more-rapid comprehension, better comprehension, the possibility of gaining a useful degree of comprehension in a situation that previously was too complex, speedier solutions, better solutions, and the possibility of finding solutions to problems that before seemed insoluble')
- what Vannevae Bush said 'computers were meant to help humans navigate vast amounts of information' from As We May Think: '<https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/>'
- By simulating our desks, the computer became, as Alan Kay put it, “a new medium that would change the thought patterns of an entire civilization”.
- Or with Steve Jobs, saying computers were bycicle for the mind

Which is why, Work - and not only work - moved onto computers: thin machines that store, or reach, almost any piece of information in the world, and that have drastically changed how we handle it.

Now things are changing again, because humans are no longer the only ones using computers - and so no longer the only ones consuming information or working. We’ve started working alongside agents, or even simple LLMs, that can navigate information and act on it.

Therefore, the Internet is changing too. We stated above how applications are made for agents and, to get deeper, new protocols - namely standards of communications of the Internet, are now changing: <https://arxiv.org/pdf/2610.26624>

## Challenges we face already

That agents are using the Internet is not far-fetched and already clear. We saw before agents are more than humans according to some data. And this has resulted already in some important incidents, like the one of OpenAI agents that attacked  Hugging Face.

It's worth pausing on this and look at the dynamics, reported by the METR report, that is documented here: <https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/#~1200-agents-sent-%3E70,000-messages-and-files-on-an-unsanctioned-message-board,-and-~700-attacked-hugging-face>

*we could add some essential steps, also taken from @Why the Hugging Face Hack Should Make You Worry More About A.I.*

Something similar happened also in AUS.

This raises a fundamental, first, challenged / question: Are agents outlaws?

They may be, as explained by Jill Lepore in Is A.I. Above the Law?, for two reasons:

- the law takes its time in responding to new technologies, figuring that new tools can be accommodated within existing ideas, rules, and doctrines
- as state regulations will take time, companies - as made clear by Amodei (Pacing the Frontier Article) - have already started setting their own standards, being very outward about the risks and therefore position themseleves as saviours by proposing this.

This is the 'pacing problem', that students have already seen: technological developments tend to outpace the capabilities of institutions to manage them.

Now, second challenge, which stems from the first but maybe motivates it, who's accountable if an agent goes wrong? 

It's a fundamental question that traces back to what agents really are: not just Language Models that are asked and thus answer back, but entities that do take action on our behalf.

So, they're not humans - well you cannot put them in jail - but they're not things either because they have *agency*, as they take actions on the world, and they work alongside us

## Working with agents

This is not to paint a doom scenario, on the contrary.

It's to state to fundamental things:
	- agents working alongside humans are a real thing (more than half of internet traffic)
	- we're just scratching the surface of how to work with agents

Yet, as AI becomes a Normal Technology, and agents will act more and more for and on our behalf, knowing how to work with agents and, thus, managing agents is probably the most important skill for future leaders.

How so? Considering agents as humans - so resting on the critical infrastructure of communication: information, and notably sharing information

Again, 'Turns out that the reason why you want to write things down is not just for humans, but also for agents - <https://x.com/NotionHQ/status/2107211717805752822?s=20>'

How so? By sharing information in the form of Context and, thus, making Context Engineering.

Some notes from Anthropic:
-  Building with language models is becoming less about finding the right words and phrases for your prompts, and more about answering the broader question of “what configuration of context is most likely to generate our model’s desired behavior?"
-  Context refers to the set of tokens included when sampling from a large-language model (LLM). The engineering problem at hand is optimizing the utility of those tokens against the inherent constraints of LLMs in order to consistently achieve a desired outcome.
-  we view context engineering as the natural progression of prompt engineering.
-  Context engineering is the art and science of curating what will go into the limited context window from that constantly evolving universe of possible information.

- Why is it important? 
	- Despite their speed and ability to manage larger and larger volumes of data, we’ve observed that LLMs, like humans, lose focus or experience confusion at a certain point.
	- Like humans, who have limited working memory capacity, LLMs have an “attention budget” that they draw on when parsing large volumes of context.

Architecting Agency is how you exert power on AI - putting constrainst on the information it can access, directing the actions it can take, and eventually controlling the information it has access to.

