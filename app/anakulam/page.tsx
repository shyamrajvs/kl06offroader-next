'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { StaticImageData } from 'next/image';
import Footer from '../components/footer';
import Header from '../components/header';
import Booknow from '../components/booknow';
import BookButton from '../components/bookbutton';

// Update video imports to use dynamic imports
// Note: You'll need to move these videos to the public directory
const videos = {
  anakulamVideo1: '/videos/anakulamrc1.webm',
  anakulamVideo2: '/videos/rivercross3.webm',
  anakulamVideo7: '/videos/rivercross2.webm',
  anakulamVideo3: '/videos/anakulam11.webm',
  anakulamVideo4: '/videos/Anakulam2.webm',
  anakulamVideo5: '/videos/anakulam1.webm',
  anakulamVideo6: '/videos/anakulam-9.webm',
  Kottappara1: '/videos/kottapara.webm',
  kottappara2: '/videos/kottappara-2.webm',
  tea1: '/videos/tea1.webm',
  tea2: '/videos/tea2.webm',
  bridge1: '/videos/bridge-3.webm',
  falls1: '/videos/33 waterfall2.webm',
  falls2: '/videos/33waterfall.webm',
  falls3: '/videos/33falls.webm',
};

interface VideoSliderProps {
  videos: string[];
}

interface PlaceCardProps {
  name: string;
  description: string;
  videos: string[];
}

interface Place {
  name: string;
  description: string;
  videos: string[];
}

const VideoSlider: React.FC<VideoSliderProps> = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <div className="relative aspect-w-16 aspect-h-5 rounded-md overflow-hidden shadow-lg mb-4 sm:mb-6">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        key={videos[currentVideoIndex]}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-between p-3 sm:p-4">
        <button
          onClick={prevVideo}
          className="bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-all"
          aria-label="Previous video"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextVideo}
          className="bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-all"
          aria-label="Next video"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const PlaceCard: React.FC<PlaceCardProps> = ({ name, description, videos }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <VideoSlider videos={videos} />
      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 mb-2">
          {name}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Anakulam: React.FC = () => {
  const places: Place[] = [
    {
      name: 'Kottapara Viewpoint',
      description:
        'Experience breathtaking panoramic views of the surrounding hills and valleys.',
      videos: [videos.Kottappara1, videos.kottappara2],
    },
    {
      name: 'Anakulam Tea Plantations',
      description:
        'Wander through lush green tea gardens and learn about tea production.',
      videos: [videos.tea1, videos.tea2],
    },
    {
      name: 'Anakulam 33 Waterfall',
      description:
        'Witness the mesmerizing beauty of cascading waters surrounded by dense forests.',
      videos: [videos.falls2, videos.falls1, videos.falls3],
    },
    {
      name: 'River-Cross',
      description:
        'Witness the mesmerizing beauty of cascading waters surrounded by dense forests.',
      videos: [
        videos.anakulamVideo1,
        videos.anakulamVideo2,
        videos.anakulamVideo7,
      ],
    },
    {
      name: 'Hanging Bridge',
      description:
        'Witness the mesmerizing beauty of cascading waters surrounded by dense forests.',
      videos: [videos.bridge1],
    },
    {
      name: 'Anakulam Viewpoint (The Land of Elephants)',
      description:
        'Witness the mesmerizing beauty of cascading waters surrounded by dense forests.',
      videos: [
        videos.anakulamVideo3,
        videos.anakulamVideo6,
        videos.anakulamVideo4,
        videos.anakulamVideo5,
      ],
    },
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-bl from-green-50 to-blue-50 py-12 px-4 mt-24 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 mb-8">
            Discover <span className="text-green-600">Anakulam</span>
          </h1>

          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore the hidden gems of Anakulam, where nature's beauty unfolds
            in every corner. From misty mountains to serene lakes, embark on a
            journey of wonder and tranquility.
          </p>

          <div className="bg-green-300 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-green-600 mb-4">
              Tour Description
            </h1>
            <p className="text-gray-700 mb-4">
              Anakulam Jeep tour invites you on a thrilling adventure journey in
              a Jeep Safari to explore the hidden beauty of Munnar. Even though
              Munnar is a small town, every inch is equally beautiful.
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
                <li>Visit to a tourist village</li>
                <li>Tea- Plantations</li>
                <li>Kottappara view-point</li>
                <li>Tiger-cave</li>
                <li>Hanging bridge</li>
                <li>Waterfall</li>
                <li>River-crossing</li>
                <li>
                  Anakulam-Elephant view-point(The land of Wild-Elephants)
                </li>
              </ul>
              <p className="mt-3 text-center pt-2 pb-2 text-xl font-bold text-black ">
                <span className="hidden lg:block">
                  7-8 Hours - ₹6500 per trip (up to 6 people)
                </span>
                <span className="block lg:hidden">
                  7-8 Hours - ₹6500 per trip
                </span>
                <span className="block lg:hidden">(up to 6 people)</span>
              </p>
            </div>

            {/* Tour details sections */}
            <div className="space-y-4">
              {/* Inclusions */}
              <div className="bg-white p-4 rounded-lg">
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

              {/* Exclusions */}
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Exclusions
                </h3>
                <ul className="list-inside list-disc text-gray-600">
                  <li>Gratuities (recommended)</li>
                  <li>Transportation to/from attractions</li>
                </ul>
              </div>

              {/* Additional Info */}
              <div className="bg-white p-4 rounded-lg">
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

              {/* Cancellation Policy */}
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Cancellation Policy
                </h3>
                <p className="text-gray-600">
                  For a full refund, cancel at least 24 hours before the start
                  date of the experience.
                </p>
              </div>

              {/* Departure Point */}
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Departure Point
                </h3>
                <p className="text-gray-600">Return: At pick up point</p>
                <p className="text-gray-600">Anachal, Munnar, Kerala</p>
                <p className="text-gray-600">Contact: +91 6238343996</p>
                <p className="text-gray-600">Contact: +91 7306687833</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {places.map((place, index) => (
              <PlaceCard key={index} {...place} />
            ))}
          </div>

          <div className="bg-white rounded-lg  shadow-md p-8 mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              About Anakulam
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

          <div className="text-center">
            <BookButton />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Anakulam;
