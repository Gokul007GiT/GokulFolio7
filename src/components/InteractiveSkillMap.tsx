
import React, { useState } from 'react';
import { Code, Shield, TrendingUp, Palette, Database, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  experience: string;
  projects?: string[];
  logo?: string;
}

interface SkillNode {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  color: string;
  skills: Skill[];
  position: { x: number; y: number };
}

const InteractiveSkillMap = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const skillNodes: SkillNode[] = [
    {
      id: 'center',
      title: 'My Skills',
      icon: Code,
      color: 'from-purple-500 to-blue-500',
      skills: [],
      position: { x: 50, y: 50 }
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Palette,
      color: 'from-pink-500 to-purple-500',
      skills: [
        { name: 'React', experience: '2+ years', projects: ['Portfolio', 'E-commerce'] },
        { name: 'Tailwind CSS', experience: '2+ years', projects: ['Multiple UI projects'] },
        { name: 'JavaScript', experience: '3+ years', projects: ['Web apps', 'Automation'] }
      ],
      position: { x: 20, y: 20 }
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: Database,
      color: 'from-green-500 to-blue-500',
      skills: [
        { name: 'Node.js', experience: '2+ years', projects: ['REST APIs', 'Microservices'] },
        { name: 'Firebase', experience: '1+ year', projects: ['Real-time apps'] },
        { name: 'SQL', experience: '2+ years', projects: ['Database design'] }
      ],
      position: { x: 80, y: 20 }
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'Kali Linux', experience: '1+ year', projects: ['Penetration testing'] },
        { name: 'Burp Suite', experience: '1+ year', projects: ['Web app security'] },
        { name: 'Nmap', experience: '1+ year', projects: ['Network scanning'] }
      ],
      position: { x: 20, y: 80 }
    },
    {
      id: 'trading',
      title: 'Trading',
      icon: TrendingUp,
      color: 'from-yellow-500 to-green-500',
      skills: [
        { name: 'Technical Analysis', experience: '2+ years', projects: ['Market research'] },
        { name: 'Chart Patterns', experience: '2+ years', projects: ['Trading strategies'] },
        { name: 'Risk Management', experience: '2+ years', projects: ['Portfolio optimization'] }
      ],
      position: { x: 80, y: 80 }
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: Terminal,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Git', experience: '3+ years', projects: ['Version control'] },
        { name: 'Figma', experience: '1+ year', projects: ['UI/UX design'] },
        { name: 'Postman', experience: '2+ years', projects: ['API testing'] }
      ],
      position: { x: 50, y: 15 }
    }
  ];

  const getConnectionPath = (from: SkillNode, to: SkillNode) => {
    const fromX = from.position.x;
    const fromY = from.position.y;
    const toX = to.position.x;
    const toY = to.position.y;
    
    return `M ${fromX} ${fromY} Q ${(fromX + toX) / 2} ${(fromY + toY) / 2} ${toX} ${toY}`;
  };

  return (
    <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-purple-500/20">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">Interactive Skill Map</h3>
      
      <div className="relative w-full h-96 mb-8">
        {/* SVG for connections */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {skillNodes.slice(1).map((node) => (
            <path
              key={`connection-${node.id}`}
              d={getConnectionPath(skillNodes[0], node)}
              stroke="url(#gradient)"
              strokeWidth="0.3"
              fill="none"
              className="opacity-30"
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Skill nodes */}
        {skillNodes.map((node) => (
          <div
            key={node.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group`}
            style={{
              left: `${node.position.x}%`,
              top: `${node.position.y}%`,
            }}
            onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
          >
            <div className={`
              w-16 h-16 rounded-full bg-gradient-to-r ${node.color} 
              flex items-center justify-center shadow-lg 
              transform transition-all duration-300 group-hover:scale-110
              ${selectedNode === node.id ? 'scale-125 shadow-2xl' : ''}
            `}>
              <node.icon className="text-white" size={node.id === 'center' ? 28 : 24} />
            </div>
            <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <span className="text-xs font-medium text-gray-300">{node.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Skill details */}
      {selectedNode && selectedNode !== 'center' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
          {skillNodes.find(n => n.id === selectedNode)?.skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-white/5 border border-gray-600/30 hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <h4 className="font-semibold text-white mb-2">{skill.name}</h4>
              <p className="text-sm text-gray-400 mb-2">{skill.experience}</p>
              {hoveredSkill === skill && skill.projects && (
                <div className="text-xs text-purple-300">
                  Projects: {skill.projects.join(', ')}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InteractiveSkillMap;
