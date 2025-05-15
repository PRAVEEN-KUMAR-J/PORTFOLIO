import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const { theme } = useTheme();
  
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r ${
        theme === 'dark' ? 'from-blue-400 to-purple-500' : 'from-blue-500 to-purple-600'
      }`}>
        {title}
      </h2>
      <div className="flex justify-center">
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeader;