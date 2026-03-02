// Netlify Event Function: triggered when a form submission is verified.
// Sends an email via Resend for the "contact" form.
//
// Required env vars in Netlify:
// - RESEND_API_KEY
// Optional:
// - FROM_EMAIL (must match a verified domain in Resend for production sending)

const RECIPIENT = 'maximilian@connectingthe.de';
const FROM_EMAIL = process.env.FROM_EMAIL || 'ConnectingTheDots <onboarding@resend.dev>';

export const handler = async (event: { body?: string | null }) => {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('submission-created: RESEND_API_KEY not set');
      return json(200, { ok: true, skipped: true, reason: 'RESEND_API_KEY missing' });
    }

    const raw = event.body || '';
    const parsed = raw ? JSON.parse(raw) : {};
    const payload = parsed?.payload || {};

    const formName = payload?.form_name || payload?.formName || payload?.name || payload?.form_id || '';
    if (payload?.form_name && payload.form_name !== 'contact') {
      return json(200, { ok: true, skipped: true, reason: `not contact (${payload.form_name})` });
    }
    if (!payload?.form_name && payload?.form_name !== 'contact' && payload?.formName !== 'contact' && payload?.name !== 'contact') {
      // Be conservative: if we can't identify the form, don't send.
      return json(200, { ok: true, skipped: true, reason: `unknown form (${String(formName)})` });
    }

    const data = payload?.data || payload?.human_fields || {};
    const firstName = String(data.firstName || data.first_name || '');
    const lastName = String(data.lastName || data.last_name || '');
    const company = String(data.company || '');
    const email = String(data.email || '');
    const goals = String(data.goals || data.message || '');
    const consent = String(data.consent || '');

    console.log('submission-created: sending email for contact', {
      email,
      firstName,
      lastName,
    });

    const html = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>Firma:</strong> ${escapeHtml(company) || '–'}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Projektziele & Herausforderungen:</strong></p>
      <p>${escapeHtml(goals) || '–'}</p>
      <p><strong>Einverständnis:</strong> ${consent ? 'Ja' : 'Nein'}</p>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [RECIPIENT],
        subject: `Kontaktanfrage von ${firstName} ${lastName}`.trim(),
        html,
      }),
    });

    const text = await res.text();
    if (!res.ok) {
      console.error('submission-created: Resend error', res.status, text);
      return json(502, { ok: false, error: 'Email send failed', status: res.status, details: text });
    }

    console.log('submission-created: Resend OK', text);
    return json(200, { ok: true, resend: text });
  } catch (err: any) {
    console.error('submission-created: error', err);
    return json(500, { ok: false, error: 'Internal error', message: err?.message });
  }
};

function json(statusCode: number, body: any) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return String(text).replace(/[&<>"']/g, (c) => map[c] ?? c);
}

