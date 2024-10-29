'use client';

import Footer from '../components/footer';
import Header from '../components/header';

export default function Rooms() {
  return (
    <div className="">
      <Header />
      <div className="max-h-screen bg-gray-100 mt-28  px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className='text-5xl font-bold text-center text-gray-900 mt-10'>Our Exclusive Resorts</h1>
          <div className='grid grid-cols-1 sm-grid-col-2 lg:grid-cols-3 gap-10'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-105 hover:scale-105'>
              ha
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
