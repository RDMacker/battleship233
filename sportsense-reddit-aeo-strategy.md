# SportSense — Reddit Posting & Answer Engine Optimization (AEO) Strategy

*A comprehensive, research-backed implementation plan for a sports analytics/stats app targeting coaches, coaching businesses, and instructor/coaching-certification communities.*

*Prepared: July 2026. Based on a fan-out deep-research pass (23 sources fetched, 66 claims extracted, 25 adversarially verified — 15 confirmed, 10 refuted). Claims are tagged **[Verified]**, **[Practitioner heuristic]**, or **[Strategy/inference]** so you know how much weight each carries.*

---

## 0. Read this first — the strategic thesis

Two channels that most teams run separately are actually **one flywheel**:

1. **Reddit** is now the single most-cited source in AI answers. A Semrush study of 150,000 citations across 5,000 keywords found Reddit appears in **40.1%** of AI responses — ahead of Wikipedia (26.3%) and YouTube (23.5%). **[Verified]**
2. **AEO** (Answer Engine Optimization) is the practice of structuring content so AI engines deliver *your* answer as *the* answer — not just rank you in blue links. The goal is to *become the cited answer*. **[Verified]**

Because Reddit content flows directly into the major AI systems through licensing deals — Google (~$60M/yr, announced Feb 2024) and OpenAI (~$70M/yr, estimated) **[Verified]** — a well-placed, genuinely helpful Reddit answer about "best video analysis app for coaches" can end up quoted by ChatGPT, Gemini, and Google's AI Overviews. Reddit is therefore both a **conversion channel** (coaches read it and sign up) and an **AEO channel** (AI cites it and recommends you).

**The catch:** Reddit ruthlessly punishes self-promotion. The entire strategy below is built around *earning* the right to be recommended, not buying or spamming it — which is also, conveniently, what makes the citations durable.

> **One critical framing correction from the research:** the "40.1%" figure is *citation frequency* (share of AI responses where Reddit appears at least once), **not** 40% of total citation volume. On a total-share basis Reddit is closer to ~1.8–6.6% per platform, and shares are **highly volatile** over time. Treat every percentage in this report as a snapshot to re-measure, not a constant. **[Verified caveat]**

---

## 1. The Reddit Landscape for SportSense

### 1.1 How to think about the target communities

Your audience is **not** in the giant general-sports subs (r/sports, r/nba). Those are ranked by size and dominated by fan chatter — low intent, high noise. Your buyers cluster in smaller, higher-intent *practitioner* communities. **[Strategy/inference — the research confirmed general-sports directories surface big fan subs first, not niche coaching ones, so those are the wrong target.]**

> **Important honesty note:** the deep-research pass was **not** able to validate a specific, current, named list of coaching/certification subreddits with verified subscriber counts — the directory sources it found were rated unreliable. The list below is a **practitioner-informed starting map** you must verify live (open each sub, read the sidebar rules, check the subscriber count and mod activity) before acting. Do not treat these numbers as confirmed.

### 1.2 Target subreddit map (verify each before use)

**Tier 1 — Coaching craft & profession (highest intent)**
- r/coaching — general coaching business/practice
- r/StrengthandConditioning — S&C coaches, evidence-oriented, strict about low-effort promo
- r/personaltraining — PTs, cert questions, client tools
- r/personaltrainers — overlapping PT community
- r/CoachingYouthSports / r/coachingfootball / r/BasketballCoaching / r/soccercoaching — sport-specific coaching
- Sport-specific coaching subs for whatever sports SportSense covers (e.g., r/volleyballcoaches, r/hockeycoaching)

**Tier 2 — Certification & career path**
- r/personaltraining and r/NASM / r/ACE-adjacent cert discussion threads (certs are often discussed *inside* the PT subs rather than in dedicated cert subs — verify)
- r/Fitness (huge, very strict promo rules — comment-only territory)

