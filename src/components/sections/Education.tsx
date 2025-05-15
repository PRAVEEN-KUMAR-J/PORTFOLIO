import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import SectionHeader from '../ui/SectionHeader';

const Education: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section id="education" className="py-16 md:py-24 scroll-mt-20">
      <SectionHeader title="Education" />
      
      <div className="max-w-4xl mx-auto">
        <div className={`p-8 rounded-2xl ${
          theme === 'dark' 
            ? 'bg-gray-800/50 border border-gray-700' 
            : 'bg-white shadow-lg'
        }`}>
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <div className={`p-3 rounded-full inline-block ${
                theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
              }`}>
                <GraduationCap className={`h-8 w-8 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </div>
            </div>
            
            <div className="md:w-3/4">
              <h3 className={`text-2xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Bachelor of Engineering in Computer Science and Engineering
              </h3>
              
              <p className={`text-lg font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Annamalaiar College of Engineering, Anna University
              </p>
              
              <div className="flex items-center mb-4">
                <Calendar className={`h-5 w-5 mr-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <span className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  2022 - 2026 (Expected)
                </span>
              </div>
              
              <div className={`mb-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p className="mb-2">Current CGPA: <span className="font-semibold">8.3 / 10</span></p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" style={{ width: '83%' }}></div>
                </div>
              </div>
              
              <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Currently pursuing a degree in Computer Science and Engineering with focus on software development, 
                  algorithms, data structures, and modern web technologies. Actively participating in 
                  technical workshops, hackathons, and project-based learning opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;