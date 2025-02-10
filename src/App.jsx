import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Blogs from "./components/BlogPosts/Blogs";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import BackToTop from "./components/BackToTop";
import Hero from "./components/Hero/Hero";
import CloudArchitecture from "./components/BlogPosts/CloudArchitecture";
import DataPipelines from "./components/BlogPosts/DataPipelines";
import ReactAnimations from "./components/BlogPosts/ReactAnimations";
import useHashNavigation from "./components/useHashNavigation";

export default function App() {
  useHashNavigation();

  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutMe />
              <Experience />
              <Skills />
              <Education />
              <Blogs />
              <Projects />
              <ContactForm />
              <BackToTop />
                <section 
                  id="footer"
                  className="h-20 flex items-center justify-center bg-gray-800 text-gray-400"
                >
                  <p>© 2025 Vince Covelli. All Rights Reserved.</p>
              </section>
            </>
          }
        />
        {/* Blog Routes */}
        <Route path="/blogs/cloud-architecture" element={<CloudArchitecture />} />
        <Route path="/blogs/data-pipelines" element={<DataPipelines />} />
        <Route path="/blogs/react-animations" element={<ReactAnimations />} />

        {/* Catch-All Fallback */}
        <Route path="*" element={<Hero />} />
      </Routes>
    </div>
  );
}
