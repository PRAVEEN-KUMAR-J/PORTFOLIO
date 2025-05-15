import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import SectionHeader from '../ui/SectionHeader';
import SkillCard from '../ui/SkillCard';
import { Code2, Globe, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={24} />,
      skills: ["Python", "Java", "JavaScript", "TypeScript"]
    },
    {
      title: "Web Development",
      icon: <Globe size={24} />,
      skills: ["HTML", "CSS", "Tailwind CSS", "React.js", "Node.js", "Express.js", "Vite"]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["MongoDB", "SQL"]
    }
  ];
  
  return (
    <section id="skills" className="py-16 md:py-24 scroll-mt-20">
      <SectionHeader title="Skills & Expertise" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills