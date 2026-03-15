'use client';

import { useState, useRef, useEffect } from 'react';
import { getNextSession } from '@/data/bronco-build-it-links';

export default function Hero() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const session = getNextSession();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-4">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cards/w1_hero.png')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 text-center pt-16">
        <h1 className="font-serif text-[48px] sm:text-[64px] lg:text-[80px] leading-[1.05] tracking-tight text-white">
          W1 @ WMU
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/80 font-sans max-w-xl mx-auto">
          A student startup community across Western Michigan and beyond.
        </p>

        {/* Get Involved dropdown */}
        <div className="mt-8 relative inline-block" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-wmu-gold text-brown-deep font-semibold rounded-lg cursor-pointer"
          >
            Get Involved
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 rounded-lg shadow-lg overflow-hidden z-20">
              <a
                href={session?.url ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 text-sm font-medium bg-black text-white"
              >
                Join Event
                <svg className="w-3.5 h-3.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://discord.com/invite/G9yE5s6NFM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 text-sm font-medium bg-[#5865F2] text-white"
              >
                Join Discord
                <svg className="w-3.5 h-3.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
