'use client';

import { useState, useEffect } from 'react';
import Header from './components/header';
import HomeHeader from './components/home-header';
import Link from 'next/link';
import Footer from './components/footer';

export default function Home() {
  const videoData = [
    {
      src: '/videos/cwaterfalls.webm',
      place: 'Chunayammackal Waterfalls',
    },
    {
      src: '/videos/offroads.webm',
      place: 'OFF-Roads',
    },
    {
      src: '/videos/ponmudidam.webm',
      place: 'Ponmudi Dam',
    },
    {
      src: '/videos/tea.webm',
      place: 'Tea Plantations',
    },
    {
      src: '/videos/anakkulamvp.webm',
      place: 'Anakkulam view-point',
    },
    {
      src: '/videos/attukadwf.webm',
      place: 'Attukad-Waterfalls',
    },
    {
      src: '/videos/nadukani.webm',
      place: 'Nadukani-hilltop',
    },
    {
      src: '/videos/offroads.webm',
      place: 'Attukad-Waterfalls',
    },
    {
      src: '/videos/home18.mp4',
      place: 'Anakkulam Rivercross',
    },
  ];

  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 0); // Show header when scrolled
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen m-auto">
      {/* Main Video Section */}

      <div className="relative h-screen ">
        <video
          className=" w-full h-full object-cover overflow-hidden"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/v1.webm" type="video/webm" />
        </video>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex max-h-[100vh] sm:max-h-screen items-center justify-center ">
        <div className=" text-white">
          <h1 className="animate-typing text-3xl md:text-4xl lg:text-5xl sm:text-2xl text-center font-serif font-bold mb-4">
            <span className="sm:hidden">Welcome to</span>
            <span className="block sm:hidden">South India's</span>

            <span className="sm:hidden block ">Kashmir</span>

            <span className="hidden sm:block">
              Welcome to South India's Kashmir
            </span>
          </h1>

          <p className="animate-typing text-lg md:text-xl font-sans lg:text-2xl sm:text-2xl sm:ml-4">
            Explore amazing{' '}
            <span className=" font-extrabold font-mono">Munnar</span> with us.
          </p>
        </div>
      </div>

      {/* Home page header */}

      <HomeHeader />

      {showHeader && <Header />}

      {/* video grid section */}
      <div className="bg-gray-200">
        <div>
          <h2 className="text-3xl font-bold text-center mt-8 py-10 text-black">
            Discover Munnar
          </h2>
          <div className="grid grid-cols-1 md:mx-8 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {videoData.map((item, index) => (
              <div
                key={index}
                className="bg-white  shadow-lg overflow-hidden  "
              >
                <div className="aspect-w-16 aspect-h-9">
                  <video
                    className="w-full h-[80vh] object-cover "
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={item.src} type="video/webm" />
                    Video
                  </video>
                </div>
                <div className=" flex inset-0 justify-center items-center text-black font-mono mt-2">
                  <h3 className="font-bold text-center py-2 text-lg">
                    {item.place}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description section */}
      <div className="bg-gradient-to-r mt-8 from-blue-50 to-teal-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Explore the Beauty of Munnar
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
            Experience the thrill of Munnar Jeep Safari exploring the wildlife
            of Munnar, Kerala with our Jeep Safari. This exciting full-day tour
            takes you on a journey to the hilltop Tea Estate, also known as the
            tea plantation in the sky. Accessible only by 4-wheel drive, this
            estate is situated in the mountains at a height of approximately
            8000ft, offering breathtaking views of the mountains and the vast
            plains of Tamil Nadu.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
            Book your Munnar jeep safari online and get ready for an adventure
            of a lifetime. Our experienced guides will take you on a thrilling
            ride through the rugged terrain, giving you a chance to witness the
            beauty of nature up close. You will get to see exotic wildlife, lush
            green forests, and stunning waterfalls along the way.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            Don't miss out on this unique opportunity to explore the hidden gems
            of Munnar. Join us for an unforgettable experience!
          </p>

          <button className="custom-button">
            <a href="https://wa.me/+917560966897" target="_blank">
              Book now
            </a>
          </button>
        </div>
      </div>

      {/*Footer*/}

      <Footer />
    </div>
  );
}
