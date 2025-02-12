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
            Hello, I’m <span className="text-yellow-400 font-bold">Vincent A. Covelli</span>—a 
            <span> technical professional</span> passionate about creating 
            <span> innovative, scalable solutions</span> that drive business success.
            With a degree in <span>Business</span> and minors in 
            <span> Marketing and Communications</span> from 
            <span className="font-bold"> Cleveland State University</span>, I combine 
            <span> strategic thinking</span> with <span> hands-on technical expertise</span>.
          </p>

          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            My experience includes building 
            <span> custom CRM systems</span>, 
            <span> business automation workflows</span>, 
            and <span> full-stack applications</span>. 
            My portfolio highlights a <span> real-time stock tracker</span>, 
            an <span> ETL pipeline leveraging Snowflake and dbt</span>, 
            and a <span> healthcare scheduling app</span> built with 
            <span> Django and React</span>.
          </p>

          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Certified in <span className="text-orange-400 font-bold">AWS</span> and <span className="text-blue-400 font-bold">Azure</span>, 
            I’m skilled in <span> cloud architecture</span>, 
            <span> data engineering</span>, and 
            <span> secure application development</span>. 
            I thrive at the intersection of <span> technology and business</span>, 
            crafting solutions that solve complex challenges and deliver results.
          </p>

          {/* Get Resume Button */}
          <div className="mt-6">
            <a
              href="/vc-portfolio/Vincent-Covelli-Resume-2025.pdf"
              className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
              download
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
