import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, tags, link }) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className={`p-6 rounded-2xl h-full flex flex-col transition-all duration-300 hover:transform hover:scale-105 ${
        theme === 'dark' 
          ? 'bg-gray-800/50 border border-gray-700 hover:border-blue-500/50' 
          : 'bg-white shadow-lg hover:shadow-xl'
      }`}
    >
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-full mr-3 ${
          theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
        }`}>
          {React.cloneElement(icon as React.ReactElement, { 
            className: theme === 'dark' ? 'text-blue-400' : 'text-blue-600' 
          })}
        </div>
        <h3 className={`text-xl font-bold ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
      </div>
      
      <p className={`mb-6 flex-grow ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
      }`}>
        {description}
      </p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${
                theme === 'dark' 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <a 
        href={link} 
        className={`inline-flex items-center ${
          theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
        } transition-colors duration-200`}
      >
        View Project <ExternalLink className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
};

export default ProjectCard;