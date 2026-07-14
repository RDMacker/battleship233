# battleship233

Content operations workspace for Rich's brands: GSMBC (mountain bike coaching), sportsense (remote coaching infrastructure), and Pub Golf Pro. Brand briefs live at the repo root (`claude gsmbc.md`, `claude sportsense.md`, `pub gold brand.md`).

## Content Think Tank (`/brainstorm`)

A multi-agent brainstorm that simulates sitting in a room with a team of marketers, grounded in live web research rather than stale knowledge. Run it in Claude Code:

```
/brainstorm gsmbc
/brainstorm sportsense YouTube series ideas
/brainstorm pubgolf stag do season
```

What happens in a session:

1. **Research** — four trend scouts sweep the web in parallel: niche news from the last 60 days, what formats are currently overperforming on YouTube/Instagram/blogs, what the audience is actually arguing about on Reddit and forums, and trends from completely unrelated domains worth stealing.
2. **Ideate** — five marketer personas pitch off the pooled research: the analyst (proven safe bets), the maverick (only wild boldness 4-5 ideas), the insider (ideas traceable to real audience conversations), the thought leader (contrarian, authority-building positions), and the producer (platform-native formats and repeatable series).
3. **Challenge** — three adversarial critics score every idea: a skeptic who kills sameness, an audience advocate who scores real engagement likelihood, and an operator who checks a founder-led team can actually produce it on brand.
4. **Synthesize** — a facilitator merges everything into a ranked report, including a mandatory "wildcards worth the risk" section so the out-there ideas survive the critics.

Reports land in `brainstorms/<brand>-<date>.md` with a top-three picks list, a slate grouped by channel, and what got killed and why.

The room's structure lives in `.claude/workflows/content-think-tank.js`; the entry point and per-brand setup live in `.claude/skills/brainstorm/SKILL.md`.
