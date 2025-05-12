'use client';

import { TypeAnimation } from 'react-type-animation';

export default function VideoHero() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
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
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-5xl font-bold mb-4 text-center">
          Build with W1
        </h2>
        <div className="text-2xl font-medium">
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
            className="text-blue-300"
          />
        </div>
      </div>
    </div>
  );
} 