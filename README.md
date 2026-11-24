# Ship It Friday

[![Rank](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/tacinbau/ship-it-friday/rank.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a)
[![Reward](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/tacinbau/ship-it-friday/reward.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a)
[![Ship It Friday](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a)

Entry for the [Ship It Friday](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a) competition on make.fun.

## What it does

`main.ts` writes a single line — the funniest git commit message an AI
coding agent writes in the moment before it breaks production on a Friday —
to `/output/entry.txt`.

The line:

```
feat: Friday deploy - no tests, no fear, no rollback plan
```

57 characters, one line, no trailing whitespace. It reads like a real
commit message (`feat:` scope, imperative mood) while the agent cheerfully
ships something it absolutely should not ship on a Friday: no tests, no
fear, and — the punchline — no rollback plan.

## Run

```sh
node main.ts
```

Requires Node 22.18+ (runs TypeScript as-is). Writes
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set).
