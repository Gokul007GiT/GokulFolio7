
import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  const loadingStages = [
    'Initializing...',
    'Loading Stars...',
    'Rendering Universe...',
    'Preparing Experience...',
    'Almost Ready...'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update loading text based on progress
        const stageIndex = Math.floor((newProgress / 100) * loadingStages.length);
        if (stageIndex < loadingStages.length) {
          setLoadingText(loadingStages[stageIndex]);
        }

        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center space-y-8">
        {/* Logo/Brand */}
        <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
          M Gokul Krishnan
        </div>

        {/* Loading animation */}
        <div className="space-y-4">
          <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="text-gray-300 text-sm animate-fade-in">
            {loadingText}
          </div>
          
          <div className="text-purple-400 font-semibold">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Spinning loader */}
        <div className="flex justify-center">
          <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
