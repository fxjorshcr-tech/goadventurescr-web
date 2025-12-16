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
          <svg key={i} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
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
          <svg key={i} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-green-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-green-900 mb-2 line-clamp-2">{title}</h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex">{renderStars(rating)}</div>
          <span className="text-sm text-gray-600">
            {rating.toFixed(1)} ({reviewCount})
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{description}</p>

        {highlights && highlights.length > 0 && (
          <div className="mb-4">
            <ul className="text-sm text-gray-500 space-y-1">
              {highlights.slice(0, 2).map((highlight, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500">{duration}</p>
            <p className="text-lg font-bold text-green-900">
              From <span className="text-orange-500">${price}</span>
            </p>
          </div>
          <Link
            href={`/tours/${id}`}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold text-sm transition-colors"
          >
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}
