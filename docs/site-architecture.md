# avyxon.ai — multipage architecture & growth plan

_Last updated: 2026-08-04_

## Where we are (Phase 1 — live)

```
/                    Homepage: hero (services-forward) → trust → Consulting → FDE
                     → capabilities → MVP → platform → cases → FAQ → contact
/consulting.html     Front-door offering. 4 pillar anchors: #ai-consulting,
                     #automation, #agentic-workflows, #voice-agents
/fde.html            Premium tier. Distinct "Avyxon Forward Deployed Engineers" entity
/privacy.html  /terms.html
/learn.html          Hidden (noindex) internal learning reference
/llms.txt            GEO entity file for AI answer engines
```

Schema today: Organization + ProfessionalService/OfferCatalog + FAQPage (home),
Service + FAQPage + BreadcrumbList (both detail pages).

## Phase 2 — graduate the pillars (when there's content to justify it)

Each consulting pillar becomes its own URL, keeping today's anchors as the
redirect source so nothing breaks:

```
/services/ai-consulting/        ← consulting.html#ai-consulting
/services/automation/           ← consulting.html#automation
/services/agentic-workflows/    ← consulting.html#agentic-workflows
/services/voice-agents/         ← consulting.html#voice-agents
```

Rules when graduating:
- 301 (or `<link rel="canonical">`) from the anchor section to the new page.
- Each page: own `Service` JSON-LD + `BreadcrumbList` (Home → Consulting → X),
  H1 with the exact keyword, one FAQ block (3–5 Qs) with `FAQPage` schema.
- consulting.html stays as the hub — pillar cards become teasers linking out.
- Add every new URL to `sitemap-pages.xml` and `llms.txt` the same commit.

## Phase 3 — trust & freshness surfaces (GEO compounding)

```
/about/        Team, founding story, E-E-A-T. Person schema for founders;
               links to LinkedIn profiles (sameAs). AI engines cite named people.
/cases/        1 page per anonymized case study. Structure: problem → constraint
               → build → measured outcome. This is what LLMs quote.
/insights/     2–4 articles/month. Article schema + author + dateModified.
               Target long-tail: "agentic workflow examples logistics",
               "voice agent deployment India", "forward deployed engineer vs
               contractor". Freshness is a ranking signal for AI answers.
```

## Standing rules (all phases)

1. **One `<h1>` per page, keyword-bearing.** Brand poetry goes in a `<p>`.
2. **Every page in three indexes**: nav/footer, `sitemap-pages.xml`, `llms.txt`.
3. **Schema per page type**: Service / Article / Person / BreadcrumbList; keep
   Organization only on the homepage.
4. **Internal links hub-and-spoke**: homepage → hubs (consulting, fde) → spokes
   (services, cases); spokes cross-link back to hubs and to contact.
5. **Design tokens are the single source of truth** — new pages copy the token
   block from index.html verbatim (or extract to a shared CSS file the day a
   build step is introduced).
6. **Refresh `lastmod`** in the sitemap whenever page content materially changes.

## Marketing backlog (in rough priority order)

- [ ] Real anonymized metrics for the FDE proof section (still placeholder-flagged)
- [ ] Case studies page with 2–3 written up (unblocks LLM citability)
- [ ] About page with founders + Person schema (E-E-A-T)
- [ ] LinkedIn/X posting cadence linking back to insights articles
- [ ] Google Business Profile (Delhi HQ) → local pack + knowledge panel
- [ ] Deploy automation (site publishes on merge) so freshness signals are real
