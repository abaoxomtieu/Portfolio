import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-1/2 left-8 -translate-y-1/2 z-50"
    >
      <div className="flex flex-col gap-4">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <motion.a
              key={item.name}
              href={item.href}
              className={`relative group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "bg-white/10 backdrop-blur-lg text-gray-600 hover:bg-blue-500 hover:text-white"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-blue-500 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.a>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default FloatingNav; 