import React, { useRef } from "react";
import SectionTitle from "./ui/SectionTitle";
import ProjectCard from "./ui/ProjectCard";
import { useInView } from "../hooks/useInView";

const projects = [
  {
    title: "React Playground",
    description: "built with React and offers interactive games.",
    link: "https://gamesportfolioo.netlify.app/",
    technologies: ["React"],
    highlights: [
      "Designed and developed an interactive web-based gaming platform with three games: Snake, Memory Match, and Bishop Movement Tracker.",
      "Implemented dynamic grid rendering and responsive gameplay using React.js and state management hooks.",
      "Demonstrated algorithmic problem-solving through features like real-time snake movement, memory pair matching, and chess bishop traversal.",
    ],
  },
];

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, 0.1);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle>Projects</SectionTitle>

        <div
          className={`max-w-6xl mx-auto grid md:grid-cols-1 gap-8 transition-all duration-1000 transform ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              technologies={project.technologies}
              highlights={project.highlights}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
