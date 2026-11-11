# Outcome Capture — project record

**Version 2** · revised 11 Nov 2026 after five independent expert reviews
(measurement methodology, enterprise buyer scrutiny, commercial law/DPDP,
B2B content, delivery adoption). What changed and why is at the bottom.

**Purpose.** Produce claims about our work that survive a buyer's scrutiny,
a client's lawyer, and our own future selves. Everything on avyxon.ai that
claims a result must trace to a completed record.

> ### Where these records live
>
> **Never in the avyxon.ai website repository.** That repo deploys straight
> to a public host and `robots.txt` says `Allow: /` to every crawler
> including GPTBot and ClaudeBot. A record committed there is published —
> client name, their internal cost baseline, named staff, consent emails,
> and the "what we may not claim" field, all of it, to anyone who guesses
> the path. (Verified 11 Nov 2026: before `.vercelignore` existed,
> `avyxon.ai/CLAUDE.md` and `avyxon.ai/docs/*.md` all returned 200.)
>
> Records live in **Google Drive, `Avyxon Internal / Outcome Records /
> <client>`**, access limited to the engagement lead and the second partner.
> Not in any git repository. Not attached to proposals. Not pasted into decks.

---

## Part 0 — The claims already live (one-time, before anything else)

This process is useless if it only governs future projects while
unsubstantiated numbers stay up. Three reviewers independently pointed out
that Rule 1 is violated on the day it is written, and that a documented
standard we visibly fail to apply to ourselves is worse than no standard —
it turns a careless claim into a documented one.

So: list every performance figure, scale figure and testimonial currently
on `index.html`, `fde.html`, `consulting.html`, `brochure.html`, the JSON-LD
schema blocks, `llms.txt`, directory listings and sales decks. Mark each:

- **Substantiated** — a record exists → keep, and add the "as of" date to the
  published copy.
- **Delivery fact** — provable from our own systems or contracts without
  needing anything from the client → keep if we can produce the evidence today.
- **Unsubstantiated** → **remove at the next deploy.** Not softened, not
  reworded, not "pending". Removed.

Known entries needing a disposition, with locations:

| Claim | Where | Status |
|---|---|---|
| "83% manual ops effort removed" | `fde.html`, `index.html` testimonial, `brochure.html` | no record |
| "10k+ centers" | `fde.html`, `index.html`, `brochure.html` | no record |
| "4 months → 2 weeks" vs a previous vendor | `index.html` testimonial, `llms.txt` | no record; also a comparative claim about an identifiable competitor |
| "compress timelines by ~70%" | `index.html` | no record |
| "99.99% uptime" (stated as a guarantee) | `index.html` | no record; a guarantee, not a result |
| ★★★★★ rating marks on testimonial cards | `index.html` | implies a rating system that does not exist |

If leaving any of these up is a commercial decision, it is the partners' to
make in writing — not something this document absorbs silently.

**Owner:** _______ **Done by:** _______

---

## The gate — Part A (at requirement freeze)

> **Filled before the requirement-freeze invoice goes out.** Not "at
> kickoff": kickoff is a ceremony that sometimes doesn't happen, while
> requirement freeze is a dated commercial gate on every project that
> someone personally cares about because an invoice depends on it. A
> process tied to money survives; one tied to good intentions does not.
>
> **Honest cost:** ~15 min to decide what to ask, 20–30 min in the room,
> then 3–10 working days and two chase emails while the client finds the
> number. Budget **45–60 minutes of your time spread over two weeks.** On
> roughly a third of projects you will end with an estimate, not a
> measurement — that is a fine outcome, it just limits what you can publish.

Ask: *"Six months from now, what number would tell you this was worth
doing?"* If they can't name one: *"What will your boss ask you about this
project in six months?"*

**A1. The metric**

- Metric name:
- Was the client already reporting this before we arrived? ☐ Yes ☐ No
  *(A metric invented for the project is a metric chosen to move.)*
- Exact definition — what is counted, what is excluded:
- Unit and period:
- How it is measured (named system, report or manual count):
- Who supplied it (name, role):
- Date captured:
- Confidence: ☐ Measured from a system ☐ Client-stated estimate ☐ Our observation

