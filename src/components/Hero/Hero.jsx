import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-container">
      {/* Background Grid */}
      <div className="grid-background"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-name">Vince Covelli</h1>
        <p className="hero-descriptors">Full-stack applications · Data engineering · Business automation</p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a
            href="#contact"
            className="hero-btn contact-btn"
          >
            Contact Me
          </a>
          <a
            href="/vc-portfolio/Vincent-Covelli-Resume-2025.pdf"
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

      </div>
    </section>
  );
}
