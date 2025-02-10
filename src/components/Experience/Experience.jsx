import React from "react";
import { motion } from "framer-motion";
import './Timeline.css';

const experiences = [
  {
    company: "Automated Business Solutions",
    title: "Junior Technical Solutions Engineer",
    duration: "Nov 2021 - Aug 2024",
    description: "Involved designing and implementing automation workflows that improved operational efficiency for small businesses. This included integrating cloud solutions to optimize system scalability and reliability, while cloud-based collaboration tools were leveraged to enhance cross-team functionality. Gaining experience in managing cloud infrastructure, and optimizing business workflows to reduce completion time improving overall efficiency.",
  },
  {
    company: "Lincoln Electric",
    title: "Summer Intern",
    duration: "Jun 2021 - Aug 2021",
    description: "Gaining hands-on experience in supply-chain optimization, organizational management, and manufacturing processes. Working at the headquarters in Euclid, Ohio, provided exposure to industry professionals and allowed for the development of essential skills in analysis, project management, and process optimization.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
          Experience
        </h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                <p className="text-gray-400 text-sm">{exp.company} | {exp.duration}</p>
                <p className="text-gray-300 mt-3">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

