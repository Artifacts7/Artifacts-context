---
name: artifacts-slides
description: >-
  Build a presentation deck in the "Artifacts" visual identity — the cream + purple,
  Space Mono + Archivo, hand-drawn-circle, four-accent-line house style used for Lorenzo
  Ancona's lectures and talks. Use this whenever the user wants slides, a deck, a lecture
  presentation, or to add/edit slides "in the Artifacts style" (or references this look),
  even if they don't name the skill. Produces a self-contained 16:9 HTML deck (present
  full-screen, arrow-key nav) that can be published as an Artifact and exported to PDF.
  Not for Tremau-branded decks (use tremau-pptx / tremau-story-canvas) or generic slides.
---

# Artifacts slides

A reusable house style for talks and lectures. The deliverable is **one self-contained
HTML file**: a 16:9 deck, cream slides with a few full-bleed purple interludes, that the
presenter drives with arrow keys and exports to PDF. It is the style, not any one talk —
fill it with whatever content the user brings.

## How to build a deck

1. **Copy the template.** `assets/template.html` is a working deck containing one of every
   component (cover, about, dividers, bullet slide, four-item schema, quote card,
   paper-led pillar, two NPF slides, sidebar card). Copy it to the user's project as your
   starting point, then **replace the slides inside `<div class="deck">`** with the real
   content, reusing the component markup you need and deleting the rest. Keep the
   `<style>` blocks, the `<script>` tail, and the logo untouched unless asked.
2. **Author slide content** following the house rules below and the component catalogue.
3. **QA by screenshot before publishing** (see Workflow) — you cannot eyeball a deck you
   wrote blind, and the two-column layouts only resolve above ~760px.
4. **Publish** the HTML as an Artifact, and **export a PDF** with `scripts/export_pdf.js`.

Everything the deck needs is inline (fonts via Google Fonts, the logo as embedded
data-URIs). No build step, no external assets.

## Design system

- **Canvas:** 16:9. Each `.slide` is full-viewport; content is vertically centred; a 16px+
  side gutter via the slide padding. Scroll-snap between slides; arrow keys / on-screen
  dots navigate.
- **Palette (CSS tokens on `:root`):** cream ground `--cream:#FAF6EA`, ink `--ink:#171310`,
  purple `--purple:#9161F2` (+ `--purple-deep:#7A46E8`), tint panel `--tint:#efe7fb`, and
  four accent lines — green `#0DA65C`, blue `#4BB4F1`, purple `#8C52FF`, orange `#F88137`.
- **Two slide modes:** `.slide.cream` (default, cream bg, ink text) and `.slide.plum`
  (full-bleed purple, cream/white text) for part/period dividers and big statements.
- **Fonts:** `Archivo` (grotesk) for display/headlines and proportional body; `Space Mono`
  for eyebrows, labels, bullets, captions and quotes-attribution. These are the identity —
  keep them. (They load from Google Fonts; in a PDF render they load over the network.)
- **Logo:** the "Artifacts" wordmark + four coloured lines sits bottom-right on every slide
  via the `.mark` element, as two embedded transparent variants — black on cream slides,
  cream on purple slides. Empty `<div class="mark"></div>` per slide; CSS does the rest. To
  swap the logo, see `scripts/logo_variants.py`.

## House rules (what makes it feel "Artifacts")

These are the conventions converged on in practice — follow them so a new deck matches:

- **No long (em) dashes in text.** Use a spaced hyphen ` - ` or restructure. Em dashes are
  the main "AI slop" tell to avoid here.
- **Bold the key terms** inside bullets and statements with `<b>…</b>` — one or two per
  line, not whole sentences. It gives the presenter a scannable handle.
- **Boxes shrink to their content.** The quote box (`.quotebox`) uses `align-self:start`
  so it never stretches to the bottom on a sparse slide. Same spirit for side panels.
- **Quote boxes get `dense`** (`<aside class="quotebox dense">`) when they hold 3+ quotes
  or long ones, which steps the quote size down so they fit.
- **Per-quote attribution** when quotes in one box come from different speakers: wrap each
  as `<div class="quote-wrap"><p class="quote">…</p><p class="qby">- Speaker</p></div>`,
  then a single `<p class="src">…</p>` for provenance at the bottom. For one shared source,
  skip `quote-wrap` and just use `<p class="quote">` lines + the `src` line.
