import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Blogs from "./components/Blog/Blogs";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm";
import BackToTop from "./components/BackToTop";
import Hero from "./components/Hero/Hero";
import useHashNavigation from "./components/useHashNavigation";
//Blogs
import CloudArchitecture from "./components/Blog/BlogPosts/CloudArchitecture";
import DataPipelines from "./components/Blog/BlogPosts/DataPipelines";
import ReactAnimations from "./components/Blog/BlogPosts/ReactAnimations";
//Projects
import RealTimeStockTracker from "./components/Projects/Pages/RealTimeStockTracker";
import HealthcareAppointmentScheduler from "./components/Projects/Pages/HealthcareAppointmentScheduler";
import AutomatedDataPipeline from "./components/Projects/Pages/AutomatedDataPipeline";

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
        <Route path="/blog/blogposts/cloud-architecture" element={<CloudArchitecture />} />
        <Route path="/blog/blogposts/data-pipelines" element={<DataPipelines />} />
        <Route path="/blog/blogposts/react-animations" element={<ReactAnimations />} />

        {/* Project Routes */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/real-time-stock-tracker" element={<RealTimeStockTracker />} />
        <Route path="/projects/healthcare-appointment-scheduler" element={<HealthcareAppointmentScheduler />} />
        <Route path="/projects/automated-data-pipeline" element={<AutomatedDataPipeline />} />

        {/* Catch-All Fallback */}
        <Route path="*" element={<Hero />} />
      </Routes>
    </div>
  );
}
