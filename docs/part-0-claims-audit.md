# Part 0 — Claims audit and disposition

**Status: DRAFT for partner decision.** Nothing here is actioned except the
two items already removed (noted below). Internal — this file is excluded
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
| 3 | "4mo→2wk delivery time vs the client's previous vendor" | `fde.html:546` | Same claim, same exposure, still live, still carrying its `[[FILL]]` marker | **Remove or replace** | ⬜ decide |
| 4 | "83% manual ops effort removed" | `fde.html:544`, `index.html:3169`, `brochure.html:768` | No baseline, no denominator, no source | **Remove or replace** | ⬜ decide |
| 5 | "10k+ / 10,000+ centers" | `fde.html:545`, `index.html:2585/2596/3121`, `brochure.html:632` | Plausibly real as a delivery fact, but unverified and never baselined | **Verify → keep as delivery fact, or remove** | ⬜ decide |
| 6 | "beat industry timelines by 70%" | `index.html:2359` (FAQ), `:3214` (FAQ schema) | No industry baseline exists to beat | **Remove** | ⬜ decide |
| 7 | "70% faster than traditional consultancies" | `index.html:2845` | Same | **Remove** | ⬜ decide |
| 8 | "99.99% uptime **guaranteed**" | `index.html:2589/2600/2644/3151`, `brochure.html:384/657` | No SLA document; "guaranteed" is a contractual promise, not a result | **Reword — urgent** | ⬜ decide |
| 9 | "9 days MVP" (Karan P. testimonial) | `index.html:3179`, `brochure.html:772` | Consistent with the 3-day and 4-week proposals in Drive; plausible | **Substantiate → keep** | ⬜ decide |

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

---

## 2. Proposed replacements

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
