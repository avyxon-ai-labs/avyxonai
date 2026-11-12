# Part 0 — Claims audit and disposition

**Status: EXECUTED 11 Nov 2026** on the owner's instruction ("do all rows, fix
the uptime claim too"). All nine rows actioned and verified live. Three
further claim groups were found during the sweep that this table had missed —
they are recorded as rows 10–12 and were actioned with the rest. Internal — this file is excluded
from the deployment by `.vercelignore`.

Drafted 11 Nov 2026 · Decision owner: _______ · Target: before next deploy

---

## The principle this follows

Removing a claim is only half a job. A site stripped to "we are passionate
about AI" converts nobody and reads exactly like the generated filler every
competitor has. **Every row below pairs a removal with a replacement that is
both true and stronger** — because the most impressive things Avyxon can say
right now happen to be the things it can actually prove.

The replacements lean on three sources that need no client baseline and, in
most cases, no client permission:

1. **Delivery facts** — what shipped, in how long, on what price, still running.
2. **Engagement terms** — already published, already true, and unusually
   concrete for this market (fixed-price milestones, a named payment
   schedule, a 45–60 day warranty, client-owned infrastructure).
3. **Registered facts** — LLP, incorporation date, LLPIN, GSTIN.

A buyer comparing three AI studios does not remember "83%". They remember the
one that told them the price wouldn't move.

---

## 0. The question that comes before all the others

**Are the three testimonials on the site statements that real, identifiable
people actually made?**

This needs a straight answer before anything else, because the two cases are
not the same problem:

- **If they are real** — we need the speaker's consent on record (D2/D3 of the
  outcome template) and the numbers inside them substantiated. Fixable.
- **If they are illustrative, composite, or drafted to show what a
  testimonial would look like** — they come down in full today, and this is
  not a substantiation issue at all. Publishing invented endorsements is the
  single thing on this site that would do real damage if a prospect probed it,
  and it is also the thing most likely to be probed, because "Rajesh M., CTO,
  Logistics Enterprise" names no company a buyer can check.

What I can and cannot tell you: I searched the Drive for source material and
found three genuine client documents — the AVA Global rider platform proposal,
the Innovatiview CCTV audit automation proposal, and an AVA Global
requirements and commercial document. All three are **draft proposals marked
confidential**. None contains a delivered-outcome record, client
correspondence, or any of these three quotes. That is not evidence the quotes
are fabricated — the correspondence may simply live in email rather than
Drive. It does mean **I have no way to verify them, and neither would a
prospect.**

☐ Real, and I can produce the correspondence → substantiate + get consent
☐ Not real / illustrative → remove all three today

Everything below assumes the first. If it's the second, rows 1 and 2 collapse
into "remove", and the replacement copy matters more, not less.

---

## 1. Disposition table

| # | Claim | Where | Evidence held | Disposition | Status |
|---|---|---|---|---|---|
| 1 | ★★★★★ rating marks | `index.html` ×3 | None — no rating system exists | **Remove** | ✅ **done** |
| 2 | "under 2 weeks… previous vendor 4 months" | `index.html`, `brochure.html` | None; also a comparative claim about a competitor identifiable from context | **Remove** | ✅ **done** |
| 3 | "4mo→2wk delivery time vs the client's previous vendor" | `fde.html:546` | Same claim, same exposure, still live, still carrying its `[[FILL]]` marker | **Replaced** with engagement-terms copy | ✅ done |
| 4 | "83% manual ops effort removed" | `fde.html:544`, `index.html:3169`, `brochure.html:768` | No baseline, no denominator, no source | **Replaced** with engagement-terms copy | ✅ done |
| 5 | "10k+ / 10,000+ centers" | `fde.html:545`, `index.html:2585/2596/3121`, `brochure.html:632` | Plausibly real as a delivery fact, but unverified and never baselined | **Removed** — could not be verified | ✅ done |
| 6 | "beat industry timelines by 70%" | `index.html:2359` (FAQ), `:3214` (FAQ schema) | No industry baseline exists to beat | **Removed** | ✅ done |
| 7 | "70% faster than traditional consultancies" | `index.html:2845` | Same | **Removed** | ✅ done |
| 8 | "99.99% uptime **guaranteed**" | `index.html:2589/2600/2644/3151`, `brochure.html:384/657` | No SLA document; "guaranteed" is a contractual promise, not a result | **Reworded** to point at the per-engagement SLA | ✅ done |
| 9 | "9 days MVP" (Karan P. testimonial) | `index.html:3179`, `brochure.html:772` | Consistent with the 3-day and 4-week proposals in Drive; plausible | **Removed** — unverifiable, and Rule 5 bars figures inside quotes | ✅ done |

