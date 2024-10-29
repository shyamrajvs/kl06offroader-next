'use client';

import Link from 'next/link';

import Header from '../components/header';
import LazyVideo from '../components/lazyVideo';
import Footer from '../components/footer';
import CustomerReviews from '../components/customer-reviews';

export default function Packages() {
  const packages = [
    {
      name: 'Anakulam Package',
      path: '/anakulam',
      videoSrc: '/videos/home22.webm',
    },
    {
      name: 'Vattavada Package',
      path: 'vattavada',
      videoSrc: '/videos/vattavada1.mp4',
    },
    {
      name: 'Ponmudi Package',
      path: '/ponmudi',
      videoSrc: '/videos/ponmudidam.webm',
    },
    {
      name: 'Silent-Valley Package',
      path: '/silentvalley',
      videoSrc: '/videos/home12.mp4',
    },
    {
      name: 'Kattadipara package ',
      path: '/Kattadipara',
      videoSrc: '/videos/kattadipara1.webm',
    },
    {
      name: 'Off-Road package',
      path: '/Offroads',
      videoSrc: '/videos/mullanthandu.webm',
    },
  ];

  return (
    <div>
      <Header />

      {/* <div className="min-h-screen border-y-green-100 mt-28">
        <div className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
              Explore Our Tour Packages
            </h2>
            <div>
              { packages.map((pkg, index) =>(
                <div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div className="min-h-screen bg-gray-100 mt-24">
        <div className="bg-gray-100 py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
              Explore Our Tour Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-w-16 aspect-square">
                    {/* Lazy Load Video */}
                    <LazyVideo src={pkg.videoSrc} type="video/mp4" />
                  </div>
                  <div className="p-6 flex flex-col items-center">
                    <h3 className="font-bold text-2xl text-center mb-4 text-gray-800">
                      {pkg.name}
                    </h3>
                    <Link href={pkg.path}>
                      <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                        View Package
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white py-16">
          <CustomerReviews />
        </div>
      </div>
      <Footer />
    </div>
  );
}
