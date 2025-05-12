'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const videoHeight = window.innerHeight * 0.8; // 80vh
      setIsVisible(scrollPosition > videoHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isVisible ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Logo />
            <h1 className={`text-2xl sm:text-2xl font-bold transition-colors duration-300 ${
              isVisible ? 'text-amber-950' : 'text-white'
            }`}>
              Startup Community
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            {/* Desktop nav */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href="#"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isVisible
                    ? 'bg-amber-900 text-white hover:bg-amber-800'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                Apply Now
              </a>
              <a
                href="#"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isVisible
                    ? 'text-amber-950 hover:text-amber-700'
                    : 'text-white hover:text-amber-200'
                }`}
              >
                Learn More
              </a>
            </div>
            {/* Mobile nav */}
            <div className="sm:hidden relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-900"
                aria-label="Open menu"
              >
                {/* Hamburger icon */}
                <svg className="w-7 h-7" fill="none" stroke={isVisible ? '#3B1D0A' : 'white'} strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 text-amber-950 hover:bg-amber-50 text-sm font-medium"
                  >
                    Apply Now
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-amber-950 hover:bg-amber-50 text-sm font-medium"
                  >
                    Learn More
                  </a>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
} 