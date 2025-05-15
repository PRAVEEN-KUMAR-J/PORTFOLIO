import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:transform hover:scale-105 ${
      theme === 'dark' 
        ? 'bg-gray-800/30 border border-gray-700/50' 
        : 'bg-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/30 backdrop-filter'
    }`}>
      <div className="flex items-center mb-8">
        <div className={`p-4 rounded-2xl ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400' 
            : 'bg-gradient-to-br from-indigo-500/10 to-violet-500/10 text-indigo-600'
        }`}>
          {React.cloneElement(icon as React.ReactElement)}
        </div>
        <h3 className={`text-2xl font-bold ml-4 ${
          theme === 'dark' ? 'text-white' : 'text-indigo-900'
        }`}>
          {title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className={`px-4 py-2 rounded-xl transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50' 
                : 'bg-white/30 hover:bg-white/40 border border-white/50'
            }`}
          >
            <span className={`${
              theme === 'dark' ? 'text-gray-200' : 'text-indigo-900'
            }`}>
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;