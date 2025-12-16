import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { tours } from '../../data/tours';
import QuoteForm from '../../components/QuoteForm';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return tours.map((tour) => ({
    id: tour.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return {
      title: 'Tour no encontrado | GoAdventuresCR',
    };
  }

  return {
    title: `${tour.title} | GoAdventuresCR`,
    description: tour.description,
  };
}

export default async function TourDetailPage({ params }: PageProps) {
  const { id } = await params;
  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    notFound();
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <main className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-orange-500">
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/tours" className="text-gray-500 hover:text-orange-500">
              Tours
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-green-900 font-medium">{tour.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              {tour.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {tour.title}
            </h1>
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-1">
                {renderStars(tour.rating)}
                <span className="ml-2">{tour.rating.toFixed(1)} ({tour.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duración</p>
                    <p className="font-semibold text-green-900">{tour.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Grupo máximo</p>
                    <p className="font-semibold text-green-900">{tour.maxParticipants} personas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ubicación</p>
                    <p className="font-semibold text-green-900">{tour.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Idiomas</p>
                    <p className="font-semibold text-green-900">Español, Inglés</p>
                  </div>
                </div>
              </div>

              {/* About */}
              <div>
                <h2 className="text-2xl font-bold text-green-900 mb-4">Acerca de esta experiencia</h2>
                <div className="prose prose-lg text-gray-600 whitespace-pre-line">
                  {tour.longDescription}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold text-green-900 mb-4">Aspectos destacados</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Included */}
              <div>
                <h2 className="text-2xl font-bold text-green-900 mb-4">Servicios incluidos</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.included.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-2xl font-bold text-green-900 mb-4">Itinerario</h2>
                <div className="space-y-4">
                  {tour.itinerary.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-grow pt-1">
                        <p className="text-gray-700">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-green-900 mb-3">Política de cancelación</h2>
                <p className="text-gray-600">{tour.cancellationPolicy}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Si cancelas menos de 24 horas antes, no se devolverá el importe abonado.
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    La hora límite se basa en la hora local del lugar donde se realiza la experiencia.
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar - Quote Form */}
            <div className="lg:col-span-1">
              <QuoteForm tourName={tour.title} tourPrice={tour.price} />
            </div>
          </div>
        </div>
      </section>

      {/* Other Tours CTA */}
      <section className="py-12 bg-green-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Buscas más aventuras?
          </h2>
          <p className="text-gray-300 mb-8">
            Explora todas nuestras experiencias en Guanacaste
          </p>
          <Link
            href="/tours"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-colors"
          >
            Ver todos los tours
          </Link>
        </div>
      </section>
    </main>
  );
}
