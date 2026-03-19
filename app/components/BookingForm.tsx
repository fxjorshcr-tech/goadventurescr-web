'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

interface BookingFormProps {
  tourName: string;
  tourPrice: number;
  tourId: string;
}

const WHATSAPP_NUMBER = '50684254181';
const NEXT_LEVEL_PRICE = 30;
const CANOPY_TOUR_ID = 'tirolesa-aventura';

const CANOPY_TOUR_TIMES = [
  { label: '8:00 AM', value: '8:00 AM', pickupTime: '7:15 AM' },
  { label: '11:00 AM', value: '11:00 AM', pickupTime: '10:15 AM' },
  { label: '3:00 PM', value: '3:00 PM', pickupTime: '2:15 PM' },
];

export default function BookingForm({ tourName, tourPrice, tourId }: BookingFormProps) {
  const router = useRouter();
  const isCanopyTour = tourId === CANOPY_TOUR_ID;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 1,
    date: '',
    pickupLocation: '',
    pickupTime: isCanopyTour ? '' : '7:00 AM',
    tourTime: '',
    nextLevel: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const canopyPickupTime = useMemo(() => {
    if (!isCanopyTour || !formData.tourTime) return '';
    const selected = CANOPY_TOUR_TIMES.find(t => t.value === formData.tourTime);
    return selected?.pickupTime || '';
  }, [isCanopyTour, formData.tourTime]);

  const nextLevelTotal = formData.nextLevel ? NEXT_LEVEL_PRICE * formData.guests : 0;
  const totalPrice = tourPrice * formData.guests + nextLevelTotal;

  useEffect(() => {
    const isValid = formData.name.trim() !== '' &&
                    formData.email.trim() !== '' &&
                    formData.email.includes('@') &&
                    formData.date !== '' &&
                    formData.pickupLocation.trim() !== '' &&
                    (isCanopyTour ? formData.tourTime !== '' : formData.pickupTime !== '');
    setIsFormValid(isValid);
  }, [formData, isCanopyTour]);

  const handleContinueToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setPaymentError('');
      setShowPayment(true);
    }
  };

  const getWhatsAppLink = () => {
    const pickupTimeDisplay = isCanopyTour ? canopyPickupTime : formData.pickupTime;
    const message = encodeURIComponent(
      `Hi! I'm interested in booking the "${tourName}" tour.\n\n` +
      `Name: ${formData.name || '[Your name]'}\n` +
      `Guests: ${formData.guests}\n` +
      `Date: ${formData.date || '[Preferred date]'}\n` +
      (isCanopyTour ? `Tour Time: ${formData.tourTime}\n` : '') +
      `Pickup Location: ${formData.pickupLocation || '[Your hotel/Airbnb]'}\n` +
      `Pickup Time: ${pickupTimeDisplay}\n` +
      (formData.nextLevel ? `Next Level Experience: Yes (+$${NEXT_LEVEL_PRICE}/person)\n` : '') +
      `Total: $${totalPrice}\n\n` +
      `Can you help me with the reservation?`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg sticky top-24">
      {/* Price Header */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">From</p>
        <p className="text-3xl font-bold text-green-900">
          ${tourPrice} <span className="text-base font-normal text-gray-500">per adult</span>
        </p>
      </div>

      {!showPayment ? (
        /* Step 1: Booking Details Form */
        <form onSubmit={handleContinueToPayment} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
              Number of Guests *
            </label>
            <select
              id="guests"
              required
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-white"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'guest' : 'guests'}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Tour Date *
            </label>
            <input
              type="date"
              id="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
            />
          </div>

          {/* Tour Time - Only for Canopy Tour */}
          {isCanopyTour && (
            <div>
              <label htmlFor="tourTime" className="block text-sm font-medium text-gray-700 mb-1">
                Tour Time *
              </label>
              <select
                id="tourTime"
                required
                value={formData.tourTime}
                onChange={(e) => setFormData({ ...formData, tourTime: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-white"
              >
                <option value="">Select a time</option>
                {CANOPY_TOUR_TIMES.map((time) => (
                  <option key={time.value} value={time.value}>
                    {time.label}
                  </option>
                ))}
              </select>
              {canopyPickupTime && (
                <p className="text-sm text-orange-600 mt-1">
                  Pickup time: {canopyPickupTime} (45 min before tour)
                </p>
              )}
            </div>
          )}

          {/* Pickup Location */}
          <div>
            <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-1">
              Pickup Location (Hotel / Airbnb) *
            </label>
            <input
              type="text"
              id="pickupLocation"
              required
              value={formData.pickupLocation}
              onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
              placeholder="e.g. Hotel Tamarindo Diria, Airbnb Casa Sol..."
            />
          </div>

          {/* Pickup Time - For non-canopy tours */}
          {!isCanopyTour && (
            <div>
              <label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Time *
              </label>
              <select
                id="pickupTime"
                required
                value={formData.pickupTime}
                onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-white"
              >
                <option value="7:00 AM">7:00 AM</option>
                <option value="8:00 AM">8:00 AM</option>
              </select>
            </div>
          )}

          {/* Next Level Upgrade - Only for Canopy Tour */}
          {isCanopyTour && (
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.nextLevel}
                  onChange={(e) => setFormData({ ...formData, nextLevel: e.target.checked })}
                  className="mt-1 w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 accent-orange-500"
                />
                <div>
                  <span className="font-semibold text-green-900 block">
                    Add Next Level Experience (+${NEXT_LEVEL_PRICE}/person)
                  </span>
                  <span className="text-sm text-gray-600 block mt-1">
                    Cross breathtaking Tibetan bridges high above the canopy and launch yourself on a Mega Tarzan Swing!
                  </span>
                </div>
              </label>
            </div>
          )}

          {/* Total Price Display */}
          <div className="bg-gray-50 rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                ${tourPrice} x {formData.guests} {formData.guests === 1 ? 'guest' : 'guests'}
              </span>
              <span className="text-lg font-semibold text-green-900">${tourPrice * formData.guests}</span>
            </div>
            {formData.nextLevel && (
              <div className="flex justify-between items-center mt-1">
                <span className="text-gray-600">
                  Next Level ${NEXT_LEVEL_PRICE} x {formData.guests} {formData.guests === 1 ? 'guest' : 'guests'}
                </span>
                <span className="text-lg font-semibold text-green-900">${nextLevelTotal}</span>
              </div>
            )}
            {formData.nextLevel && (
              <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between items-center">
                <span className="font-semibold text-gray-700">Total</span>
                <span className="text-xl font-bold text-green-900">${totalPrice}</span>
              </div>
            )}
            {!formData.nextLevel && (
              <div className="hidden"></div>
            )}
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-full transition-colors"
          >
            Continue to Payment
          </button>
        </form>
      ) : (
        /* Step 2: Payment with PayPal */
        <div className="space-y-4">
          {/* Booking Summary */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 mb-2">Booking Summary</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p><span className="font-medium">Name:</span> {formData.name}</p>
              <p><span className="font-medium">Email:</span> {formData.email}</p>
              <p><span className="font-medium">Guests:</span> {formData.guests}</p>
              <p><span className="font-medium">Date:</span> {new Date(formData.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              {isCanopyTour && formData.tourTime && (
                <p><span className="font-medium">Tour Time:</span> {formData.tourTime}</p>
              )}
              <p><span className="font-medium">Pickup Location:</span> {formData.pickupLocation}</p>
              <p><span className="font-medium">Pickup Time:</span> {isCanopyTour ? canopyPickupTime : formData.pickupTime}</p>
              {formData.nextLevel && (
                <p><span className="font-medium text-orange-600">Next Level Experience:</span> <span className="text-orange-600">Yes (+${NEXT_LEVEL_PRICE}/person)</span></p>
              )}
            </div>
            <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between items-center">
              <span className="font-semibold text-green-900">Total</span>
              <span className="text-2xl font-bold text-green-900">${totalPrice}</span>
            </div>
          </div>

          {/* Edit Button */}
          <button
            onClick={() => setShowPayment(false)}
            className="text-sm text-orange-500 hover:text-orange-600 underline"
          >
            Edit booking details
          </button>

          {/* Payment Error */}
          {paymentError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
              {paymentError}
            </div>
          )}

          {/* Processing Overlay */}
          {isProcessing && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="animate-spin w-6 h-6 border-2 border-green-600 border-t-transparent rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-green-700">Processing your payment...</p>
            </div>
          )}

          {/* PayPal Buttons */}
          <PayPalScriptProvider
            options={{
              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'test',
              currency: 'USD',
            }}
          >
            <PayPalButtons
              style={{
                layout: 'vertical',
                color: 'gold',
                shape: 'pill',
                label: 'pay'
              }}
              disabled={isProcessing}
              createOrder={async () => {
                try {
                  const response = await fetch('/api/paypal/create-order', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      tourId,
                      guests: formData.guests,
                      name: formData.name,
                      email: formData.email,
                      date: formData.date,
                      pickupLocation: formData.pickupLocation,
                      pickupTime: isCanopyTour ? canopyPickupTime : formData.pickupTime,
                      tourTime: isCanopyTour ? formData.tourTime : undefined,
                      nextLevel: formData.nextLevel,
                    }),
                  });

                  const data = await response.json();

                  if (!response.ok) {
                    throw new Error(data.error || 'Failed to create order');
                  }

                  return data.id;
                } catch (err) {
                  const message = err instanceof Error ? err.message : 'Unknown error';
                  console.error('Error creating order:', message);
                  setPaymentError(`Could not initialize payment: ${message}`);
                  throw err;
                }
              }}
              onApprove={async (data) => {
                try {
                  setIsProcessing(true);
                  setPaymentError('');

                  const response = await fetch('/api/paypal/capture-order', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      orderID: data.orderID,
                      bookingData: {
                        tourId,
                        name: formData.name,
                        email: formData.email,
                        guests: formData.guests,
                        date: formData.date,
                        pickupLocation: formData.pickupLocation,
                        pickupTime: isCanopyTour ? canopyPickupTime : formData.pickupTime,
                        tourTime: isCanopyTour ? formData.tourTime : undefined,
                        nextLevel: formData.nextLevel,
                      },
                    }),
                  });

                  const captureData = await response.json();

                  if (!response.ok) {
                    throw new Error(captureData.error || 'Failed to capture payment');
                  }

                  // Redirect to confirmation page with booking details
                  const params = new URLSearchParams({
                    orderId: captureData.id,
                    tour: tourName,
                    tourId: tourId,
                    name: formData.name,
                    email: formData.email,
                    guests: formData.guests.toString(),
                    date: formData.date,
                    amount: captureData.amount || totalPrice.toString(),
                    pickupLocation: formData.pickupLocation,
                    pickupTime: isCanopyTour ? canopyPickupTime : formData.pickupTime,
                  });

                  if (isCanopyTour && formData.tourTime) {
                    params.set('tourTime', formData.tourTime);
                  }
                  if (formData.nextLevel) {
                    params.set('nextLevel', 'true');
                  }

                  router.push(`/booking/confirmation?${params.toString()}`);
                } catch (err) {
                  console.error('Error capturing payment:', err);
                  setIsProcessing(false);
                  setPaymentError(
                    'There was an error processing your payment. Please try again or contact us via WhatsApp.'
                  );
                }
              }}
              onError={(err) => {
                console.error('PayPal error:', err);
                setIsProcessing(false);
                setPaymentError(
                  'There was an error with PayPal. Please try again or contact us via WhatsApp.'
                );
              }}
            />
          </PayPalScriptProvider>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-sm text-gray-500">or contact us directly</span>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book via WhatsApp
          </a>
        </div>
      )}

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Free cancellation up to 24h before
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Secure payment with PayPal
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Instant confirmation
        </div>
      </div>

      {/* WhatsApp Quick Contact (always visible) */}
      {!showPayment && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Questions? Chat with us
          </a>
        </div>
      )}
    </div>
  );
}
