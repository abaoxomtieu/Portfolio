import { useEffect, useRef } from "react";
import gsap from "gsap";
// Components
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Awards from "../components/Awards";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import SectionNavBar from "../components/SectionNavBar";

const Home = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = sectionsRef.current?.children;
    if (!sections) return;

    gsap.utils.toArray(sections).forEach((section: any) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div ref={sectionsRef} className="space-y-24">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <TechStack />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="awards">
          <Awards />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;
