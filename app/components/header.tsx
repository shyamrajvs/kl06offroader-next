'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import BookNowButton from './booknow';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="  fixed bg-green-500 text-white font-bold top-0 z-10 w-full font-serif">
      <nav className="px-8 mt-2  sm:mx-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl w-32 h-20">
            <Link href="/">
              <img
                src="/images/logo.webp"
                alt="KL 06 OFFROADER"
                width="128"
                height="80"
                loading="lazy"
                className="object-contain"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white pb-4"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link href="/" className="link-116">
                Home
              </Link>
            </li>
            <li>
              <Link href="/packages" className="link-116">
                Tour Packages
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-116">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="link-116">
                Rooms
              </Link>
            </li>
            <li>
              <BookNowButton/>
            </li>
          </ul>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
              <div className="fixed right-0 top-0 h-fit w-64 bg-green-500 text-white shadow-lg z-50 p-4">
                <div className="flex justify-end">
                  <button
                    onClick={toggleMenu}
                    className="p-2"
                    aria-label="Close Menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                <ul className="flex flex-col space-y-4 mt-8">
                  <li>
                    <Link
                      href="/"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={toggleMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/packages"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={toggleMenu}
                    >
                      Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={toggleMenu}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/rooms"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={toggleMenu}
                    >
                      Rooms
                    </Link>
                  </li>
                  <li><BookNowButton/></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
