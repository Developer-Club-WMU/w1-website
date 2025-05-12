'use client';

import Image from "next/image";

interface School {
  src: string;
  alt: string;
  url: string;
}

const schools: School[] = [
  { 
    src: '/images/wmu.png', 
    alt: 'Western Michigan University',
    url: 'https://wmich.edu/'
  },
  { 
    src: '/images/kvcc.png', 
    alt: 'Kalamazoo Valley Community College',
    url: 'https://www.kvcc.edu/'
  },
  { 
    src: '/images/gvsu.png', 
    alt: 'Grand Valley State University',
    url: 'https://www.gvsu.edu/'
  },
  { 
    src: '/images/ferris.png', 
    alt: 'Ferris State University',
    url: 'https://www.ferris.edu/'
  }
];

// Double the schools array to create seamless loop
const doubledSchools = [...schools, ...schools];

export default function SchoolLogos() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Students From</h2>
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-600/5 to-blue-700/5 rounded-2xl py-8">
        <div className="flex animate-scroll">
          {doubledSchools.map((school, index) => (
            <a
              key={index}
              href={school.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-48 h-48 bg-white rounded-2xl shadow-lg p-4 mx-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative w-full h-full">
                <Image
                  src={school.src}
                  alt={school.alt}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 