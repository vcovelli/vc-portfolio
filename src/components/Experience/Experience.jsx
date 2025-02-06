import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Your Current Company or Project",
    title: "Lead Software Engineer",
    duration: "2024 - Present",
    description: "Building high-performance applications using React, Tailwind, and AWS.",
  },
  {
    company: "Previous Role or Project",
    title: "Data Engineer",
    duration: "2022 - 2024",
    description: "Developed real-time data pipelines with Kafka, Snowflake, and dbt.",
  },
  {
    company: "Another Role",
    title: "Cloud Solutions Architect",
    duration: "2020 - 2022",
    description: "Implemented enterprise cloud solutions with Terraform and AWS.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
          Experience
        </h2>

        <div className="relative border-l-4 border-yellow-400 pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-7 w-5 h-5 bg-yellow-400 rounded-full"></div>
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
