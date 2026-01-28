import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, tourName, guests, date, formType } = body;

    // Validate required fields based on form type
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Message is required for contact forms, but optional for quotes
    if (formType !== 'quote' && !message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Build email content based on form type
    let emailSubject: string;
    let emailBody: string;

    if (formType === 'quote') {
      emailSubject = `New Tour Quote Request: ${tourName}`;
      emailBody = `
        <h2>New Tour Quote Request</h2>
        <p><strong>Tour:</strong> ${tourName}</p>
        <hr>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Preferred Date:</strong> ${date || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No additional message'}</p>
        <hr>
        <p><em>This quote request was submitted through the GoAdventuresCR website.</em></p>
      `;
    } else {
      const subjectMap: Record<string, string> = {
        booking: 'Tour Booking Inquiry',
        custom: 'Custom Tour Request',
        group: 'Group Booking Inquiry',
        question: 'General Question',
        other: 'Other Inquiry',
      };
      emailSubject = `[Contact Form] ${subjectMap[subject] || subject || 'New Message'}`;
      emailBody = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subjectMap[subject] || subject || 'Not specified'}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>This message was submitted through the GoAdventuresCR contact form.</em></p>
      `;
    }

    // Send email to GoAdventuresCR
    const { error } = await resend.emails.send({
      from: 'GoAdventuresCR <noreply@goadventurescr.com>',
      to: [process.env.CONTACT_EMAIL || 'info@goadventurescr.com'],
      replyTo: email,
      subject: emailSubject,
      html: emailBody,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const confirmationBody = formType === 'quote'
      ? `
        <h2>Thank you for your quote request!</h2>
        <p>Hi ${name},</p>
        <p>We have received your quote request for <strong>${tourName}</strong>.</p>
        <p>Our team will review your request and get back to you within 24 hours with a personalized quote.</p>
        <hr>
        <p><strong>Your request details:</strong></p>
        <p>Tour: ${tourName}</p>
        <p>Number of Guests: ${guests}</p>
        <p>Preferred Date: ${date || 'Not specified'}</p>
        ${message ? `<p>Message: ${message}</p>` : ''}
        <hr>
        <p>If you have any questions, feel free to reply to this email or contact us at info@goadventurescr.com</p>
        <p>Best regards,<br>The GoAdventuresCR Team</p>
      `
      : `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${name},</p>
        <p>We have received your message and will respond within 24 hours.</p>
        <hr>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>If you have any urgent questions, feel free to contact us at info@goadventurescr.com</p>
        <p>Best regards,<br>The GoAdventuresCR Team</p>
      `;

    await resend.emails.send({
      from: 'GoAdventuresCR <noreply@goadventurescr.com>',
      to: [email],
      subject: formType === 'quote'
        ? `Your quote request for ${tourName} - GoAdventuresCR`
        : 'We received your message - GoAdventuresCR',
      html: confirmationBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
