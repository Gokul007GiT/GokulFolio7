
import React from 'react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const Home = () => {
  const roles = ['Cybersecurity', 'Networking'];

  const contactLinks = [
    {
      icon: Mail,
      href: 'mailto:gokulkrishcr8@gmail.com',
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/gokulkrishnan7/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/Gokul007GiT',
      label: 'GitHub'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/g_o_k_u_ll_/',
      label: 'Instagram'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4 pt-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6 animate-fade-in">
            {/* Greeting with waving hand */}
            <div className="flex items-center justify-center space-x-3 text-4xl md:text-5xl">
              <span className="text-white font-light">Hiiii</span>
              <span className="text-6xl animate-wave">👋🏻</span>
              <span className="text-white font-light">I’m</span>
            </div>
            
            {/* Name with I'm positioned to the left */}
            <div className="flex items-baseline justify-center space-x-4">
              <span className="text-2xl md:text-3xl text-gray-300 font-light"></span>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              GOKUL 
              </h1>
            </div>
            
            {/* Dynamic roles */}
            <div className="text-xl md:text-3xl text-gray-300 h-12">
              <AnimatedText texts={roles} className="text-purple-400 font-semibold" />
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Let me introduce myself - Glass style */}
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-12 relative">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                A bit about me
              </span>
            </h2>
          </div>

          {/* Introduction text - Glass transparent style */}
          <div className="rounded-2xl p-8 animate-scale-in bg-transparent">
            <p className="text-xl text-gray-200 leading-relaxed text-center max-w-4xl mx-auto font-light">
             I'm someone who loves learning and discovering new things every day,Curiosity drives me to explore different fields and understand how things connect.
             I pay attention to details and enjoy figuring out solutions to challenges.
             I'm always open to new ideas and eager to grow in various directions.
            </p>
          </div>

          {/* Get In Touch Section - Glass transparent style */}
          <div className="rounded-2xl p-8 animate-scale-in bg-transparent">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h3>
            
            <div className="flex justify-center space-x-6">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon group relative p-3 rounded-2xl glass-morphism border border-white/10 hover:border-purple-400/60 transition-all duration-500 transform hover:scale-125 hover:rotate-6 overflow-hidden"
                  aria-label={link.label}
                >
                  {/* Multiple glow layers */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-cyan-500/40 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/60 via-blue-400/60 to-cyan-400/60 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Slower animated border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500 animate-slow-ping"></div>
                  
                  {/* Icon with enhanced glow */}
                  <div className="relative z-10">
                    <link.icon 
                      size={24} 
                      className="text-gray-300 group-hover:text-white transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]" 
                    />
                  </div>
                  
                  {/* Slower sparkle effect overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full animate-slow-ping"></div>
                    <div className="absolute bottom-1 left-1 w-1 h-1 bg-cyan-400 rounded-full animate-slow-ping animation-delay-600"></div>
                    <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-purple-400 rounded-full animate-slow-ping animation-delay-800"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
