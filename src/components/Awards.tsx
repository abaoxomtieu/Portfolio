import { useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import gsap from "gsap";
import { FaTrophy, FaAward } from "react-icons/fa";

const awards = [
  {
    title: "Top 1 Excellent Student in AI",
    organization: "FPTU Summer 2023",
    date: "2023",
    description:
      "Recognized as the top 1 excellent student majoring in AI in the summer of 2023.",
    icon: FaTrophy,
  },
  {
    title: "Champion - AI for Life 2023",
    organization: "FPTU & QAI FSOFT",
    date: "2023",
    description:
      'Champion of the "AI for life 2023" competition organized by FPTU and QAI FSOFT.',
    icon: FaAward,
  },
];

const Awards = () => {
  const sectionRef = useRef<HTMLElement>(null!);
  const timelineRef = useRef<HTMLDivElement>(null);

  useScrollReveal(sectionRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".award-card", {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Awards & Achievements
        </h2>

        <div ref={timelineRef} className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600 dark:bg-blue-400" />

          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={award.title}
                className={`award-card relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400" />

                {/* Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <Icon className="w-8 h-8 text-yellow-500 mr-3" />
                      <div>
                        <h3 className="text-xl font-bold">{award.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {award.organization}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {award.description}
                    </p>
                    <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                      {award.date}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
