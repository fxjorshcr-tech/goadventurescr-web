import Image from 'next/image';
import { tours, comboTours } from '../data/tours';
import TourCard from '../components/TourCard';

export const metadata = {
  title: 'Tours | GoAdventuresCR',
  description: 'Discover our unique tours and experiences in Guanacaste, Costa Rica. Ziplines, Blue Zone, coffee and more.',
};

export default function ToursPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center justify-center">
        <Image
          src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/cascada1.png"
          alt="Costa Rica Tours"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-green-950/60 to-green-950/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Explore Guanacaste
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 text-white leading-tight">
            Our Tours &<br className="hidden sm:block" /> Experiences
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Authentic adventures designed to connect you with the nature,
            culture and spirit of Costa Rica
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 py-5">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{tours.length + comboTours.length} experiences available</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Guanacaste, Costa Rica</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free cancellation 24h</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Secure payments</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tours.map((tour) => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Private Combo-Experiences */}
      <section id="combo-experiences" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">
              Exclusive Combos
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Private <span className="text-orange-500">Combo-Experiences</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              Get the most out of your time in Costa Rica with our curated combo tours — each one combines
              multiple attractions into a single unforgettable private full-day adventure
            </p>
          </div>

          {/* Combo value badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Private Groups Only
            </div>
            <div className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Lunch Included
            </div>
            <div className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Bilingual Guide
            </div>
            <div className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Hotel Transportation
            </div>
            <div className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free Cancellation 24h
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comboTours.map((tour) => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Why GoAdventuresCR
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Why book with us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Guaranteed Safety</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Certified equipment and expert guides for your peace of mind</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Small Groups</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Personalized experiences with dedicated attention</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sustainable Tourism</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Committed to the environment and local communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Have questions?
          </h2>
          <p className="text-lg text-green-200 mb-8 leading-relaxed">
            We&apos;re here to help you plan your perfect adventure in Costa Rica
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
