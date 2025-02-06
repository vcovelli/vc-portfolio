import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    year: "2020 - 2024",
    degree: "Bachelor of Business Studies",
    university: "Cleveland State University",
    details: "Double minor in Marketing & Communications. Focus on data analytics, cloud computing, and software development.",
  },
  {
    year: "2024 - Present",
    degree: "Self-Learning & Certifications",
    university: "AWS, Microsoft, Various Courses",
    details: "AWS Certified Cloud Practitioner, Microsoft AZ-900, and ongoing learning in DevOps, Data Engineering, and Cloud Computing.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Education</h2>

        <div className="relative border-l-4 border-yellow-400">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6 pl-6 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-8 top-0 bg-yellow-400 text-black p-3 rounded-full shadow-md">
                <FaGraduationCap className="text-xl" />
              </div>
              <h3 className="text-2xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-400">{edu.university}</p>
              <p className="mt-2 text-gray-300">{edu.details}</p>
              <span className="text-yellow-400 font-bold text-sm">{edu.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
