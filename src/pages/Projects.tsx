
import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Alumni Management',
      description: 'Developed a system to streamline the management and engagement of alumni networks. The project included features such as alumni registration, event notifications, and communication tools to foster connections between alumni and the institution. Focused on creating an intuitive user interface, efficient database management, and secure handling of alumni data. This project enhanced my skills in programming, database design, and system integration.',
      technologies: ['Python', 'Django'],
      category: 'Project',
      image: '/placeholder.svg',
      github: 'https://github.com/Gokul007GiT',
      demo: '#'
    },
    
   
    {
      title: 'Portfolio Website',
      description: 'Its a Portfolio of My Own . 90% by Prompting , remaining by my own Tweaks and Tunes.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      category: 'Portfolio',
      image: '/Portfolio.jpg',
      github: 'https://github.com/Gokul007GiT/GokuFolio7/tree/master',
      demo: 'https://gokulfolio.vercel.app/'
    }
    
    
  ];

  const categories = ['All', 'Portfolio','Project'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my work across all Domains.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 animate-scale-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-purple-500/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group backdrop-blur-md bg-white/5 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={18} className="mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center animate-fade-in">
          <a
            href="https://github.com/Gokul007GiT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <Github className="mr-2" size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
