import React, { useState, useEffect } from 'react';
import { Star, MessageCircle } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(() => {
    const savedReviews = localStorage.getItem('customerReviews');
    return savedReviews ? JSON.parse(savedReviews) : [
      { id: 1, name: 'Shyam Raj', rating: 5, comment: 'Amazing experience! The tour was breathtaking.' },
      { id: 2, name: 'Vishwanath r', rating: 4, comment: 'Great tour, very informative guides.' },
      { id: 3, name: 'Mike Johnson', rating: 5, comment: 'Absolutely loved it! Will definitely come back.' },
      { id: 4, name: 'Eliot', rating: 3, comment: 'Good experience, Value for money.' },
      { id: 5, name: 'Alex Lee', rating: 5, comment: 'Unforgettable adventure! Highly recommended.' },
      { id: 6, name: 'Sarah Wilson', rating: 4, comment: 'Beautiful scenery and friendly staff.' },
    ];
  });

  const [newReview, setNewReview] = useState<{ name: string; rating: number; comment: string }>({
    name: '',
    rating: 5,
    comment: '',
  });

  useEffect(() => {
    localStorage.setItem('customerReviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const review: Review = {
      id: Date.now(),
      ...newReview,
      rating: Number(newReview.rating),
    };
    setReviews((prev) => [...prev, review]);
    setNewReview({ name: '', rating: 5, comment: '' });
  };

  const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
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
                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-indigo-800">Customer Reviews</h2>
        
        <div className="mb-12 overflow-hidden relative">
          <div className="review-container flex animate-scroll">
            {[...reviews, ...reviews].map((review, index) => (
              <ReviewCard key={`${review.id}-${index}`} review={review} />
            ))}
          </div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-blue-100 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-purple-100 to-transparent pointer-events-none"></div>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-indigo-800">Leave a Review</h3>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-indigo-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block mb-2 text-indigo-700">Rating</label>
            <select
              id="rating"
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              className="w-full p-2 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {[5, 4, 3, 2, 1].map((num) => (
                <option key={num} value={num}>{num} Stars</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="comment" className="block mb-2 text-indigo-700">Comment</label>
            <textarea
              id="comment"
              name="comment"
              value={newReview.comment}
              onChange={handleInputChange}
              className="w-full p-2 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
          >
            <MessageCircle className="mr-2" size={20} />
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerReviews;
