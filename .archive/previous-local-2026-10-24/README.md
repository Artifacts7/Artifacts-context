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

Clone into `~/projects/artifacts/`:

```bash
mkdir -p ~/projects
git clone https://github.com/Artifacts7/Artifacts-context.git ~/projects/artifacts
```

Then symlink the commands so they're available in all Claude Code sessions:

```bash
ln -s ~/projects/artifacts/commands ~/.claude/commands
```

Claude Code picks up `CLAUDE.md` automatically when you open a session from `~/projects/artifacts/`. The commands are available globally via the symlink.

## Keeping it in sync

Any edits to `CLAUDE.md`, commands, or new posts saved to `artifacts/` are tracked. Push updates with:

```bash
cd ~/projects/artifacts && git push
```
