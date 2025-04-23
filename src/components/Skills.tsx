import React, { useRef } from 'react';
import SectionTitle from './ui/SectionTitle';
import SkillCategory from './ui/SkillCategory';
import { useInView } from '../hooks/useInView';

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "HTML/CSS", "SQL"]
  },
  {
    title: "Frameworks",
    skills: ["Node.js", "Express.js", "React"]
  },
  {
    title: "Developer Tools",
    skills: ["Git", "Docker", "VS Code", "AWS", "PostgreSQL"]
  }
];

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, 0.1);

  return (
    <section 
      id="skills" 
      className="py-20 bg-gray-50 dark:bg-gray-900"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle>Technical Skills</SectionTitle>
        
        <div 
          className={`max-w-4xl mx-auto grid md:grid-cols-3 gap-8 transition-all duration-1000 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;