export const meta = {
  name: 'content-think-tank',
  description: 'Simulated marketing think tank: trend scouts, five ideator personas, adversarial critics, and a facilitator produce a ranked content idea slate for one brand',
  whenToUse: 'Invoked by the /brainstorm skill with args {brand, brandBrief, date, focus, ideasPerPersona}. Requires live web access for trend research.',
  phases: [
    { title: 'Research', detail: 'four trend scouts sweep niche news, platform formats, audience conversations, and adjacent domains' },
    { title: 'Ideate', detail: 'five marketer personas pitch ideas off the pooled research' },
    { title: 'Challenge', detail: 'three adversarial critics score the full slate' },
    { title: 'Synthesize', detail: 'facilitator merges everything into a ranked report' },
  ],
}

// ---- inputs -------------------------------------------------------------

if (!args || !args.brand || !args.brandBrief || !args.date) {
  throw new Error('content-think-tank requires args: {brand, brandBrief, date, focus?, ideasPerPersona?}')
}

const brand = args.brand
const brief = args.brandBrief
const today = args.date
const perPersona = Math.min(args.ideasPerPersona || 6, 10)
const focusLine = args.focus
  ? `Rich asked this session to lean toward: ${args.focus}. Weight your work accordingly, but do not ignore everything else.`
  : 'No specific focus was requested; cover the brand broadly.'

const COMMON = [
  `Today's date is ${today}. Anything you cite as "current" must actually be current, not from your training data alone.`,
  `THE BRAND you are working for:\n${brief}`,
  focusLine,
].join('\n\n')

// ---- schemas ------------------------------------------------------------

const RESEARCH_SCHEMA = {
  type: 'object',
  required: ['summary', 'findings'],
  properties: {
    summary: { type: 'string', description: 'Three to five sentences: the state of play through this lens right now' },
    findings: {
      type: 'array',
      maxItems: 12,
      items: {
        type: 'object',
        required: ['insight', 'source', 'content_angle'],
        properties: {
          insight: { type: 'string', description: 'The specific, dated fact or trend observed' },
          source: { type: 'string', description: 'Where this was found (URL or publication name)' },
          content_angle: { type: 'string', description: 'One sentence on how this could become content for this brand' },
        },
      },
    },
  },
}

const IDEAS_SCHEMA = {
  type: 'object',
  required: ['ideas'],
  properties: {
    ideas: {
      type: 'array',
      maxItems: 10,
      items: {
        type: 'object',
        required: ['title', 'format', 'concept', 'hook', 'why_now', 'boldness'],
        properties: {
          title: { type: 'string', description: 'Working title, written in the brand voice' },
          format: { type: 'string', enum: ['blog', 'youtube', 'instagram', 'email', 'podcast', 'pinkbike', 'other'] },
          concept: { type: 'string', description: 'Three to six sentences: what the piece actually is, what it covers, what makes it different' },
          hook: { type: 'string', description: 'The opening line, thumbnail concept, or first three seconds that earns attention' },
          why_now: { type: 'string', description: 'The trend, event, or conversation from the research that makes this timely' },
          boldness: { type: 'integer', minimum: 1, maximum: 5, description: '1 = proven safe bet, 5 = genuinely out there' },
        },
      },
    },
  },
}

const CRITIQUE_SCHEMA = {
  type: 'object',
  required: ['reviews'],
  properties: {
    reviews: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'score', 'verdict', 'note'],
        properties: {
          id: { type: 'string', description: 'The idea id being reviewed, copied exactly' },
          score: { type: 'integer', minimum: 1, maximum: 10 },
          verdict: { type: 'string', enum: ['advance', 'rework', 'kill'] },
          note: { type: 'string', description: 'One or two sentences: the sharpest thing you can say about this idea, good or bad. If rework, say what the fix is.' },
        },
      },
    },
  },
}

// ---- phase 1: research sweep -------------------------------------------
// Barrier is deliberate: every ideator needs the POOLED research digest.

phase('Research')
log(`Sending four trend scouts out for ${brand}...`)

const LENSES = [
  {
    key: 'niche-news',
    charge: 'What actually happened in this brand\'s niche in the last 60 days? News, product launches, race results, rule changes, viral moments, controversies, notable people saying notable things. Bias hard toward the last 14 days: recent items win when relevance is comparable, and the majority of your findings should come from that window, with the older tail reserved for stories that are still actively developing or clearly still driving conversation. Prioritize things with a date attached.',
  },
  {
    key: 'platform-formats',
    charge: 'What content formats are overperforming RIGHT NOW on the channels this brand publishes to (YouTube, Instagram Reels and carousels, blogs and search/AEO)? Hook structures, video lengths, series formats, algorithm shifts, creators in or near this niche who are suddenly growing and why.',
  },
  {
    key: 'audience-voice',
    charge: 'What is this brand\'s audience actually talking about right now? Search Reddit, niche forums, and comment sections. Surface live arguments, repeated questions, complaints, myths people still believe, and strong opinions that get engagement. Quote or closely paraphrase real phrasing where you can.',
  },
  {
    key: 'outside-the-lane',
    charge: 'Look OUTSIDE this brand\'s niche entirely. What trends, formats, or ideas from unrelated domains (other sports, music, gaming, finance, food, science communication, comedy) are working and could be imported? The goal is raw material for lateral, unexpected content nobody in this niche is making yet.',
  },
]

