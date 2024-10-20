import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold">About Us</h3>
          <span className="text-gray-400">
            Discover the beauty of South India with our curated tour packages. We offer a wide range of adventure-filled, serene, and unique experiences tailored for every traveler.
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/packages" className="hover:underline">Our Packages</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQs</Link></li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <Instagram size={24} />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <Twitter size={24} />
            </a>
            <a href="mailto:info@example.com" className="hover:text-gray-400">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400">
            <span className="font-bold">Email:</span> info@tourpackage.com
          </p>
          <p className="text-gray-400">
            <span className="font-bold">Phone:</span> +1 234 567 890
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} TourPackage. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