**A2. The baseline — three prior periods, not one reading**

One number from one month is not a baseline; it is a reading, and the normal
variation around it may be larger than anything we go on to achieve.

| Period | Value |
|---|---|
| | |
| | |
| | |

- Observed range across those periods (min–max):
- Is there seasonality in this metric? What is the cycle?

**A3. The denominator** *(mandatory for any effort, cost, time or efficiency metric)*

- Workload this metric is normalised against (volume, units, orders, centres…):
- Its value across the same three periods:
- How it will be measured again at result time:

> **No denominator, no efficiency claim.** If effort halves because volume
> halved, our software did nothing. This is the first question a buyer asks
> and the claim does not survive it.

**A4. Target**

- Target value, by when:
- Contractual? ☐ Yes ☐ No
  > If **Yes**, this record is a contract-performance document, not a
  > marketing one. The second partner reviews it before anything is
  > published. Record measurements and methods only — never an opinion on
  > whether the target was met.

**A5. What else could move this number**

| What is changing | Direction (helps / hurts / unclear) | How much of the move could it explain | Basis for that estimate |
|---|---|---|---|
| | | | |

> Recording direction matters in both directions: a confounder working
> *against* us makes the result **stronger**, and v1 had nowhere to say so.
>
> **If any confounder could plausibly account for more than a third of the
> move, no numeric claim publishes — qualitative only.**

**A6. Is there a comparison group?**

Staged rollouts give one almost free: centres, warehouses, zones or teams not
yet migrated, measured over the same window.

- Comparison group available? ☐ Yes ☐ No — describe:

> This is the only field here that can *strengthen* a claim rather than
> hedge it. Ask for it every time.

**A7. The situation** *(2–3 sentences — what the number is a measurement of)*

Nobody reads a case study and thinks "I want 44%". They think "that is my
Tuesday." A number is a measurement of the before-state, not the before-state.

- What a person's day actually looks like today:
- What it costs beyond this metric (errors, escalations, attrition, a lost customer):
- What they tried before us, and why it didn't work:
- Why now — what triggered this (a deadline, an incident, an audit, a renewal):
- If we hadn't done this, what would they have done instead:

---

## Part B — At go-live

**Before you leave the room:**

- ☐ **30-day and 90-day measurement invites created** (engagement lead + the
  A1 contact). Thirty seconds now; without them Part C does not happen —
  realistically ~15% completion at 30 days and under 5% at 90.
- ☐ **Free 90-day health check offered.** Half a day: we look at logs and
  usage and tell them what to tune. Clients accept this. The metric arrives
  as a by-product of a conversation they wanted, instead of an unpaid favour
  asked by a vendor they no longer work with — and it sells follow-on work,
  which is the only reason anyone will reliably do it.

**B1. Delivery facts** — claimable with no baseline and no client consent, and
for the next year this is what almost every honest claim will rest on.

- What we shipped, in plain language a non-engineer can picture:
- **What it replaced** (a 14-tab spreadsheet run by six people; a previous
  vendor's build abandoned after four months):
- **The constraint** — what made it hard (the system that couldn't go
  offline, the exam window, the regulator's deadline, the ERP nobody would
  let us touch):
- **Delivered on the original milestone dates and price?** ☐ Yes ☐ No —
  what changed, and who absorbed it:
- Scope signed vs scope shipped:
- Stack as built — **and what we deliberately did not use** (no new vendor,
  no fine-tune, no rip-and-replace):
- Integrations built:
- Volume processed since go-live, as of (date):
- Who operates it now; have we been called out of hours since (date):
- Still in production as of (date), confirmed by (client email / monitoring / support invoice):
- Repeat purchase? ☐ Yes ☐ No
- Client engineers trained; do they run it unaided?

> For a fixed-price firm, **"delivered on the original price and date" is the
> strongest claim available.** It needs no baseline, no confounder analysis
> and no client consent, and in a vendor selection it decides more than any
> efficiency percentage.

**B2. The decision** *(ask now, while they are warm)*

"Why did a serious enterprise bet on an unknown Delhi studio" is the exact
objection every later prospect holds, and it is the story.

- What they were worried about before signing, in their words:
- What else they considered (incumbent, in-house, a large SI, do nothing):
- What made them choose us:
- What they expected to go wrong, and didn't:

**B3. What was hard** *(filled with the engineer who built it, not from the lead's memory)*

- The hardest technical problem and how we solved it (3–4 sentences, specific
  enough that an engineer would recognise the problem):
- What we got wrong or had to redo, and what it cost in days or scope:
- What we'd do differently:

> A problem without a response reads as an excuse; a problem with a response
> reads as competence. If the answer is "nothing really," the record is
> incomplete — go back.

**B4. Client's own words** — ask now, not at day 90. The week after go-live is
the warmest a client will ever be, and by day 90 the sponsor may have moved on.
A quote about how the work went needs no baseline and often beats a metric.

> ""
> — Name, Title

Attribution the client will permit:
☐ Named and titled ☐ Role + sector only ☐ Initials only ☐ No quote

**B5. Artefacts cleared for publication** (redacted screenshots, architecture
diagram, before/after of a screen): _______

> For a technical buyer an architecture diagram outperforms the metric.

---

## Part C — Measured result (30 days; 90 optional)

Pull from the same source named in A1, against the same definition and the
same denominator. Never from memory or a client's verbal impression.

| | 30 days | 90 days | 12 months |
|---|---|---|---|
| Date measured | | | |
| Metric value | | | |
| Denominator value (A3) | | | |
| Normalised change vs the A2 range | | | |
| Pulled from (same source as A1?) | | | |
| Measured by (name, role) | | | |
| Comparison group value (A6) | | | |
| Were we still on site or supporting? | | | |
| **Not measured — why** | | | |

**Confounder re-check** — repeat A5 at each measurement, as a forced
checklist. Anything new, in either direction:

| What changed | Direction | Could explain how much |
|---|---|---|
| | | |

> **30 days is the number we work to.** It lands inside the support period
> while someone still owes us replies. 90 days is a bonus, and nothing is
> published off a 30-day figure alone if the metric has a seasonal cycle
> shorter than the measurement gap. A result that still holds at **12 months
> with us gone** is worth ten times a 90-day number — ask for it.

**C1. Client confirmation of the figures** — the single highest-value field
in this document, named as such by two reviewers independently.

The client confirms **in writing** that the baseline in A1/A2 and the result
above are accurate as stated.

- Confirmed by (name, title):
- Date and evidence (email link):
- ☐ Confirmed as stated ☐ Confirmed with amendments (record them) ☐ Declined to confirm

> **"Declined to confirm" → Part B facts only. The figure is not publishable.**
>
> Without this, every number is vendor-measured and vendor-signed by the one
> person whose commercial interest it serves. The first diligence question is
> *"who at your client confirmed 320 and 180 — show me their email."*

**C2. Evidence artefact** — Rule 2 requires naming the source; this requires
keeping it.

- File, export date, exported by, stored at:
- Retained until: *(life of the claim + 1 year)*

**C3. Reference willingness** — two different asks, don't merge them:

- Will take a call from a prospect? ☐ Yes ☐ No
- Will be quoted on the website? ☐ Yes ☐ No

---

## Part D — Consent

> **Ask during contracting, not after delivery.** Put a reference clause in
> the proposal: *"Level 2 anonymised reference permitted on completion,
> subject to client review of the exact wording."* At signature this costs
> the client nothing and is routinely agreed. Asked afterwards it becomes a
> favour, and converts a 30–50% yes into a near-certain no.
>
> Realistic conversion for a firm our age: **Level 4 ≈ 0%. Level 3 5–15%,
> only with an executive sponsor who wants us to succeed. Level 2 30–50% if
> asked of the right person at the right moment.** Plan for Level 2.

**D0. Contract check — before asking anyone for anything**

- Governing instrument (NDA / MSA / SOW) and date:
- Confidentiality clause no.; does it cover *the existence of the engagement*? ☐ Yes ☐ No
- Publicity clause no., or "silent":
- Permits publicity? ☐ Prohibited ☐ Permitted with prior written consent ☐ Silent ☐ Expressly permitted
- Required signatory level and notice period:
- Confidentiality survival period and end date:
- Governing law; client's jurisdiction and any local marketing-consent rule
  (Saudi/UAE PDPL require explicit consent and restrict transfer):

> **Prohibited → Level 1 only. No exceptions, and no "but they said it's fine".**
> **Silent → treat as requiring prior written consent. Silence is not permission.**

**D1. Levels**

| Level | Means | Needs |
|---|---|---|
| 1 — Internal | Used inside Avyxon only. **Naming the client verbally to a prospect is a disclosure and is NOT covered by this level — check D0 first.** Oral disclosure breaches an NDA exactly as written disclosure does, and it is the version that actually happens weekly. | Nothing |
| 2a — Anonymised, descriptor only | "An exam-services company…" | D2 + D4 |
| 2b — Anonymised with detail | Named sector, geography, scale band, systems integrated, timeline, volumes — everything except identity. **Ask for this by default:** the client is agreeing to facts about a system, not to an endorsement, and it is a far easier yes than people assume. | D2 + D4 |
| 3 — Named | Client name and/or logo | D2 (authorised signatory) + D3 + client review of final text |
| 4 — Co-marketing | Joint case study, press | D2 + D3 + their legal |

**D2. Company consent** — the company waives confidentiality. The individual's
own consent is a separate act (D3).

- Given by (name, title):
- Evidence this person can bind the company (contract signatory / named in the
  notices clause / written confirmation from legal or procurement):
- Scope: ☐ avyxon.ai ☐ brochure ☐ decks ☐ LinkedIn ☐ paid ads ☐ talks ☐ press ☐ directories
- Logo use? ☐ No ☐ Yes — brand guidelines file:
- **Exact text consented to** (paste the final sentence verbatim — consent to
  a draft is not consent to what gets published):
- **Anonymised descriptor, agreed word-for-word with the client:**
- Duration: from ____ to ____ *(default 24 months)*
- Withdrawal contact at the client:

> A project contact is **not** presumed authorised. "Written OK from the
> client contact" does not waive the company's NDA — most require prior
> written consent from a signatory plus a no-waiver clause, which makes an
> email from a non-signatory worth very little when their legal team finds
> the case study.

**D3. Individual consent** — required whenever a person's name, title or words
are published. Their employer's consent is not their consent.

- Individual, title:
- Consent evidence containing: the exact quote as it will appear, where, for
  how long, and how to withdraw:
- Withdrawal: at any time, without giving a reason, to privacy@avyxon.ai —
  and as easily as it was given.
- **If they leave the client, consent does not transfer to their successor.**
  The quote stays only while D2 and D3 are both live.

**D4. Re-identification check** *(Levels 2a and above)*

Answer all three. Any "no" means widen the descriptor or drop the claim.

1. How many organisations match this descriptor **plus** the scale figure
   **plus** the sector? *(Under ~20 → it identifies them.)*
2. Could a competitor, a recruiter or the client's own employee identify them
   from this page combined with our other pages, our team's LinkedIn and the
   dates?
3. Would we be comfortable showing this exact text to their general counsel
   and saying "this does not identify you"?

Checked by (name, date): _______

> "We removed the name" is not anonymisation. "A national exam-services
> operator running 10,000+ centres in India" is a handful of companies and
> anyone in the sector names them in one guess — at which point the person
> who signed the Level 2 consent is identifiable internally as the one who
> told a vendor their team burned 320 hours a month. That is how an
> anonymised case study becomes a withdrawn reference and a new MSA clause.
>
> **Identification happens through the combination of facts, not any single
> fact.** Run the combination past the client, not the bullets. For a firm
> with a few flagship engagements, true anonymisation is often unachievable
> because the scale figures *are* the claim — in which case the honest choice
> is named-with-consent, or no public claim.

**D5. Expiry and withdrawal**

- Consent expires: ____ **On expiry the claim comes off the site unless
  renewed in writing beforehand. The default is removal, not continuation.**
- **On any withdrawal, or any client dispute about the figures: off avyxon.ai
  within 7 days, off every other surface in the register within 30.** No
  negotiation. Removal is not an admission.
- Re-confirm before the claim may stay up if: the client is acquired; our
  contact leaves; the engagement ends early or in dispute; they complain.

---

## The output

**Claim (anonymised):**

> *At [descriptor: sector + geography + scale], [metric] fell/rose from
> [baseline] to [result] over [period], after Avyxon AI Labs [what we
> shipped]. Measured from [named source], as of [month year].*

**Attribution note — published directly beneath the claim, not inside it:**

> *[confounders from A5] · [confidence from A1] · [who pulled the number]*

> Three things the v1 sentence got wrong. It carried **no date**, while Rule 6
> demanded one. It said "we", which has no antecedent the moment a model
> extracts the sentence into an answer — it must say **Avyxon AI Labs**. And
> it buried the hedge between the two numbers, which made the sentence both
> un-extractable and, oddly, *less* honest-looking than putting the confounder
> on its own line underneath.

**What this record does NOT support:**

-

**Claim ID:** `OCR-____` — must appear as `<!-- claim: OCR-____ -->` beside
every published instance.

---

## Rules

1. **No baseline, no numeric claim.** Part B delivery facts only.
2. **No denominator, no efficiency claim.** (A3.)
3. **Name the source, and keep it.** Every number states where it came from,
   who pulled it, and has the export retained.
4. **Same source, same definition, same denominator** before and after.
5. **A quote is not evidence.** *(New — and the finding that mattered most.)*
   A number inside a client's quote is still a number **we** chose to publish,
   and attribution does not transfer the burden of proof. Every figure in a
   testimonial traces to a record or comes out. Rule 6 does not apply inside a
   verbatim quotation — rounding someone's words falsifies them — but the
   quote still needs a record, and our own surrounding copy must not repeat
   the figure as our claim.

   *Every unsubstantiated number on avyxon.ai today sits inside a testimonial.
   v1 guarded the measured number and left that door wide open.*
6. **Round against ourselves, and name the source.** 83.4% → "over 80%";
   9 days → "under two weeks", never "about a week". Round-down is only
   correct for benefit claims; for time and cost it rounds in our favour.
   Precision is defensible when it is sourced — "83%, from the WMS export,
   n=1,240 orders, Jan–Mar" reads as a measurement, where "over 80%" reads as
   marketing. Never publish a decimal place you would have to defend.
7. **Confidence gates the claim form.**
   - *System-measured* both ends → a specific number may be published.
   - *Client estimate* or *our observation* → directional language, no figure
     and no percentage, and the claim says the baseline was client-estimated.
   - *Mixed* (estimate before, system after) → **no numeric change claim at
     all.** The delta is not measurable.
8. **Date every claim in the published text**, where the reader sees it — not
   only in this record. Nothing on avyxon.ai currently carries one.
9. **Every project opens a record**, including the ones that go flat or
   backwards. Three cherry-picked records invite the question "how many
   projects have you done?", and survivorship is the default assumption for a
   young supplier. The denominator is the most trust-building thing we can
   publish: *"records on 9 of 11 projects; 6 met or beat the target, 2 didn't
   move, 1 got worse and here's why."* Nobody fakes a 2-in-11 failure count.
10. **The second partner signs off any number before it goes on the site.**
    The engagement lead, "marketing" and the person editing `index.html` are
    one human, at the moment he most wants an impressive number. This is the
    only separation of duties available at this headcount.
11. **Re-verify annually**, from the register. No re-verification in 12
    months → off the site.
12. **State facts, not conclusions, and never assess our own legal exposure
    in this file.** Write *"Not supported by this record: any percentage
    attributed solely to the software."* Never *"this is a stretch"* or
    *"marketing wants it anyway."* This is a contemporaneous internal record,
    discoverable in a dispute — which is good when it shows care, and very bad
    when it shows we knew. Risk commentary goes to a lawyer separately, where
    it is privileged; nothing in this file is.

---

## Part E — Publication register

A claim lives in more places than anyone remembers, and a 7-day takedown
cannot be honoured against a surface nobody wrote down. One Google Sheet, one
row **per surface** — including JSON-LD blocks, `llms.txt`, the PDF brochure
(copies already handed out cannot be recalled) and every deck it was pasted
into. **A claim with no row here is not published.**

| Claim ID | Claim text as published | Surface (URL / file / platform) | Published | Consent expires | Last re-verified | Removed |
|---|---|---|---|---|---|---|

Greppable check, since the repo has no build step:

```bash
# every published number should carry a claim marker
grep -rnoE '[0-9]+(\.[0-9]+)?%|[0-9,]+\+ (centers|centres|users|records)' *.html
```

---

## Worked example

> ### ILLUSTRATIVE ONLY — NOT A REAL CLIENT OR PROJECT
> This wording must never appear on the site. It exists to show the shape of
> a complete record.

**A1.** Auditor-hours spent on manual video review · client reported this
monthly before we arrived · excludes QA re-reviews · from the audit team's
**timesheet export** (not the roster — a roster is who was *scheduled*, which
is not what was *spent*, and v1's example mislabelled that as a system
measurement) · supplied by [Name], Audit Lead · Confidence: measured from a system.

**A2.** Oct 312 · Nov 328 · Dec 320 hours. Range 312–328. Seasonality: volume
peaks either side of exam windows, so baseline and result must be taken at the
same point in that cycle — v1's example compared a January baseline against an
April result for an exam-services client, which is exactly the trap.

**A3.** Denominator: drives reviewed. Oct 1,180 · Nov 1,240 · Dec 1,205.

**A5.** Audit team grew 3→4 in February. Direction: helps. Could explain up to
~25% of the move; basis: headcount ratio against hours. Under the one-third
bar, so a numeric claim survives — with the confounder published.

**A6.** 40 of 180 centres not yet migrated — comparison group available.

**C.** 90 days: 180 hours against 1,215 drives, same export. Confounder
re-check: none new. **C1: confirmed in writing as stated by [Name], Audit
Lead, 20 Apr.**

**D.** Level 2b, descriptor agreed word-for-word, 24 months.

**Claim:**

> *At an exam-services company in India, auditor-hours spent on manual video
> review fell from about 320 to 180 a month on steady review volumes, after
> Avyxon AI Labs automated folderisation and audit scoring. Measured from the
> client's timesheet export, April 2027.*
>
> *The audit team also grew from three to four people over the same period,
> so this is a contributory result, not a sole cause.*

**Does NOT support:** a percentage attributed to the software alone. Note that
publishing both 320 and 180 hands any reader that percentage in two
seconds — v1's example barred the percentage while publishing the arithmetic
for it. If the percentage must not be claimed, publish the direction and the
denominator, not both endpoints.

---

## What changed in v2, and what the reviewers disagreed about

Added: Part 0 · the requirement-freeze gate · denominator · three-period
baseline · confounder magnitude and the one-third bar · comparison group ·
the situation · the decision · client confirmation of figures · contract check
before consent · company/individual consent split · re-identification check ·
expiry and withdrawal mechanics · publication register · Rule 5 (a quote is
not evidence) · Rule 9 (every project opens a record) · Rule 10 (second
partner signs).

Cut: supporting baselines (nobody who won't fill one will fill four).

**The disagreement worth knowing about.** Four reviewers wanted more fields;
the delivery reviewer put this template's survival odds at 15–20% as written
and said the only fix is fewer. Both are right, so the document is tiered:
**Part A is the hard gate** — short, attached to an invoice, and nothing
publishes without it. Everything after it is best-effort, and a half-filled
Part B still leaves us better off than nothing. A record is not "failed"
because Part C is blank; it is a Part B record, and Part B alone is publishable.

They also split on rounding: one wanted exact figures with sample sizes
("precision is what a measurement looks like"), another wanted rounding to
what the source supports. Rule 6 takes the formulation that satisfies both —
round *against ourselves*, and name the source.

**Still unresolved, and genuinely a lawyer's call, not a template's:** whether
the claims currently live create exposure for the period they have been up;
the comparative "previous vendor" testimonial; the ★★★★★ marks, which imply a
review system that does not exist; and whether any enterprise DPA restricts
using engagement data for our own marketing at all.
