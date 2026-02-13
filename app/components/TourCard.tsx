import Link from 'next/link';
import Image from 'next/image';

interface TourCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  highlights?: string[];
}

export default function TourCard({
  id,
  title,
  description,
  price,
  duration,
  rating,
  reviewCount,
  image,
  category,
  highlights
}: TourCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`half-${id}-${i}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#d1d5db" />
              </linearGradient>
            </defs>
            <path fill={`url(#half-${id}-${i})`} d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-4 h-4 text-gray-200 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <Link href={`/tours/${id}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group-hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-green-900 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide">
              {category}
            </span>
          </div>
          <div className="absolute bottom-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {duration}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex">{renderStars(rating)}</div>
            <span className="text-xs font-medium text-gray-500">
              {rating.toFixed(1)} ({reviewCount})
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-snug">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
            {description}
          </p>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="mb-4 space-y-1.5">
              {highlights.slice(0, 2).map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                  <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}

          {/* Price & CTA */}
          <div className="flex items-end justify-between pt-4 border-t border-gray-100">
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">From</p>
              <p className="text-2xl font-bold text-green-900">
                ${price}
              </p>
              <p className="text-xs text-gray-400">per person</p>
            </div>
            <span className="bg-orange-500 group-hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
