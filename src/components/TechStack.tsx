import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { skills } from "../data/skills";
import { FaStar } from "react-icons/fa";

const gradientTitle =
  "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent";

const areaColors: Record<string, string> = {
  "Artificial Intelligence": "text-purple-500",
  Software: "text-blue-500",
  MLOps: "text-green-500",
};

const getProficiencyStars = (proficiency: string) => {
  const rating = parseInt(proficiency.split(" - ")[0]);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaStar key={i} className="text-gray-300" />);
    }
  }

  return stars;
};

const TechStack = () => {
  const sectionRef = useRef<HTMLElement>(null!);
  useScrollReveal(sectionRef);

  // Group skills by area
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.area]) {
      acc[skill.area] = [];
    }
    acc[skill.area].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 text-center ${gradientTitle}`}
        >
          Technical Skills
        </h2>
        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([area, areaSkills]) => (
            <div key={area} className="space-y-6">
              <h3 className={`text-2xl font-bold ${areaColors[area]}`}>
                {area}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {areaSkills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name + idx}
                      className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
                    >
                      <div className="mb-4">
                        <Icon className="w-12 h-12 mx-auto group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="font-bold text-lg mb-2">{skill.name}</div>
                      <div className="flex items-center justify-center gap-1">
                        {getProficiencyStars(skill.proficiency)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
