'use client';

import Header from '../components/Header';

export default function Info() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Application Info Section */}
          <section className="mb-16 mt-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-8">Application Process</h2>
            <p className="text-lg text-gray-700 mb-12">
              Whether you're a student with a startup idea or just looking to join a team, 
              W1 welcomes you to apply. <br />Our application process is simple and straightforward.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">How to Apply</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-semibold mr-3">1</span>
                    <span className="text-gray-700">Fill out our quick application form (takes just a few minutes)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-semibold mr-3">2</span>
                    <span className="text-gray-700">Schedule a casual 10-minute Zoom call with a W1 Advisor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-semibold mr-3">3</span>
                    <span className="text-gray-700">Get started on your startup journey!</span>
                  </li>
                </ol>
              </div>
              <div className="bg-amber-100 p-8 rounded-lg flex flex-col items-center justify-center space-y-6">
                <h3 className="text-2xl font-bold text-amber-900">Fall 2025 Batch</h3>
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-200 transform hover:scale-105 shadow-lg">
                  Apply Now
                </button>
                <div className="text-center">
                  <p className="text-amber-900 font-medium">Application Deadline:</p>
                  <p className="text-amber-800 text-lg font-semibold">August 1st, 2025</p>
                </div>
              </div>
            </div>
          </section>

          {/* Resources Info Section */}
          <section>
            <h2 className="text-3xl font-bold text-amber-900 mb-8">Resources</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Development Resources */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Development</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Windows/Linux server space
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Remote Mac Minis
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Cloud Credits
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Developer Fees
                  </li>
                </ul>
              </div>

              {/* Mentoring Resources */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Mentoring</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Expert speakers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Development workshops
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Business strategy sessions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    One-on-one mentorship
                  </li>
                </ul>
              </div>

              {/* Business Resources */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Business</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Downtown meeting spaces
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Business plan assistance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Financial planning support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Networking events
                  </li>
                </ul>
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