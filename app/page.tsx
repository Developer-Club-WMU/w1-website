'use client';

import Header from './components/Header';
import VideoHero from './components/VideoHero';
import Roadmap from './components/Roadmap';
import ApplicationSection from './components/ApplicationSection';
import SchoolLogos from './components/SchoolLogos';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Header />
      
      <main className="flex-grow">
        <VideoHero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Roadmap />
          <ApplicationSection />
          <SchoolLogos />
        </div>
      </main>

      <footer className="bg-amber-900 text-white border-t border-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">About Us</h3>
              <p className="text-sm text-amber-100">
                W1 Startup Community helps students turn ideas into startups through mentorship, resources, and connections.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/join" className="text-sm text-amber-100 hover:text-white">Apply Now</a></li>
                <li><a href="/info" className="text-sm text-amber-100 hover:text-white">Program Details</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-amber-100">Email: coming soon</li>
                <li className="text-sm text-amber-100">Phone: coming soon</li>
              </ul>
            </div>
          </div>
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
