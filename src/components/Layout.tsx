
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import StarfieldBackground from './StarfieldBackground';
import SubtleStarEffect from './SubtleStarEffect';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background effects */}
      <StarfieldBackground />
      <SubtleStarEffect />
      
      {/* Main content */}
      <div className="relative z-20">
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
