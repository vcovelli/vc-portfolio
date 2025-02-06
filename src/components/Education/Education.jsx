import React from "react";
import "./Education.css";

const educationData = [
  {
    icon: "🎓", // Graduation cap emoji
    title: "Bachelor of Business Studies",
    institution: "Cleveland State University",
    description: "Double minor in Marketing & Communications. Focus on data analytics, cloud computing, and software development.",
    duration: "2020 - 2024",
  },
  {
    icon: "📚", // Book emoji for certifications
    title: "Self-Learning & Certifications",
    institution: "AWS, Microsoft, Various Courses",
    description: "AWS Certified Cloud Practitioner, Microsoft AZ-900, and ongoing learning in DevOps, Data Engineering, and Cloud Computing.",
    duration: "2024 - Present",
  },
];

export default function Education() {
  return (
    <section id="education" className="education-container bg-gray-900 text-white py-20">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-400">{item.institution}</p>
              <p className="text-gray-300 mt-2">{item.description}</p>
              <span className="text-yellow-400">{item.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
