import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    type: 'work',
    title: 'Senior AI Engineer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: [
      'Led development of AI-powered analytics platform processing 1M+ data points daily',
      'Implemented machine learning models achieving 95% accuracy in predictions',
      'Mentored junior developers and conducted technical interviews',
    ],
    icon: FaBriefcase,
  },
  {
    type: 'education',
    title: 'Master of Science in Computer Science',
    company: 'Stanford University',
    period: '2020 - 2022',
    description: [
      'Specialized in Artificial Intelligence and Machine Learning',
      'Published research on deep learning optimization techniques',
      'Graduated with distinction',
    ],
    icon: FaGraduationCap,
  },
  {
    type: 'work',
    title: 'Machine Learning Engineer',
    company: 'AI Solutions Ltd.',
    period: '2018 - 2020',
    description: [
      'Developed and deployed ML models for real-time data processing',
      'Reduced processing time by 60% through optimization',
      'Collaborated with cross-functional teams on AI integration',
    ],
    icon: FaBriefcase,
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null!);
  const timelineRef = useRef<HTMLDivElement>(null);

  useScrollReveal(sectionRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience & Education
        </h2>

        <div
          ref={timelineRef}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-400" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={`${exp.type}-${index}`}
                  className="timeline-item relative pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 transform -translate-x-1/2" />

                  {/* Content */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <Icon className={`w-6 h-6 mr-3 ${
                        exp.type === 'work' ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'
                      }`} />
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {exp.period}
                    </div>

                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 