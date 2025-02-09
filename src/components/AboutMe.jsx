import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/RetouchedHeadshot-(4 of 5).jpg"
            alt="Vince Covelli"
            className="rounded-lg shadow-lg w-90 h-85 object-cover mx-auto md:mx-0"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-2/3 md:pl-12 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-yellow-400">About Me</h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            I’m Vince Covelli, a results-driven developer with expertise in **React, Tailwind CSS, AWS, Snowflake, Terraform, and data engineering.** 
            Passionate about building modern, efficient, and scalable applications. 
            Whether it's **frontend UI/UX** or **backend data architecture**, I create solutions that deliver impact.
          </p>
          <p className="mt-2 text-lg text-gray-400">
            Always pushing the boundaries of what’s possible in **enterprise software** and automation.
          </p>

          {/* Get Resume Button */}
          <div className="mt-6">
            <a
              href="/Vincent-Covelli Resume 2025.pdf"
              className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
              download
            >
              Get Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