**Tier 3 — Adjacent / analytics / tooling**
- r/SportsAnalytics — data-oriented, values methodology
- r/sportsbook-adjacent analytics subs (only if SportSense's stats overlap; different audience/intent — likely *not* your coach ICP)
- r/smallbusiness, r/Entrepreneur — for the "coaching *business*" angle (marketing/ops, not craft)

**Tier 4 — Owned ground (build this)**
- A SportSense-run subreddit (e.g., r/SportSense) as a support/community hub. Low reach early, but it's a legitimate place to host announcements and it compounds over years.

**Action:** Before any posting, build a live spreadsheet with columns: *subreddit, subscribers, weekly active, karma gate, account-age gate, self-promo policy (from sidebar/wiki), AutoMod strictness observed, mod tone, allowed post types, promo/AMA thread cadence.* This becomes your rules-of-engagement doc.

### 1.3 The rules that shape everything

| Rule | What the research actually supports | Implication for SportSense |
|---|---|---|
| **9:1 / 90:10 self-promo norm** | The 90/10 norm is real and widely cited, but it is a **floor**, not a ceiling. Safer long-term operators run **19:1 or 95:5** (one product mention per ~20 helpful contributions); strict subs enforce ~99:1. **[Verified]** Note: Reddit removed the *explicit* 9:1 language from official guidance, replacing it with a qualitative "be a redditor with a website, not a website with a Reddit account" spam policy. The numeric ratios are **practitioner heuristics**, not official rules. **[Verified caveat]** | Budget **~1 promotional mention per 20 genuinely helpful actions**, per account, per community. |
| **Karma & account-age gates** | Many subreddits gate posting behind minimum karma (commonly **50–500**) and account age (commonly **7–30 days**), enforced via AutoModerator. Reddit doesn't publish exact thresholds. **[Verified]** | New accounts can't just show up and post. Warm first (§2.1). |
| **Account warming** | Spend **2–4 weeks** of genuine participation (commenting, answering, sharing third-party content, building karma) before any promotion. **[Verified — this is the conservative/mainstream figure; some sources say 30–60 days.]** | Bake a 2–4 week warm-up into the timeline for every account. |
| **Two-layer enforcement** | Enforcement is (a) **per-subreddit AutoModerator** rules PLUS (b) **sitewide spam detection** that flags patterns like the same link posted across many subs or coordinated voting. **[Verified]** | Never drop identical links across subs; never coordinate votes. |
| **Alt accounts = one actor** | Linked alt accounts are treated as one actor. Confirmed ban evasion "almost always results in the permanent suspension of **all** linked accounts, including your main account," and Reddit links accounts via IP, device, browser fingerprint, and behavior. Domain blacklisting is standard. **[Verified — Reddit's own Help docs.]** | **Do not run a fleet of coordinated alt accounts.** This is the single highest-risk mistake and can get your *domain* blacklisted sitewide. |
| **Account health = composite** | There is no single "health score" dashboard. Reddit continuously evaluates a composite: karma history, **Contributor Quality Score (CQS)** (a real, official, sitewide five-tier trust classifier exposed to AutoMod), account age, posting patterns, and prior shadowbans/suspensions. **[Verified — CQS confirmed in Reddit Help docs.]** *Note: specific claims that CQS "starts new accounts at Medium" and raises shadowban risk "linearly" were **refuted** — don't rely on those specifics.* | Optimize for genuine, sustained, well-received participation. There's no shortcut number to game. |

**Refuted claims — do NOT build the strategy on these** (the research adversarially killed them):
- ❌ That new accounts *must* be 30–60 days old with "a few hundred karma" before *any* link (refuted 1–2; the safer 2–4 week / 50–500 karma range is what's supported).
- ❌ That CQS has publicly-known tier-start behavior or linear shadowban mechanics (refuted 0–3).
- ❌ That a designated "weekly promo thread + 9–19 contributions between posts" is a safe universal default (refuted 1–2 — varies too much per sub).

---

## 2. Reddit Content & Cadence Playbook

### 2.1 Account architecture & warming

- **Use real, disclosed identity.** One or two genuine accounts tied to real SportSense people (e.g., a founder/coach on the team). Bio can honestly say who you are. This is both compliant and more citation-durable than anonymous seeding. **[Strategy — aligned with the verified ethics finding that undisclosed astroturfing risks sitewide bans + domain blacklist.]**
- **Warm for 2–4 weeks before promoting:** comment helpfully, answer questions, upvote, share *others'* useful content, accumulate karma past the common 50–500 gates. **[Verified cadence.]**
- **Never** create coordinated alts to upvote each other or repost the same link. **[Verified — ban-evasion risk.]**

### 2.2 The 5 post/comment types, ranked by safety-to-value

1. **Comment-first, answer real questions (safest, do most).** Find threads where coaches ask "how do I track/analyze X" and give a genuinely complete answer. Mention SportSense only when it's the honest best answer, disclosed ("full disclosure, I work on SportSense"). This is the workhorse — it builds karma, trust, *and* is exactly the format AI engines retrieve and cite.
2. **Value posts (original, non-promotional).** Share a genuinely useful artifact: a breakdown of how to read a stat, a free template, a data study ("we analyzed X across Y games"). No hard CTA. Earns authority and often gets cited.
3. **Case studies / results.** "Here's how a youth coach cut film-review time from 4 hrs to 40 min" — story-first, product as supporting detail, disclosed. Fits mid-funnel.
4. **AMAs.** A credentialed SportSense person (e.g., a coach or sports scientist) does an AMA in a coaching sub *with mod permission*. High trust, high reach, must be pre-cleared with mods.
5. **Direct product posts (rarest).** Only in subs that explicitly allow it, or in designated promo/Feedback threads, and only within your ~1:20 budget.

### 2.3 Avoiding bans & shadowbans

- Vary where and how you mention the product; **never** paste the same link/blurb across subs (top sitewide spam trigger). **[Verified]**
- Respect each sub's karma/age gate and read the sidebar + wiki rules *before* posting. **[Verified]**
- Check for shadowban periodically (log out and view your profile; use a shadowban checker).
- If a mod removes something, don't re-post it or argue — adjust. Repeated removals feed the composite health signal. **[Verified — composite account health.]**
- Message mods *first* for anything ambitious (AMA, data study, launching in their sub).

### 2.4 Comment vs. post

Default to **comments** (lower risk, higher retrieval value for AEO — Q&A threads are exactly what LLMs pull). Reserve **posts** for genuinely original value (studies, templates, AMAs). A rough starting mix: **~80% helpful comments, ~15% value posts, ~5% anything overtly promotional**, and even that 5% disclosed. **[Practitioner heuristic, consistent with the verified 95:5 guidance.]**

---

## 3. How Reddit Feeds AEO (the citation pipeline)

**Why Reddit is weighted so heavily:**
- It's the most-cited source in AI answers by frequency (40.1% Semrush). **[Verified]**
- Its content is **licensed directly** into Google (Gemini/AI surfaces) and OpenAI (ChatGPT), so Reddit threads are a first-class input, not just crawled web text. **[Verified]** *(Caveats: the Google deal was reportedly being renegotiated in 2025; the OpenAI figure is an estimate; Google framed its deal partly around search/product access, not solely AI training.)*
- AEO now explicitly requires **participating in community conversations**, not just optimizing your own site — brand presence in Reddit/Quora/forums acts as a trust/grounding signal. **[Verified]**

**Critical nuance — citation shares diverge wildly by engine and are volatile:**
- Perplexity draws ~24% of citations from Reddit; ChatGPT ~5%; Gemini ~0.1% — roughly a **240× spread**. Only ~11% of domains are cited by *both* ChatGPT and Perplexity for the same query; **71% of cited sources appear on only one platform.** **[Verified]**
- Shares move fast: Reddit's ChatGPT citation share reportedly fell ~60% (to ~10%) in Sept 2025; Perplexity's Reddit citations dropped ~86% after an Oct 2025 Reddit lawsuit. **[Verified]**
- **Implication:** you must monitor **each engine separately** and not over-index on any single platform's current Reddit weighting. **[Verified — multi-platform monitoring is mandatory, not optional.]**

**How to structure a Reddit answer so it gets retrieved and cited** **[Strategy/inference, grounded in the verified "become the cited answer" + Q&A-retrieval findings]:**
- **Lead with a direct, self-contained answer** in the first 1–2 sentences (LLMs lift extractable spans).
- **Name specifics** — tools, numbers, steps — so the answer is quotable and comparative ("For film breakdown, coaches usually weigh X vs Y vs SportSense; SportSense is strongest at Z because…").
- **Be balanced and honest**, including tradeoffs and competitors. Grounding value comes from being seen as a credible, non-salesy source.
- **Match the question's language** (how coaches actually phrase it) so it retrieves for those queries.

**Two refuted temptations — don't rely on them:** ❌ that LLMs use Reddit specifically to "verify brand claims" so absence makes you "invisible" (refuted 0–3), and ❌ that the Google deal gives Reddit "preferential weight" in AI (refuted 1–2, marketing inference). The mechanism is real; these specific mechanistic claims are not confirmed.

---

## 4. Broader AEO Implementation (beyond Reddit)

### 4.1 Make your site crawlable by AI engines (table stakes)

- **Allow AI crawlers in robots.txt.** AI engines cannot cite pages they cannot crawl. Key bots: **GPTBot** and **CCBot** (training), **OAI-SearchBot** (the ChatGPT *search/citation* crawler — allowing GPTBot but blocking OAI-SearchBot still kills ChatGPT citations), plus **PerplexityBot/Perplexity-User** and **Google-Extended** (Gemini/Google AI). **[Verified — with the caveat that robots.txt allows all by default, so you only need explicit Allow lines to override a global Disallow.]**
- Verify SportSense isn't accidentally blocking these (common in security-hardened stacks/CDNs).

### 4.2 On-site content structure

- **Question-based headings** that mirror how coaches ask ("How do I track player workload?", "What's the best stats app for youth coaches?"), with a **direct answer immediately under each heading**. **[Verified pattern — structure content as direct question→answer.]**
- **Comparison pages** ("SportSense vs [competitor]") and **statistics pages** (original data coaches will cite) — these are high-citation formats. **[Strategy/inference — general AEO best practice; the research flagged this as only partially validated for the sports-analytics niche specifically.]**
- **Structured data (schema.org / JSON-LD):** use it, but **do not over-invest in specific "magic" schema types** — the claim that FAQPage/HowTo/Article/SpeakableSpecification are the "most important" for LLM parsing was **refuted (0–3)**. Use clean, valid, relevant schema; don't chase a prescriptive list. **[Verified refutation.]**
- **llms.txt** — an emerging convention (a plain-text map of your key content for LLMs). Low cost to add; treat as experimental, not proven. **[Strategy — surfaced in research as emerging, not verified as citation-moving.]**

### 4.3 Off-site presence

- Get genuinely useful content and honest mentions across the third-party surfaces AI reads: Reddit (§2–3), Quora, YouTube, industry blogs, and coaching-cert communities. Balanced third-party corroboration is what grounds AI recommendations. *(Note: the specific "85% of influencing mentions are third-party" stat was **refuted 1–2** — off-site clearly matters, but don't quote that number.)*

---

## 5. Measurement — KPIs & Tools

### 5.1 Reddit KPIs
- Karma growth & account age per account (are you clearing gates?)
- Comment/post upvote ratio and "top comment" rate in target threads
- Removals/AutoMod flags (should trend to ~0)
- Referral traffic + signups attributed to Reddit (UTM links where allowed; otherwise post-signup "how did you hear about us")
- Share of relevant question-threads where SportSense appears with a positive, disclosed mention

### 5.2 AEO / AI-visibility KPIs
- **AI Share of Voice** — % of AI responses (across a fixed prompt set of coach-relevant questions) that mention or cite SportSense, vs competitors. **[Verified concept.]**
- **Citation count & position** per engine — tracked **separately for ChatGPT, Perplexity, Gemini, Google AI Overviews** (because shares diverge ~240×). **[Verified — monitor each engine.]**
- **Sentiment** of AI mentions (recommended vs. merely listed vs. negative)
- **Referral/assisted conversions** from AI surfaces (instrument analytics for AI-referrer traffic; ask new signups if AI recommended you)

### 5.3 Tooling (evaluate; the research flagged pricing/fit as an open question to validate)
- **AI-citation / share-of-voice monitoring:** Profound, Peec AI, Semrush's AI toolkit, and similar GEO/AEO trackers were surfaced as the category. Validate coverage per engine and pricing before committing. **[Strategy — named as the category; specific tool/pricing left as an open question by the research.]**
- **Reddit listening:** GummySearch-style tools to find high-intent coach threads (use for *listening/targeting*, not automation).
- **Analytics:** UTM + your product analytics for Reddit; a custom "AI referrer" segment for AEO.

---

## 6. Phased 90-Day Roadmap

### Phase 0 — Foundation (Weeks 1–2)
- Build the verified subreddit spreadsheet (§1.2) with live rules, gates, and mod norms.
- Fix AI crawler access in robots.txt (GPTBot, OAI-SearchBot, CCBot, PerplexityBot, Google-Extended). **[Verified action.]**
- Stand up baseline AEO measurement: define ~30–50 coach-relevant prompts; record current SportSense citation rate per engine (ChatGPT/Perplexity/Gemini/AI Overviews) as your **baseline**. **[Verified — per-engine baseline.]**
- Create/claim 1–2 real, disclosed Reddit identities; begin warming (comments only).

### Phase 1 — Warm & Listen (Weeks 3–6)
- Continue account warming to clear karma/age gates (target genuine 2–4 weeks of activity). **[Verified.]**
- Comment-first: answer real coaching questions helpfully; **no promotion yet**.
- Publish 2–3 on-site question→answer pages and 1 comparison page and 1 original stats/data study (citation-bait, genuinely useful). **[Strategy.]**
- Message mods where you'd eventually want to post a study or run an AMA.

### Phase 2 — Contribute & Seed Value (Weeks 7–10)
- Begin disclosed value posts and case studies within the ~1:20 promo budget. **[Verified ratio.]**
- Reddit-answer format optimized for citation (direct answer first, specific, balanced). **[Strategy.]**
- Publish the data study as both an on-site page *and* (with mod OK) a Reddit value post — the reinforcing move.
- Re-measure AI citation rate per engine; note which engines pick up Reddit vs. on-site.

### Phase 3 — Amplify & Systematize (Weeks 11–13)
- Run one AMA in a coaching sub (mod-approved) with a credentialed team member.
- Double down on the sub + content formats that are actually converting/citing; drop what isn't.
- Establish an ongoing cadence and a monthly AEO share-of-voice review across all four engines. **[Verified — ongoing multi-engine monitoring.]**
- Decide on paid AEO/monitoring tooling based on Phase 0–2 signal.

**Throughout:** keep the ~1:20 promo ratio, never coordinate alts, never cross-post identical links, re-check the volatile citation landscape monthly.

---

## 7. Risks, Compliance & Ethics

- **Astroturfing / undisclosed promotion is the top risk.** Coordinated alt accounts, self-answered seeded questions, and hidden promotion risk **sitewide suspension of all linked accounts and domain blacklisting** — Reddit's own docs confirm this. **[Verified.]** Genuine, *disclosed* participation is both the compliant path and the more citation-durable one.
- **Disclosure:** when you mention SportSense, say you're affiliated. This satisfies Reddit norms, FTC-style expectations, and — per the research — is what makes AI grounding credible rather than a liability.
- **Channel durability risk:** AI citation shares are volatile and Reddit is in active 2025 litigation with AI companies; Reddit-driven citation could be down-weighted or gated by licensing exclusivity within 12 months. **[Verified caveat / open question.]** → Don't build the whole strategy on Reddit alone; the on-site + broader off-site AEO work (§4) is the hedge.
- **Don't quote the refuted stats** in any external material: the "46.7% of Perplexity / 21% of AI Overviews" figures (refuted 0–3), the "85% third-party mentions" stat (refuted 1–2), "Reddit gets preferential AI weight" (refuted 1–2), and the "most important schema types" list (refuted 0–3) all failed verification.

---

## 8. Open Questions to Resolve Before/During Execution

1. **A validated, named subreddit list** for coaches / coaching businesses / certifications / sports training, with *current* subscriber counts and per-sub rules — the research could not confirm one from reliable sources; you must build it live (§1.2).
2. **Concrete AEO tooling + pricing** (Profound, Peec AI, Semrush AI) and how to instrument attribution from AI mentions → signups.
3. **Which on-site AEO formats actually move citations for a sports-analytics product specifically** (vs. generic best practice) — validate empirically in Phases 1–3.
4. **How durable** Reddit-as-citation-channel is given 2025 litigation and deal renegotiation — re-assess quarterly.

---

## Appendix — Confidence Ledger

**Verified (adversarially confirmed):** Reddit = most-cited source by frequency (40.1%); per-engine citation divergence & volatility; AEO = "become the cited answer" + requires community participation; Google (~$60M) & OpenAI (~$70M est.) licensing; 90:10 is a floor, 95:5/19:1 safer; 2–4 week warming; 50–500 karma / 7–30 day gates; two-layer enforcement; alt-account consolidation & domain blacklist; composite account health incl. official CQS; allow AI crawlers incl. OAI-SearchBot.

**Refuted (do not use):** 30–60 day mandatory warming; CQS tier-start/linear-shadowban specifics; "weekly promo thread + 9–19 contributions" universal default; LLMs use Reddit to "verify brand claims"; Reddit gets "preferential AI weight"; 46.7% Perplexity / 21% AI Overviews stable figures; 85% third-party-mention stat; FAQPage/HowTo/SpeakableSpecification as "most important" schema.

**Dominant caveat:** AI citation shares are a volatile snapshot — re-measure per engine monthly; many Reddit operational numbers come from self-interested marketing-vendor blogs (directionally reliable, cross-corroborated, but not authoritative on exact figures Reddit doesn't publish).

### Key sources
- Semrush — Most Cited Domains in AI: https://www.semrush.com/blog/most-cited-domains-ai
- CMSWire — Reddit's rise in AI citations / AEO: https://www.cmswire.com/digital-marketing/reddits-rise-in-ai-citations-what-marketers-must-know-about-aeo-strategy/
- CJR — Reddit's AI licensing deals: https://www.cjr.org/analysis/reddit-winning-ai-licensing-deals-openai-google-gemini-answers-rsl.php
- CBS News — Google–Reddit $60M deal: https://www.cbsnews.com/news/google-reddit-60-million-deal-ai-training/
- Reddit Help — ban evasion / Contributor Quality Score: https://support.reddithelp.com/hc/en-us/articles/360043504811
- Conbersa — Reddit self-promotion rules: https://www.conbersa.ai/learn/reddit-self-promotion-rules
- Okara — Reddit marketing without getting banned: https://okara.ai/blog/reddit-marketing-without-getting-banned
- SiteUp — Structured data for LLMs: https://siteup.ai/blog/structured-data-for-llms
- LLMrefs — Answer Engine Optimization: https://llmrefs.com/answer-engine-optimization
- DigitalApplied — AI Share of Voice framework: https://www.digitalapplied.com/blog/ai-share-of-voice-tracking-brand-citations-framework-2026
