import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  isVisible: boolean;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({
  isVisible,
  scrollToSection
}: HeroSectionProps) => {
  const titles = ['Data Scientist', 'Full Stack Developer', 'Python Developer', 'Data Analyst', 'Power BI Specialist'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-6 relative pt-20">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          <span className="text-white py-0 font-normal my-[90px]">Hi, I'm</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Nishanth Premkumar
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 h-8">
          <span key={currentTitleIndex} className="inline-block animate-fade-in">
            {titles[currentTitleIndex]}
          </span>
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Passionate about Artificial Intelligence, Data Science, and Full-Stack Development.<br />
          Currently pursuing Computer Science with a focus on creating innovative solutions.
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
          <Button variant="outline" size="lg" onClick={() => window.open('https://github.com/Nishanth2480', '_blank')} className="border-2 border-blue-400 w-16 h-16 transition-all duration-300 bg-zinc-950 hover:bg-zinc-800 rounded-full text-neutral-50">
            <Github className="w-8 h-8 text-blue-400 hover:text-white" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.open('https://www.linkedin.com/in/nishanth-premkumar-2177a1260', '_blank')} className="border-2 border-blue-400 text-blue-400 hover:text-white rounded-full w-16 h-16 transition-all duration-300 bg-neutral-50">
            <Linkedin className="w-8 h-8 text-blue-400 hover:text-white" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-blue-400 bg-blue-400/10 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full w-16 h-16 transition-all duration-300" onClick={() => window.open('https://leetcode.com/u/Nishanth2408/', '_blank')}>
            <ExternalLink className="w-8 h-8 text-blue-400 hover:text-white" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-blue-400 bg-blue-400/10 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full w-16 h-16 transition-all duration-300" onClick={() => window.open('https://www.codechef.com/users/nishanth_08', '_blank')}>
            <ExternalLink className="w-8 h-8 text-blue-400 hover:text-white" />
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
          <Button onClick={() => scrollToSection('projects')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full bg-violet-900 hover:bg-violet-800">
            View My Work
          </Button>
          <Button variant="outline" onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full bg-violet-900 hover:bg-violet-800">
            Get In Touch
          </Button>
        </div>

        <div className="mt-8 bg-slate-800/30 rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-gray-300 mb-4 text-lg font-medium">Get in touch with me</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-gray-300">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>nishanth.direct@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+91 7200192408</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
