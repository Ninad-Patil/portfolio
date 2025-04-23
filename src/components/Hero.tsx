import React, { useRef } from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, 0.1);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 dark:from-gray-900 dark:via-indigo-950 dark:to-violet-950 animate-gradient bg-300% -z-10" />
      
      <div 
        className={`container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12 transition-all duration-1000 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="md:w-1/2 space-y-8">
          <div className="space-y-4">
            <p className="text-blue-600 dark:text-blue-400 font-medium font-heading tracking-wide">Hello, my name is</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
              Ninad Patil
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 font-medium font-heading">
              Software Engineer
            </h2>
          </div>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
            I craft exceptional digital experiences with a focus on performance,
            user experience, and clean code. Specializing in React.js and
            full-stack development.
          </p>
          
          <div className="flex space-x-4 pt-2">
            <a
              href="https://github.com/Ninad-Patil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ninad-patil-35a0661b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ninad.patil198@gmail.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="pt-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 font-medium tracking-wide inline-block"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in touch
            </a>
          </div>
        </div>
        
        <div className="md:w-2/5">
          <div className="relative animate-float">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform rotate-3">
              <img
                src="https://avatars.githubusercontent.com/u/72431205?s=400&u=2edfdfd4bfb9228763af439e2f4ad7aa4000c16c&v=4?w=600&h=600&q=80"
                alt="Ninad Patil"
                className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
              />
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 dark:from-blue-600 dark:via-indigo-600 dark:to-violet-600 rounded-3xl blur-3xl opacity-20 animate-pulse-slow transform rotate-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;