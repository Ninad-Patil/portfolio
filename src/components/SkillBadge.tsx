import React from 'react';
import { colors } from '../theme';

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span 
      className={`
        px-4 py-2 
        ${colors.badge.background} ${colors.badge.text} 
        rounded-full text-sm font-medium 
        transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20
        transition-all duration-300 ease-in-out
      `}
    >
      {name}
    </span>
  );
};

export default SkillBadge;