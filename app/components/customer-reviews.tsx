// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface Testimonial {
//   id: number;
//   name: string;
//   date: string;
//   rating: number;
//   comment: string;
//   avatar: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: 'Darrell Steward',
//     date: '10/06/2024',
//     rating: 4,
//     comment:
//       "❝ Munnar, nestled in Kerala's Western Ghats, offers stunning hillscapes, sprawling tea gardens, and tranquil waterfalls. Perfect for nature lovers, it's home to rare flora and fauna, picturesque trails, and the serene Mattupetty Dam. Its cool, misty climate and breathtaking viewpoints make Munnar a must-visit for peace and beauty seekers. ❞",
//     avatar: '/images/a1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Shyam',
//     date: '10/06/2024',
//     rating: 3,
//     comment: `❝ Munnar, known for its rolling tea plantations and mist-covered hills, is a nature lover’s haven. Visitors can enjoy the scenic beauty of Anamudi Peak, explore Eravikulam National Park, and relax by Kundala Lake. Its tranquil climate, diverse wildlife, and breathtaking landscapes make Munnar an unforgettable experience for all travelers.

//  ❞`,
//     avatar: '/images/a2.jpg',
//   },
//   {
//     id: 3,
//     name: 'Albin Thomas Saji',
//     date: '10/11/12',
//     rating: 5,
//     comment:
//       "❝ Munnar, nestled in Kerala's Western Ghats, offers stunning hillscapes, sprawling tea gardens, and tranquil waterfalls. Perfect for nature lovers, it's home to rare flora and fauna, picturesque trails, and the serene Mattupetty Dam. Its cool, misty climate and breathtaking viewpoints make Munnar a must-visit for peace and beauty seekers. ❞",
//     avatar: '/images/a1.jpg',
//   },
//   // {
//   //   id: ,
//   //   name: "",
//   //   date: "",
//   //   rating: 3,
//   //   comment: "❝ make sure commant should be in 50 words ❞",
//   //   avatar: "/images/"
//   // },
//   // Add more testimonials as needed
// ];

// const CustomerReviews = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <div className="w-full h-auto max-w-4xl mx-auto bg-gray-400 rounded-xl shadow-lg p-8">
//       <h2 className="text-3xl font-bold text-center mb-12">Voyager Voices</h2>

//       <div className="relative">
//         {/* Avatar row */}
//         {/* Avatar row */}
//         <div className="flex justify-center items-center mb-2 md:mb-6 space-x-4">
//           <div
//             className=" w-12 h-12 rounded-full border-4 
//                  'border-purple-500 scale-125' : 'border-gray-200'
//                transition-all duration-300"
//           >
//             <img
//               src={testimonials[currentIndex].avatar}
//               alt="Customer avatar"
//               className="w-full h-full rounded-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Navigation buttons */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>

//         <button
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>

//         {/* Testimonial content */}
//         <div className="text-center px-16">
//           {/* <h3 className="text-2xl font-semibold mb-6">A Breeze to Navigate</h3> */}
//           <div className="h-auto overflow-y-auto md:overflow-y-hidden  md:h-40 w-auto px-4 md:px-12 py-4 md:pt-0">
//             <p className="text-black text-lg mb-8">
//               {testimonials[currentIndex].comment}
//             </p>
//           </div>

//           <div className="flex items-center justify-center mt-4 space-x-4">
//             <img
//               src={testimonials[currentIndex].avatar}
//               alt={testimonials[currentIndex].name}
//               className="w-12 h-12 rounded-full"
//             />
//             <div className="text-left">
//               <p className="font-semibold">{testimonials[currentIndex].name}</p>
//               <div className="flex items-center space-x-1">
//                 {[...Array(5)].map((_, idx) => (
//                   <span
//                     key={idx}
//                     className={`text-2xl ${
//                       idx < testimonials[currentIndex].rating
//                         ? 'text-yellow-400'
//                         : 'text-gray-300'
//                     }`}
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
//               <p className="text-gray-500 text-sm">
//                 {testimonials[currentIndex].date}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Shyam Raj', rating: 5, comment: 'Amazing experience! The tour was breathtaking.' },
    { id: 2, name: 'Vishwanath R', rating: 4, comment: 'Great tour, very informative guides.' },
    { id: 3, name: 'Mike Johnson', rating: 5, comment: 'Absolutely loved it! Will definitely come back.' },
    { id: 4, name: 'Eliot', rating: 3, comment: 'Good experience, value for money.' },
    { id: 5, name: 'Alex Lee', rating: 5, comment: 'Unforgettable adventure! Highly recommended.' },
    { id: 6, name: 'Sarah Wilson', rating: 4, comment: 'Beautiful scenery and friendly staff.' },
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
    <div className="h-auto bg-gradient-to-br from-blue-100 to-purple-100 py-10"> {/* Reduced bottom padding */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-indigo-800">Voyager Voices</h2>
        
        <div className="mb-8 ml-8 overflow-hidden relative"> {/* Reduced bottom margin */}
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
