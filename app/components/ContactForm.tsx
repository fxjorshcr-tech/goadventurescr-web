'use client';

import { useState } from 'react';

interface ContactFormProps {
  variant?: 'full' | 'compact';
}

export default function ContactForm({ variant = 'full' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  if (submitted) {
    return (
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
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={variant === 'full' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-4'}>
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {variant === 'full' && (
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone (optional)
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      )}

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={variant === 'full' ? 5 : 4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white px-6 py-3 rounded-full font-bold transition-colors"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
