# Deployment

The site is static and hosted on **Vercel**. `.github/workflows/deploy.yml`
deploys `main` to production and then verifies the live site actually serves
the new build.

## One-time setup (~3 minutes)

Add three repository secrets under
**GitHub → Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Where to get it |
|---|---|
| `VERCEL_TOKEN` | Vercel → Account Settings → **Tokens** → Create Token (full access) |
| `VERCEL_ORG_ID` | Vercel → Team/Account Settings → General → **Team ID** (or `ID` for a personal account) |
| `VERCEL_PROJECT_ID` | Vercel → the avyxon project → Settings → General → **Project ID** |

Alternatively, run `npx vercel link` locally in this repo — it writes both IDs
to `.vercel/project.json`, which you can copy from. (`.vercel/` should stay
out of git.)

Once the secrets exist, push anything to `main` — or run the workflow manually
from **Actions → Deploy to Vercel → Run workflow**.

## ⚠️ Avoid double deploys

If Vercel's own **Git integration** is already connected to this repository, it
will deploy on push *as well as* this workflow. Pick one:

- **Keep the Git integration** → delete `.github/workflows/deploy.yml`; or
- **Keep this workflow** → in Vercel → Project → Settings → Git, disconnect the
  repo (or disable production deployments for `main`).

Either is fine. Running both just wastes build minutes and makes it unclear
which deployment "won".

## What the workflow does

1. **deploy** — installs the Vercel CLI, pulls the production environment, and
   runs `vercel deploy --prod`. Static site, so there's no build step.
2. **verify** — waits 25s for CDN propagation, then:
   - asserts every public URL returns `200`
     (`/`, `consulting.html`, `fde.html`, `privacy.html`, `terms.html`,
     `llms.txt`, `robots.txt`, both sitemaps, `logo-email.png`)
   - asserts the live HTML contains markers from the current build — hero
     service chips, mobile menu, scroll progress, the pillar anchors, the
     count-up metrics and the FDE `Service` schema. **This is the answer to
     "is it live?"** — green tick means the new build is genuinely being
     served, not a cached older one.
   - reports whether the Apps Script contact backend is the current version
     (informational; a stale backend won't fail the deploy)

`docs/**`, `apps-script/**` and `*.md` changes don't trigger a deploy — they
aren't part of the served site. Use **Run workflow** to force one.

## Caching (`vercel.json`)

| Content | `Cache-Control` |
|---|---|
| HTML (`/` and `*.html`) | `max-age=0, must-revalidate` — updates appear immediately |
| `*.xml`, `*.txt`, `*.webmanifest` | `max-age=3600` |
| Images | `max-age=604800` (7 days) |

HTML deliberately revalidates on every request; that's what stops a phone or
CDN edge from serving a stale page after a deploy. If you replace a logo or
`og-image.png`, allow up to 7 days or rename the file to bust the cache.

`vercel.json` sets **headers only** — no `cleanUrls`, no redirects, no
rewrites — so existing `.html` URLs, canonicals and sitemap entries keep
working exactly as they do today.

## The contact form is deployed separately

The form backend is Google Apps Script, not Vercel. Deploying the site does
**not** update it — see `apps-script/README.md`. Quick check any time: open the
`/exec` URL from `APPS_SCRIPT_URL` in `index.html`; it returns
`{"ok":true,"service":"avyxon-contact","version":2}` when the current backend
is live.
