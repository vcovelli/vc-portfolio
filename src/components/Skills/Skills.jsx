import React, { useRef, useState, useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiGithub,
  SiTerraform,
  SiDjango,
  SiSnowflake,
  SiNodedotjs,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import "./Skills.css";

const skills = [
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "Python", icon: <SiPython className="text-blue-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-400" /> },
  { name: "Terraform", icon: <SiTerraform className="text-purple-500" /> },
  { name: "Django", icon: <SiDjango className="text-green-600" /> },
  { name: "Snowflake", icon: <SiSnowflake className="text-blue-300" /> },
];

export default function Skills() {
  const marqueeRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = paused ? "paused" : "running";
    }
  }, [paused]);

  return (
    <section id="skills" className="skills-container bg-gray-800 py-20">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8">Skills</h2>

      {/* Marquee Skills */}
      <div
        className="marquee-wrapper"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="marquee" ref={marqueeRef}>
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.icon}
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Collapsible Read More Section */}
      <div className={`collapsible-section ${expanded ? "expanded" : ""}`}>
        {expanded && (
          <div className="text-center mt-6 max-w-3xl mx-auto p-4 bg-gray-900 rounded-lg shadow-md">
            <p className="text-gray-300 text-lg leading-relaxed">
              I have experience working with <strong>full-stack development</strong>, <strong>cloud computing</strong>, 
              and <strong>DevOps</strong>. My expertise includes developing <strong>scalable applications</strong>, 
              working with <strong>serverless technologies</strong>, and setting up <strong>CI/CD pipelines</strong>.
            </p>
            <p className="text-gray-300 text-lg mt-4 leading-relaxed">
              I specialize in <span className="text-yellow-400">React for frontend</span>, 
              <span className="text-green-400"> Django and Node.js for backend</span>, 
              and <span className="text-orange-400">AWS for cloud solutions</span>.
            </p>
          </div>
        )}
      </div>

      {/* Read More Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => setExpanded(!expanded)}
          className="read-more-btn bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow-md 
            hover:bg-yellow-300 transition duration-300"
        >
          {expanded ? "Show Less ▲" : "Read More ▼"}
        </button>
      </div>
    </section>
  );
}
