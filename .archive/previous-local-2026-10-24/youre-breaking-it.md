# You're breaking it
**Subtitle:** How Iran's block of the Internet contradicts what the Internet is supposed to be
**Date:** Jan 28, 2026
**URL:** https://artifactstech.substack.com/p/youre-breaking-it

---

Iran is experiencing one of its most severe internet blackouts in response to widespread protests. Starting around January 8, mobile data, broadband, and text messaging were largely disabled, affecting over 90 million people. Connectivity dropped near zero, isolating families, disrupting businesses, and fragmenting daily services from banking to emergency communication.

The shutdown also prevented independent reporting and social media activity, allowing the state to control the narrative surrounding the crackdown.

## Technical Architecture of the Shutdown

The blackout employs multiple layers of control: a central "kill switch" at the national backbone, filtering mechanisms, routing changes, and physical network restrictions.

All international traffic passes through state-controlled providers—MCCI, Irancell, and TCI—connected via the government backbone. On January 8, routing announcements from these networks collapsed by 90-95% within minutes as they withdrew IP prefixes from global Border Gateway Protocol (BGP) tables. "This meant that most URLs in Iran effectively vanished from the global map," making external access impossible while leaving only tightly controlled routes for select institutions.

VPNs, messaging apps, and streaming services were disabled at border gateways. Mobile base stations were switched off, landlines disrupted, and activist or journalist SIM cards were deactivated or throttled.

## Contradiction to Internet Design

The internet's foundational architecture rests on decentralization, universality, and end-to-end connectivity. Networks coordinate through protocols rather than territorial authority, enabling unrestricted data transmission without central control.

State-imposed shutdowns violate these principles, imposing control the network explicitly discourages. UNESCO's Internet Universality framework emphasizes that connectivity should remain open and universally accessible. Tim Berners-Lee's Contract for the Web principle demands to "keep all of the internet available, all of the time."

## Digital Sovereignty vs. Infrastructure Control

Legitimate digital sovereignty shapes how the internet is used: enforcing laws, protecting users, promoting local ecosystems, or reducing strategic dependencies. Iran's approach differs fundamentally—it transforms connectivity itself into something conditional and revocable.

"When a government can turn the internet on and off, governance through code and protocol collapses." The internet becomes subject to territorial command rather than shared technical standards.

## The Splinternet Emerges

Repeated shutdowns fragment what was designed as a unified network. Connectivity becomes conditional, access becomes political, and interoperability erodes. What was once a universal space for communication and innovation becomes a patchwork of controlled networks—the "Splinternet."

---

## Save for Later

- [UNESCO's Internet Universality Framework](https://www.unesco.org/en/internet-universality-indicators)
- [Contract for the Web - Principle 2](https://contractfortheweb.org/principles/principle-2-keep-all-of-the-internet-available-all-of-the-time/)
- [Splinternet - Wikipedia](https://en.wikipedia.org/wiki/Splinternet)
