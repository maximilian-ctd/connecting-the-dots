// Netlify Function to send email notifications
// This function sends an email when the form is submitted

interface NetlifyEvent {
  httpMethod: string;
  body: string | null;
  headers: Record<string, string>;
}

interface NetlifyContext {
  [key: string]: any;
}

interface FormData {
  'form-name': string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  goals: string;
  consent: string;
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
    // Parse form data
    const formData = new URLSearchParams(event.body || '');
    const data: FormData = {
      'form-name': formData.get('form-name') || '',
      firstName: formData.get('firstName') || '',
      lastName: formData.get('lastName') || '',
      company: formData.get('company') || '',
      email: formData.get('email') || '',
      goals: formData.get('goals') || '',
      consent: formData.get('consent') || '',
    };

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Send email using Netlify's built-in email service or external service
    // Option 1: Use Netlify Forms (already handled by Netlify Forms)
    // Option 2: Use external email service (SendGrid, Resend, etc.)
    
    // For now, we'll use Netlify Forms which handles email automatically
    // If you want custom email formatting, uncomment and configure below:
    
    /*
    // Example: Send email via external service (e.g., Resend, SendGrid)
    const emailServiceUrl = process.env.EMAIL_SERVICE_URL;
    const emailApiKey = process.env.EMAIL_API_KEY;
    
    if (emailServiceUrl && emailApiKey) {
      const emailResponse = await fetch(emailServiceUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${emailApiKey}`,
        },
        body: JSON.stringify({
          to: 'maximilian@connectingthe.de',
          from: 'noreply@connectingthe.de',
          subject: `Neue Kontaktanfrage von ${data.firstName} ${data.lastName}`,
          html: `
            <h2>Neue Kontaktanfrage</h2>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Firma:</strong> ${data.company || 'Nicht angegeben'}</p>
            <p><strong>E-Mail:</strong> ${data.email}</p>
            <p><strong>Projektziele & Herausforderungen:</strong></p>
            <p>${data.goals || 'Nicht angegeben'}</p>
            <p><strong>Einverständnis:</strong> ${data.consent ? 'Ja' : 'Nein'}</p>
          `,
        }),
      });
      
      if (!emailResponse.ok) {
        throw new Error('Failed to send email');
      }
    }
    */

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: true,
        message: 'Form submitted successfully',
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

