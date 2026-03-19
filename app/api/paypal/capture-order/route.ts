import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { tours, comboTours } from '../../../data/tours';

const allTours = [...tours, ...comboTours];

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

const PAYPAL_API_BASE = process.env.PAYPAL_MODE === 'live'
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com';

async function getPayPalAccessToken(): Promise<string> {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('PayPal credentials are not configured');
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    throw new Error('Failed to get PayPal access token');
  }

  const data = await response.json();
  return data.access_token;
}

async function sendBookingEmails(bookingDetails: {
  orderId: string;
  name: string;
  email: string;
  tourName: string;
  guests: number;
  date: string;
  totalAmount: string;
  pickupLocation?: string;
  pickupTime?: string;
  tourTime?: string;
  nextLevel?: boolean;
}) {
  const { orderId, name, email, tourName, guests, date, totalAmount, pickupLocation, pickupTime, tourTime, nextLevel } = bookingDetails;

  const formattedDate = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Email to business
  const businessEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #14532d; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Booking Confirmed!</h1>
      </div>
      <div style="padding: 20px; background-color: #f9fafb;">
        <h2 style="color: #14532d;">Payment Received via PayPal</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Order ID</td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-family: monospace;">${orderId}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Tour</td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${tourName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Customer</td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${name} (${email})</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Guests</td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${guests}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Date</td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${formattedDate}</td>
          </tr>
          ${tourTime ? `<tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Tour Time</td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${tourTime}</td>
          </tr>` : ''}
          ${pickupLocation ? `<tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Pickup Location</td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${pickupLocation}</td>
          </tr>` : ''}
          ${pickupTime ? `<tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Pickup Time</td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${pickupTime}</td>
          </tr>` : ''}
          ${nextLevel ? `<tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Next Level Experience</td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; color: #ea580c; font-weight: bold;">Yes (+$30/person)</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 8px; font-weight: bold; font-size: 18px;">Total Paid</td>
            <td style="padding: 8px; font-size: 18px; color: #14532d; font-weight: bold;">$${totalAmount} USD</td>
          </tr>
        </table>
      </div>
    </div>
  `;

  // Email to customer
  const customerEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #14532d; padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0;">Booking Confirmed!</h1>
        <p style="color: #86efac; margin: 10px 0 0 0;">Thank you for choosing GoAdventuresCR</p>
      </div>

      <div style="padding: 30px; background-color: #ffffff;">
        <p style="font-size: 16px; color: #374151;">Hi ${name},</p>
        <p style="font-size: 16px; color: #374151;">Your booking has been confirmed and payment received. Here are your reservation details:</p>

        <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <h3 style="color: #14532d; margin-top: 0;">${tourName}</h3>
          <p style="margin: 5px 0; color: #374151;"><strong>Date:</strong> ${formattedDate}</p>
          ${tourTime ? `<p style="margin: 5px 0; color: #374151;"><strong>Tour Time:</strong> ${tourTime}</p>` : ''}
          <p style="margin: 5px 0; color: #374151;"><strong>Guests:</strong> ${guests}</p>
          ${pickupLocation ? `<p style="margin: 5px 0; color: #374151;"><strong>Pickup Location:</strong> ${pickupLocation}</p>` : ''}
          ${pickupTime ? `<p style="margin: 5px 0; color: #374151;"><strong>Pickup Time:</strong> ${pickupTime}</p>` : ''}
          ${nextLevel ? `<p style="margin: 5px 0; color: #ea580c;"><strong>Next Level Experience:</strong> Included (Tibetan Bridges & Mega Tarzan Swing)</p>` : ''}
          <p style="margin: 5px 0; color: #374151;"><strong>Total Paid:</strong> $${totalAmount} USD</p>
          <p style="margin: 5px 0; color: #6b7280; font-size: 14px;"><strong>Order ID:</strong> ${orderId}</p>
        </div>

        <h3 style="color: #14532d;">What's Next?</h3>
        <ul style="color: #374151; line-height: 1.8;">
          <li>You will receive a detailed itinerary via email before your tour date</li>
          <li>Hotel pickup details will be confirmed 24 hours before the tour</li>
          <li>Remember: Free cancellation up to 24 hours before the experience</li>
        </ul>

        <div style="background-color: #fef3c7; border-radius: 8px; padding: 15px; margin: 20px 0;">
          <p style="margin: 0; color: #92400e; font-size: 14px;">
            <strong>Questions?</strong> Contact us via WhatsApp at +506 8425-4181 or reply to this email.
          </p>
        </div>
      </div>

      <div style="background-color: #14532d; padding: 20px; text-align: center;">
        <p style="color: #86efac; margin: 0; font-size: 14px;">GoAdventuresCR - Adventures in Guanacaste, Costa Rica</p>
        <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">info@goadventurescr.com | +506 8425-4181</p>
      </div>
    </div>
  `;

  try {
    const resend = getResend();
    console.log('Resend API key configured:', !!process.env.RESEND_API_KEY);

    // Send to business
    const businessResult = await resend.emails.send({
      from: 'GoAdventuresCR <noreply@goadventurescr.com>',
      to: [process.env.CONTACT_EMAIL || 'info@goadventurescr.com'],
      replyTo: email,
      subject: `New Booking: ${tourName} - ${name} (${guests} guests)`,
      html: businessEmailHtml,
    });
    console.log('Business email result:', JSON.stringify(businessResult));

    // Send confirmation to customer
    const customerResult = await resend.emails.send({
      from: 'GoAdventuresCR <noreply@goadventurescr.com>',
      to: [email],
      subject: `Booking Confirmed: ${tourName} - GoAdventuresCR`,
      html: customerEmailHtml,
    });
    console.log('Customer email result:', JSON.stringify(customerResult));
  } catch (emailError) {
    console.error('Error sending booking emails:', emailError);
    // Don't fail the payment capture if emails fail
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderID, bookingData } = body;

    if (!orderID) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    const accessToken = await getPayPalAccessToken();

    // Capture the order
    const response = await fetch(
      `${PAYPAL_API_BASE}/v2/checkout/orders/${orderID}/capture`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('PayPal capture error:', error);
      return NextResponse.json(
        { error: 'Failed to capture PayPal payment' },
        { status: 500 }
      );
    }

    const captureData = await response.json();
    const purchaseUnit = captureData.purchase_units?.[0];
    const capturedAmount = purchaseUnit?.payments?.captures?.[0]?.amount?.value || '0';

    // Use booking data sent from frontend (custom_id from PayPal is unreliable)
    if (bookingData) {
      const tour = allTours.find((t) => t.id === bookingData.tourId);
      console.log('Sending booking emails for:', tour?.title, 'to:', bookingData.email);

      await sendBookingEmails({
        orderId: captureData.id,
        name: bookingData.name,
        email: bookingData.email,
        tourName: tour?.title || bookingData.tourId,
        guests: bookingData.guests,
        date: bookingData.date,
        totalAmount: capturedAmount,
        pickupLocation: bookingData.pickupLocation,
        pickupTime: bookingData.pickupTime,
        tourTime: bookingData.tourTime,
        nextLevel: bookingData.nextLevel,
      });
    } else {
      console.error('No booking data provided - emails NOT sent');
    }

    return NextResponse.json({
      id: captureData.id,
      status: captureData.status,
      payer: captureData.payer,
      amount: capturedAmount,
    });
  } catch (error) {
    console.error('Error capturing PayPal order:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
