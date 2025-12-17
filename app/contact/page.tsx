'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center">
        <Image
          src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/rana-ojos-rojos.jpeg"
          alt="Contact GoAdventuresCR"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-green-950/60 to-green-950/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Contact <span className="text-orange-400">Us</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We&apos;re here to help you plan your perfect Costa Rican adventure
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-6">
                Send us a <span className="text-orange-500">message</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Have a question about our tours? Want to customize an experience?
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We&apos;ll respond to your inquiry soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-orange-500 hover:text-orange-600 font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a topic</option>
                        <option value="booking">Tour Booking</option>
                        <option value="custom">Custom Tour Request</option>
                        <option value="group">Group Booking</option>
                        <option value="question">General Question</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your travel plans or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-6">
                Get in <span className="text-orange-500">touch</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Prefer to reach out directly? Here&apos;s how you can contact us.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900">Email</h3>
                    <a href="mailto:info@goadventurescr.com" className="text-orange-500 hover:text-orange-600">
                      info@goadventurescr.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900">WhatsApp</h3>
                    <a href="https://wa.me/50688888888" className="text-orange-500 hover:text-orange-600">
                      +506 8888-8888
                    </a>
                    <p className="text-sm text-gray-500">Available 8am - 8pm (Costa Rica time)</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900">Location</h3>
                    <p className="text-gray-600">Guanacaste, Costa Rica</p>
                    <p className="text-sm text-gray-500">We operate throughout the province</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900">Response Time</h3>
                    <p className="text-gray-600">Within 24 hours</p>
                    <p className="text-sm text-gray-500">Usually much faster!</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-green-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-green-900 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-green-900 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-green-900 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    aria-label="TripAdvisor"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 00-.807 2.995 6.02 6.02 0 006.02 6.02 5.97 5.97 0 003.82-1.377l1.006 1.302 1.005-1.302a5.97 5.97 0 003.82 1.377 6.02 6.02 0 006.02-6.02 5.997 5.997 0 00-.807-2.995L24 6.648h-4.35a13.573 13.573 0 00-7.644-2.353zM5.176 15.778a3.99 3.99 0 01-4-4.001 3.99 3.99 0 014-4.001 3.99 3.99 0 014 4.001 3.99 3.99 0 01-4 4.001zm6.83-4.001c0 2.21-1.79 4.001-4 4.001-.56 0-1.09-.115-1.573-.324.484-.21.89-.552 1.186-1.003.297.45.703.793 1.186 1.003a3.978 3.978 0 01-1.573.324c-2.21 0-4-1.79-4-4.001s1.79-4.001 4-4.001c.56 0 1.09.115 1.573.324-.483.21-.889.553-1.186 1.003-.296-.45-.702-.793-1.186-1.003.484-.21 1.013-.324 1.573-.324 2.21 0 4 1.79 4 4.001zm6.818 4.001a3.99 3.99 0 01-4-4.001 3.99 3.99 0 014-4.001 3.99 3.99 0 014 4.001 3.99 3.99 0 01-4 4.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-12">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-green-900 mb-2">How do I book a tour?</h3>
              <p className="text-gray-600">
                You can book directly through our website by selecting a tour and filling out
                the quote form, or contact us via WhatsApp or email for personalized assistance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-green-900 mb-2">What is your cancellation policy?</h3>
              <p className="text-gray-600">
                We offer free cancellation up to 24 hours before the tour start time.
                Cancellations made less than 24 hours in advance are not eligible for refunds.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-green-900 mb-2">Do you offer hotel pickup?</h3>
              <p className="text-gray-600">
                Yes! Most of our tours include complimentary hotel pickup and drop-off
                within the Guanacaste area. Please confirm when booking.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-green-900 mb-2">Can you create custom tours?</h3>
              <p className="text-gray-600">
                Absolutely! We love creating personalized experiences. Contact us with your
                interests and group size, and we&apos;ll design the perfect adventure for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
