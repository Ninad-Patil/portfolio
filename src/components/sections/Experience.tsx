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
          "Developed and maintained single-page applications (SPAs) using React.js, ensuring optimal performance and seamless user experience across devices.",
          "Created and launched custom websites for clients, handling both development and deployment processes using AWS",
          "Migrated static asset hosting to a CDN, decreasing page load time by 20%"
        ]}
      />
      <ExperienceCard 
        title="Software Engineer"
        company="Capgemini"
        period="Dec 2022 - Jan 2024"
        location="Navi Mumbai"
        achievements={[
          "Designed and developed user-friendly SPAs using React.js, improving user engagement significantly through intuitive UI components.",
          "Worked closely with backend teams to establish efficient communication between the Node.js backend and frontend, ensuring compatibility and reducing bugs.",
          "Optimized application performance by implementing lazy loading, dynamic imports, and minimizing render overhead, achieving a 40% increase in page load speed",
         "Utilized Lighthouse audits to track performance metrics and implemented best practices, consistently maintaining scores above 90%."
        ]}
      />
    </div>
  </section>
);

export default Experience;
