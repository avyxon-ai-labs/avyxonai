/**
 * Avyxon AI Labs — contact form backend
 * ======================================
 * Receives POSTs from the avyxon.ai contact form, then:
 *   1. Appends the lead to the "Leads" tab of the enquiries spreadsheet
 *   2. Sends a personal acknowledgement email to the sender
 *   3. Sends an internal notification to the team inbox
 *
 * Deploy: script.google.com → paste this file → Deploy → Web app
 *   - Execute as: Me (info@avyxon.ai)
 *   - Who has access: Anyone
 * See apps-script/README.md in the repo for full steps.
 */

var CONFIG = {
  // "Avyxon Site Enqueries" spreadsheet (owned by info@avyxon.ai)
  SHEET_ID: '11OsXo_oH1aChNe2iA0OQKd0HirckynyRaYZc4TRnoIg',
  SHEET_NAME: 'Leads',            // written with correct column order; legacy Sheet1 left untouched
  NOTIFY_TO: 'info@avyxon.ai',
  REPLY_TO: 'info@avyxon.ai',
  SENDER_NAME: 'Braj from Avyxon',   // From-name on the acknowledgement
  SIGNER_FIRST: 'Braj',
  SIGNER_FULL: 'Braj Kishore',
  SIGNER_ROLE: 'Founder, Avyxon AI Labs',
  LOGO_URL: 'https://avyxon.ai/logo-email.png',
  SITE_URL: 'https://avyxon.ai',
  RESPONSE_PROMISE: '12 hours'
};

var HEADERS = ['Timestamp', 'Name', 'Email', 'Company', 'Budget', 'Message', 'Source', 'Page', 'Ack Sent'];

function doPost(e) {
  var data = parseBody_(e);

  // Honeypot: the visible form never fills "website"; bots do. Accept silently.
  if (data.website) return jsonOut_({ ok: true });

  var lead = {
    name:    clean_(data.name, 120),
    email:   clean_(data.email, 180),
    company: clean_(data.company, 180),
    budget:  clean_(data.budget, 60),
    message: clean_(data.message, 4000),
    source:  clean_(data.source, 60) || 'avyxon.ai',
    page:    clean_(data.page, 120) || '/'
  };

  if (!lead.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)) {
    return jsonOut_({ ok: false, error: 'invalid_email' });
  }
  if (!lead.name) return jsonOut_({ ok: false, error: 'missing_name' });

  var ackSent = false;
  try {
    sendAcknowledgement_(lead);
    ackSent = true;
  } catch (err) {
    console.error('Acknowledgement email failed: ' + err);
  }

  try {
    appendLead_(lead, ackSent);
  } catch (err) {
    console.error('Sheet append failed: ' + err);
    // Even if the sheet write fails, the team notification below still carries the lead.
  }

  try {
    notifyTeam_(lead, ackSent);
  } catch (err) {
    console.error('Team notification failed: ' + err);
  }

  return jsonOut_({ ok: true });
}

function doGet() {
  return jsonOut_({ ok: true, service: 'avyxon-contact', version: 2 });
}

/* ── storage ─────────────────────────────────────────────── */

function appendLead_(lead, ackSent) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(CONFIG.SHEET_NAME);
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([
      new Date(), lead.name, lead.email, lead.company, lead.budget,
      lead.message, lead.source, lead.page, ackSent ? 'Yes' : 'No'
    ]);
  } finally {
    lock.releaseLock();
  }
}

/* ── acknowledgement email (personal, human) ─────────────── */

function sendAcknowledgement_(lead) {
  var first = firstName_(lead.name);
  var subject = 'Got your note, ' + first + ' — talk soon';

  var plain =
    'Hi ' + first + ',\n\n' +
    'Thanks for reaching out — your message just landed and I wanted you to know ' +
    'it reached a person, not a queue.\n\n' +
    'I\'ll read it properly and get back to you within ' + CONFIG.RESPONSE_PROMISE + ' ' +
    '(usually much faster) with honest thoughts on scope, timelines, and whether ' +
    'we\'re the right fit for what you\'re building.\n\n' +
    'If it\'s urgent, just reply to this email — it comes straight to me.\n\n' +
    '— ' + CONFIG.SIGNER_FIRST + '\n' +
    CONFIG.SIGNER_FULL + ' · ' + CONFIG.SIGNER_ROLE + '\n' +
    CONFIG.SITE_URL;

  MailApp.sendEmail({
    to: lead.email,
    subject: subject,
    body: plain,
    htmlBody: ackHtml_(lead, first),
    name: CONFIG.SENDER_NAME,
    replyTo: CONFIG.REPLY_TO
  });
}

