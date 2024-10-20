'use client';
import { useState } from 'react';
import { MapPin, Mail, Phone, X } from 'lucide-react';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <div className="pt-20 mt-10 ">
        <img
          src="/images/contact-banner.jpg"
          alt=""
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Contact Information */}
      <div >
        <h4 className="text-2xl font-bold text-black underline decoration-green-500 decoration-2 text-center mt-6 mb-8">
          CONTACT US
        </h4>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mx-auto  gap-12 w-full max-w-6xl mb-6 ">
        {/* Office Location */}
        <div className="flex flex-col items-center text-center">
          <MapPin className="mb-4 text-green-500" size={36} />
          <span className="text-blue-950 text-lg font-bold">
            OFFICE LOCATION
          </span>
          <span className="text-md font-thin">
            Anachal, Idukki, Kerala 685565
          </span>
        </div>

        {/* Email Address */}
        <div className="flex flex-col items-center text-center">
          <Mail className="mb-4 text-green-500" size={36} />
          <span className="text-blue-950 text-lg font-bold">EMAIL ADDRESS</span>
          <span className="text-md font-thin">jeminpaul199@gmail.com</span>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col items-center text-center">
          <Phone className="mb-4 text-green-500" size={36} />
          <span className="text-blue-950 text-lg font-bold">PHONE NUMBER</span>
          <span className="text-md font-thin">+91 6238343996</span>
        </div>
      </div>

     <div className='flex flex-grow'>
     <Footer />
     </div>
      {/* WhatsApp icon */}
      <button
        onClick={togglePopup}
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </button>

      {/* WhatsApp Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full shadow-2xl transform transition-all duration-300 ease-in-out">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-white fill-current"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-green-600">
                  Chat with us!
                </h2>
                <p className="text-gray-600">We're here to help.</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Have a question or need assistance? Chat with our team on WhatsApp
              for quick and friendly support!
            </p>
            <a
              href="https://wa.me/+917902958449"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full text-center transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Start Chat
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
