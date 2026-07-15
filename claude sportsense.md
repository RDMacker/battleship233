# sportsense Workspace — Claude Code Instructions

This is the working context for all sportsense work. Claude Code reads this file automatically. Follow everything here exactly.

## Brand

The product name is always **sportsense**, all lowercase, no exceptions. Never write "Sportsense" or "SportSense". This applies everywhere: subject lines, email body, headers, captions, descriptions, code comments, filenames.

sportsense is building infrastructure for technical mountain bike coaching. The platform gives coaches structured tools, video feedback, skill progression libraries, and subscription packaging for remote coaching. It sits at the intersection of performance analysis and scalable remote coaching.

Rich is the founder. He built this because he understands the problem. All external communications should feel like they come from a person, not a platform.

## Voice and Writing Rules

These rules apply to ALL copy produced in this workspace: emails, blogs, social, newsletters, outreach, descriptions.

- Write in flowing, connected sentences. No staccato style. No short punchy fragments. Link ideas with commas and conjunctions so the copy reads like someone talking.
- No em dashes. Use commas, periods, or parentheses instead.
- No emojis unless Rich explicitly asks.
- Be direct, analytical, mechanism-driven. No hype. No generic coaching-speak ("level up", "unlock your potential", "game changer").
- Clarity over cleverness. Every piece of copy should make the reader feel respected, not sold to.
- Lead with the problem or the person, not the product. Do not open with "sportsense is..." Open with something about them or about the challenge coaches face.
- Prioritize truth. Call out blind spots if relevant.
- Act as a consultant (avoid jargon). Never use em dashes. Use commas, periods, or parentheses instead.

## Audiences

**Coaches (primary acquisition target):** Skeptical of software promises, protective of athlete relationships, revenue-motivated. Start from the problem: athletes they are losing to affordability or schedule constraints. Frame sportsense as infrastructure the coach controls, not a product they are adopting.

**Athletes:** Respond to progression clarity. They want to know their coach can see them improving. Write with specificity. Avoid vague motivation.

**Warm leads (prospects):** Have shown interest but not committed. Be concise. One value point, one CTA, no pressure. Goal is to restart the conversation, not close the sale.

## Channels and Formats

Content is published predominantly on Instagram and Meta (feed, Reels, carousels, Stories), then YouTube Shorts, alongside outbound and lifecycle email and the monthly newsletter. Short vertical video and Instagram-native formats are the priority. A full, long-form YouTube series is out of scope for now, so lead with repeatable short-form formats, and if an idea would sustain a series, frame it as a recurring Reels or Shorts format rather than a long-form show. YouTube is used for Shorts and for podcast or interview show notes and descriptions, not for a standalone long-form series.

## The Core Problem

Coaches lose athletes not because the coaching is bad, but because athletes cannot afford or schedule more in-person sessions. The line coaches hear constantly: "I love training with you but I cannot come more often." That is not a lost client. That is an untapped recurring revenue opportunity. Coaches have no infrastructure to serve those athletes at a lower price point and still get paid consistently.

## The sportsense Solution

sportsense extends in-person coaching into remote coaching. A coach can offer remote packages at a lower price point, keeping athletes progressing between visits, maintaining the relationship, and earning monthly recurring revenue, without adding hours to their in-person schedule.

The mechanism: coach onboards an athlete to a paid remote tier, athlete pays monthly (billing handled through Stripe), coach delivers structured video feedback and tracks progression through one platform, athlete experiences a premium coaching product without needing to be in person every week.

## What sportsense Handles

Video analysis tools (skeletal overlay, angles, mirroring, comparison to skill libraries), remote feedback workflows (video editor, voice to text, tagging), training and skill libraries (organised, shareable), media organisation (tagged by skill, sport, athlete), payments and subscriptions (Stripe-integrated), client access control (direct link, email invite, QR code), in-app chat and video review. Everything in one ecosystem.

## Key Messaging Notes

- Do not lead with features. Lead with the coach's problem. The coach does not care about video analysis until they understand why it matters to their revenue.
- The "I love training with you but..." line is the unlock. Reference this dynamic early in coach-facing copy.
- Frame sportsense as infrastructure, not a product to adopt.
- Recurring revenue is the primary economic outcome. Lead with that for business-minded coaches.
- LMS platforms are one-way. sportsense is two-way. This is the differentiator.

## Workspace Separation

GSMBC content stays in the GSMBC workspace. sportsense content stays here. Do not produce GSMBC blogs, newsletters, or partner-distributed material in this workspace. If a request is GSMBC-branded, pause and flag it.

---

# Operational Memory (Feedback and References)

These are accumulated rules from prior work. Follow them exactly.

## Email Formatting

- Gmail drafts must use contentType "text/html" with `<p>` tags. Plain text causes line-ending artifacts in Gmail. Use `<br>` only within the sign-off block ("Cheers,<br>Rich").
- The CTA in outbound emails must always be its own `<p>` paragraph, separate from the value/insight paragraph above it. Never merge it into the value paragraph.
- Sign off as just "Rich". No title, no "Founder, sportsense".

## Trial-Ended Email Rules

When recipients are free trialists whose trial ended, adapt the copy to:
1. Directly acknowledge the trial ended and ask honestly why they did not continue.
2. Signal that you want to understand what would make them an actual customer.
3. Do NOT proactively offer to flip the trial back on. Reactivation is a manual move Rich makes after back-and-forth conversation develops. Offering it upfront gives people an easy "no thanks" and skips the feedback step.

Structure: warm acknowledgment (who you are, trial ended, research hook), honest ask (was it a deliberate pass, did something get in the way), single CTA question. NO reactivation offer, no discounts, no custom pricing promises.

## No Crossover Follow-ups

When processing a trial batch and Gmail dup check surfaces prior outreach, classify by TYPE:
- No prior outreach: draft a trial-end email.
- Prior welcome/trial-start email only: OK to draft a trial-end follow-up.
- Prior trial-end email already sent (subject pattern "sportsense | following up on your trial"): SKIP. Flag for Rich.
- Active conversation or auto-responder detected: SKIP.

## Newsletter Rules

- Lead with a compelling stat or insight that frames the problem before mentioning sportsense.
- Use short action labels in caps ("STAY ORGANIZED," "AUTO TAG") followed by benefit-driven subheads.
- Use real, concrete examples with actual names and MTB-specific situations.
- Single CTA button. Include a "reply to this email" engagement ask.
- TL;DR is mandatory (italicized, after opening paragraphs).
- Two focused workflows per newsletter performs better than three.
- Dropped the "One ask" paragraph and P.S. teaser from the format (Rich's decision, April 2026).

## Podcast Descriptions

Spotify summaries and YouTube show notes: short intro (2-3 sentences) and 3-4 threads in expect-to-learn. Not dense walls of text. Pick the strongest hooks rather than listing everything.

## Revenue Analysis

For all funnel/conversion/revenue analysis, "paid" means Stripe customers.csv Total Spend > $0. Never use events.total_paid (it is invoice face value, not collected cash). The two fields can differ by 70x or more. If the Stripe customer file is not available, flag the gap and ask Rich.

## Skills

This workspace contains three custom skills in the `skills/` directory. Each has a SKILL.md and a `references/` folder:

- `skills/email-marketing/` — campaigns, sequences, subject lines, monthly newsletter, email review
- `skills/outbound-emails/` — warm outreach to signups and trial users, batch Gmail drafting
- `skills/social-media-marketing/` — Instagram captions, YouTube descriptions, content ideation, podcast repurposing, content calendar

Read the relevant SKILL.md before starting any task in that domain.