function ackHtml_(lead, first) {
  var quoted = lead.message
    ? '<tr><td style="padding:18px 0 0">' +
      '<div style="border-left:3px solid #0891B2;background:#F0F7F9;border-radius:0 10px 10px 0;padding:14px 18px;">' +
      '<div style="font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#72767F;padding-bottom:6px;">What you sent</div>' +
      '<div style="font-size:14px;line-height:1.6;color:#3A3D45;white-space:pre-wrap;">' + esc_(lead.message) + '</div>' +
      '</div></td></tr>'
    : '';

  return '' +
'<!DOCTYPE html><html><body style="margin:0;padding:0;background-color:#F7F6F2;">' +
'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F7F6F2;padding:32px 16px;">' +
'<tr><td align="center">' +
'<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">' +

// logo
'<tr><td style="padding:0 8px 20px;">' +
'<a href="' + CONFIG.SITE_URL + '" style="text-decoration:none;">' +
'<img src="' + CONFIG.LOGO_URL + '" width="132" alt="Avyxon AI Labs" style="display:block;border:0;width:132px;height:auto;">' +
'</a></td></tr>' +

// card
'<tr><td style="background-color:#FFFFFF;border:1px solid #E8E6E1;border-radius:16px;padding:36px 36px 30px;">' +
'<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' +

'<tr><td style="font-family:Georgia,\'Times New Roman\',serif;font-size:26px;line-height:1.25;color:#0E0F11;padding-bottom:18px;">' +
'Got your note, ' + esc_(first) + '.</td></tr>' +

'<tr><td style="font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:#3A3D45;">' +
'Thanks for reaching out — your message just landed and I wanted you to know it reached a person, not a queue.' +
'<br><br>' +
'I\'ll read it properly and get back to you within <strong style="color:#0E0F11;">' + CONFIG.RESPONSE_PROMISE + '</strong> ' +
'(usually much faster) with honest thoughts on scope, timelines, and whether we\'re the right fit for what you\'re building.' +
'<br><br>' +
'If it\'s urgent, just reply to this email — it comes straight to me.</td></tr>' +

quoted +

// signature
'<tr><td style="padding-top:28px;">' +
'<table role="presentation" cellpadding="0" cellspacing="0"><tr>' +
'<td style="border-top:1px solid #E8E6E1;padding-top:18px;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;">' +
'<div style="font-size:15px;color:#0E0F11;font-weight:600;">— ' + esc_(CONFIG.SIGNER_FIRST) + '</div>' +
'<div style="font-size:13px;color:#72767F;padding-top:3px;">' + esc_(CONFIG.SIGNER_FULL) + ' · ' + esc_(CONFIG.SIGNER_ROLE) + '</div>' +
'<div style="font-size:13px;padding-top:2px;"><a href="' + CONFIG.SITE_URL + '" style="color:#0891B2;text-decoration:none;">avyxon.ai</a></div>' +
'</td></tr></table></td></tr>' +

'</table></td></tr>' +

// footer
'<tr><td style="padding:18px 8px 0;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#A8ABB3;">' +
'You\'re receiving this because you contacted us at <a href="' + CONFIG.SITE_URL + '" style="color:#A8ABB3;">avyxon.ai</a>. ' +
'No newsletters, no follow-up sequences — just a reply to your enquiry.</td></tr>' +

'</table></td></tr></table></body></html>';
}

/* ── internal notification ───────────────────────────────── */

function notifyTeam_(lead, ackSent) {
  var rows = [
    ['Name', lead.name], ['Email', lead.email], ['Company', lead.company || '—'],
    ['Budget', lead.budget || '—'], ['Page', lead.page], ['Ack email', ackSent ? 'sent' : 'FAILED']
  ].map(function (r) {
    return '<tr><td style="padding:6px 14px 6px 0;color:#72767F;font-size:13px;white-space:nowrap;">' + r[0] +
           '</td><td style="padding:6px 0;color:#0E0F11;font-size:14px;">' + esc_(r[1]) + '</td></tr>';
  }).join('');

  MailApp.sendEmail({
    to: CONFIG.NOTIFY_TO,
    subject: '🔔 New lead: ' + lead.name + (lead.company ? ' (' + lead.company + ')' : ''),
    body: 'New lead from ' + lead.name + ' <' + lead.email + '>\n\n' + (lead.message || '(no message)'),
    htmlBody:
      '<div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;max-width:560px;">' +
      '<h2 style="font-size:17px;color:#0E0F11;">New website lead</h2>' +
      '<table cellpadding="0" cellspacing="0">' + rows + '</table>' +
      (lead.message
        ? '<div style="margin-top:14px;border-left:3px solid #0891B2;background:#F0F7F9;padding:12px 16px;font-size:14px;color:#3A3D45;white-space:pre-wrap;">' + esc_(lead.message) + '</div>'
        : '') +
      '<p style="font-size:13px;"><a href="mailto:' + esc_(lead.email) + '" style="color:#0891B2;">Reply to ' + esc_(firstName_(lead.name)) + ' →</a></p>' +
      '</div>',
    name: 'Avyxon Website',
    replyTo: lead.email
  });
}

/* ── helpers ─────────────────────────────────────────────── */

function parseBody_(e) {
  try {
    if (e && e.postData && e.postData.contents) {
      var t = e.postData.contents.trim();
      if (t.charAt(0) === '{') return JSON.parse(t);
      // form-encoded fallback
      var out = {};
      t.split('&').forEach(function (kv) {
        var p = kv.split('=');
        out[decodeURIComponent(p[0] || '')] = decodeURIComponent((p[1] || '').replace(/\+/g, ' '));
      });
      return out;
    }
  } catch (err) { /* fall through */ }
  return (e && e.parameter) || {};
}

function clean_(v, max) {
  if (v === null || v === undefined) return '';
  return String(v).replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, max);
}

function esc_(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function firstName_(name) {
  var f = String(name || '').trim().split(/\s+/)[0];
  return f ? f.charAt(0).toUpperCase() + f.slice(1) : 'there';
}

function jsonOut_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/* ── manual test: run this in the editor to verify end-to-end ── */
function testSubmission() {
  var res = doPost({
    postData: {
      contents: JSON.stringify({
        name: 'Test Person',
        email: CONFIG.NOTIFY_TO, // sends the ack to your own inbox
        company: 'Test Co',
        budget: "Let's discuss",
        message: 'This is a test submission from the Apps Script editor.',
        source: 'avyxon.ai',
        page: '/test'
      })
    }
  });
  Logger.log(res.getContent());
}
