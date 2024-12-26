import React from 'react';
import { colors } from './theme';
import Hero from './components/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';

const App: React.FC = () => {
  return (
    <div className={`min-h-screen ${colors.primary.background} ${colors.primary.text}`}>
      <Hero />
      
      <main className="container mx-auto px-6 py-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
      </main>

      <footer className="bg-gray-900/50 backdrop-blur-sm text-white py-8 mt-20 border-t border-indigo-500/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-indigo-300/80">© 2024 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;