### Why #8 is the most urgent of the remaining

The others overstate a result. #8 promises one. "99.99% uptime **guaranteed**"
on a marketing page, with no SLA behind it and no credit regime, is a
representation a client can rely on and later point at — and `index.html:2644`
puts it in a trust badge where it reads as a current operating statistic.

Minimum fix, no decision needed about anything else:

> **"Built for 99.99% uptime"** — or, better and more specific:
> *"Auto-scaling, anomaly detection and self-healing agents, with the uptime
> target written into each engagement's SLA."*

That keeps the engineering claim, drops the unbacked promise, and is more
credible because it points at a document rather than a number.

### Rows found during execution, not in the original audit

My first pass grepped for the figures I already knew about and so missed
three groups. Recording them here because the gap is the lesson: an audit
built from a list of known-bad numbers finds only the numbers you already
knew were bad.

| # | Claim | Where | Disposition | Status |
|---|---|---|---|---|
| 10 | "Live platform metrics": 85% manual effort reduction, 99.5% SLA adherence, <2s agent response — framed as current measurements | `index.html` platform block | Relabelled **"What the platform instruments"**; figures replaced with capabilities (SLA tracked per workflow, 24/7 self-healing monitoring, live anomaly detection, full audit trail) | ✅ done |
| 11 | Same three figures as brochure metric cards + "Platform metrics as published at avyxon.ai" footnote | `brochure.html` | Same treatment | ✅ done |
| 12 | og:image sitemap caption carrying "70% faster than agencies, 10K+ centers managed, 99.5% SLA adherence" — a figure appearing nowhere else on the site | `sitemap-images.xml` | Rewritten to the engagement terms | ✅ done |

### Still open — flagged, not actioned

Not part of the nine rows, and changing them was not asked for:

- **"1 week / Fastest MVP shipped"** trust badge (`index.html`). A specific
  claim about a past delivery, consistent with the 3-day and 4-week proposals
  in Drive but not recorded anywhere. Confirm or drop.
- **"SOC2 · DPDP / ISO 27001 aligned"** trust badge and the brochure's
  security card. "Aligned" is softer than "certified" and probably
  defensible, but it should be a deliberate choice rather than an inherited
  phrase.
- **Two `OPEN ITEM (handoff #2, copy sign-off)` markers** still in
  `index.html` and `fde.html`, awaiting your sign-off on the hero line.
- **The "Live" status pills** in the platform visual (Email Agent, WhatsApp
  Agent, Analytics Engine). These read as a product mock-up rather than a
  claim about Avyxon's own operations, so they are probably fine — noted in
  case you read them differently.

---

## 2. Replacements applied

Pick per row. None of these needs a client baseline, and the first three need
no client permission at all.

### For the FDE "Proof" block (`fde.html:535–548`)

That section is currently three unverified metrics under the heading
*"Outcomes we've actually shipped"* — the most exposed copy on the site, and
it still carries the `[[FILL]]` markers from the original handoff. Replace the
three cards with facts of the same visual weight:

