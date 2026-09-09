// Netlify Event Function: triggered when a form submission is verified.
// Sends an email via Resend for the "contact" and "meetup-leipzig" forms.
//
// Required env vars in Netlify:
// - RESEND_API_KEY
// Optional:
// - FROM_EMAIL (must match a verified domain in Resend for production sending)

const RECIPIENT = 'maximilian@connectingthe.de';
const FROM_EMAIL = process.env.FROM_EMAIL || 'ConnectingTheDots <onboarding@resend.dev>';

const ALLOWED_FORMS = ['contact', 'meetup-leipzig'];

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

    const formName = String(
      payload?.form_name || payload?.formName || payload?.name || payload?.form_id || ''
    );
    if (!ALLOWED_FORMS.includes(formName)) {
      // Be conservative: only handle known forms.
      return json(200, { ok: true, skipped: true, reason: `unhandled form (${formName || 'unknown'})` });
    }

    const data = payload?.data || payload?.human_fields || {};
    const { subject, html } = formName === 'meetup-leipzig'
      ? buildMeetupEmail(data)
      : buildContactEmail(data);

    console.log(`submission-created: sending email for ${formName}`);

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ from: FROM_EMAIL, to: [RECIPIENT], subject, html }),
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

function buildContactEmail(data: Record<string, any>) {
  const firstName = String(data.firstName || data.first_name || '');
  const lastName = String(data.lastName || data.last_name || '');
  const company = String(data.company || '');
  const email = String(data.email || '');
  const goals = String(data.goals || data.message || '');
  const consent = String(data.consent || '');

  const html = `
    <h2>Neue Kontaktanfrage</h2>
    <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
    <p><strong>Firma:</strong> ${escapeHtml(company) || '–'}</p>
    <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Projektziele & Herausforderungen:</strong></p>
    <p>${escapeHtml(goals) || '–'}</p>
    <p><strong>Einverständnis:</strong> ${consent ? 'Ja' : 'Nein'}</p>
  `;
  return { subject: `Kontaktanfrage von ${firstName} ${lastName}`.trim(), html };
}

function buildMeetupEmail(data: Record<string, any>) {
  const firstName = String(data.firstName || data.first_name || '');
  const lastName = String(data.lastName || data.last_name || '');
  const company = String(data.company || '');
  const role = String(data.role || '');
  const email = String(data.email || '');
  const experience = String(data.experience || '');
  const source = String(data.source || '');
  const consent = String(data.consent || '');

  const html = `
    <h2>Neue Meetup-Anfrage · Leipzig Live-Commerce</h2>
    <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
    <p><strong>Firma:</strong> ${escapeHtml(company) || '–'}</p>
    <p><strong>Rolle:</strong> ${escapeHtml(role) || '–'}</p>
    <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Erfahrung mit Live-Commerce:</strong> ${escapeHtml(experience) || '–'}</p>
    <p><strong>Wie auf uns aufmerksam geworden:</strong> ${escapeHtml(source) || '–'}</p>
    <p><strong>Einverständnis:</strong> ${consent ? 'Ja' : 'Nein'}</p>
  `;
  return { subject: `Meetup-Anfrage von ${firstName} ${lastName}`.trim(), html };
}

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
