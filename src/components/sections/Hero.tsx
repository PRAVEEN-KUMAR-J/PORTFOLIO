import React, { useEffect, useState } from 'react';
import { ChevronDown, Mail, Phone, Download } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, rgba(109, 40, 217, 0.1) 25%, rgba(17, 24, 39, 0) 50%)'
            : 'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.15) 0%, rgba(99, 102, 241, 0.1) 25%, rgba(249, 250, 251, 0) 50%)'
        }}
      >
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
      </div>

      <div 
        className={`relative z-10 text-center px-4 transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto relative">
            <div 
              className={`absolute inset-0 rounded-full animate-pulse ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                  : 'bg-gradient-to-r from-indigo-400/20 to-violet-400/20'
              }`}
              style={{ filter: 'blur(10px)' }}
            ></div>
            <img 
              src="https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Praveen Kumar J" 
              className={`rounded-full object-cover w-full h-full relative z-10 border-4 ${
                theme === 'dark' ? 'border-gray-800' : 'border-white/50'
              }`}
            />
          </div>
        </div>
        
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
          theme === 'dark' ? 'from-blue-400 to-purple-500' : 'from-indigo-500 to-violet-600'
        }`}>
          Praveen Kumar J
        </h1>
        
        <h2 className={`text-xl md:text-2xl font-medium mb-6 ${
          theme === 'dark' ? 'text-gray-300' : 'text-indigo-900'
        }`}>
          Computer Science Engineering Student
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="mailto:jarvigpraveenkumar@gmail.com"
            className={`flex items-center px-6 py-3 rounded-full ${
              theme === 'dark' 
                ? 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-300'
                : 'bg-white/30 hover:bg-white/40 text-indigo-900 backdrop-blur-md'
            } transition-all duration-300`}
          >
            <Mail className="w-5 h-5 mr-2" />
            jarvigpraveenkumar@gmail.com
          </a>
          <a 
            href="tel:+917448641788"
            className={`flex items-center px-6 py-3 rounded-full ${
              theme === 'dark' 
                ? 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-300'
                : 'bg-white/30 hover:bg-white/40 text-indigo-900 backdrop-blur-md'
            } transition-all duration-300`}
          >
            <Phone className="w-5 h-5 mr-2" />
            +91 7448641788
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <a 
            href="#about" 
            className={`px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25'
                : 'bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white shadow-lg shadow-indigo-500/25'
            }`}
          >
            Explore My Work
          </a>
          <a 
            href="#contact" 
            className={`px-8 py-4 rounded-full font-medium border-2 backdrop-blur-md transition-all duration-300 transform hover:scale-105 ${
              theme === 'dark' 
                ? 'border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white' 
                : 'border-white/30 hover:border-white/50 text-indigo-900 hover:text-indigo-900'
            }`}
          >
            Get In Touch
          </a>
          <a 
            href="/PraveenKumarJ'sResume.pdf" 
            download
            className={`px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white shadow-lg shadow-green-500/25'
                : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/25'
            }`}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 z-10 animate-bounce">
        <a 
          href="#about" 
          className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-indigo-600 hover:text-indigo-900'} transition-colors duration-200`}
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;