'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              isVisible ? 'text-blue-900' : 'text-white'
            }`}>
              W1 Startup Accelerator
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <a
              href="#"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isVisible
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              Apply Now
            </a>
            <a
              href="#"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isVisible
                  ? 'text-blue-900 hover:text-blue-700'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Learn More
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
} 