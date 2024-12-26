import React from 'react';
import { Award } from 'lucide-react';
import SkillBadge from '../SkillBadge';
import SectionTitle from '../SectionTitle';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, delay }) => (
  <div className={`animate-slideUp`} style={{ animationDelay: `${delay}ms` }}>
    <h3 className="text-lg font-semibold mb-2 text-indigo-300">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <SkillBadge key={index} name={skill} />
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => (
  <section className="mb-20">
    <SectionTitle icon={Award} title="Technical Skills" />
    <div className="space-y-8">
      <SkillCategory 
        title="Languages" 
        skills={["JavaScript", "HTML/CSS", "SQL"]} 
        delay={100}
      />
      <SkillCategory 
        title="Frameworks" 
        skills={["Node.js", "Express.js", "React"]} 
        delay={200}
      />
      <SkillCategory 
        title="Developer Tools" 
        skills={["Git", "Docker", "VS Code", "AWS", "PostgreSQL"]} 
        delay={300}
      />
    </div>
  </section>
);

export default Skills;