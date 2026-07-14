---
name: brainstorm
description: Run a multi-agent content think tank for one of Rich's brands (gsmbc, sportsense, pubgolf). Spawns live-web trend scouts, five distinct marketer personas, adversarial critics, and a facilitator, then saves a ranked slate of content ideas for blogs, YouTube, and Instagram. Use whenever Rich asks to brainstorm content, generate content ideas, or "get the room together" for a brand.
argument-hint: <brand> [optional focus, e.g. "YouTube series ideas" or "spring race season"]
---

# Content Think Tank

This skill simulates a room of five marketers brainstorming content for one brand, backed by live trend research. It orchestrates the whole session through the workflow at `.claude/workflows/content-think-tank.js` and writes the resulting report into `brainstorms/`.

## Step 1: Resolve the brand

Parse the first argument as the brand key. Everything after it is the optional session focus.

| Key (accept close variants) | Brand file to read |
|---|---|
| `gsmbc` | `claude gsmbc.md` |
| `sportsense` | `claude sportsense.md` (also read `sportsense-reddit-aeo-strategy.md` and fold its key takeaways in) |
| `pubgolf` / `pubgolfpro` | `pub gold brand.md` |

If no brand is given, ask which brand the session is for rather than guessing. If Rich asks for a session "across everything", run the workflow once per brand rather than mixing brands in one room.

## Step 2: Build the brand brief

Read the brand file(s) and distill a brief of roughly 400 to 700 words containing: what the brand is and who runs it, the audience and what they respond to, the channels it publishes to, the voice and the non-negotiable writing rules (banned words, no em dashes, no emojis, etc.), current positioning and messaging priorities, and anything from the file about what has worked or flopped before. Quote writing rules exactly; the agents downstream must obey them when writing titles and hooks.

## Step 3: Run the workflow

Get today's date with the `date +%Y-%m-%d` command (the workflow cannot read the clock itself). Then invoke the Workflow tool:

```
Workflow({
  scriptPath: ".claude/workflows/content-think-tank.js",
  args: {
    brand: "<brand key>",
    brandBrief: "<the distilled brief>",
    date: "<YYYY-MM-DD>",
    focus: "<the focus text, or omit>",
    ideasPerPersona: 6
  }
})
```

The workflow runs four research scouts in parallel (niche news, platform formats, audience conversations, and out-of-lane inspiration), then five ideator personas (analyst, maverick, insider, thought leader, producer), then three adversarial critics over the full slate, then a facilitator who writes the report. Expect roughly 13 agents; this is intentional. Do not re-implement the phases inline; the script is the source of truth for the room's structure.

## Step 4: Save and deliver

When the workflow returns:

1. Write `result.report` to `brainstorms/<brand>-<YYYY-MM-DD>.md` (create the directory if needed; if the file exists, append `-2`, `-3`, etc.).
2. Tell Rich the headline: the three "if you only make three things" picks, the strongest wildcard, and where the full report lives. Keep it short; the report carries the detail.
3. If this session has access to the SM Content Engine tools (`mcp__sm---content-app__*`), offer to push the top ideas into it with `create_idea`; only do so if Rich says yes.

## Rules

- Never skip the research phase or substitute training-data knowledge for it; the entire value of the session is that it is current.
- The report must respect each brand's writing rules (GSMBC and sportsense: flowing prose, no em dashes, no emojis, banned-word lists; sportsense is always lowercase).
- Wildcard and high-boldness ideas are a feature, not noise. If a run comes back with only safe ideas, that run failed; re-run the ideation with a note to the personas rather than shipping a bland slate.
- Cost awareness: one session is roughly 13 agents with web research. Do not loop sessions or fan out across brands unless Rich asked for that.
