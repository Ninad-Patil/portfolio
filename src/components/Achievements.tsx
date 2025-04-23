import React, { useRef } from "react";
import SectionTitle from "./ui/SectionTitle";
import { Trophy } from "lucide-react";
import { useInView } from "../hooks/useInView";

const achievements = [
  {
    title: "TCS CodeVita Finalist",
    description: "Ranked under 5000 out of 1 lakh+ participants",
  },
  {
    title: "Open Source Contributor",
    description:
      "Active contributor to open-source projects on GitHub, collaborating with global developer community.",
  },
];

const Achievements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, 0.1);

  return (
    <section
      id="achievements"
      className="py-20 bg-white dark:bg-gray-800"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle>Achievements</SectionTitle>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid md:grid-cols-1 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
