'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/header';
import Footer from '../components/footer';

// Import images
// Note: You'll need to move these to the public directory
interface ImageImports {
  [key: string]: String[];
}

interface PlaceCardProps {
  name: string;
  description: string;
  images: String[];
}

interface Place {
  name: string;
  description: string;
  images: String[];
}

const PlaceCard: React.FC<PlaceCardProps> = ({
  name,
  description,
  images = [],
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      {/* Image slider with overlay gradient */}
      <div className="relative h-72 mb-6">
        {images.length > 0 && (
          <Image
            className="object-fill"
            src ={images[currentImageIndex]}
            alt={`${name} Image ${currentImageIndex + 1}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 transition-opacity duration-300" />

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </>
        )}
      </div>

      {/* Content section */}
      <div className="p-4 sm:p-6">
        <h3 className="relative text-xl sm:text-2xl font-bold mb-3">
          <span className="relative">
            <span
              className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent"
              style={{
                fontFamily: "'Lucida Console', monospace",
                fontSize: '20px',
              }}
            >
              {name}
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300" />
          </span>
        </h3>

        <p className="text-sm sm:text-base text-gray-600 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const Vattavada: React.FC = () => {
  // Define places with proper typing
  const places: Place[] = [
    {
      name: 'Rosegarden',
      description:
        'Experience breathtaking panoramic views of the surrounding hills and valleys.',
      images: [
        '/images/rose1.webp',
        '/images/rose2.webp',
        '/images/rose3.webp',
        '/images/rose4.webp',
      ],
    },
    {
      name: 'Tea Museum and Tea Garden',
      description:
        'Wander through lush green tea gardens and learn about tea production.',
      images: ['/images/museum1.webp', '/images/museum2.webp','/images/museum3.webp','/images/museum4.webp','/images/museum5.webp'],
    },
    {
      name: 'Mattupetty Damm',
      description:
        'Witness the mesmerizing beauty of cascading waters surrounded by dense forests.',
      images: [
        '/images/mattupetty1.webp',
      ],
    },
    // ... continue with other places using the same pattern
    {
      name: 'Echo Point',
      description:
        'Echo Point is the Most Visited place in Munnar. A spot on reservoir featuring an echo phenomenon.',
      images: [
        '/images/echo1.webp',
        '/images/echo2.webp',
        '/images/echo3.webp',
        '/images/echo4.webp',
        '/images/echo5.webp',
      ],
    },
    {
      name: 'Kundala Dam',
      description:
        '1700-m-tall concrete dam in lush surrounds also offering boating, horse riding & elephant sighting.',
      images: [
        '/images/kundala5.webp',
        '/images/kundala1.webp',
        '/images/kundala2.webp',
        '/images/kundala3.webp',
        '/images/kundala4.webp',
      ],
    },
    {
      name: 'Top Station',
      description:
        'Top Station in Idukki district of Kerala is the highest point on the Munnar- Kodaikanal road.',
      images: [
        '/images/top1.webp',
        '/images/top2.webp',
        '/images/top3.webp',
        '/images/top4.webp',
      ],
    },
    {
      name: 'Vattavada',
      description:
        'It is an agricultural village known for growing a wide range of vegetables and fruits in the terrace farmlands.',
      images: [
        '/images/vattavada9.webp',
        '/images/vattavada5.webp',
        '/images/vattavada6.webp',
        '/images/vattavada7.webp',
        '/images/vattavada8.webp',
      ],
    },
  ];

  return (
    <div>
      <Header />
      <div
        className="mt-24 delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0"
        data-taos-offset="400"
      >
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 font-sans text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Discover <span className="text-green-600">Vattavada</span>
            </h1>

            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto from-neutral-800 italic">
              "Vattavada is a village in Idukki district in the state of Kerala,
              bordering Tamil Nadu, India. The village is located along Palani
              Hills in Western Ghats. It is an agricultural village known for
              growing a wide range of vegetables and fruits in the terrace
              farmlands."
            </p>

            {/* Tour Description Section */}
            <div className="bg-green-200 p-6 rounded-lg shadow-lg">
              {/* ... (rest of the tour description section remains the same) ... */}
              <h1 className="text-3xl font-bold text-green-600 mb-4">
                Tour Description
              </h1>
              <p className="text-gray-700 mb-4">
                Vattavada Jeep tour invites you on a thrilling adventure journey
                in a Jeep Safari to explore the hidden beauty of Munnar. Even
                though Munnar is a small town, every inch is equally beautiful.
                Experience the flora and fauna up close. The jeep safari offers
                even more fun and adventures, making it a memorable trip for a
                lifetime.
              </p>

              <div className="bg-white p-4 rounded-lg mb-4">
                <h2 className="text-2xl font-semibold text-green-500 mb-2">
                  Package Highlights
                </h2>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Thrilling off-road journey</li>
                  <li>Rose-garden</li>
                  <li>Tea-museum & tea-garden</li>
                  <li>Visit to a tourist village </li>
                  <li>Mattupetty dam views</li>
                  <li>Kundala dam-views</li>
                  <li>Echo-point</li>
                  <li>Top-station view- point (sunrise & sunset options)</li>
                  <li>Vattavada</li>
                </ul>
                <p className="mt-3 text-lg text-gray-800 font-semibold">
                  7-8 Hours - ₹6500 per trip (up to 6 people)
                </p>
              </div>

              <h2 className="text-2xl font-bold text-green-600 mt-6 mb-2">
                Details
              </h2>
              <div className="bg-white p-4 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Inclusions
                </h3>
                <ul className="list-inside list-disc text-gray-600">
                  <li>All taxes, fees, and handling charges</li>
                  <li>GST (Goods and Services Tax)</li>
                  <li>Bottled water & fruits</li>
                  <li>Professional guide</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Exclusions
                </h3>
                <ul className="list-inside list-disc text-gray-600">
                  <li>Gratuities (recommended)</li>
                  <li>Transportation to/from attractions</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Additional Info
                </h3>
                <p className="text-gray-600">
                  Confirmation will be received at the time of booking. Our team
                  will connect with you for further details. The duration of
                  transfers is approximate, depending on traffic and time of
                  day.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Cancellation Policy
                </h3>
                <p className="text-gray-600">
                  For a full refund, cancel at least 24 hours before the start
                  date of the experience.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Departure Point
                </h3>
                <p className="text-gray-600"> Return : At Pick up point</p>
                <p className="text-gray-600">Anachal, Munnar</p>
                <p className="text-gray-600">Contact: +91 6238343996</p>
              </div>
            </div>

            {/* Place Cards Grid */}
            <div className="grid grid-cols-1 mx-2  mt-6 md:grid-cols-2 lg:grid-cols-3 gap-12 -mb-14">
              {places.map((place, index) => (
                <PlaceCard key={index} {...place} />
              ))}
            </div>

            {/* About Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mt-36 mb-5">
              <h2
                className="text-3xl font-semibold mb-4 text-gray-800"
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '50px',
                }}
              >
                About Vattavada
              </h2>
              <p className="text-gray-600 mb-4">
                Anakulam is a picturesque destination nestled in the heart of
                Munnar, Kerala. Known for its stunning landscapes and serene
                atmosphere, it offers visitors a perfect blend of natural beauty
                and tranquility.
              </p>
              <p className="text-gray-600 mb-4">
                The area is famous for its lush green tea plantations, misty
                mountains, and crystal-clear streams. Visitors can enjoy
                activities such as trekking, photography, and simply basking in
                the region's unspoiled natural splendor.
              </p>
              <p className="text-gray-600">
                Whether you're an adventure enthusiast or someone looking for a
                peaceful retreat, Anakulam has something to offer for everyone.
              </p>
            </div>

            {/* Book Now Button */}
            <div className="text-center">
              <a
                href="https://wa.me/+917560966897"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg sm:text-xl"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vattavada;
