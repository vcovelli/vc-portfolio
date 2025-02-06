import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <div className="hero-container flex flex-col justify-center items-center min-h-screen">
        <motion.div
          className="text-center space-y-6 z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl font-bold text-yellow-400"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Vince Covelli
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-400"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Innovator | Problem Solver | Elite React Developer
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center gap-4 pt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <a
              href="https://github.com/vincecovelli"
              className="hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub size={32} />
            </a>
            <a
              href="https://linkedin.com/in/vincecovelli"
              className="hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin size={32} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="py-16 bg-gray-800 w-full">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Replace these placeholders with your actual skill icons or badges */}
          <div className="skill-card">React</div>
          <div className="skill-card">TailwindCSS</div>
          <div className="skill-card">AWS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">Docker</div>
          <div className="skill-card">PostgreSQL</div>
          <div className="skill-card">GitHub</div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider"></div>
    </div>
  );
}
