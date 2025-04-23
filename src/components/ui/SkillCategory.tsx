import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay?: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  delay = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, 0.1);

  return (
    <div 
      ref={containerRef}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl p-8 transition-all duration-500 transform hover:-translate-y-1 ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <h3 className="text-2xl font-heading font-semibold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 rounded-full text-sm font-medium hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 transition-all duration-300 transform hover:scale-105"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;