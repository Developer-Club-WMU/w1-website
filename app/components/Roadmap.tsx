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
      "Refine your startup concept through market research",
      "Assemble your founding team and define roles"
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
      "Secure initial customers and strategic partnerships"
    ]
  }
];

export default function Roadmap() {
  return (
    <div className="relative mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
        Start Your Journey
      </h2>
      
      {/* Blue connecting line positioned to pass through the center of the boxes */}
      <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-600/20 via-blue-600/40 to-blue-600/20 transform -translate-y-1/2 hidden md:block z-0"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {roadmap.map((stage, index) => (
          <div key={index} className="relative">
            {/* Stage Card */}
            <div className="flex flex-col items-center">
              {/* Icon Circle */}
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white shadow-lg z-10 mb-6">
                {stage.icon}
              </div>
              
              {/* Content */}
              <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl w-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-blue-900">{stage.stage}</h3>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">
                    {stage.duration}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {stage.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-blue-800 text-sm">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 