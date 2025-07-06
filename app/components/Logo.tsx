import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image 
        src="/w1_logo.png" 
        alt="W1 Logo" 
        width={40} 
        height={40} 
        className="w-10 h-10 object-contain"
      />
    </div>
  );
} 