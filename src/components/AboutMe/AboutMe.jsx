import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Mobile-Only Heading */}
        <motion.h2
          className="text-4xl font-bold text-yellow-400 mb-4 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/vc-portfolio/RetouchedHeadshot-4of5.jpg"
            alt="Vince Covelli"
            className="rounded-lg shadow-lg w-[70%] sm:w-[60%] md:w-[100%] max-w-[400px] object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-2/3 md:pr-12 mt-8 md:mt-0 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Desktop-Only Heading */}
          <h2 className="hidden md:block text-4xl font-bold text-yellow-400 mb-8">
            About Me
          </h2>

          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            I’m Vince Covelli, a results-driven developer with expertise in
            **React, Tailwind CSS, AWS, Snowflake, Terraform, and data
            engineering.** Passionate about building modern, efficient, and
            scalable applications. Whether it's **frontend UI/UX** or **backend
            data architecture**, I create solutions that deliver impact.
          </p>
          <p className="mt-2 text-lg text-gray-400">
            Always pushing the boundaries of what’s possible in **enterprise
            software** and automation.
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
