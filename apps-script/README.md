# Contact form backend — deployment guide

`Code.gs` powers the avyxon.ai contact form: it writes each lead to the
**"Avyxon Site Enqueries"** spreadsheet (new **Leads** tab, correct column
order), sends the sender a personal acknowledgement email signed by Braj,
and notifies `info@avyxon.ai`.

> Why a new **Leads** tab? The legacy `Sheet1` rows were written with
> misaligned columns (budget under Company, source under Budget). The old
> data is left untouched; new leads land in a clean tab.

## Deploy (first time) — 5 minutes, do this as info@avyxon.ai

1. Open <https://script.google.com> → **New project**. Name it `avyxon-contact`.
2. Delete the placeholder and paste the full contents of `Code.gs`.
3. **Run → testSubmission** once. Grant the permission prompts
   (Sheets + Mail). Check that:
   - a `Leads` tab appeared in *Avyxon Site Enqueries* with a bold header row,
   - the acknowledgement email arrived at info@avyxon.ai (it uses your own
     address as the test recipient),
   - the "New lead" notification arrived too.
4. **Deploy → New deployment → Web app**:
   - *Execute as*: **Me** (info@avyxon.ai)
   - *Who has access*: **Anyone**
5. Copy the Web app URL (`https://script.google.com/macros/s/…/exec`).
6. In `index.html`, replace the value of `APPS_SCRIPT_URL` with that URL,
   commit, deploy the site.

## Updating later (keep the same URL)

Edit the code in the Apps Script editor, then
**Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**.
The URL stays the same — no site change needed.

## If you still own the OLD deployment

The site currently points at an old `/exec` URL. If that project is in
your account, you can paste this code into *that* project and "New version"
it (per above) — then `APPS_SCRIPT_URL` needs no change at all.

## Config knobs (top of Code.gs)

| Key | Meaning |
|---|---|
| `SHEET_ID` / `SHEET_NAME` | Where leads are stored |
| `SENDER_NAME`, `SIGNER_*` | The from-name and signature on the acknowledgement |
| `LOGO_URL` | Must be a public URL — `https://avyxon.ai/logo-email.png` ships with the site |
| `RESPONSE_PROMISE` | The reply-time promise in the email copy |

## Behaviour notes

- **Honeypot**: submissions with a filled `website` field are accepted
  silently and discarded (bots).
- The front-end sends `Content-Type: text/plain` so the browser skips the
  CORS preflight; Apps Script's response is readable, so the form now shows
  *real* success/failure instead of assuming success.
- Quota: consumer Gmail allows ~100 MailApp recipients/day — plenty for a
  contact form (each lead uses 2).
