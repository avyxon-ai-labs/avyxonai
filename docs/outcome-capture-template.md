# Outcome Capture — project record

**Purpose.** Produce one defensible, publishable sentence per project.
Everything on avyxon.ai that claims a result must trace back to a completed
copy of this form.

**The rule that makes it work:** Part A is filled at **kickoff**, before any
build. A baseline reconstructed at the end is a guess, and a guess cannot be
published. If Part A was never filled, the project has **no claimable
outcome** — record the delivery facts only (Part D).

| | |
|---|---|
| Owner | The engagement lead |
| Part A | At kickoff, before build starts. 15 minutes, with the client in the room. |
| Part B | At go-live. 10 minutes. |
| Part C | 30 and 90 days after go-live. 10 minutes. |
| Part D | Always fillable, even with no baseline. |
| Stored | `/clients/<client>/outcome-record.md`, linked from the project folder |

---

## Part A — Baseline (at kickoff)

> Ask the client: *"Six months from now, what number would tell you this was
> worth doing?"* Write that number down before writing any code.

**A1. The one metric this project is judged on**

- Metric name:
- Why this one (whose problem is it, who reports it):
- Current value:
- Unit and period (e.g. hours/week, ₹/month, % of orders, days):
- How it is measured today (system, report, manual count):
- Who supplied it (name, role):
- Date captured:
- Confidence: ☐ Measured from a system ☐ Client-stated estimate ☐ Our observation

**A2. Supporting baselines** (optional, up to three — same fields, condensed)

| Metric | Current value | Unit/period | Source | Confidence |
|---|---|---|---|---|
| | | | | |

**A3. What the client wants it to become**

- Target value:
- By when:
- Is the target contractual? ☐ Yes ☐ No

**A4. What else is changing at the same time**

List anything that could move the metric independently of our work — a process
change, new hires, a pricing change, seasonality, another vendor.

-

> If this list is non-empty, the outcome is **contributory, not causal**. Say
> "alongside" in the claim, never "because of".

---

## Part B — At go-live

- Go-live date:
- What we actually shipped (one paragraph, plain):
- Scope changes vs the signed proposal:
- Delivery time, kickoff to go-live:
- Team size and composition:
- Stack as built:
- What was hard (one honest sentence — this is the credible part of any story):

---

## Part C — Measured result (30 and 90 days)

Repeat for each date. Do not fill this from memory or from a client's verbal
impression — pull the number from the same source named in A1.

| | 30 days | 90 days |
|---|---|---|
| Date measured | | |
| Metric value | | |
| Change vs baseline | | |
| Pulled from (same source as A1?) | | |
| Measured by (name, role) | | |
| Anything that would explain the change other than our work | | |

**C1. Client's own words.** One or two verbatim sentences, with the speaker's
name and title. Ask: *"How would you describe what changed, to a peer?"*

> ""
> — Name, Title

**C2. Is the client willing to be a reference?** ☐ Yes ☐ Anonymised only ☐ No

---

## Part D — Delivery facts (always available)

Fillable even with no baseline. These are claimable on their own and are what
most of avyxon.ai currently rests on.

- Scale handled (records, users, sites, devices, TB — whatever is true):
- Integrations built:
- Delivered in (weeks, kickoff to go-live):
- Still in production as of (date):
- Support period and whether it was extended:

---

## Part E — Consent and claim level

Nothing is published above the level the client signed off.

| Level | Means | Needs |
|---|---|---|
| 1 — Internal | Sales conversations only, never written down publicly | Nothing |
| 2 — Anonymised | "A national exam-services operator…" — no name, no logo, no detail that identifies them | Written OK from the client contact |
| 3 — Named | Client name and/or logo used | Written OK from someone authorised to give it |
| 4 — Co-marketing | Joint case study, quote, logo, press | Written OK, usually legal review |

- Level granted:
- Granted by (name, title, date):
- Evidence of consent (email link / signed note):
- Review before publication? ☐ Client reviews draft ☐ Not required
- Expiry or review date:

> Confidentiality note: proposals and requirement documents are confidential by
> default. A client name appearing in one of our documents is **not** consent
> to publish it.

---

## The output

Write the claim here, in the form it will appear on the site. It must be
readable alongside the evidence above without embarrassment.

**Claim (anonymised form):**

> _[Metric] moved from [baseline] to [result] within [period] at [anonymised
> client descriptor], following [what we shipped]._

**Claim (named form, only at Level 3+):**

>

**What we may NOT claim from this record:**

-

---

## Rules

1. **No baseline, no claim.** Part D only.
2. **Name the source.** Every number states where it came from and who pulled it.
3. **Same source before and after.** A baseline from a manual count and a result
   from a dashboard are not comparable.
4. **Attribute honestly.** If anything in A4 is non-empty, the wording is
   "alongside", not "because of".
5. **Round down.** 83.4% becomes "over 80%". Precision invites challenge and
   buys nothing.
6. **Date every claim.** "As of March 2027" ages honestly; a bare number rots.
7. **Re-verify annually.** A claim with no re-verification in 12 months comes
   off the site.
8. **One owner.** The engagement lead signs the record. Marketing does not
   invent, upgrade or re-round numbers downstream.

---

## Worked example

**A1.** Manual CCTV audit effort · 320 auditor-hours per month · from the audit
team's monthly roster · supplied by [Name], Audit Lead · measured from roster
data · 12 Jan 2027.
**A4.** Audit team also moved from 3 to 4 staff in February — contributory.
**C.** 90 days: 180 hours/month, from the same roster. Measured by [Name].
**E.** Level 2, anonymised, granted by [Name] 20 Apr 2027.

**Claim:** *"Manual video-audit effort fell from roughly 320 to 180
auditor-hours a month over the first quarter at a national exam-services
operator, alongside a change in team size, after we automated folderisation and
audit scoring."*

**May not claim:** a percentage attributed solely to the software; any figure
for drives processed (never baselined).
