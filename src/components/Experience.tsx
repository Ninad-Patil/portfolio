import React, { useRef } from "react";
import SectionTitle from "./ui/SectionTitle";
import ExperienceCard from "./ui/ExperienceCard";
import { useInView } from "../hooks/useInView";

const experiences = [
  {
    title: "Software Engineer",
    company: "Freelancer",
    location: "Navi Mumbai",
    period: "Feb 2024 - Present",
    responsibilities: [
      "Developed and maintained single-page applications (SPAs) using React.js, ensuring optimal performance and seamless user experience across devices by implementing React Hooks and dynamic routing with React Router.",
      "Created and launched custom websites for clients, handling both development and deployment processes using AWS.",
      "Assisted in deploying applications on AWS, configuring EC2, and S3 services to ensure high availability and fault tolerance.",
      "Migrated static asset hosting to a CDN, decreasing page load time by 20%.",
    ],
  },
  {
    title: "Software Engineer UI",
    company: "Capgemini",
    location: "Navi Mumbai",
    period: "Dec 2022 - Jan 2024",
    responsibilities: [
      "Designed and developed user-friendly SPAs using React.js, improving user engagement significantly through intuitive UI components.",
      "Worked closely with backend teams to establish efficient communication between the Node.js backend and frontend, ensuring compatibility and reducing bugs.",
      "Optimized application performance by implementing lazy loading, dynamic imports, and minimizing render overhead, achieving a 40% increase in page load speed.",
      "Utilized Lighthouse audits to track performance metrics and implemented best practices, consistently maintaining scores above 90%.",
    ],
  },
];

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, 0.1);

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle>Work Experience</SectionTitle>

        <div
          className={`max-w-4xl mx-auto space-y-10 transition-all duration-1000 transform ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              responsibilities={exp.responsibilities}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
