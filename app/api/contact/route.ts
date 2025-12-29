import { NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  budget?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check for SendGrid or Formspree configuration
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    const toEmail = process.env.CONTACT_EMAIL || 'krishi12@my.yorku.ca';

    if (sendgridApiKey) {
      // Send via SendGrid
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sendgridApiKey}`,
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: toEmail }],
              subject: `Portfolio Contact: ${body.name}`,
            },
          ],
          from: { email: 'noreply@portfolio.com', name: 'Portfolio Contact' },
          reply_to: { email: body.email, name: body.name },
          content: [
            {
              type: 'text/html',
              value: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${body.name}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                ${body.budget ? `<p><strong>Budget:</strong> ${body.budget}</p>` : ''}
                <h3>Message:</h3>
                <p>${body.message.replace(/\n/g, '<br>')}</p>
              `,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email via SendGrid');
      }
    } else if (formspreeEndpoint) {
      // Send via Formspree
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          message: body.message,
          budget: body.budget || 'Not specified',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send via Formspree');
      }
    } else {
      // Log the message for development (no email service configured)
      console.log('📧 Contact Form Submission:');
      console.log('Name:', body.name);
      console.log('Email:', body.email);
      console.log('Budget:', body.budget || 'Not specified');
      console.log('Message:', body.message);
      console.log('---');
      console.log('Note: Configure SENDGRID_API_KEY or FORMSPREE_ENDPOINT to enable email sending.');
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message received successfully' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 }
    );
  }
}

