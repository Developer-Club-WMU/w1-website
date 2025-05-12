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
  },
  { 
    src: '/images/calvin.png', 
    alt: 'Calvin University',
    url: 'https://calvin.edu/'
  },
  { 
    src: '/images/grcc.png', 
    alt: 'Grand Rapids Community College',
    url: 'https://www.grcc.edu/'
  },
  { 
    src: '/images/kcollege.png', 
    alt: 'Kalamazoo College',
    url: 'https://www.kzoo.edu/'
  }
];

export default function SchoolLogos() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-amber-950 mb-8">Students From</h2>
      <div className="relative w-full bg-gradient-to-r from-amber-900/5 to-amber-950/5 rounded-2xl py-8">
        <div className="overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {schools.map((school, index) => (
              <a
                key={`first-${index}`}
                href={school.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-24 h-24 sm:w-48 sm:h-48 bg-white rounded-2xl shadow-lg p-2 sm:p-4 mx-2 sm:mx-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:z-10"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={school.src}
                    alt={school.alt}
                    fill
                    className="object-contain p-2 sm:p-4"
                    priority
                  />
                </div>
              </a>
            ))}
            {schools.map((school, index) => (
              <a
                key={`second-${index}`}
                href={school.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-24 h-24 sm:w-48 sm:h-48 bg-white rounded-2xl shadow-lg p-2 sm:p-4 mx-2 sm:mx-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:z-10"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={school.src}
                    alt={school.alt}
                    fill
                    className="object-contain p-2 sm:p-4"
                    priority
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 