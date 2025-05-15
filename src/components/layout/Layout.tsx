import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' 
      ? 'bg-gray-900 text-white' 
      : 'bg-gradient-to-br from-blue-50/80 via-indigo-50/90 to-violet-50/80 text-gray-900'
    } transition-colors duration-300`}>
      <div className="relative">
        {theme === 'light' && (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(79,70,229,0.1),rgba(99,102,241,0.15))] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.4),rgba(255,255,255,0.2))] backdrop-blur-[100px] pointer-events-none"></div>
          </>
        )}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Header />
          <main className="py-10">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;