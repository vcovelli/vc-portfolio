import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-container">
      {/* Background Grid */}
      <div className="grid-background"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-name">Vince Covelli</h1>
        <p className="hero-descriptors">Innovator | Full-stack Developer | Problem Solver</p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a
            href="#contact"
            className="hero-btn contact-btn"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            className="hero-btn resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://github.com/vcovelli"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/vincent-covelli"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={32} />
          </a>
        </div>

        {/* Visitor Counter */}
        <p className="visitor-counter">
          Visitor Count: <span className="counter-highlight">12345</span>
        </p>
      </div>
    </section>
  );
}
