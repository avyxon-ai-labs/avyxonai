# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A single-file static marketing website for Avyxon AI Labs. The entire application — HTML structure, CSS styles, and JavaScript — lives in one file: `index.html` (≈ 2,836 lines). There is no build system, no package manager, no test suite, and no CI/CD pipeline.

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

Submissions are `fetch` POST requests in `no-cors` mode to a hardcoded Google Apps Script URL (line 2768). Because `no-cors` returns an opaque response, the code treats any response as success. The destination Apps Script (and its backing Google Sheet) is external to this repo — updating the endpoint URL in the `APPS_SCRIPT_URL` constant is the only change needed to point at a different backend.

## Branching

Active development branch: `claude/add-claude-documentation-zqhHV`. Main branch is `main`.
