import { notFound } from 'next/navigation';
import Link from 'next/link';
import { tours, comboTours } from '../../data/tours';
import BookingForm from '../../components/BookingForm';
import ImageSlider from '../../components/ImageSlider';

interface PageProps {
  params: Promise<{ id: string }>;
}

const allTours = [...tours, ...comboTours];

export async function generateStaticParams() {
  return allTours.map((tour) => ({
    id: tour.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const tour = allTours.find((t) => t.id === id);

  if (!tour) {
    return {
      title: 'Tour not found | GoAdventuresCR',
    };
  }

  return {
    title: `${tour.title} | GoAdventuresCR`,
    description: tour.description,
  };
}

export default async function TourDetailPage({ params }: PageProps) {
  const { id } = await params;
  const tour = allTours.find((t) => t.id === id);

  if (!tour) {
    notFound();
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-5 h-5 text-gray-200 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <main>
      {/* Hero Image Slider */}
      <section className="relative">
        <ImageSlider images={tour.images} title={tour.title} />

        {/* Tour info overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide">
              {tour.category}
            </span>
            <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
              {tour.title}
            </h1>
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-1">
                {renderStars(tour.rating)}
                <span className="ml-2 text-sm font-medium">{tour.rating.toFixed(1)} ({tour.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Quick Info Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Duration</p>
                    <p className="text-sm font-semibold text-gray-900">{tour.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Max Group</p>
                    <p className="text-sm font-semibold text-gray-900">{tour.maxParticipants} people</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Location</p>
                    <p className="text-sm font-semibold text-gray-900">{tour.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Languages</p>
                    <p className="text-sm font-semibold text-gray-900">Spanish, English</p>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-1 h-7 bg-orange-500 rounded-full"></span>
                  About this experience
                </h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line text-[15px]">
                  {tour.longDescription}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                  <span className="w-1 h-7 bg-orange-500 rounded-full"></span>
                  Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-orange-50/60 rounded-xl">
                      <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included / Not Included */}
              <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50/60 rounded-2xl p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    What&apos;s included
                  </h2>
                  <ul className="space-y-2.5">
                    {tour.included.map((item, index) => (
                      <li key={index} className="flex items-center gap-2.5">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {tour.notIncluded && tour.notIncluded.length > 0 && (
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Not included
                    </h2>
                    <ul className="space-y-2.5">
                      {tour.notIncluded.map((item, index) => (
                        <li key={index} className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-500">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Itinerary */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                  <span className="w-1 h-7 bg-orange-500 rounded-full"></span>
                  Itinerary
                </h2>
                <div className="space-y-0">
                  {tour.itinerary.map((step, index) => (
                    <div key={index} className="flex gap-4 relative">
                      {/* Timeline line */}
                      {index < tour.itinerary.length - 1 && (
                        <div className="absolute left-4 top-9 bottom-0 w-px bg-gray-200"></div>
                      )}
                      {/* Step number */}
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs relative z-10">
                        {index + 1}
                      </div>
                      {/* Step content */}
                      <div className="flex-grow pb-6">
                        <p className="text-sm text-gray-700 pt-1.5">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info & Cancellation Policy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Cancellation Policy
                  </h2>
                  <p className="text-sm text-gray-600 mb-3">{tour.cancellationPolicy}</p>
                  <ul className="space-y-2 text-xs text-gray-500">
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></span>
                      If you cancel less than 24 hours before, no refund will be issued.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></span>
                      The deadline is based on the local time of the experience location.
                    </li>
                  </ul>
                </div>

                {tour.additionalInfo && tour.additionalInfo.length > 0 && (
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Good to know
                    </h2>
                    <ul className="space-y-2">
                      {tour.additionalInfo.map((info, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          {info}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar - Booking Form */}
            <div className="lg:col-span-1">
              <BookingForm tourName={tour.title} tourPrice={tour.price} tourId={tour.id} />
            </div>
          </div>
        </div>
      </section>

      {/* Other Tours CTA */}
      <section className="py-16 bg-green-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Looking for more adventures?
          </h2>
          <p className="text-green-200 mb-8 leading-relaxed">
            Explore all our experiences in Guanacaste, Costa Rica
          </p>
          <Link
            href="/tours"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-colors"
          >
            View all tours
          </Link>
        </div>
      </section>
    </main>
  );
}
