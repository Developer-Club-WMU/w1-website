'use client';

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';

export default function Home() {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const logos = [
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

  // Double the logos array to create seamless loop
  const doubledLogos = [...logos, ...logos];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const roadmap = [
    {
      stage: "Stage 1: Ideation",
      duration: "1-2 weeks",
      tasks: [
        "Create/improve ideas",
        "Find cofounders"
      ]
    },
    {
      stage: "Stage 2: MVP",
      duration: "2-4 weeks",
      tasks: [
        "Create a very basic and somewhat useable product",
        "Connect with potential clients for feedback"
      ]
    },
    {
      stage: "Stage 3: Launch",
      duration: "2-4 weeks",
      tasks: [
        "Create legal entity and paperwork",
        "Start working with hero clients"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      {/* Header */}
      <header className="bg-blue-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-white">W1 Startup Accelerator</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Video Hero Section */}
        <div className="relative h-[60vh] w-full overflow-hidden">
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
              W1 West Michigan Accelerator
            </h2>
            <div className="text-2xl font-medium">
              Helping with{" "}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Accelerate Your Startup Journey
            </h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Each group will have a dynamic path set for success based on their idea, whether its a web app, developer tool, piece of hardware, or something else
            </p>
          </div>

          {/* Roadmap Section */}
          <div className="space-y-8 mb-16">
            {roadmap.map((stage, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-blue-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-blue-900">{stage.stage}</h3>
                  <span className="text-blue-600 font-medium">{stage.duration}</span>
                </div>
                <ul className="space-y-3">
                  {stage.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-blue-800">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* University Logos Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Students from</h2>
            <div className="relative w-full overflow-hidden">
              <div className="flex animate-scroll">
                {doubledLogos.map((logo, index) => (
                  <a
                    key={index}
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-48 h-48 bg-white rounded-lg shadow-md p-4 mx-4 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
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
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white border-t border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">About Us</h3>
              <p className="text-sm text-blue-100">
                W1 Startup Accelerator helps early-stage startups grow and succeed through mentorship, resources, and connections.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-blue-100 hover:text-white">Apply Now</a></li>
                <li><a href="#" className="text-sm text-blue-100 hover:text-white">Program Details</a></li>
                <li><a href="#" className="text-sm text-blue-100 hover:text-white">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-blue-100">Email: contact@w1accelerator.com</li>
                <li className="text-sm text-blue-100">Phone: (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-500">
            <p className="text-sm text-blue-100 text-center">
              © {new Date().getFullYear()} W1 Startup Accelerator. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