const research = (await parallel(LENSES.map(lens => () =>
  agent(
    [
      `You are a trend researcher on a content strategy team. Your lens: ${lens.key}.`,
      lens.charge,
      'Use web search and page fetches. Do multiple searches from different angles before concluding. Every finding needs a source. Discard anything you cannot tie to the present moment.',
      COMMON,
    ].join('\n\n'),
    { label: `scout:${lens.key}`, phase: 'Research', schema: RESEARCH_SCHEMA }
  ).then(r => ({ lens: lens.key, ...r }))
))).filter(Boolean)

if (research.length === 0) {
  throw new Error('All research scouts failed; aborting rather than brainstorming without current context.')
}

const digest = research.map(r =>
  `### Lens: ${r.lens}\n${r.summary}\n` +
  r.findings.map(f => `- ${f.insight} (source: ${f.source}) — angle: ${f.content_angle}`).join('\n')
).join('\n\n')

log(`Research pooled: ${research.reduce((n, r) => n + r.findings.length, 0)} findings across ${research.length} lenses.`)

// ---- phase 2: the room -------------------------------------------------
// Five marketers with genuinely different instincts pitch off the same research.

phase('Ideate')

const PERSONAS = [
  {
    key: 'analyst',
    voice: 'You are the performance marketer in the room. You only pitch ideas with evidence behind them: formats already working, search and AEO demand you can name, hooks with a track record. Your boldness scores should mostly be 1-2. You are the "what will definitely work" person, and you back every pitch with the specific research finding that supports it.',
  },
  {
    key: 'maverick',
    voice: 'You are the wildcard in the room. Every idea you pitch must be boldness 4-5: cross-domain mashups, formats nobody in this niche uses, ideas that make the rest of the room nervous. No safe bets allowed from you. An idea that merely sounds creative but has been done before is a failure; steal structures from completely unrelated corners of the internet and force them onto this brand.',
  },
  {
    key: 'insider',
    voice: 'You are the audience empath in the room. You pitch ideas that come directly from what the audience is already saying: their arguments, their repeated questions, their complaints, the myths they still believe. Every idea must be traceable to a real audience conversation in the research. Your superpower is making the audience feel seen; your ideas should read like eavesdropping.',
  },
  {
    key: 'thought-leader',
    voice: 'You are the strong-opinions strategist in the room. You pitch contrarian essays, industry critiques, and stake-in-the-ground positions that build authority: the pieces that get quoted, argued with, and remembered. Especially for blog and long-form. Each pitch should name the conventional wisdom it attacks and the credible position the brand takes instead. No hot takes without substance.',
  },
  {
    key: 'producer',
    voice: 'You are the platform-native craftsperson in the room. You think in formats and mechanics first: recurring series, episode structures, thumbnails, carousel arcs, hooks engineered for the first three seconds. You pitch ideas where the FORMAT is the innovation, things that only work because of how the platform works, and repeatable series rather than one-offs.',
  },
]

const rawSlates = (await parallel(PERSONAS.map(p => () =>
  agent(
    [
      `You are one of five marketers in a content brainstorm for this brand. ${p.voice}`,
      `Pitch exactly ${perPersona} ideas. Spread them across the brand's actual channels (blog, YouTube, Instagram, email where relevant). Write titles and hooks in the brand's voice and respect its writing rules.`,
      'Do not pitch generic ideas that could apply to any brand in any niche. Every idea must be specific to this brand and grounded in the research below.',
      `## Pooled research from the trend scouts\n\n${digest}`,
      COMMON,
    ].join('\n\n'),
    { label: `pitch:${p.key}`, phase: 'Ideate', schema: IDEAS_SCHEMA }
  ).then(r => ({ persona: p.key, ideas: r.ideas }))
))).filter(Boolean)

const slate = []
for (const s of rawSlates) {
  s.ideas.forEach((idea, i) => slate.push({ id: `${s.persona}-${i + 1}`, persona: s.persona, ...idea }))
}

if (slate.length === 0) {
  throw new Error('No ideas produced; aborting.')
}
log(`${slate.length} ideas on the table from ${rawSlates.length} personas.`)

// ---- phase 3: adversarial review ---------------------------------------
// Critics see the FULL slate (cross-idea context is the point: sameness,
// overlap, and relative strength only show up across the whole table).

phase('Challenge')

