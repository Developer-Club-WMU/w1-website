'use client';

import { TypeAnimation } from 'react-type-animation';

export default function VideoHero() {
  return (
    <div className="relative h-[60vh] sm:h-[80vh] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/students.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-950/70 backdrop-blur-sm"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 py-8 sm:py-0">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6 text-center">
            Build with W1
          </h2>
          <div className="text-xl sm:text-3xl font-medium mb-6 sm:mb-8">
            Assisting students with{" "}
            <TypeAnimation
              sequence={[
                'development',
                2000,
                'planning',
                2000,
                'resources',
                2000,
                'paperwork',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-yellow-300"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center w-full mt-10 sm:mt-0">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-medium text-amber-900 bg-white rounded-full shadow-lg hover:bg-amber-50 transition-colors duration-300 transform hover:scale-105"
            >
              Get Started
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 