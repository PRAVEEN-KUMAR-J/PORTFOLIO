import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import SectionHeader from '../ui/SectionHeader';

const About: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section id="about" className="py-16 md:py-24 scroll-mt-20">
      <SectionHeader title="About Me" />
      
      <div className="max-w-4xl mx-auto">
        <div className={`p-8 rounded-2xl ${
          theme === 'dark' 
            ? 'bg-gray-800/50 border border-gray-700' 
            : 'bg-white shadow-lg'
        }`}>
          <div className="prose prose-lg max-w-none">
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a Computer Science and Engineering student with a passion for building innovative solutions 
              using modern technologies. My journey in technology began with a curiosity about how digital 
              systems work, which evolved into a deep interest in software development, web technologies, 
              and IoT applications.
            </p>
            
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mt-4`}>
              As a student at Annamalaiar College of Engineering (Anna University), I've been actively 
              developing my skills in various programming languages and frameworks, always eager to learn 
              and apply new technologies to solve real-world problems. I enjoy the process of turning ideas 
              into functional applications and am constantly looking for ways to improve and optimize my work.
            </p>
            
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mt-4`}>
              My academic background, combined with hands-on project experience, has equipped me with a 
              strong foundation in computer science principles and practical development skills. I'm particularly 
              interested in web development, IoT solutions, and creating intuitive user experiences.
            </p>
            
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mt-4`}>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
              and collaborating with peers on innovative solutions. I believe in continuous learning and am 
              always excited about opportunities to grow both personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;