const CRITICS = [
  {
    key: 'skeptic',
    charge: 'You are the jaded skeptic. Your job is to kill sameness. For each idea ask: has this exact piece been made a hundred times already? Is the "twist" actually a twist? Would this blend invisibly into the feed? Be brutal about generic ideas wearing a costume. Reward only genuine novelty or exceptional execution of a proven format.',
  },
  {
    key: 'audience-advocate',
    charge: 'You represent the actual audience, not the marketing team. For each idea ask: would the real reader or viewer stop scrolling for this? Does it answer something they actually care about, or something the brand wishes they cared about? Score on likelihood of genuine engagement (clicks, saves, shares, replies), not on how clever it sounds in a meeting.',
  },
  {
    key: 'operator',
    charge: 'You are the pragmatic operator. This is a founder-led operation, not an agency with a production team. For each idea ask: can one person realistically produce this well? Does it fit the brand voice and its stated writing rules? Does it fit the channel it claims? Is the effort proportional to the likely payoff? Flag ideas that are great on paper and undeliverable in practice, and say what a deliverable version would look like.',
  },
]

const slateForReview = slate.map(i =>
  `[${i.id}] (${i.format}, boldness ${i.boldness}, pitched by ${i.persona})\nTitle: ${i.title}\nConcept: ${i.concept}\nHook: ${i.hook}\nWhy now: ${i.why_now}`
).join('\n\n')

const critiques = (await parallel(CRITICS.map(c => () =>
  agent(
    [
      `You are an adversarial reviewer in a content brainstorm. ${c.charge}`,
      'Review EVERY idea below and return one review per idea, using each idea\'s exact id. Verdicts: advance (strong as-is), rework (good core, specific fix needed), kill (not worth pursuing). Do not grade on a curve of politeness; a slate where everything advances means you failed.',
      `## The slate\n\n${slateForReview}`,
      COMMON,
    ].join('\n\n'),
    { label: `critic:${c.key}`, phase: 'Challenge', schema: CRITIQUE_SCHEMA }
  ).then(r => ({ critic: c.key, reviews: r.reviews }))
))).filter(Boolean)

for (const idea of slate) {
  const reviews = critiques.flatMap(c =>
    c.reviews.filter(r => r.id === idea.id).map(r => ({ critic: c.critic, score: r.score, verdict: r.verdict, note: r.note }))
  )
  idea.reviews = reviews
  idea.avgScore = reviews.length ? Math.round((reviews.reduce((n, r) => n + r.score, 0) / reviews.length) * 10) / 10 : null
  idea.kills = reviews.filter(r => r.verdict === 'kill').length
}

const advanced = slate.filter(i => i.kills === 0).length
log(`Critics done: ${advanced} ideas clean, ${slate.length - advanced} took at least one kill vote.`)

// ---- phase 4: synthesis --------------------------------------------------

phase('Synthesize')

const synthesisInput = slate.map(i =>
  `[${i.id}] avg ${i.avgScore}/10, ${i.kills} kill vote(s) — (${i.format}, boldness ${i.boldness}, by ${i.persona})\n` +
  `Title: ${i.title}\nConcept: ${i.concept}\nHook: ${i.hook}\nWhy now: ${i.why_now}\n` +
  i.reviews.map(r => `  - ${r.critic} [${r.verdict}, ${r.score}/10]: ${r.note}`).join('\n')
).join('\n\n')

const report = await agent(
  [
    'You are the facilitator of a content brainstorm that just finished. Below is the full record: pooled trend research, every idea pitched, and every critic review with scores.',
    'Write the final session report as a complete markdown document. Structure it exactly as:',
    [
      '1. `# Content Think Tank: <brand> — <date>` then a short paragraph on the state of play from the research (what is moving in the niche right now, with the strongest dated findings).',
      '2. `## The slate` — the top ideas ordered by strength, grouped under `### Blog`, `### YouTube`, `### Instagram` (and `### Email` or other channels only if strong ideas exist there). For each idea: bold title, format, boldness rating, the concept in two or three sentences, the hook, why now, and one line of what the critics said (incorporate rework fixes directly into the concept rather than quoting them). Include roughly the best half of the slate; drop anything with two or more kill votes unless you defend it below.',
      '3. `## Wildcards worth the risk` — two to four high-boldness ideas that critics were harsh on but that have real upside if they land. Say plainly what the risk is and why it might be worth taking. This section must never be empty; the whole point of the room is that some out-there ideas survive.',
      '4. `## Killed, and why` — a short paragraph (not a list of every corpse) on the patterns in what got killed, so future sessions avoid the same traps.',
      '5. `## If you only make three things this month` — your three picks across all channels, one line each on why.',
    ].join('\n'),
    'Merge near-duplicate ideas into their strongest version and note the merge. Write titles and hooks in the brand voice and follow the brand\'s writing rules in your own prose too (this brand has strict style rules; respect them, including no em dashes if the brief says so). Return ONLY the markdown document, no preamble.',
    `## Pooled research\n\n${digest}`,
    `## Full slate with reviews\n\n${synthesisInput}`,
    COMMON,
  ].join('\n\n'),
  { label: 'facilitator', phase: 'Synthesize' }
)

log('Report drafted.')

return {
  report,
  stats: {
    brand,
    date: today,
    researchFindings: research.reduce((n, r) => n + r.findings.length, 0),
    ideasPitched: slate.length,
    cleanAdvances: advanced,
  },
}
