'use client';

import { useState, useEffect } from 'react';

const reviews = [
  {
    name: "Sarah Johnson",
    location: "California, USA",
    rating: 5,
    text: "Absolutely incredible experience! The Blue Zone tour was life-changing. Our guide was knowledgeable and passionate about sharing the secrets of longevity.",
    date: "December 2024"
  },
  {
    name: "Michael Thompson",
    location: "Toronto, Canada",
    rating: 5,
    text: "Best zipline adventure ever! The views were breathtaking and the staff made us feel completely safe. Highly recommend for thrill seekers!",
    date: "November 2024"
  },
  {
    name: "Emma Williams",
    location: "London, UK",
    rating: 5,
    text: "The coffee tour exceeded all expectations. Learning about Costa Rican coffee culture while tasting the freshest coffee was unforgettable.",
    date: "January 2025"
  },
  {
    name: "Carlos Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    text: "Increíble experiencia! The waterfall hike was magical. Our guide knew every hidden spot and made us feel like true explorers.",
    date: "October 2024"
  },
  {
    name: "Jennifer Davis",
    location: "Sydney, Australia",
    rating: 5,
    text: "We did the Blue Zone tour as a family and it was perfect for all ages. The food, the people, the culture - everything was authentic!",
    date: "December 2024"
  },
  {
    name: "Hans Mueller",
    location: "Berlin, Germany",
    rating: 5,
    text: "Professional service from start to finish. The pickup was on time and our guide spoke excellent English. Will definitely book again!",
    date: "November 2024"
  },
  {
    name: "Lisa Anderson",
    location: "New York, USA",
    rating: 5,
    text: "The Guaitil pottery village was a hidden gem! So glad we found GoAdventuresCR. They show you the REAL Costa Rica, not just tourist spots.",
    date: "January 2025"
  },
  {
    name: "Pierre Dubois",
    location: "Paris, France",
    rating: 5,
    text: "Exceptional tour company! Small groups, personalized attention, and authentic experiences. The waterfall spa day was pure relaxation.",
    date: "September 2024"
  },
  {
    name: "Maria Santos",
    location: "São Paulo, Brazil",
    rating: 5,
    text: "Pura Vida is real! This company embodies everything beautiful about Costa Rica. The zipline tour was thrilling and safe. 10/10!",
    date: "December 2024"
  },
  {
    name: "James Wilson",
    location: "Chicago, USA",
    rating: 5,
    text: "Third time booking with GoAdventuresCR and they never disappoint. Each tour feels fresh and exciting. True professionals!",
    date: "October 2024"
  }
];

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];

  return (
    <div className="relative">
      {/* TripAdvisor Header */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
        <span className="text-2xl font-bold text-gray-800">TripAdvisor Reviews</span>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-green-500 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
          <span className="ml-2 text-gray-600 font-medium">5.0</span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleReviews.map((review, idx) => (
          <div
            key={`${currentIndex}-${idx}`}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300"
          >
            <div className="flex items-center gap-1 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-green-500 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">&ldquo;{review.text}&rdquo;</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
              <p className="text-xs text-gray-400">{review.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={goToPrev}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Previous reviews"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-green-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Next reviews"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
