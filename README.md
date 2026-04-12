# Artifacts — Claude Context

Claude Code configuration for [Artifacts](https://artifactstech.substack.com), a bi-weekly newsletter about the design of technology by Lorenzo Ancona.

## What's in here

```
CLAUDE.md              # Newsletter brief, voice, topics, past issues index
artifacts/             # Full text of the 12 most recent issues
commands/
  artifacts-polish.md  # /artifacts-polish — reviews drafts for style and structure
  artifacts-linkedin.md # /artifacts-linkedin — drafts LinkedIn posts from newsletter issues
```

## Setup on a new machine

Clone into your `.claude` directory (or merge with an existing one):

```bash
git clone https://github.com/Artifacts7/Artifacts-context.git ~/.claude
```

If `~/.claude` already exists:

```bash
cd ~/.claude
git init
git remote add origin https://github.com/Artifacts7/Artifacts-context.git
git pull origin main
```

Claude Code picks up `CLAUDE.md` and `commands/` automatically on next launch.

## Keeping it in sync

Any edits to `CLAUDE.md`, skills, or new posts saved to `artifacts/` are tracked. Push updates with:

```bash
cd ~/.claude && git push
```
