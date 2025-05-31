
import React from 'react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
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
    <footer className="relative mt-20 py-8 bg-transparent backdrop-blur-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Copyright - Far Left */}
          <div className="text-gray-400 text-sm">
            © 2025 M Gokul Krishnan. All rights reserved.
          </div>

          {/* Social Links - Far Right */}
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 p-2 rounded-lg"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
