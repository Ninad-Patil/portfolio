import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { colors } from '../theme';

const Hero: React.FC = () => {
  return (
    <header className={`bg-gradient-to-r ${colors.primary.accent} relative overflow-hidden`}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-gray-900/80"></div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="animate-fadeIn relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>
            <img
              src="https://avatars.githubusercontent.com/u/72431205?s=400&u=2edfdfd4bfb9228763af439e2f4ad7aa4000c16c&v=4?w=600&h=600&q=80"
              alt="Profile"
              className="relative w-48 h-48 rounded-full border-4 border-indigo-500/20 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="animate-slideUp text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400 hover:from-indigo-100 hover:to-indigo-300 transition-colors">
              Ninad Patil
            </h1>
            <p className="text-xl mb-8 text-indigo-200/80 animate-fadeIn delay-200">Software Engineer</p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
};

const SocialLinks: React.FC = () => (
  <div className="flex gap-4 animate-fadeIn delay-300 justify-center md:justify-start">
    <SocialLink href="https://github.com/Ninad-Patil" icon={Github} />
    <SocialLink href="https://www.linkedin.com/in/ninad-patil-35a0661b0/" icon={Linkedin} />
    <SocialLink href="mailto:ninad.patil198@gmail.com" icon={Mail} />
  </div>
);

const SocialLink: React.FC<{ href: string; icon: React.ElementType }> = ({ href, icon: Icon }) => (
  <a 
    href={href} 
    className="transform hover:scale-110 text-indigo-300 hover:text-indigo-200 transition-all duration-300 ease-in-out"
  >
    <Icon className="w-6 h-6" />
  </a>
);

export default Hero;
