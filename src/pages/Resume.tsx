
import React from 'react';
import { Download, Eye } from 'lucide-react';
import InteractiveTimeline from '../components/InteractiveTimeline';

const Resume = () => {
  const handleView = () => {
    // In a real implementation, this would open the PDF in a new tab
    console.log('Viewing resume...');
  };

  const handleDownload = () => {
    // In a real implementation, this would download the actual PDF
    console.log('Downloading resume...');
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Resume</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Professional summary of my education, experience, and achievements
          </p>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleView}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <Eye className="mr-2" size={20} />
              View PDF
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              <Download className="mr-2" size={20} />
              Download PDF
            </button>
          </div>
        </div>

        {/* Interactive Timeline */}
        <InteractiveTimeline />
      </div>
    </div>
  );
};

export default Resume;
