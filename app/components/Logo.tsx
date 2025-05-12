import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-10 h-10 rounded-full bg-amber-950 flex items-center justify-center">
        <span className="text-white font-bold text-xl">W1</span>
      </div>
    </div>
  );
} 