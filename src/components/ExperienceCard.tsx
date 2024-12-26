import React from 'react';
import { MapPin } from 'lucide-react';
import { colors } from '../theme';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  location,
  achievements,
}) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
      <div className={`relative ${colors.primary.card} rounded-lg shadow-xl p-6 transform hover:-translate-y-1 transition-all duration-300`}>
        <div className="mb-4">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400">{title}</h3>
          <p className={`${colors.secondary.text} font-medium`}>{company}</p>
          <div className="flex items-center justify-between mt-2">
            <span className={`${colors.secondary.text} text-sm`}>{period}</span>
            <span className={`flex items-center ${colors.secondary.text} text-sm`}>
              <MapPin className="w-4 h-4 mr-1 text-indigo-400" />
              {location}
            </span>
          </div>
        </div>
        <ul className="space-y-2 text-gray-300">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start hover:text-indigo-300 transition-colors duration-200">
              <span className="mr-2 text-indigo-400">•</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;