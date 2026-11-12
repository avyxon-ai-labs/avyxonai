# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A static marketing website for Avyxon AI Labs. The main page is `index.html` (self-contained HTML/CSS/JS); detail pages `consulting.html`, `fde.html` and `about.html` mirror its design tokens, nav, and motion system, as do `learn.html` (Field Notes reference), `brochure.html` (print-ready company profile, noindex) and `404.html`. `apps-script/` holds the Google Apps Script contact-form backend (deployed manually — see its README). `docs/site-architecture.md` is the multipage growth plan. There is no build system, no package manager, no test suite, and no CI/CD pipeline.

## Deployment

Hosted on **Vercel**, deployed by Vercel's own Git integration on every push to
`main` — no secrets or CI step required. `.github/workflows/verify.yml` runs
after each push (and weekly) to confirm production serves the current build:
all public URLs return 200 and the live HTML carries the expected markers. A red
run means the live site is wrong, not that a credential is missing.
`vercel.json` sets cache headers (HTML revalidates every request) plus one
rewrite: `/intern-assessment` serves `intern-assessment.html`. This project does
**not** resolve extensionless URLs on its own, so any future clean URL needs its
own rewrite entry and a matching cache-header rule.

The contact form backend is **deployed separately** to Google Apps Script and is
not touched by a site deploy — see `apps-script/README.md`.

## Development Workflow

Open `index.html` directly in a browser. No server, build step, or install is required. Changes are visible immediately on refresh.

To serve locally with live reload if needed:
```bash
python3 -m http.server 8080
# or
npx serve .
```

## File Structure Inside `index.html`

The file is organized in three sequential blocks:

1. **`<head>` / CSS (lines 1–1800)** — All styles. Starts with a design token block (`/* DESIGN TOKENS */`) at `:root`, followed by component-level CSS blocks each separated by `/* ====...==== */` banners.

2. **HTML body (lines 1801–2630)** — Navbar, then page sections in order:
   - `#hero` (1835), `#capabilities` (1993), `#mvp` (2051), `#comparison` (2164), `#platform` (2263), `#cases` (2351), `#testimonials` (2407), `#faq` (2454), `#contact` (2532)
   - Floating CTA button (2617) and footer (2601)

3. **`<script>` block (lines 2626–2836)** — All JavaScript. Five self-contained features:
   - Navbar scroll state (solid class toggle)
   - Scroll-reveal via `IntersectionObserver` (elements use `.section-reveal` class)
   - Hero cursor-tracking parallax on orbs and grid
   - FAQ accordion (single-open behaviour)
   - Contact form submission

## Design Token System

All visual constants are CSS custom properties on `:root` (lines 26–84). Edit tokens there rather than overriding values in component rules. Key token groups: `--bg`, `--cyan`, `--violet`, `--gold` (palette); `--text-*` (type scale using `clamp()`); `--section-v` (vertical rhythm, 120px); `--container` (max-width, 1200px).

## Scroll Animation Pattern

Add `class="section-reveal"` to any element to opt into the scroll-in animation. The `IntersectionObserver` in the script block watches for elements with this class and toggles `.visible` / `.hidden`. Child elements stagger automatically via CSS `nth-child` delay rules.

## External Dependencies (CDN only)

- **Google Fonts** — Instrument Serif, Plus Jakarta Sans, JetBrains Mono (loaded in `<head>`)
- **Font Awesome 6.5.0** — Icons via cdnjs
- **Cloudflare email protection** — Loaded as a script tag (obfuscates `info@avyxon.ai`)

## Contact Form

Submissions POST to the Apps Script web app in `APPS_SCRIPT_URL` as `text/plain` JSON (avoids CORS preflight; the JSON response is readable, so success/failure is real). The backend source lives in `apps-script/Code.gs` — it appends to the "Avyxon Site Enqueries" sheet (Leads tab), emails the sender a personal acknowledgement, and notifies info@avyxon.ai. Deploy steps in `apps-script/README.md`. A hidden `website` field is a honeypot.

## NAP (keep identical everywhere)

Avyxon AI Labs LLP · Sangam Vihar, New Delhi — 110080, India · +91 78998 74613.
Published in the footer of every page and in the Organization `PostalAddress`
schema on `index.html` / `about.html`. Directory listings must match this
string exactly — inconsistent NAP defeats the purpose of the citations.

## Branching

Work on `main`. Vercel deploys it on push.
