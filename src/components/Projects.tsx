import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { experiences } from "../data/experience";

const gradientTitle =
  "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null!);
  useScrollReveal(sectionRef);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 text-center ${gradientTitle}`}
        >
          Featured Projects
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-40" />
          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={exp.title}
                  className={`relative flex flex-col md:flex-row items-center md:items-stretch ${
                    isLeft ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 border-4 border-white z-10" />
                  {/* Card */}
                  <div
                    className={`md:w-1/2 w-full ${
                      isLeft
                        ? "md:pr-16 md:text-right"
                        : "md:pl-16 md:text-left"
                    } z-20`}
                  >
                    <div className="bg-white/10 dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`font-bold text-lg ${gradientTitle}`}>
                          {exp.title}
                        </span>
                        <span className="ml-2 text-xs text-white/70 bg-blue-500/20 px-2 py-1 rounded-full">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="text-white text-sm mb-2 opacity-80">
                        {exp.position}
                        {exp.teamSize ? ` | Team: ${exp.teamSize}` : ""}
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold text-white">
                          Responsibilities:
                        </span>
                        <ul className="list-disc list-inside text-white/90 text-xs mt-1">
                          {exp.responsibilities.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold text-white">
                          Objectives:
                        </span>
                        <ul className="list-disc list-inside text-white/90 text-xs mt-1">
                          {exp.objectives.map((o, i) => (
                            <li key={i}>{o}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-2 flex flex-wrap gap-2">
                        {exp.techStack.map((tech, i) => {
                          const Icon = tech.icon;
                          return (
                            <span
                              key={tech.name + i}
                              className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full text-xs text-white"
                            >
                              <Icon className="w-4 h-4" /> {tech.name}
                            </span>
                          );
                        })}
                      </div>
                      {exp.awards && exp.awards.length > 0 && (
                        <div className="mb-2">
                          <span className="font-semibold text-yellow-400">
                            Awards:
                          </span>
                          <ul className="list-disc list-inside text-yellow-200 text-xs mt-1">
                            {exp.awards.map((a, i) => (
                              <li key={i}>{a}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.links.map((link, i) =>
                          link.url ? (
                            <a
                              key={link.label + i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-400 hover:underline bg-blue-500/10 px-2 py-1 rounded-full"
                            >
                              {link.label}
                            </a>
                          ) : (
                            <span
                              key={link.label + i}
                              className="text-xs text-white/60 bg-gray-700/40 px-2 py-1 rounded-full"
                            >
                              {link.label}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
