import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import { ExternalLink, Check } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  highlights: string[];
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  technologies,
  highlights,
  delay = 0
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, 0.1);

  return (
    <div 
      ref={cardRef}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">{title}</h3>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
        
        <p className="mt-3 text-gray-700 dark:text-gray-300">{description}</p>
        
        <div className="mt-4">
          <h4 className="font-medium mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium mb-2">Highlights</h4>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li 
                key={index} 
                className="flex items-start"
              >
                <Check size={16} className="mr-2 text-green-600 dark:text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;