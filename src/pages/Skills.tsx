
import React, { useState } from 'react';
import { Code, Shield, TrendingUp, Lightbulb, Palette, Database, Terminal, Users } from 'lucide-react';

const Skills = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 'programming',
      icon: Code,
      title: 'Programming & Development',
      color: 'purple',
      useCase: 'Building scalable web applications and automation tools',
      projects: ['Portfolio Website', 'E-commerce Platform', 'Trading Bot'],
      experience: '3+ years',
      skills: ['Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'Git/GitHub']
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity',
      color: 'blue',
      useCase: 'Protecting digital assets and conducting security assessments',
      projects: ['Network Penetration Testing', 'Web App Security Audit', 'Vulnerability Assessment'],
      experience: '2+ years',
      skills: ['Kali Linux', 'Burp Suite', 'Nmap', 'Wireshark', 'Metasploit', 'OSINT']
    },
    {
      id: 'trading',
      icon: TrendingUp,
      title: 'Trading & Finance',
      color: 'green',
      useCase: 'Analyzing markets and developing trading strategies',
      projects: ['Technical Analysis Dashboard', 'Risk Management System', 'Portfolio Tracker'],
      experience: '3+ years',
      skills: ['Technical Analysis', 'Risk Management', 'Chart Patterns', 'Options Trading', 'Cryptocurrency', 'Market Research']
    },
    {
      id: 'entrepreneurship',
      icon: Lightbulb,
      title: 'Entrepreneurship',
      color: 'yellow',
      useCase: 'Leading projects and driving innovation in tech startups',
      projects: ['Startup Consulting', 'Product Development', 'Team Management'],
      experience: '2+ years',
      skills: ['Business Strategy', 'Project Management', 'Leadership', 'Innovation', 'Problem Solving', 'Strategic Planning']
    },
    {
      id: 'frontend',
      icon: Palette,
      title: 'Frontend Development',
      color: 'pink',
      useCase: 'Creating beautiful and responsive user interfaces',
      projects: ['React Applications', 'UI/UX Design', 'Mobile-First Design'],
      experience: '3+ years',
      skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design', 'TypeScript']
    },
    {
      id: 'backend',
      icon: Database,
      title: 'Backend Development',
      color: 'indigo',
      useCase: 'Building robust server-side applications and APIs',
      projects: ['REST APIs', 'Database Design', 'Cloud Deployment'],
      experience: '2+ years',
      skills: ['Node.js', 'Firebase', 'MongoDB', 'API Development', 'Cloud Services', 'Authentication']
    },
    {
      id: 'tools',
      icon: Terminal,
      title: 'Tools & Technologies',
      color: 'cyan',
      useCase: 'Streamlining development workflow and productivity',
      projects: ['DevOps Pipeline', 'Version Control', 'Testing Frameworks'],
      experience: '3+ years',
      skills: ['Git', 'VS Code', 'Postman', 'Docker', 'Linux', 'Chrome DevTools']
    },
    {
      id: 'soft',
      icon: Users,
      title: 'Soft Skills',
      color: 'orange',
      useCase: 'Effective communication and collaboration in teams',
      projects: ['Team Leadership', 'Client Communication', 'Mentorship'],
      experience: '4+ years',
      skills: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Time Management', 'Critical Thinking']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'border-purple-500/30 hover:border-purple-400/60',
      blue: 'border-blue-500/30 hover:border-blue-400/60',
      green: 'border-green-500/30 hover:border-green-400/60',
      yellow: 'border-yellow-500/30 hover:border-yellow-400/60',
      pink: 'border-pink-500/30 hover:border-pink-400/60',
      indigo: 'border-indigo-500/30 hover:border-indigo-400/60',
      cyan: 'border-cyan-500/30 hover:border-cyan-400/60',
      orange: 'border-orange-500/30 hover:border-orange-400/60'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  const getIconColor = (color: string) => {
    const colors = {
      purple: 'text-purple-400',
      blue: 'text-blue-400',
      green: 'text-green-400',
      yellow: 'text-yellow-400',
      pink: 'text-pink-400',
      indigo: 'text-indigo-400',
      cyan: 'text-cyan-400',
      orange: 'text-orange-400'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  const getGradientColor = (color: string) => {
    const colors = {
      purple: 'from-purple-500/20 to-purple-600/20',
      blue: 'from-blue-500/20 to-blue-600/20',
      green: 'from-green-500/20 to-green-600/20',
      yellow: 'from-yellow-500/20 to-yellow-600/20',
      pink: 'from-pink-500/20 to-pink-600/20',
      indigo: 'from-indigo-500/20 to-indigo-600/20',
      cyan: 'from-cyan-500/20 to-cyan-600/20',
      orange: 'from-orange-500/20 to-orange-600/20'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hover over the cards to explore my expertise and experience
          </p>
        </div>

        {/* Gamified Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="relative w-full h-64 perspective-1000"
              onMouseEnter={() => setFlippedCard(category.id)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flippedCard === category.id ? 'rotate-y-180' : ''
              }`}>
                {/* Front Side */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl backdrop-blur-md bg-gradient-to-br ${getGradientColor(category.color)} border ${getColorClasses(category.color)} p-6 flex flex-col items-center justify-center text-center`}>
                  <category.icon className={`${getIconColor(category.color)} mb-4`} size={48} />
                  <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-300">Hover to explore</p>
                </div>

                {/* Back Side */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl backdrop-blur-md bg-gradient-to-br ${getGradientColor(category.color)} border ${getColorClasses(category.color)} p-4 flex flex-col justify-between text-center`}>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">Use Case</h4>
                    <p className="text-xs text-gray-300 mb-3 leading-relaxed">{category.useCase}</p>
                    
                    <h4 className="text-sm font-bold text-white mb-2">Key Projects</h4>
                    <ul className="text-xs text-gray-300 mb-3 space-y-1">
                      {category.projects.slice(0, 2).map((project, idx) => (
                        <li key={idx}>• {project}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`text-xs font-semibold ${getIconColor(category.color)}`}>
                    {category.experience}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-purple-500/20 animate-scale-in">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Technical Skills Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skillCategories.slice(0, 6).map((category) => (
              <div key={category.id} className="text-center">
                <category.icon className={`${getIconColor(category.color)} mx-auto mb-2`} size={24} />
                <h4 className="text-sm font-semibold text-white mb-1">{category.title.split(' ')[0]}</h4>
                <div className="flex flex-wrap justify-center gap-1">
                  {category.skills.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
