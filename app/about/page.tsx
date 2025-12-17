import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | GoAdventuresCR',
  description: 'Learn about GoAdventuresCR - a local company in Guanacaste, Costa Rica dedicated to sustainable tourism and authentic experiences.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center">
        <Image
          src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/ave-costa-rica.jpeg"
          alt="About GoAdventuresCR"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-green-950/60 to-green-950/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            About <span className="text-orange-400">Us</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your local guides to authentic Costa Rican adventures
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
                Our <span className="text-orange-500">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a local company located in the heart of Guanacaste, Costa Rica. Our team
                is made up of people passionate about sharing the beauty and cultural richness of
                our land with visitors from around the world.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Born from a deep love for our country and its natural wonders, GoAdventuresCR
                was founded to create meaningful connections between travelers and the authentic
                Costa Rican experience.
              </p>
              <p className="text-lg text-gray-600">
                Every tour we offer is carefully designed to showcase the best of Guanacaste
                while respecting and preserving our precious ecosystems and supporting local
                communities.
              </p>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/sloth-costa-rica.jpeg"
                alt="Costa Rica Wildlife"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Our <span className="text-orange-500">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What drives us every day to create unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">Sustainable Tourism</h3>
              <p className="text-gray-600">
                We believe in sustainable and responsible tourism. Each experience is designed
                to respect the environment and contribute positively to local communities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">Authentic Experiences</h3>
              <p className="text-gray-600">
                We go beyond typical tourist attractions to show you the real Costa Rica -
                its people, traditions, and hidden treasures that only locals know.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">Safety First</h3>
              <p className="text-gray-600">
                Your safety is our priority. All our guides are certified professionals
                and our equipment meets the highest international standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">100+</p>
              <p className="text-gray-300">Adventures Completed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">4.9</p>
              <p className="text-gray-300">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">500+</p>
              <p className="text-gray-300">Happy Travelers</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">4</p>
              <p className="text-gray-300">Unique Tours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Guanacaste */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/serpiente-guanacaste.jpeg"
                alt="Guanacaste Nature"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
                Why <span className="text-orange-500">Guanacaste</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Guanacaste is one of the most beautiful provinces in Costa Rica, known for its
                dream beaches, rich cowboy culture and unique biodiversity.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Home to the Nicoya Peninsula, one of the world&apos;s 5 Blue Zones</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">300+ sunny days per year with perfect tropical climate</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Daniel Oduber International Airport with direct flights from USA, Canada, and Europe</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">World-class beaches from Tamarindo to Papagayo Bay</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to explore with us?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let us show you the authentic Costa Rica
          </p>
          <Link
            href="/tours"
            className="inline-block bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-colors"
          >
            View Our Tours
          </Link>
        </div>
      </section>
    </main>
  );
}
