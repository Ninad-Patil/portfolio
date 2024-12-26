import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon: Icon, title }) => (
  <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
    <Icon className="w-8 h-8 text-blue-400" />
    {title}
  </h2>
);

export default SectionTitle;