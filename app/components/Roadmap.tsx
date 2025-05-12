'use client';

interface Stage {
  stage: string;
  duration: string;
  icon: string;
  description: string;
  tasks: string[];
}

const roadmap: Stage[] = [
  {
    stage: "Stage 1: Ideation",
    duration: "1-2 weeks",
    icon: "💡",
    description: "Lay the foundation for your startup journey",
    tasks: [
      "Create/improve ideas",
      "Find cofounders"
    ]
  },
  {
    stage: "Stage 2: MVP",
    duration: "2-4 weeks",
    icon: "🚀",
    description: "Transform your idea into a tangible product",
    tasks: [
      "Create a very basic and somewhat useable product",
      "Connect with potential clients for feedback"
    ]
  },
  {
    stage: "Stage 3: Launch",
    duration: "2-4 weeks",
    icon: "🎯",
    description: "Prepare for market entry and growth",
    tasks: [
      "Create legal entity and paperwork",
      "Start working with hero clients"
    ]
  }
];

export default function Roadmap() {
  return (
    <div className="relative mb-16">
      {/* Connecting Line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/20 via-blue-600/40 to-blue-600/20 transform -translate-y-1/2 hidden md:block"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {roadmap.map((stage, index) => (
          <div key={index} className="relative">
            {/* Stage Card */}
            <div className="flex flex-col items-center">
              {/* Icon Circle */}
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-3xl text-white shadow-lg z-10 mb-6">
                {stage.icon}
              </div>
              
              {/* Content */}
              <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl w-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-900">{stage.stage}</h3>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">
                    {stage.duration}
                  </span>
                </div>
                
                <p className="text-blue-700 mb-6 text-sm">
                  {stage.description}
                </p>
                
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