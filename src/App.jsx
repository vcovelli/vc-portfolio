import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold text-yellow-400">Vince Covelli</h1>
      </section>

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
