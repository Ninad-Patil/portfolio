import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import { Building, MapPin, Calendar } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  delay?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  location,
  period,
  responsibilities,
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
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="flex items-center mt-1 text-gray-600 dark:text-gray-400">
              <Building size={16} className="mr-1" />
              <span>{company}</span>
            </div>
          </div>
          
          <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Calendar size={16} className="mr-1" />
              <span>{period}</span>
            </div>
            <div className="flex items-center mt-1 text-gray-600 dark:text-gray-400">
              <MapPin size={16} className="mr-1" />
              <span>{location}</span>
            </div>
          </div>
        </div>
        
        <ul className="mt-4 space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li 
              key={index} 
              className="flex items-start"
            >
              <span className="inline-block h-1.5 w-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;