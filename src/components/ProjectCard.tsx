import React from 'react';
import { colors } from '../theme';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  achievements,
}) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
      <div className={`relative ${colors.primary.card} rounded-lg shadow-xl p-6 transform hover:-translate-y-1 transition-all duration-300`}>
        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400">{title}</h3>
        <p className={`${colors.secondary.text} mb-4`}>{description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-3 py-1 ${colors.badge.background} ${colors.badge.text} rounded-full text-sm transform hover:scale-105 transition-transform duration-200`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {achievements.map((achievement, index) => (
            <li key={index} className="hover:text-indigo-300 transition-colors duration-200">{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;