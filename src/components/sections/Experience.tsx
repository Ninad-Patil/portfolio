import React from 'react';
import { Briefcase } from 'lucide-react';
import ExperienceCard from '../ExperienceCard';
import SectionTitle from '../SectionTitle';

const Experience: React.FC = () => (
  <section className="mb-20">
    <SectionTitle icon={Briefcase} title="Experience" />
    <div className="space-y-8">
      <ExperienceCard 
        title="Freelancer — Software Engineer"
        company="Self-Employed"
        period="Feb 2024 - Present"
        location="Navi Mumbai"
        achievements={[
          "Developed and maintained single-page applications (SPAs) using React.js",
          "Created and launched custom websites for clients using AWS",
          "Migrated static asset hosting to a CDN, decreasing page load time by 20%"
        ]}
      />
      <ExperienceCard 
        title="Software Engineer"
        company="Capgemini"
        period="Dec 2022 - Jan 2024"
        location="Navi Mumbai"
        achievements={[
          "Designed and developed user-friendly SPAs using React.js",
          "Optimized application performance achieving 40% increase in page load speed",
          "Maintained Lighthouse scores above 90%"
        ]}
      />
    </div>
  </section>
);

export default Experience;