- **Cite the real source**, not a file path: "Sam Altman - Written testimony, U.S. Senate
  Judiciary Subcommittee, 16 May 2023", not `sources/altman.md`. Keep quotes **verbatim**;
  if a quote is from secondary coverage or an excerpt, say so in the attribution.
- **Titles don't repeat the eyebrow.** A section's number/kind lives in the small top-left
  eyebrow (`Pillar 2`), so the `<h3 class="card-title">` is just the name
  ("Regulatory Politics & Capture"), optionally with a one-line italic `.pillar-sub`
  subtitle beneath.
- **Pillar / argument slides are single-column** (`.papers`, a vertical list of
  paper-blocks), not a two-column split — readability over density.
- **Bullets sit a touch large** for a lecture (so they read from the back of a room) and
  wrap at a comfortable width, not the full 20".
- **Honesty on slides:** when a claim is disputed or a source is partial/paywalled, add a
  short bullet or attribution saying so rather than overstating.

## Component catalogue

Each lives in `assets/template.html` — copy the markup from there. Pick by job:

- **Cover** (`.cover-*`): the four accent lines, a mono kicker, a big Archivo title, a
  byline + subtitle bottom-left. The deck's title slide.
- **About / intro** (`.about-*`): a hand-drawn purple SVG circle around a short title on the
  left, a few spaced statements (bold key terms, last line in purple `.hl`) on the right.
- **Part divider** (`.slide.plum` + `.div-*`): full purple, "Part N" + one-line sub. Marks
  the big sections of a talk.
- **Period / section divider** (`.slide.plum` + `.div-*`): same, for a date range or theme
  ("May 2023"). Vary the four `.div-lines` colours.
- **Bullet slide** (`.brief.lg`): title + full-width bullets. For an opener/argument laid
  out as prose points (e.g. a paradox or a setup).
- **Four-item schema** (`.lens-grid`): a 2×2 grid of tinted cards, each a number/eyebrow +
  name + one-liner, with an arc line beneath. Use instead of a bare bullet list when you're
  previewing a set of N things.
- **Quote card** (`.card-grid` → `.info` left, `.quotebox` right): eyebrow (actor · date) +
  title; left = Context + "In brief" bullets; right = verbatim quotes in a tinted box +
  source. The workhorse for an evidence/episode slide.
- **Paper-led pillar** (`.papers` of `.paper` blocks): a title + italic subtitle, then each
  source as a bold heading with its related bullets. For a theory/framework point grounded
  in named readings.
- **NPF-style framework table** (`.npf` rows + `.shift` chips): a labelled row list
  (role → meaning) plus two callout chips. Good for "here's the tool" then "here's it
  applied" pairs; generalises to any skeleton-then-fill explanation.
- **Sidebar card**: a quote card used for a themed aside; identical structure to the quote
  card.

## Workflow

**Build → QA → publish → PDF.**

- **QA by screenshot (do this before publishing).** You can't trust a deck you wrote
  without seeing it, and the browser preview of a local file only renders a static snapshot
  (no JS nav) — and renders a snapshot **only for files inside the user's project folder**.
  So, to check a slide: write a tiny temp HTML with the deck's `<style>` blocks + that one
  `<section>` into the project folder, open it in the browser pane, screenshot, then delete
  the temp file. A snapshot wider than ~760px shows the two-column layouts correctly;
  narrower trips the mobile stack. Check the trickiest slides (dense quote boxes, the
  longest pillar, any divider with a long title).
- **Publish** the HTML with the Artifact tool. Republish the same path to keep the URL.
- **Export PDF:** `node scripts/export_pdf.js <deck.html> <out.pdf>` — uses puppeteer,
  prints backgrounds, one 16:9 slide per page (the deck's `@media print` block handles
  pagination; nav/dots are hidden). Verify a page with `pdftoppm -jpeg -r 80 out.pdf p`
  and look at it. Puppeteer pulls the fonts over the network; if offline they fall back, so
  the user's own browser Print-to-PDF (Landscape, Background graphics on) is the fallback.

## Swapping the logo

The template embeds the current Artifacts logo. To use a different wordmark, run
`python3 scripts/logo_variants.py <logo.png>` — it trims the image, makes a transparent
black variant (for cream slides) and a transparent cream variant (for purple slides),
downscales them, and prints the two `data:` URIs to paste into the `.mark` /
`.plum .mark` rules in the deck's CSS. (`assets/artifacts-logo.png` is a reference copy of
the current mark, already transparent; pass your own cream-background wordmark to the
script to generate fresh variants.)
