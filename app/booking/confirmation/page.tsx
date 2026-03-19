'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

const WHATSAPP_NUMBER = '50684254181';

function ConfirmationContent() {
  const searchParams = useSearchParams();

  const orderId = searchParams.get('orderId') || '';
  const tourName = searchParams.get('tour') || '';
  const tourId = searchParams.get('tourId') || '';
  const name = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';
  const guests = searchParams.get('guests') || '1';
  const date = searchParams.get('date') || '';
  const amount = searchParams.get('amount') || '0';
  const pickupLocation = searchParams.get('pickupLocation') || '';
  const pickupTime = searchParams.get('pickupTime') || '';
  const tourTime = searchParams.get('tourTime') || '';
  const nextLevel = searchParams.get('nextLevel') === 'true';

  const formattedDate = date
    ? new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  const whatsAppMessage = encodeURIComponent(
    `Hi! I just booked the "${tourName}" tour.\n\n` +
    `Order ID: ${orderId}\n` +
    `Name: ${name}\n` +
    `Date: ${formattedDate}\n\n` +
    `I have a question about my booking.`
  );
  const whatsAppLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsAppMessage}`;

  // If no orderId, show a fallback
  if (!orderId) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">No booking found</h1>
          <p className="text-gray-600 mb-6">
            It looks like you arrived here without completing a booking. If you believe this is an error, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tours"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Browse Tours
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Success Header */}
      <section className="bg-green-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Booking Confirmed!
          </h1>
          <p className="text-green-200 text-lg">
            Thank you {name}! Your adventure is booked and ready to go.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Booking Details Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            {/* Card Header */}
            <div className="bg-green-50 border-b border-green-100 px-6 py-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-lg font-bold text-green-900">Booking Details</h2>
                <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Payment Confirmed
                </span>
              </div>
            </div>

            {/* Details Grid */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Tour</p>
                  <p className="font-semibold text-green-900 text-lg">{tourName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Date</p>
                  <p className="font-semibold text-green-900">{formattedDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Guest Name</p>
                  <p className="font-semibold text-green-900">{name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-semibold text-green-900">{email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Number of Guests</p>
                  <p className="font-semibold text-green-900">{guests} {parseInt(guests) === 1 ? 'guest' : 'guests'}</p>
                </div>
                {tourTime && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Tour Time</p>
                    <p className="font-semibold text-green-900">{tourTime}</p>
                  </div>
                )}
                {pickupLocation && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Pickup Location</p>
                    <p className="font-semibold text-green-900">{pickupLocation}</p>
                  </div>
                )}
                {pickupTime && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Pickup Time</p>
                    <p className="font-semibold text-green-900">{pickupTime}</p>
                  </div>
                )}
                {nextLevel && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Next Level Experience</p>
                    <p className="font-semibold text-orange-600">Included</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-500 mb-1">Order ID</p>
                  <p className="font-mono text-sm text-green-900">{orderId}</p>
                </div>
              </div>

              {/* Total */}
              <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">Total Paid</span>
                <span className="text-3xl font-bold text-green-900">${amount} USD</span>
              </div>
            </div>
          </div>

          {/* What's Next Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-green-900 mb-4">What&apos;s Next?</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Check Your Email</p>
                  <p className="text-sm text-gray-600">
                    A confirmation email has been sent to <strong>{email}</strong> with all booking details.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Detailed Itinerary</p>
                  <p className="text-sm text-gray-600">
                    You will receive a detailed itinerary via email before your tour date.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Pickup Confirmation</p>
                  <p className="text-sm text-gray-600">
                    Hotel pickup details will be confirmed 24 hours before your tour.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Free Cancellation</p>
                  <p className="text-sm text-gray-600">
                    Remember, you can cancel for free up to 24 hours before the experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact / Actions */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-amber-900 mb-2">Have questions about your booking?</h3>
            <p className="text-sm text-amber-800 mb-4">
              Our team is available to help you with anything you need before your adventure.
            </p>
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat with us on WhatsApp
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {tourId && (
              <Link
                href={`/tours/${tourId}`}
                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                View Tour Details
              </Link>
            )}
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Explore More Adventures
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function BookingConfirmationPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your booking details...</p>
        </div>
      </main>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}
