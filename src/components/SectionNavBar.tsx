import { FaUser, FaBrain, FaTools, FaProjectDiagram, FaAward, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const sections = [
  { id: 'hero', label: 'Hero', icon: FaUser },
  { id: 'about', label: 'About', icon: FaBrain },
  { id: 'skills', label: 'Skills', icon: FaTools },
  { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
  { id: 'awards', label: 'Awards', icon: FaAward },
  { id: 'experience', label: 'Experience', icon: FaBriefcase },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const SectionNavBar = () => (
  <nav className="fixed top-0 left-0 h-screen z-50 flex flex-col justify-center gap-4 bg-white/80 dark:bg-gray-900/80 rounded-r-2xl p-3 shadow-lg border-r border-gray-200 dark:border-gray-700">
    {sections.map((section) => {
      const Icon = section.icon;
      return (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="flex flex-col items-center group focus:outline-none"
          title={section.label}
        >
          <Icon className="w-6 h-6 text-blue-500 group-hover:text-pink-500 transition-colors" />
          <span className="text-xs mt-1 text-gray-700 dark:text-gray-200 group-hover:text-pink-500 hidden md:block">
            {section.label}
          </span>
        </button>
      );
    })}
  </nav>
);

export default SectionNavBar; 