
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
};

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Shyam Raj',
      rating: 5,
      comment: 'Amazing experience! The tour was breathtaking.',
    },
    {
      id: 2,
      name: 'Vishwanath R',
      rating: 4,
      comment: 'Great tour, very informative guides.',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      rating: 5,
      comment: 'Absolutely loved it! Will definitely come back.',
    },
    {
      id: 4,
      name: 'Eliot',
      rating: 3,
      comment: 'Good experience, value for money.',
    },
    {
      id: 5,
      name: 'Alex Lee',
      rating: 5,
      comment: 'Unforgettable adventure! Highly recommended.',
    },
    {
      id: 6,
      name: 'Sarah Wilson',
      rating: 4,
      comment: 'Beautiful scenery and friendly staff.',
    },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setReviews((prevReviews) => {
        const [first, ...rest] = prevReviews;
        return [...rest, first];
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  const ReviewCard = ({ review }) => (
    <div className="review-card bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 flex-shrink-0 w-[300px] mx-3">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
          {review.name.charAt(0)}
        </div>
        <div>
          <h3 className="font-bold text-lg text-indigo-800">{review.name}</h3>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill={i < review.rating ? 'currentColor' : 'none'}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic">&ldquo;{review.comment}&rdquo;</p>
    </div>
  );

  return (
    <div className="h-auto bg-gradient-to-br from-blue-100 to-purple-100 py-10">
      {' '}
      {/* Reduced bottom padding */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-indigo-800">
          Voyager Voices
        </h2>

        <div className="mb-8 ml-8 overflow-hidden relative">
          {' '}
          {/* Reduced bottom margin */}
          <div className="review-container flex animate-scroll">
            {reviews.map((review, index) => (
              <ReviewCard key={`${review.id}-${index}`} review={review} />
            ))}
          </div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-blue-100 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-purple-100 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
