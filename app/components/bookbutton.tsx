'use client'
import React from 'react';

const BookButton = () => {
  const message = encodeURIComponent(
    "Hi Team, I would like to book the Ponmudi Jeep Safari Tour. Please provide me with the details and confirm my booking."
  );

  return (
    <div className="text-center">
      <a
        href={`https://wa.me/917306687833?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg sm:text-xl"
      >
        Book-Now
      </a>
    </div>
  );
};

export default BookButton;
