import React from 'react';
interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}
const Navigation = ({
  activeSection,
  scrollToSection
}: NavigationProps) => {
  const navItems = [{
    id: 'hero',
    label: 'Home'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'skills',
    label: 'Skills'
  }, {
    id: 'experience',
    label: 'Experience'
  }, {
    id: 'projects',
    label: 'Projects'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  return <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/90 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto py-4 px-[24px]">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            Nishanth
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`transition-all duration-300 hover:text-blue-400 ${activeSection === item.id ? 'text-blue-400' : 'text-white/70'}`}>
                {item.label}
              </button>)}
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;