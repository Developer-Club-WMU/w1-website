'use client';

import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { MdRocketLaunch } from 'react-icons/md';
import { BsLayers } from 'react-icons/bs';

interface Stage {
  stage: string;
  duration: string;
  icon: React.ReactNode;
  tasks: string[];
}

const roadmap: Stage[] = [
  {
    stage: "Stage 1: Ideation",
    duration: "1-2 weeks",
    icon: <FaLightbulb className="w-8 h-8" />,
    tasks: [
      "Find and improve your startup idea",
      "Assemble your founding team with roles"
    ]
  },
  {
    stage: "Stage 2: MVP",
    duration: "2-4 weeks",
    icon: <BsLayers className="w-8 h-8" />,
    tasks: [
      "Develop a functional prototype with core features",
      "Gather feedback from potential early adopters"
    ]
  },
  {
    stage: "Stage 3: Launch",
    duration: "2-4 weeks",
    icon: <MdRocketLaunch className="w-8 h-8" />,
    tasks: [
      "Establish legal structure and business operations",
      "Secure initial customers and strategic partners"
    ]
  }
];

export default function Roadmap() {
  return (
    <div className="relative mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-6 sm:mb-8 text-center px-2">
        Start Your Journey
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-2">
        {roadmap.map((stage, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl border border-amber-100 p-5 sm:p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            {/* Icon inside the card */}
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-900 to-amber-950 rounded-full flex items-center justify-center text-white shadow-lg mb-3 sm:mb-4">
              {stage.icon}
            </div>
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-amber-950">{stage.stage}</h3>
              <span className="text-xs sm:text-sm font-medium text-amber-900 bg-amber-50 px-3 sm:px-4 py-1 rounded-full">
                {stage.duration}
              </span>
            </div>
            <ul className="space-y-2 sm:space-y-3 w-full text-left">
              {stage.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  <span className="text-amber-950 text-sm">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 