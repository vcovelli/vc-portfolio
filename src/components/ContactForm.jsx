import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8">Contact Me</h2>
        <p className="text-gray-400 mb-6">
          Have a project in mind or just want to connect? Reach out to me below.
        </p>

        {/* Contact Form */}
        <motion.form
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-md shadow-lg hover:bg-yellow-300 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="mailto:vincentcovelli1@gmail.com" className="text-gray-300 hover:text-white transition duration-300">
            <FaEnvelope size={28} />
          </a>
          <a href="https://github.com/vcovelli" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/vincent-covelli" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
