import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import { BarChart3, Radio, MessageSquare } from 'lucide-react';

const Projects: React.FC = () => {
  const { theme } = useTheme();
  
  const projects = [
    {
      title: "Smart Attendance System",
      description: "Web-based attendance system using HTML, CSS, JavaScript with backend integration. The system automates the attendance tracking process, making it more efficient and reliable compared to traditional methods.",
      icon: <BarChart3 size={24} />,
      tags: ["HTML", "CSS", "JavaScript", "Backend Integration"],
      link: "#"
    },
    {
      title: "Blind Stick",
      description: "Smart stick for visually impaired with sensors and IoT devices for obstacle detection. This project uses ultrasonic sensors and haptic feedback to help visually impaired people navigate their surroundings safely.",
      icon: <Radio size={24} />,
      tags: ["IoT", "Sensors", "Embedded Systems"],
      link: "#"
    },
    {
      title: "Messaging Dashboard",
      description: "Customized messaging dashboard for client communication management. This dashboard allows businesses to manage customer communications efficiently with features like message scheduling, templates, and analytics.",
      icon: <MessageSquare size={24} />,
      tags: ["React.js", "Node.js", "UI/UX Design"],
      link: "#"
    }
  ];
  
  return (
    <section id="projects" className="py-16 md:py-24 scroll-mt-20">
      <SectionHeader title="Projects" />
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              icon={project.icon}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;