| Current | Proposed |
|---|---|
| `83%` manual ops effort removed | **Fixed price, fixed milestones** — *"Priced per milestone before work starts. The number in the proposal is the number on the invoice."* |
| `10k+` centers | **45–60 day warranty** — *"Defect support after go-live, written into every engagement."* |
| `4mo→2wk` vs previous vendor | **You own the infrastructure** — *"Runs in your cloud, your accounts, your keys. No lock-in to us."* |

Retitle the section from *"Outcomes we've actually shipped"* to **"How we
work"** or **"What you're buying"**. A buyer evaluating an unknown studio is
not asking "what percentage did you move" — they are asking "what happens if
this goes wrong". These three answer that, and every one is already true.

### For the testimonials section

If the quotes are real, strengthen rather than remove:

- Keep the quote, drop the number inside it, or substantiate the number.
  (Template Rule 5: a figure inside a quote is still our claim.)
- Upgrade attribution as far as consent allows — *"VP Operations at an
  exam-services company in India"* beats *"Ananya S., EdTech Firm"*, because
  it is checkable in kind even when the name is withheld.
- Add the engagement shape beneath each: *"Fixed price · 4 weeks · live since
  [month]"*. A dated, specific frame makes a quote read as real.

### Replacing scale claims with provable ones

"10,000+ centers" is the kind of fact that is probably true and merely
unrecorded. If it can be confirmed from the delivered system — a query, an
export, a screenshot — it becomes a Part B delivery fact and can stay, with a
date attached: *"10,000+ centres on one multi-tenant platform, as of [month
year]."* The date is what converts it from a boast into a measurement.

If it cannot be confirmed, the honest version is still impactful:
*"Multi-tenant architecture with full approval cycles and vendor ecosystem,
built for national-scale exam operations."*

---

## 3. What this leaves the site saying

Worth stating plainly, because the fear here is ending up with nothing:

**Still fully claimable, today, with no client sign-off:**
Avyxon AI Labs LLP · incorporated 27 Nov 2025 · LLPIN ACT-0061 · GSTIN
07ACMFA2421P1Z6 · fixed-price milestone model with a published payment
schedule (25/20/25/20/10) · 45–60 day post-go-live warranty · client-owned
infrastructure · named delivery domains · change-control and exclusions
published up front · typical engagement timelines.

Almost no competitor at this size publishes their payment schedule and
warranty terms. That is a genuine differentiator and it costs nothing to say
loudly.

**Claimable once the engagements close and consent is obtained:**
Real project facts from the three live proposals — scope, duration, fixed
price held, still in production.

**Not claimable until a record exists:** everything in the table above.

---

## 4. Sign-off

The partners accept that rows marked "remove" come down, and that any row
knowingly left up is a decision taken with the exposure understood.

Row 8 (uptime "guaranteed") is recommended for action regardless of the rest.

Partner 1: _______________ Date: _______
Partner 2: _______________ Date: _______

---

## Round 2 — what the first execution missed (12 Nov 2026)

Three independent reviewers (technical SEO, adversarial procurement, brand
copy) were given the site cold. Two of them independently found that rows 5, 7
and 10 above, marked "✅ done", were **not done** — and they were right.

**The miss, and why it happened.** `index.html` carried a hero panel labelled
**"Live metrics"** with the same four figures: 1wk Fastest MVP · 70% Faster
than agencies · 10K+ Centers managed · 99.5% SLA adherence, animated as
counters so they read as current instrument readings. Every text sweep missed
them because the markup splits each number from its unit —
`<span data-count="10">10</span>K+` — so no search for "10,000+" or "10K+"
could ever match. Row 12 rewrote the sitemap caption *because* it quoted those
strings; the citation was corrected and the source left standing.

**Lesson for next time:** a claims audit by text search finds only claims that
survive text search. Numbers in component markup, in image files, in `og:`
tags, in JSON-LD values and in HTML comments all need separate passes. The
image was the worst case — `og-image.png` carried the four figures *and*
SOC2/DPDP/ISO 27001 as unqualified certification badges, contradicting the
"not certified" wording added to six HTML locations the commit before. A
reviewer who finds that split does not conclude "sloppy".

