// pages/index.tsx
import React, { FC } from 'react';
import PlaceCard from '../components/PlaceCard';
import Footer from '../components/footer';
import Header from '../components/header';
import BookButton from '../components/bookbutton';

// Define types
type Video = string;

interface Place {
  name: string;
  description: string;
  video: Video; // Changed from videos array to single video
}

// Main Page Component
const SilentValleyPage: FC = () => {
  // Sample data for places
  const places: Place[] = [
    {
      name: 'Silent-valley',
      description:
        'Experience breathtaking panoramic views of the surrounding hills and valleys.',
      video: '/videos/silentvalley1.mp4', // Changed to single video string
    },
    {
      name: 'Way to Heaven',
      description:
        'Wander through lush green tea gardens and learn about tea production.',
      video: '/videos/silentvalley2.mp4', // Changed to single video string
    },
    {
      name: 'Hills and Valleys',
      description:
        'Witness the mesmerizing beauty of cascading waters surrounded by dense forests.',
      video: '/videos/silentvalley3.mp4', // Changed to single video string
    },
    {
      name: 'River-Cross',
      description:
        'Witness the mesmerizing beauty of cascading waters surrounded by dense forests.',
      video: '/videos/silentvalley6.mp4', // Changed to single video string
    },
    {
      name: 'Mountain',
      description:
        'Witness the mesmerizing beauty of cascading waters surrounded by dense forests.',
      video: '/videos/silentvalley4.mp4', // Changed to single video string
    },
    {
      name: 'Tea-Plantation',
      description:
        'Witness the mesmerizing beauty of cascading waters surrounded by dense forests.',
      video: '/videos/silentvalley5.mp4', // Changed to single video string
    },
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-b mt-24 from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 mb-8">
            Discover <span className="text-green-600">Silent-Valley</span>
          </h1>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            {/* Tour Description Section */}
            <h1 className="text-3xl font-bold text-green-600 mb-4">
              Tour Description
            </h1>
            <p className="text-gray-700 mb-4">
              Silent-Valley Jeep tour invites you on a thrilling adventure
              journey in a Jeep Safari to explore the hidden beauty of Munnar.
              Experience the flora and fauna up close. The jeep safari offers
              even more fun and adventures, making it a memorable trip for a
              lifetime.
            </p>

            {/* Package Highlights */}
            <div className="bg-white p-4 rounded-lg mb-4">
              <h2 className="text-2xl font-semibold text-green-500 mb-2">
                Package Highlights
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Thrilling off-road journey</li>
                <li>Visit to a tourist village</li>
                <li>Tea-plantation views</li>
                <li>Picnic point (sunrise & sunset options)</li>
                <li>Serene lake view</li>
              </ul>
              <p className="mt-3 text-lg text-gray-800 font-semibold">
                3-4 Hours - ₹3000 per trip (up to 6 people)
              </p>
            </div>

            {/* Details Sections */}
            <h2 className="text-2xl font-bold text-green-600 mt-6 mb-2">
              Details
            </h2>

            {/* Inclusions */}
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

            {/* Places Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {places.map((place, index) => (
                <PlaceCard key={index} {...place} />
              ))}
            </div>

            <div className="bg-gradient-to-br from-white text-center to-green-500 rounded-2xl shadow-xl p-10  mb-12 border border-green-100">
              <h2 className="text-4xl font-bold mb-6 text-gray-800 font-serif tracking-tight leading-tight">
                Silent Valley: A Paradise in{' '}
                <span className="text-green-600">Munnar's Heart</span>
              </h2>

              <div className="space-y-6 font-['Helvetica_Neue']">
                <p className="text-lg leading-relaxed text-gray-700">
                  Nestled in the emerald embrace of Munnar's rolling hills,
                  Silent Valley stands as a testament to nature's profound
                  serenity. This mystical sanctuary, shrouded in perpetual mist
                  and carpeted with verdant tea plantations, offers an escape
                  into a world where time seems to stand still.
                </p>

                <div className="pl-4 border-l-4 border-green-500 my-8">
                  <p className="text-xl italic text-gray-600 leading-relaxed">
                    "Where silence speaks louder than words, and every breath of
                    mountain air tells a story of untamed wilderness."
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-700">
                  As you ascend through winding pathways, each turn reveals
                  breathtaking vistas of undulating hills draped in emerald tea
                  gardens. Watch as morning mist dances with sunbeams, creating
                  an ethereal spectacle that captivates photographers and nature
                  enthusiasts alike.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Silent Valley isn't just a destination; it's an experience
                  that awakens your senses. Listen to the whispers of ancient
                  trees, spot rare mountain birds soaring through crisp mountain
                  air, and feel the gentle touch of clouds as they drift past
                  you at this elevated paradise.
                </p>

                <div className="bg-green-50 p-6 rounded-xl mt-8">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">
                    Highlights of Silent Valley
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>
                        Panoramic viewpoints of endless tea plantations
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Mystical morning mist experiences</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Rich biodiversity and rare wildlife</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Tranquil hiking trails</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mt-6">
                  Whether you're seeking solitude among the clouds, adventure in
                  the wilderness, or simply a moment to reconnect with nature,
                  Silent Valley offers an enchanting escape that will leave you
                  spellbound and yearning to return.
                </p>
              </div>
            </div>
            {/* Book Button */}
            <div className="text-center">
              {/* You can add your BookButton component here */}
              <BookButton />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SilentValleyPage;
