
import React, { useState } from 'react';
import { Calendar, GraduationCap, Code, TrendingUp, Shield } from 'lucide-react';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  category: 'education' | 'experience' | 'achievement' | 'project';
}

const InteractiveTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const timelineEvents: TimelineEvent[] = [
    {
      id: '09/2021',
      year: '2021 - 2024',
      title: 'BSc Computer Science',
      subtitle: 'University of Calicut',
      description: 'Graduated with comprehensive knowledge in computer science fundamentals, programming languages, algorithms, and software development methodologies.',
      icon: GraduationCap,
      color: 'from-purple-500 to-blue-500',
      category: 'education'
    },
    {
      id: '2024',
      year: '2024 - now',
      title: 'Web Development',
      subtitle: 'Web App Projects',
      description: 'Developed a system to streamline the management and engagement of alumni networks.',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      category: 'project'
    },
   
    {
      id: '09/2024',
      year: '2024 - now',
      title: 'Cybersecurity',
      subtitle: 'Ethical Hacking & Security',
      description: 'Currently learning and exploring the field of cybersecurity, focusing on understanding how to secure systems, networks, and data from threats while developing skills in ethical hacking and vulnerability assessment.',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'experience'
    }
  ];

  return (
    <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-purple-500/20">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">My Journey</h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
        
        {/* Timeline events */}
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className={`relative flex items-start space-x-6 cursor-pointer transition-all duration-300 ${
                selectedEvent === event.id ? 'transform scale-105' : ''
              }`}
              onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
            >
              {/* Timeline dot */}
              <div className={`
                flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${event.color}
                flex items-center justify-center shadow-lg z-10
                transform transition-all duration-300 hover:scale-110
                ${selectedEvent === event.id ? 'scale-110 shadow-2xl' : ''}
              `}>
                <event.icon className="text-white" size={24} />
              </div>
              
              {/* Event content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-gray-400" />
                    <span className="text-sm font-medium text-purple-400">{event.year}</span>
                  </div>
                  <div className={`
                    px-2 py-1 rounded-full text-xs font-medium
                    ${event.category === 'education' ? 'bg-purple-500/20 text-purple-300' :
                      event.category === 'project' ? 'bg-blue-500/20 text-blue-300' :
                      event.category === 'experience' ? 'bg-green-500/20 text-green-300' :
                      'bg-yellow-500/20 text-yellow-300'}
                  `}>
                    {event.category}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-1">{event.title}</h4>
                <p className="text-sm text-purple-300 mb-2">{event.subtitle}</p>
                
                {selectedEvent === event.id && (
                  <div className="animate-fade-in">
                    <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">Click on any event to learn more</p>
      </div>
    </div>
  );
};

export default InteractiveTimeline;
