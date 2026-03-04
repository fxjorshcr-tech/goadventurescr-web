import { NextRequest, NextResponse } from 'next/server';
import { tours, comboTours } from '../../../data/tours';

const allTours = [...tours, ...comboTours];

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
    const error = await response.text();
    throw new Error(`Failed to get PayPal access token: ${error}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { tourId, guests, name, email, date } = body;

    // Validate required fields
    if (!tourId || !guests || !name || !email || !date) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Look up the tour to get the real price (prevents client-side price manipulation)
    const tour = allTours.find((t) => t.id === tourId);
    if (!tour) {
      return NextResponse.json(
        { error: 'Tour not found' },
        { status: 404 }
      );
    }

    const totalPrice = (tour.price * guests).toFixed(2);

    const accessToken = await getPayPalAccessToken();

    const orderPayload = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          description: `${tour.title} - ${guests} guest(s) on ${date}`,
          amount: {
            currency_code: 'USD',
            value: totalPrice,
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: totalPrice,
              },
            },
          },
          items: [
            {
              name: tour.title,
              unit_amount: {
                currency_code: 'USD',
                value: tour.price.toFixed(2),
              },
              quantity: guests.toString(),
              category: 'DIGITAL_GOODS',
            },
          ],
          custom_id: JSON.stringify({
            tourId,
            name,
            email,
            guests,
            date,
          }),
        },
      ],
    };

    const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderPayload),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('PayPal create order error:', error);
      return NextResponse.json(
        { error: 'Failed to create PayPal order' },
        { status: 500 }
      );
    }

    const order = await response.json();

    return NextResponse.json({ id: order.id });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error creating PayPal order:', message);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
