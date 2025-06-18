
import React from 'react';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate about technology in all fields, driven by curiosity, and committed to making a difference
          </p>
        </div>

        {/* Education Section */}
        <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-purple-500/20 animate-scale-in">
          <div className="flex items-center mb-6">
            <GraduationCap className="text-purple-400 mr-3" size={32} />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Education</h2>
          </div>
          <div className="space-y-4">
             <div className="border-l-4 border-violet-500 pl-6">
             <h3 className="text-xl font-semibold text-white">CyberSecurity & Development</h3>
             <p className="text-violet-400 font-medium">Self Learning</p>
             <p className="text-gray-400">2024 – now</p>
             <p className="text-gray-300 mt-2">
              Learning cybersecurity and development at my own pace through real-world practice and research.
             </p>
             </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h3>
              <p className="text-blue-400 font-medium">University of Calicut</p>
              <p className="text-gray-400">2021 - 2024</p>
              <p className="text-gray-300 mt-2">
               During my BSc Cs, I gained a foundational understanding of programming concepts, problem-solving methods, and basic software development practices.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Journey */}
        <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-purple-500/20 animate-scale-in">
          <div className="flex items-center mb-6">
            <Briefcase className="text-blue-400 mr-3" size={32} />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Skills in Progress</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-violet-500 pl-6">
              <h3 className="text-xl font-semibold text-white">Cybersecurity</h3>
              <p className="text-gray-300 mt-2">
               Out of all tech fields, cybersecurity grabbed my attention first and continues to drive my learning,its my primary focus within the tech domain.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-white">Web Tech</h3>
              <p className="text-gray-300 mt-2">
               Exploring the world of web tech to create functional, responsive, and secure digital experiences.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-white">Blogging</h3>
              <p className="text-gray-300 mt-2">
                Blogging as a quiet skill in progress...,developed to explore ideas, document learning, and communicate intentionally.
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-white">Fin - Dex</h3>
              <p className="text-gray-300 mt-2">
                Analyzing flows, trends and shifts.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-purple-500/20 animate-scale-in">
          <div className="flex items-center mb-6">
            <Heart className="text-pink-400 mr-3" size={32} />
            <h2 className="text-2xl md:text-3xl font-bold text-white">What Drives Me</h2>
          </div>
          <div className="text-gray-300 space-y-4">
            <p>
              I believe that technology has the power to transform lives and solve complex problems. 
            </p>
            <p>
            I’m curious about how technology shapes the world and how I can learn to use it better. I enjoy discovering new things—whether it’s cybersecurity,Programming, blogging, or understanding patterns in complex systems. Solving problems and turning ideas into something real is what keeps me motivated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
