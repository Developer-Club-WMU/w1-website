'use client';

import SolidHeader from '../components/SolidHeader';
import { FaFilePdf, FaFileAlt, FaFileContract, FaExternalLinkAlt, FaGlobe, FaGithub, FaDiscord } from 'react-icons/fa';
import Image from 'next/image';

export default function Info() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <SolidHeader />
      
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Documents Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Documents</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Important documents and resources for W1 participants
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Schedule Document */}
              <a 
                href="/schedule" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all hover:scale-105 flex flex-col items-center"
              >
                <div className="w-16 h-16 text-amber-600 mb-4">
                  <FaFilePdf className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-semibold text-amber-800 mb-2">Program Schedule</h3>
                <p className="text-gray-700 text-center mb-4">
                  Complete timeline for the W1 build program
                </p>
                <span className="flex items-center text-amber-600 font-medium">
                  View PDF <FaExternalLinkAlt className="ml-2" />
                </span>
              </a>

              {/* Placeholder for future documents */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-100 flex flex-col items-center opacity-70">
                <div className="w-16 h-16 text-amber-500 mb-4">
                  <FaFileContract className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-semibold text-amber-800 mb-2">Member Agreement</h3>
                <p className="text-gray-700 text-center mb-4">
                  Coming soon
                </p>
              </div>

              {/* Placeholder for future documents */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-100 flex flex-col items-center opacity-70">
                <div className="w-16 h-16 text-amber-500 mb-4">
                  <FaFileAlt className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-semibold text-amber-800 mb-2">Resources Guide</h3>
                <p className="text-gray-700 text-center mb-4">
                  Coming soon
                </p>
              </div>
            </div>
          </section>

          {/* Resources Info Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Resources</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We provide comprehensive resources to help you build and grow your startup
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Development Resources */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-amber-800 mb-6">Development</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-lg">Windows/Linux server space</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-lg">Remote Mac Minis</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-lg">Cloud Credits</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-lg">Developer Fees</span>
                  </li>
                </ul>
              </div>

              {/* Mentoring Resources */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-amber-800 mb-6">Mentoring</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-lg">Expert speakers</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-lg">Development workshops</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-lg">Business strategy sessions</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-lg">One-on-one mentorship</span>
                  </li>
                </ul>
              </div>

              {/* Business Resources */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-amber-800 mb-6">Business</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-lg">Downtown meeting spaces</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-lg">Business plan assistance</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-lg">Financial planning support</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-lg">Networking events</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Clubs Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Founding Clubs</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                W1 is supported by the following clubs at Western Michigan University
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-100 flex flex-col items-center justify-center group hover:shadow-xl transition-transform">
                <h3 className="text-2xl font-semibold text-amber-800 mb-6">Developer Club at WMU</h3>
                <div className="w-48 h-48 bg-amber-50 rounded-full mb-6 flex items-center justify-center overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  {/* Developer Club Logo */}
                  <Image 
                    src="/images/devwmu.jpeg" 
                    alt="Developer Club at WMU logo" 
                    width={192} 
                    height={192} 
                    className="object-cover group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <p className="text-gray-700 text-center mb-6">
                  A community of student developers building the next generation of technology
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://discord.com/invite/G9yE5s6NFM" 
                    className="flex items-center justify-center px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDiscord className="mr-2" /> Discord
                  </a>
                  <a 
                    href="https://github.com/Developer-Club-WMU" 
                    className="flex items-center justify-center px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-100 flex flex-col items-center justify-center group hover:shadow-xl transition-transform">
                <h3 className="text-2xl font-semibold text-amber-800 mb-6">Data Science Club at WMU</h3>
                <div className="w-48 h-48 bg-amber-50 rounded-full mb-6 flex items-center justify-center overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  {/* Data Science Club Logo */}
                  <Image 
                    src="/images/dscwmu.jpeg" 
                    alt="Data Science Club at WMU logo" 
                    width={192} 
                    height={192} 
                    className="object-cover group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <p className="text-gray-700 text-center mb-6">
                  Exploring data-driven solutions to complex problems through analysis and machine learning
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://dscwmu.org" 
                    className="flex items-center justify-center px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe className="mr-2" /> Website
                  </a>
                  <a 
                    href="https://github.com/Data-Science-Club-at-WMU" 
                    className="flex items-center justify-center px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Application Info Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Apply to W1</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Whether you're a student with a startup idea or just looking to join a team, 
                W1 welcomes you to apply. Our application process is simple and straightforward.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-100">
                <h3 className="text-2xl font-semibold text-amber-800 mb-8">How to Apply</h3>
                <ol className="space-y-8">
                  <li className="flex items-start group">
                    <span className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-semibold mr-4 group-hover:bg-amber-200 transition-colors">1</span>
                    <span className="text-gray-700 text-lg pt-1">Fill out our quick application form (takes just a few minutes)</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-semibold mr-4 group-hover:bg-amber-200 transition-colors">2</span>
                    <span className="text-gray-700 text-lg pt-1">Schedule a casual 10-minute Zoom call with a W1 Advisor</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-semibold mr-4 group-hover:bg-amber-200 transition-colors">3</span>
                    <span className="text-gray-700 text-lg pt-1">Get started on your startup journey!</span>
                  </li>
                </ol>
              </div>

              <div className="bg-amber-100/80 backdrop-blur-sm p-10 rounded-2xl flex flex-col items-center justify-center space-y-8 border border-amber-200">
                <h3 className="text-3xl font-bold text-amber-900">Fall 2025 Batch</h3>
                
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-xl text-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl shadow-lg">
                  <a href="/join">  
                  Apply Now
                  </a>
                </button>
                
                <div className="text-center">
                  <p className="text-amber-900 font-medium text-lg">Application Deadline:</p>
                  <p className="text-amber-800 text-2xl font-semibold">September 3rd, 2025</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-amber-900 text-white border-t border-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mt-8 pt-8 border-t border-amber-800">
            <p className="text-sm text-amber-100 text-center">
              © {new Date().getFullYear()} W1 Startup Community. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 