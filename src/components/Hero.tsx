import { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiTypescript, SiReact, SiTailwindcss, SiPython, SiTensorflow, SiDocker } from 'react-icons/si';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  const techIcons = useMemo(() => [
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: SiReact, name: 'React' },
    { icon: SiTailwindcss, name: 'Tailwind' },
    { icon: SiPython, name: 'Python' },
    { icon: SiTensorflow, name: 'TensorFlow' },
    { icon: SiDocker, name: 'Docker' },
  ], []);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });

    tl.from(titleRef.current, {
      opacity: 1,
      y: 50,
      duration: 1,
    })
      .from(subtitleRef.current, {
        opacity: 1,
        y: 30,
        duration: 0.8,
      }, '-=0.5')
      .from(Array.from(iconsRef.current?.children || []), {
        opacity: 1,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
      }, '-=0.3');

    return () => {
      tl.kill();
    };
  }, []);

  const renderTechIcons = useMemo(() => (
    <div className="absolute inset-0 pointer-events-none z-0">
      {techIcons.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <div
            key={tech.name}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + index}s infinite ease-in-out`,
              willChange: 'transform', // Optimize animation performance
            }}
          >
            <Icon className="w-12 h-12 text-gray-300" />
          </div>
        );
      })}
    </div>
  ), [techIcons]);

  const renderSocialLinks = useMemo(() => (
    <div
      ref={iconsRef}
      className="flex justify-center space-x-6"
    >
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-black transition-colors drop-shadow"
      >
        <FaGithub className="w-6 h-6" />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-black transition-colors drop-shadow"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>
      <a
        href="mailto:your.email@example.com"
        className="text-white hover:text-black transition-colors drop-shadow"
      >
        <FaEnvelope className="w-6 h-6" />
      </a>
    </div>
  ), []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {renderTechIcons}

      {/* Light overlay for readability */}
      <div className="absolute inset-0 z-10" />

      {/* Main content */}
      <div className="text-center z-20 relative">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 mb-4 drop-shadow-lg"
        >
          ABAOXOMTIEU
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white mb-8 drop-shadow"
        >
          AI Engineer & Full-Stack Developer
        </p>

        {renderSocialLinks}
      </div>
    </section>
  );
};

export default Hero; 