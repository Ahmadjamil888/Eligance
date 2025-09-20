'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-semibold tracking-wide">
            Élégance
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <Link href="/services" className="text-sm font-medium tracking-wide uppercase hover:text-gray-600 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-sm font-medium tracking-wide uppercase hover:text-gray-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-sm font-medium tracking-wide uppercase hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium tracking-wide uppercase hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <Link href="/contact" className="hidden sm:block text-sm font-medium tracking-wide uppercase hover:text-gray-600 transition-colors">
              Book Consultation
            </Link>
            <button className="hidden lg:block text-sm font-medium tracking-wide uppercase hover:text-gray-600 transition-colors">
              Client Portal
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-6 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link href="/services" className="text-sm font-medium tracking-wide uppercase hover:text-gray-600 transition-colors py-2">
                Services
              </Link>
              <Link href="/portfolio" className="text-sm font-medium tracking-wide uppercase hover:text-gray-600 transition-colors py-2">
                Portfolio
              </Link>
              <Link href="/about" className="text-sm font-medium tracking-wide uppercase hover:text-gray-600 transition-colors py-2">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium tracking-wide uppercase hover:text-gray-600 transition-colors py-2">
                Contact
              </Link>
              <Link href="/contact" className="text-sm font-medium tracking-wide uppercase text-black border-t border-gray-100 pt-4 mt-4">
                Book Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;