| # | Claim | Where | Status |
|---|---|---|---|
| 13 | "Live metrics" hero panel: 1wk / 70% / 10K+ / 99.5%, animated | `index.html` hero | ✅ replaced with engagement terms |
| 14 | Four figures + SOC2/DPDP/ISO 27001 badges on the social card | `og-image.png` | ✅ regenerated (source: `docs/og-image-source.html`) |
| 15 | "Metrics… represent outcomes from specific past engagements" | `terms.html` | ✅ rewritten — it asserted in a contract document that the figures were measured on clients |
| 16 | "Six production systems, built and operated by Avyxon" / "Production-Proven" / "Field record" | `index.html`, `brochure.html`, `llms.txt` | ✅ reframed as system patterns |
| 17 | "thousands of daily delivery routes", "at global scale" | `index.html`, `brochure.html` | ✅ now architecture, not throughput |
| 18 | "~70%" timeline compression | `consulting.html` | ✅ removed |
| 19 | `<2s agent response`, 1wk tile, self-citing footnote | `brochure.html` | ✅ removed |
| 20 | "References available on request" | `brochure.html` | ✅ replaced |
| 21 | "Founders love us" | `index.html` ×2 | ✅ rewritten |
| 22 | Absolutes: "ensures SLA compliance", "before customers notice", "24/7 monitoring", "Every enquiry within 12 hours" | several | ✅ aligned with what `terms.html` already says |
| 23 | "deep experience" / "years of depth" by a one-year-old entity | several | ✅ attributed to the engineers |
| 24 | "global compliance" | `privacy.html` | ✅ scoped to DPDP + GDPR |

**Structured data, found by the SEO reviewer:** `about.html`'s FAQPage
diverged from its visible copy on **7 of 7 answers**. The earlier claim that
schema matched visible copy was verified on `index.html` alone. Regenerated
from the DOM. `ProfessionalService` had no `address` (a hard required-field
error for a LocalBusiness subtype) and `PostalAddress` omitted New Delhi
entirely, which is the single worst place for a NAP inconsistency because
directories read the schema.

### Still open

- ~~The named-competitor comparison table~~ — **done 12 Nov 2026.** Columns are
  now generic categories (systems integrators, RPA platforms, individual
  contractors); every ✕ is replaced by a factual descriptor; the self-awarded
  "recommended" badge is gone; and a footnote states the characterisations are
  our own view of typical delivery models, not claims about any firm. The
  heading moved from "Honest comparison" — which raised the bar we were held
  to — to "Where we fit". A row now reads *"Organisation-wide change
  programmes — not our model, go to an integrator"*: conceding where someone
  else is the better choice is what makes the other eight rows believable.
  The FAQ keeps "What makes Avyxon different from Accenture, Deloitte or
  UiPath?" because people search it, but the answer now describes only our own
  model.
- **Partner bios, photos and LinkedIn URLs** on `about.html` — still absent,
  on the page headed "Who is accountable".
- ~~LLPIN `ACT-0061` does not match the MCA format~~ — **withdrawn 12 Nov 2026.
  This finding was wrong.** `ACT-0061` is three letters, hyphen, four digits,
  which is exactly the `AAA-NNNN` LLPIN format; the reviewer read "ACT" as a
  word rather than a letter prefix. Confirmed correct by the owner. Published
  in one place only (`about.html`), so there is no consistency risk.

  **Noted as a process point, not a reproach:** this finding reached the owner
  because a reviewer stated it confidently and it was relayed without an
  independent check. The same reviews were right about the hero panel, the
  social card and the FAQ schema — all verified before acting — so the lesson
  is not to distrust review output, it is that *every* finding gets checked
  before it is repeated, including the cheap ones. A regex would have settled
  this in two seconds.
