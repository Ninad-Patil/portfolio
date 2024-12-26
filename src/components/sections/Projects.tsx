import React from 'react';
import { BookOpen } from 'lucide-react';
import ProjectCard from '../ProjectCard';
import SectionTitle from '../SectionTitle';

const Projects: React.FC = () => (
  <section className="mb-20">
    <SectionTitle icon={BookOpen} title="Projects" />
    <div className="grid md:grid-cols-2 gap-8">
      <ProjectCard 
        title="Zap Workflow Automation System"
        description="A workflow automation platform allowing users to create, trigger, and execute workflows."
        technologies={["React", "Node.js", "PostgreSQL", "Prisma", "Docker"]}
        achievements={[
          "Built scalable backend with Node.js and Prisma",
          "Implemented secure JWT authentication",
          "Designed responsive frontend in React"
        ]}
      />
    </div>
  </section>
);

export default Projects;