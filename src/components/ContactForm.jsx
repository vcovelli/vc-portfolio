import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target; 
  
    emailjs
      .sendForm(
        "service_dy9q6ue", // Your Service ID
        "template_ixg0fa5", // Your Template ID
        form, // Pass the actual form element
        "9Hea9yysk9hbLAOjt" // Your Public Key (User ID)
      )
      .then(
        () => {
          setStatus({ type: "success", message: "Message sent successfully!" });
          form.reset(); // Clear form fields
        },
        () => {
          setStatus({ type: "error", message: "Failed to send message. Try again." });
        }
      );
  };

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
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-md shadow-lg hover:bg-yellow-300 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
          {/* Confirmation / Error Message */}
          {status.message && (
            <motion.p
              className={`mt-4 text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {status.message}
            </motion.p>
          )}
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
