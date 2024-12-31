import React from 'react';
import { BookOpen } from 'lucide-react';
import ProjectCard from '../ProjectCard';
import SectionTitle from '../SectionTitle';

const Projects: React.FC = () => (
  <section className="mb-20">
    <SectionTitle icon={BookOpen} title="Projects" />
    <div className="grid md:grid-cols-2 gap-8">
      <ProjectCard 
        title="React Playground –built with React and offers interactive games.  "
        description="A workflow automation platform allowing users to create, trigger, and execute workflows."
        technologies={["React",]}
        achievements={[
          "Designed and developed an interactive web-based gaming platform with three games: Snake, Memory Match, and Bishop Movement Tracker.",
          "Implemented dynamic grid rendering and responsive gameplay using React.js and state management hooks.",
          "Demonstrated algorithmic problem-solving through features like real-time snake movement, memory pair matching, and chess bishop traversal."
        ]}
      />
    </div>
  </section>
);

export default Projects;
