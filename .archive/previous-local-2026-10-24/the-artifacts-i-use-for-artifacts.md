# The artifacts I use for Artifacts
**Subtitle:** How I built an editorial infrastructure of AI agents to help me think and write
**Date:** Feb 25, 2026
**URL:** https://artifactstech.substack.com/p/the-artifacts-i-use-for-artifacts

---

In a previous essay, I argued that using LLMs to produce text "may mean skipping the thinking that makes writing worth doing." Yet I'm not dismissive of AI helping with daily tasks—I simply don't believe in relying on perfect prompts or chatbot tricks.

Instead, I've been studying AI agents: sophisticated tools that coordinate multiple capabilities, maintain memory, and take actions beyond text generation. This led me to a question: how could I leverage these agents to enhance my newsletter writing?

## Starting from Jobs to Be Done

I examined my actual workflow: gathering articles and podcasts, organizing them with labels and notes, finding moments to synthesize knowledge, and retrieving past reading relevant to current topics. I recognized that "Claude Code was the perfect orchestra director" for orchestrating these different processes.

## The Foundation: Context and Memory

The most critical element for AI agents is robust context. Rather than relying on repeated prompts, I built a "Claude.md" file—a persistent document that loads automatically at the start of each session.

I had Claude analyze every newsletter I'd published, spanning years of writing (including early Italian-language pieces). This analysis generated a comprehensive profile: my evolution as a writer, my current focus on "stories & ideas on the design of technology," and what constitutes quality work for Artifacts.

The Claude.md file documents not code architecture (as developers typically use it) but rather the editorial guidelines and voice of the publication itself.

## The Knowledge Base: Notion Integration

For years, I've maintained a Notion database storing articles, papers, podcasts, and highlights from everything I read. Now connected to Claude via MCP (Model Context Protocol), this system returns relevant material whenever I explore a topic. Searching for "age verification," for example, surfaces three years of accumulated research instantly.

## The Workflow: Sourcing to Publication

**Daily source aggregation**: An n8n automation runs each evening at 9 PM, pulling articles from TechCrunch, The Verge, The Markup, WIRED, and relevant newsletters. An AI filter assesses what matters for Artifacts, with results sent to Notion and a Telegram notification.

**Research and outlining**: When I've chosen a topic, I use Claude Code to explore my Notion database and construct an outline before drafting.

**Writing remains mine**: I retain full ownership of the actual writing process. What I built instead is the `/artifacts-polish` skill—a fixed instruction set that reviews my drafts for consistency with previous editions.

**Post-publication expansion**: A `/artifacts-linkedin` skill transforms my newsletter piece into a platform-appropriate version based on my previous LinkedIn posts.

## The Cost and Accessibility

This entire infrastructure costs approximately €19 monthly. While Claude Code is engineered for developers, it functions effectively for editorial work.

## Critical Decisions Remain Human

These agents don't write Artifacts. They surface overlooked topics, retrieve forgotten research, and maintain consistency. But I personally select topics, develop arguments, and compose the actual text. This intentional boundary reflects my belief that "the critical decisions stay with me."

---

## Save for Later

- [Institutions as artifacts of cooperation](https://aeon.co/essays/institutions-are-how-we-scale-up-cooperation-among-millions)
- [Political effects of X's algorithms](https://www.nature.com/articles/s41586-026-10098-2)
- [Why we never asked for this Internet](https://www.nytimes.com/2026/02/10/technology/personaltech/ai-google-meta-opt-out.html)
- [AI speaking without bearing consequences](https://www.theatlantic.com/technology/2026/02/words-without-consequence/685974/)
- [The importance of boredom](https://www.mdpi.com/2076-3425/15/8/794)
- **Book:** *Building and Dwelling* by Richard Sennett
