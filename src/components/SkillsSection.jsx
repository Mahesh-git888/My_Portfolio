import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "C/C++", level: 90, category: "programming" },
  { name: "Python", level: 85, category: "programming" },
  { name: "JavaScript", level: 90, category: "programming" },
  { name: "HTML/CSS", level: 95, category: "programming" },

  // Web & Frameworks
  { name: "React", level: 90, category: "web" },
  { name: "Tailwind CSS", level: 90, category: "web" },
  { name: "Node.js", level: 80, category: "web" },
  { name: "Express", level: 75, category: "web" },

  // Databases
  { name: "MongoDB", level: 70, category: "database" },
  { name: "SQL", level: 75, category: "database" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "MATLAB", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },

  // Machine Learning Skills
  { name: "Data Preprocessing", level: 85, category: "ml" },
  { name: "Model Training & Evaluation", level: 80, category: "ml" },
  { name: "Classification & Regression", level: 80, category: "ml" },
  { name: "Feature Engineering", level: 75, category: "ml" }
];

const categories = [
  "all",
  "programming",
  "web",
  "database",
  "tools",
  "ml",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
