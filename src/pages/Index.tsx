
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ContactSection from '@/components/sections/ContactSection';
import { useScrollTracking } from '@/hooks/useScrollTracking';

const Index = () => {
  const { isVisible, activeSection, scrollToSection } = useScrollTracking();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection isVisible={isVisible} scrollToSection={scrollToSection} />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      
      <footer className="py-8 px-6 border-t border-slate-700 bg-slate-900">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2025 Nishanth Premkumar.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
