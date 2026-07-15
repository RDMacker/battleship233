# battleship233

Content operations workspace for Rich's brands: GSMBC (mountain bike coaching), sportsense (remote coaching infrastructure for MTB coaches), and Pub Golf Pro (a free web app that turns a pub crawl into a round of golf). Brand briefs live at the repo root (`claude gsmbc.md`, `claude sportsense.md`, `pub gold brand.md`), with a supporting Reddit and AEO strategy doc for sportsense (`sportsense-reddit-aeo-strategy.md`).

## Brands and channels

Each brand publishes on a different mix, and the brainstorm builds its brief around the real one so a session never defaults to a channel a brand does not run:

- **GSMBC** — Squarespace blog, a Monday/Thursday newsletter, monthly Instagram course-schedule carousels (built in Canva), and Pinkbike feature articles. No YouTube channel, and its Instagram is carousels, not talk-to-camera Reels.
- **sportsense** (always lowercase) — predominantly Instagram and Meta (feed, Reels, carousels, Stories), then YouTube Shorts, plus email and the monthly newsletter. Short vertical video and Instagram-native formats lead; a full long-form YouTube series is out of scope for now.
- **Pub Golf Pro** — predominantly Instagram and Meta, and the mainstay is meme humour: male-camaraderie movie moments and reaction images with a caption laid over the top, riffing on drinking, the crew, the competition, and the wooden spoon. Its own graphic assets (the shareable scorecard and recap, how-to-play cards) stay flat and template-based. Stag dos are one occasion among several, not the default frame.

## Content Think Tank (`/brainstorm`)

A multi-agent brainstorm that simulates sitting in a room with a team of marketers, grounded in live web research rather than stale knowledge. Run it in Claude Code, optionally with a focus after the brand:

```
/brainstorm gsmbc
/brainstorm sportsense reels hooks for skeptical coaches
/brainstorm pubgolf movie-moment memes
```

What happens in a session:

1. **Research** — four trend scouts sweep the web in parallel: niche news from the last 60 days, what formats are currently overperforming on the brand's channels, what the audience is actually arguing about on Reddit and forums, and trends from completely unrelated domains worth stealing.
2. **Ideate** — five marketer personas pitch off the pooled research: the analyst (proven safe bets), the maverick (only wild boldness 4-5 ideas), the insider (ideas traceable to real audience conversations), the thought leader (contrarian, authority-building positions), and the producer (platform-native formats and repeatable series).
3. **Challenge** — three adversarial critics score every idea: a skeptic who kills sameness, an audience advocate who scores real engagement likelihood, and an operator who checks a founder-led team can actually produce it on brand.
4. **Synthesize** — a facilitator merges everything into a ranked report, including a mandatory "wildcards worth the risk" section so the out-there ideas survive the critics.

Reports land in `brainstorms/` with a top-three picks list, a slate grouped by channel, a wildcards section, and what got killed and why. Reports are organised by the model that ran the session: `brainstorms/opus/<brand>-<date>-opus.md` for the Opus runs and `brainstorms/fable/<brand>-<date>-fable.md` for the Fable comparison runs.

The room's structure lives in `.claude/workflows/content-think-tank.js`; the entry point, the per-brand channel scope, and the brief setup live in `.claude/skills/brainstorm/SKILL.md`.
