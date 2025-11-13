// Google Calendar API Integration
// This function handles form submissions and creates calendar events

// Netlify Function Handler Type
interface NetlifyEvent {
  httpMethod: string;
  body: string | null;
  headers: Record<string, string>;
}

interface NetlifyContext {
  [key: string]: any;
}

export const handler = async (event: NetlifyEvent, context: NetlifyContext) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const formData = JSON.parse(event.body || '{}');
    const {
      firstName,
      lastName,
      email,
      company,
      goals,
    } = formData;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Option 1: Send email notification (using a service like SendGrid, Resend, etc.)
    // Option 2: Create Google Calendar event via API
    // Option 3: Store in database (Supabase, Airtable, etc.)

    // Example: Create Google Calendar event
    // You'll need to set up Google Calendar API credentials
    const calendarEvent = await createCalendarEvent({
      summary: `Terminanfrage von ${firstName} ${lastName}`,
      description: `
        Kontaktanfrage von:
        Name: ${firstName} ${lastName}
        Firma: ${company || 'Nicht angegeben'}
        Email: ${email}
        
        Projektziele & Herausforderungen:
        ${goals || 'Nicht angegeben'}
      `,
      start: {
        dateTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
        timeZone: 'Europe/Berlin',
      },
      end: {
        dateTime: new Date(Date.now() + 24 * 60 * 60 * 1000 + 30 * 60 * 1000).toISOString(), // 30 minutes later
        timeZone: 'Europe/Berlin',
      },
      attendees: [
        { email: email },
        // Add your email here
        { email: process.env.CALENDAR_OWNER_EMAIL || '' },
      ],
    });

    // Send email notification (optional)
    // await sendEmailNotification(formData);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: true,
        message: 'Form submitted successfully',
        calendarEventId: calendarEvent.id,
      }),
    };
  } catch (error: any) {
    console.error('Error processing form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message,
      }),
    };
  }
};

// Helper function to create Google Calendar event
async function createCalendarEvent(eventDetails: {
  summary: string;
  description: string;
  start: { dateTime: string; timeZone: string };
  end: { dateTime: string; timeZone: string };
  attendees: Array<{ email: string }>;
}) {
  // You need to set up Google Calendar API credentials
  // See: https://developers.google.com/calendar/api/guides/auth
  
  const accessToken = process.env.GOOGLE_CALENDAR_ACCESS_TOKEN;
  const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';

  if (!accessToken) {
    throw new Error('Google Calendar access token not configured');
  }

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventDetails),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Google Calendar API error: ${error}`);
  }

  return await response.json();
}

