'use client';

import { type FC, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BookButton from '../components/bookbutton';
import Footer from '../components/footer';
import Header from '../components/header';

// Define types
interface Video {
  src: string;
}

interface Place {
  name: string;
  description: string;
  videos: string[];
}

interface VideoSliderProps {
  videos: string[];
}

interface PlaceCardProps extends Place {}

// VideoSlider Component
const VideoSlider: FC<VideoSliderProps> = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  const nextVideo = (): void => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = (): void => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <div className="relative aspect-w-16 aspect-h-10 rounded-md overflow-hidden shadow-lg mb-4 sm:mb-6">
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

// PlaceCard Component
const PlaceCard: FC<PlaceCardProps> = ({ name, description, videos }) => {
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

// Main Page Component
const KattadiparaPage: FC = () => {
  // Define places with video paths from public directory
  const places: Place[] = [
    {
      name: 'Chunayamackal Watterfalls',
      description:
        'Experience breathtaking panoramic views of the surrounding hills and valleys.',
      videos: [
        '/videos/cwaterfalls1.webm',
        '/videos/waterfall2.webm',
        '/videos/waterfall1.webm',
      ],
    },
    {
      name: 'Hanging-Bridge',
      description:
        'Wander through lush green tea gardens and learn about tea production.',
      videos: ['/videos/bridge3.webm', '/videos/Bridge1.webm'],
    },
    {
      name: 'Ponmudi-Dam',
      description:
        'Witness the mesmerizing beauty of cascading waters surrounded by dense forests.',
      videos: ['/videos/dam2.webm', '/videos/ponmudidam1.webm'],
    },
    {
      name: 'Echo-Point',
      description:
        'Witness the mesmerizing beauty of cascading waters surrounded by dense forests.',
      videos: ['/videos/echopoint.webm'],
    },
    {
      name: 'Nadukani-Mountain',
      description:
        'Witness the mesmerizing beauty of cascading waters surrounded by dense forests.',
      videos: ['/videos/Nadukani.mp4', '/videos/nadukani2.mp4'],
    },
    {
      name: 'Kallimali-Viewpoint',
      description:
        'Witness the mesmerizing beauty of cascading waters surrounded by dense forests.',
      videos: ['/videos/kallimali.mp4'],
    },
    {
      name: 'Viewpoint',
      description:
        'Witness the mesmerizing beauty of cascading waters surrounded by dense forests.',
      videos: ['/videos/kattadipara1.mp4'],
    },
    {
      name: 'Kattadipara',
      description:
        'Witness the mesmerizing beauty of cascading waters surrounded by dense forests.',
      videos: ['/videos/kattadipara3.mp4', '/videos/kattadipara4.mp4'],
    },
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-b mt-24 from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 mb-8">
            Discover{' '}
            <span className="text-green-600">Ponmudi & Kattadipara</span>
          </h1>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-green-600 mb-4">
              Tour Description
            </h1>
            <p className="text-gray-700 mb-4">
              Ponmudi Jeep tour invites you on a thrilling adventure journey in
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
                <li>Visit to a tourist village & waterfall</li>
                <li>Hanging bridge and dam views</li>
                <li>Picnic point (sunrise & sunset options)</li>
                <li>Serene lake view</li>
                <li>Kattadipara view-point</li>
              </ul>
              <p className="mt-3 text-center pt-2 pb-2 text-xl font-bold text-black ">
                <span className="hidden lg:block">
                  7-8 Hours - ₹5500 per trip (up to 6 people)
                </span>
                <span className="block lg:hidden">
                  7-8 Hours - ₹5500 per trip
                </span>
                <span className="block lg:hidden">(up to 6 people)</span>
              </p>
            </div>

            {/* Details Sections */}
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
                <p className="text-gray-600">Return : At pick up point</p>
                <p className="text-gray-600">Anachal, Munnar</p>
                <p className="text-gray-600">Contact: +91 6238343996</p>
                <p className="text-gray-600">Contact: +91 7306687833</p>
              </div>
            </div>
          </div>

          {/* Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {places.map((place, index) => (
              <PlaceCard key={index} {...place} />
            ))}
          </div>

          {/* Description Section */}
          <div className="bg-white text-center rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Discover the Wonders of Ponmudi
            </h2>
            <p className="text-gray-600 mb-4">
              Ponmudi, a hidden jewel tucked in the Western Ghats, awaits with
              breathtaking landscapes and heart-pounding adventures. Wander
              through the lush greenery, discover cascading waterfalls, and
              cross the historic British-made hanging bridge, each step
              unveiling a new marvel.
            </p>
            <p className="text-gray-600 mb-4">
              Revel in serene dam views, listen to nature's melody at Echo
              Point, and let the sweeping panoramas of Nadukani Mountain leave
              you spellbound. Ascend to Kattaddipara, where cool breezes and
              expansive views inspire awe in every direction.
            </p>
            <p className="text-gray-600">
              Whether you're a thrill-seeker or a nature lover, Ponmudi's
              enchanting charm promises memories that linger long after the
              journey ends. Embrace this mountainous paradise and its treasures,
              perfect for an unforgettable escape.
            </p>
          </div>

          {/* Book Button */}
          <div className="text-center">
            <BookButton />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KattadiparaPage;
