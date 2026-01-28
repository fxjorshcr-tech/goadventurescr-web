import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Create transporter with Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

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

    // Send email
    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL,
      to: process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: emailSubject,
      html: emailBody,
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
