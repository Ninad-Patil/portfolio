import React, { useRef } from 'react';
import SectionTitle from './ui/SectionTitle';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, 0.1);

  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-800"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <div 
          className={`max-w-3xl mx-auto transition-all duration-1000 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I'm a Software Engineer with a passion for creating efficient, user-friendly applications. I specialize in frontend development with React.js and have experience with full-stack development using Node.js and various databases.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            My journey in software development began during my education at Pillai College of Engineering, where I completed my Bachelor's in Information Technology. Since then, I've worked professionally at Capgemini and as a freelancer, developing web applications that prioritize performance and user experience.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I enjoy solving complex problems and continuously learning new technologies to expand my skill set. When I'm not coding, you can find me exploring new tech, contributing to open-source projects, or optimizing applications for better performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;