import { useEffect, useRef, useMemo } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import gsap from "gsap";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null!);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = useMemo(() => [
    { label: "GPA", value: "3.52/4.0" },
    { label: "AI Experience", value: "1 year" },
    { label: "Graduation", value: "10/05/2025" },
    { label: "Major", value: "AI" },
  ], []);

  const gradientTitle = useMemo(() => 
    "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent",
    []
  );

  useScrollReveal(sectionRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          once: true, // Only animate once
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderStats = useMemo(() => (
    <div
      ref={statsRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="stat-item text-center p-6 rounded-lg bg-white/10 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div
            className={`text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`}
          >
            {stat.value}
          </div>
          <div className="text-white">{stat.label}</div>
        </div>
      ))}
    </div>
  ), [stats]);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-8 text-center ${gradientTitle}`}
        >
          About Me
        </h2>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-lg text-white leading-relaxed">
            I am a recent graduate from FPT Quy Nhon University majoring in AI
            (GPA: 3.52/4.0). I graduated on May 10th, 2025, and achieved the
            highest score in my major graduation project. I am passionate about
            Generative AI and have 1 year of experience in this field. I possess
            professional knowledge in AI, Data, and Software, and have a solid
            understanding of the AI and website production process.
          </p>
        </div>

        <div className="mb-8">
          <h3 className={`text-xl font-semibold mb-2 ${gradientTitle}`}>
            Educational Background
          </h3>
          <ul className="list-disc list-inside text-white">
            <li>
              Graduated from FPT Quy Nhon University, majoring in AI (GPA:
              3.52/4.0)
            </li>
            <li>Graduated on May 10th, 2025</li>
            <li>Achieved the highest score in the major graduation project</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className={`text-xl font-semibold mb-2 ${gradientTitle}`}>
            Computer Skills
          </h3>
          <ul className="list-disc list-inside text-white">
            <li>Specialized in Generative AI with 1 year of experience.</li>
            <li>Professional knowledge in AI, Data, and Software.</li>
            <li>
              Understanding and experience in the AI and website production
              process.
            </li>
          </ul>
        </div>

        {renderStats}
      </div>
    </section>
  );
};

export default About;
