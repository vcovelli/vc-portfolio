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
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import "./Skills.css";

const skills = [
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "Python", icon: <SiPython className="text-blue-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-400" /> },
  { name: "Terraform", icon: <SiTerraform className="text-purple-500" /> },
];

export default function Skills() {
  const marqueeRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = paused ? "paused" : "running";
    }
  }, [paused]);

  return (
    <section id="skills" className="skills-container bg-gray-800 py-20">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
        Skills
      </h2>
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
    </section>
  );
}
