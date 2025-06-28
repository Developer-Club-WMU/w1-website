'use client';

export default function ApplicationSection() {
  return (
    <div className="relative mb-16">
      <div className="bg-gradient-to-r from-amber-900 to-amber-950 rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Fall 2025 Batch Applications Now Open
            </h2>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
              Join our next cohort of innovative students and transform an idea into a successful business. Limited spots available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-amber-900 bg-white rounded-full shadow-lg hover:bg-amber-50 transition-colors duration-300 transform hover:scale-105"
              >
                Apply Now
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
                href="/info"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
            <p className="mt-6 text-sm text-amber-200">
              Application deadline: September 3, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 