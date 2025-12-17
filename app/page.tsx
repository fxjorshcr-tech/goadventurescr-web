import Link from 'next/link';
import Image from 'next/image';
import { tours } from './data/tours';
import TourCard from './components/TourCard';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main>
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/video-intro.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-950/50 to-green-950/80" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Live the <span className="text-orange-400">Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover the best tourism experiences in Guanacaste, Costa Rica.
            Nature, culture and adventure await you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              Explore Tours
            </Link>
            <Link
              href="#about-us"
              className="border-2 border-white hover:bg-white hover:text-green-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Costa Rica Section */}
      <section id="costa-rica" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Costa Rica, <span className="text-orange-500">Pura Vida</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A country where biodiversity meets adventure. Home to 5% of the world&apos;s biodiversity
              in just 0.03% of the Earth&apos;s surface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <Image
                src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/rana-ojos-rojos.jpeg"
                alt="Red-eyed tree frog from Costa Rica"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Unique Biodiversity</h3>
                <p className="text-gray-200">Exceptional flora and fauna</p>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <Image
                src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/serpiente-costa-rica.jpeg"
                alt="Snake from Costa Rica"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Wildlife</h3>
                <p className="text-gray-200">Encounters with nature</p>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden group md:col-span-2 lg:col-span-1">
              <Image
                src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/sloth-costa-rica.jpeg"
                alt="Sloth from Costa Rica"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Unique Experiences</h3>
                <p className="text-gray-200">Unforgettable moments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guanacaste Section */}
      <section className="py-20 bg-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-orange-400">Guanacaste</span>, Your Destination
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Guanacaste is one of the most beautiful provinces in Costa Rica, known for its
                dream beaches, rich cowboy culture and unique biodiversity. Here you&apos;ll find
                everything from majestic volcanoes to tropical dry forests.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                The Nicoya Peninsula, located in Guanacaste, is recognized worldwide as one of
                the 7 Blue Zones in the world, where longevity and quality of life are exceptional.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Paradise beaches</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Blue Zone of longevity</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Culture and traditions</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Adventure and ecotourism</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/serpiente-guanacaste.jpeg"
                alt="Guanacaste Nature"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guanacaste Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Climate */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">Tropical Climate</h3>
              <p className="text-gray-600 text-sm">
                Enjoy 300+ sunny days per year with temperatures between 25-35°C.
                Dry season from December to April, perfect for outdoor adventures.
              </p>
            </div>

            {/* Airport */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">Daniel Oduber Airport</h3>
              <p className="text-gray-600 text-sm">
                International airport (LIR) in Liberia with direct flights from USA,
                Canada and Europe. Just 30-60 min from major beach destinations.
              </p>
            </div>

            {/* Beaches */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">World-Class Beaches</h3>
              <p className="text-gray-600 text-sm">
                From Tamarindo to Papagayo, discover pristine beaches perfect for
                surfing, snorkeling, and relaxing in Costa Rica&apos;s Pacific coast.
              </p>
            </div>

            {/* Blue Zone */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">Blue Zone</h3>
              <p className="text-gray-600 text-sm">
                Nicoya Peninsula is one of only 5 Blue Zones in the world, where
                people live longer, healthier lives. Discover the secrets of longevity.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-green-900 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-orange-400 mb-2">5%</p>
                <p className="text-gray-300">of world&apos;s biodiversity in Costa Rica</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-400 mb-2">25+</p>
                <p className="text-gray-300">National parks and reserves</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-400 mb-2">Pura Vida</p>
                <p className="text-gray-300">The Costa Rican way of life</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Our <span className="text-orange-500">Tours</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully designed experiences for you to live Costa Rica to the fullest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour) => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tours"
              className="inline-block bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              View all tours
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/ave-costa-rica.jpeg"
                alt="About GoAdventuresCR"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                About <span className="text-orange-500">Us</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a local company located in the heart of Guanacaste, Costa Rica. Our team
                is made up of people passionate about sharing the beauty and cultural richness of
                our land with visitors from around the world.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe in sustainable and responsible tourism. Each of our experiences is
                designed to respect the environment and contribute positively to local communities.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-500">100+</div>
                  <div className="text-gray-600">Adventures completed</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-500">4.8</div>
                  <div className="text-gray-600">Average rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Get in <span className="text-orange-500">Touch</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to start planning your Costa Rican adventure? Have questions about our tours?
                We&apos;d love to hear from you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">Email</p>
                    <a href="mailto:info@goadventurescr.com" className="text-orange-500 hover:text-orange-600">
                      info@goadventurescr.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">WhatsApp</p>
                    <a href="https://wa.me/50688888888" className="text-orange-500 hover:text-orange-600">
                      +506 8888-8888
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">Location</p>
                    <p className="text-gray-600">Guanacaste, Costa Rica</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Send us a message</h3>
              <ContactForm variant="full" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for your next adventure?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Book today and live unique experiences in Guanacaste, Costa Rica
          </p>
          <Link
            href="/tours"
            className="inline-block bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-colors"
          >
            Book now
          </Link>
        </div>
      </section>
    </main>
  );
}
