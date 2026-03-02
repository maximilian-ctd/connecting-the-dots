// Netlify Function: E-Mail bei Kontaktformular per Resend senden
// In Netlify: Environment Variables → RESEND_API_KEY setzen (API Key von resend.com)

interface NetlifyEvent {
  httpMethod: string;
  body: string | null;
  headers: Record<string, string>;
}

interface NetlifyContext {
  [key: string]: any;
}

interface FormDataParsed {
  'form-name': string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  goals: string;
  consent: string;
}

const RECIPIENT = 'maximilian@connectingthe.de';
const FROM_EMAIL = process.env.FROM_EMAIL || 'ConnectingTheDots <onboarding@resend.dev>';

export const handler = async (event: NetlifyEvent, _context: NetlifyContext) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const formData = new URLSearchParams(event.body || '');
    const data: FormDataParsed = {
      'form-name': formData.get('form-name') || '',
      firstName: formData.get('firstName') || '',
      lastName: formData.get('lastName') || '',
      company: formData.get('company') || '',
      email: formData.get('email') || '',
      goals: formData.get('goals') || '',
      consent: formData.get('consent') || '',
    };

    if (!data.firstName || !data.lastName || !data.email) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY not set');
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ success: true, message: 'Form saved (email not configured)' }),
      };
    }

    const html = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</p>
      <p><strong>Firma:</strong> ${escapeHtml(data.company) || '–'}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Projektziele & Herausforderungen:</strong></p>
      <p>${escapeHtml(data.goals) || '–'}</p>
      <p><strong>Einverständnis:</strong> ${data.consent ? 'Ja' : 'Nein'}</p>
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
        subject: `Kontaktanfrage von ${data.firstName} ${data.lastName}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', res.status, err);
      return {
        statusCode: 502,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Email send failed', details: err }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ success: true, message: 'Form submitted successfully' }),
    };
  } catch (error: any) {
    console.error('Error processing form:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Internal server error', message: error?.message }),
    };
  }
};

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (c) => map[c] ?? c);
}

