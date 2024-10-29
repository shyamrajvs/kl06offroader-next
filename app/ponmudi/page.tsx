'use client'

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { StaticImageData } from 'next/image';
import { div } from 'framer-motion/client';
import Header from '../components/header';
import Footer from '../components/footer';

// Types
interface Video {
  src: string | StaticImageData;
}

interface Place {
  name: string;
  description: string;
  videos: (string | StaticImageData)[];
}

interface VideoSliderProps {
  videos: (string | StaticImageData)[];
}

interface PlaceCardProps extends Place {}

// Components
const VideoSlider: React.FC<VideoSliderProps> = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative aspect-w-16 aspect-h-10 rounded-md overflow-hidden shadow-lg mb-4 sm:mb-6">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        key={videos[currentVideoIndex].toString()}
      >
        <source src={videos[currentVideoIndex].toString()} type="video/mp4" />
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

const Ponmudi: React.FC = () => {
  // Move this to a separate data file in a real application
  const places: Place[] = [
    {
      name: "Chunayamackal Watterfalls",
      description: "Experience breathtaking panoramic views of the surrounding hills and valleys.",
      videos: ["/videos/Waterfall1.mp4", "/videos/Waterfall2.mp4", "/videos/Waterfall3.mp4"]
    },
    {
      name: "Hanging-Bridge",
      description: "Wander through lush green tea gardens and learn about tea production.",
      videos: ["/videos/bridge2.mp4", "/videos/bridge1.mp4"]
    },
    {
      name: "Ponmudi-Dam",
      description: "Witness the mesmerizing beauty of cascading waters surrounded by dense forests.",
      videos: ["/videos/Dam2.mp4", "/videos/Dam1.mp4"]
    },
    {
      name: "Echo-Point",
      description: "Witness the mesmerizing beauty of cascading waters surrounded by dense forests.",
      videos: ["/videos/Anakulam4.mp4", "/videos/Anakulam2.mp4"]
    },
    {
      name: "Nadukani-Mountain",
      description: "Witness the mesmerizing beauty of cascading waters surrounded by dense forests.",
      videos: ["/videos/nadukani1.mp4", "/videos/Anakulam2.mp4"]
    },
    {
      name: "Kallimali-Viewpoint",
      description: "Witness the mesmerizing beauty of cascading waters surrounded by dense forests.",
      videos: [
        "/videos/Anakulam3.mp4",
        "/videos/Anakulam4.mp4",
        "/videos/Anakulam6.mp4",
        "/videos/Anakulam5.mp4"
      ]
    }
  ];

  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-gradient-to-b mt-28 py-4 from-green-50 to-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 mb-8">
          Discover <span className="text-green-600">Ponmudi</span>
        </h1>

        <section className="bg-gray-100 p-6 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Tour Description</h2>
          <p className="text-gray-700 mb-4">
            Ponmudi Jeep tour invites you on a thrilling adventure journey in a Jeep Safari to explore the hidden beauty of Munnar. Even though Munnar is a small town, every inch is equally beautiful. Experience the flora and fauna up close. The jeep safari offers even more fun and adventures, making it a memorable trip for a lifetime.
          </p>

          <div className="space-y-4">
            {/* Package Highlights */}
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-2xl font-semibold text-green-500 mb-2">Package Highlights</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Thrilling off-road journey</li>
                <li>Visit to a tourist village & waterfall</li>
                <li>Hanging bridge and dam views</li>
                <li>Picnic point (sunrise & sunset options)</li>
                <li>Serene lake view</li>
              </ul>
              <p className="mt-3 text-lg text-gray-800 font-semibold">
                3-4 Hours - ₹3000 per trip (up to 6 people)
              </p>
            </div>

            {/* Tour Details Sections */}
            {[
              {
                title: "Inclusions",
                items: [
                  "All taxes, fees, and handling charges",
                  "GST (Goods and Services Tax)",
                  "Bottled water & fruits",
                  "Professional guide"
                ]
              },
              {
                title: "Exclusions",
                items: [
                  "Gratuities (recommended)",
                  "Transportation to/from attractions"
                ]
              }
            ].map((section) => (
              <div key={section.title} className="bg-white p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-500 mb-2">{section.title}</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {section.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Additional Info */}
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-500 mb-2">Additional Info</h3>
              <p className="text-gray-600">
                Confirmation will be received at the time of booking. Our team will connect with you for further details. The duration of transfers is approximate, depending on traffic and time of day.
              </p>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-500 mb-2">Cancellation Policy</h3>
              <p className="text-gray-600">
                For a full refund, cancel at least 24 hours before the start date of the experience.
              </p>
            </div>

            {/* Departure Point */}
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-500 mb-2">Departure Point</h3>
              <p className="text-gray-600">Return: At Pick up point</p>
              <p className="text-gray-600">Anachal, Munnar</p>
              <p className="text-gray-600">Contact: +91 6238343996</p>
            </div>
          </div>
        </section>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {places.map((place, index) => (
            <PlaceCard key={index} {...place} />
          ))}
        </div>

        {/* Description Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Discover the Wonders of Ponmudi
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Ponmudi is a hidden gem offering breathtaking views and thrilling adventures. From cascading waterfalls to the historical British-made hanging bridge, the journey is filled with exciting experiences for every traveler.
            </p>
            <p>
              Explore the tranquil beauty of dam views, soak in the natural acoustics at Echo Point, and enjoy a panoramic view from the top of Nadukani Mountain. Whether you&apos;re an adventurer or a nature lover, Ponmudi promises an unforgettable escape.
            </p>
            <p>
              Embrace the charm of the mountains and create memories that will last a lifetime in this serene paradise.
            </p>
          </div>
        </section>

        {/* <div className="text-center">
          <BookButton />
        </div> */}
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Ponmudi;