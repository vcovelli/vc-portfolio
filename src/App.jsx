import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import BackToTop from "./components/BackToTop";
import Hero from "./components/Hero/Hero";

export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <AboutMe />

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Blogs Section */}
      <Blogs />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <ContactForm />

      <BackToTop />

      <section id="footer" className="h-20 flex items-center justify-center bg-gray-800 text-gray-400">
        <p>© 2025 Vince Covelli. All Rights Reserved.</p>
      </section>
    </div>
  );
}
