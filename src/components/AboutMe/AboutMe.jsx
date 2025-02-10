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
            Hello, I’m Vincent A. Covelli—a technical professional passionate about creating innovative, scalable solutions that drive business success. With a degree in Business and minors in Marketing and Communications from Cleveland State University, I combine strategic thinking with hands-on technical expertise.
          </p>

          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            My experience includes building custom CRM systems, business automation workflows, and full-stack applications. My portfolio highlights a real-time stock tracker, an ETL pipeline leveraging Snowflake and dbt, and a healthcare scheduling app built with Django and React.
          </p>

          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Certified in AWS and Azure, I’m skilled in cloud architecture, data engineering, and secure application development. I thrive at the intersection of technology and business, crafting solutions that solve complex challenges and deliver results.
          </p>

          {/* Get Resume Button */}
          <div className="mt-6">
            <a
              href="/vc-portfolio/public/Vincent-Covelli Resume 2025.pdf"
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
