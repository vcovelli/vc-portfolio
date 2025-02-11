import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = (id) => {
    setIsMenuOpen(false);
    if (location.pathname.startsWith("/vc-portfolio")) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/#${id}`);
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <div className="text-yellow-400 text-2xl font-bold whitespace-nowrap pl-4 md:pl-8 lg:pl-12 xl:pl-16">
          Vince Covelli
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-yellow-400 text-2xl focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden lg:flex space-x-6 text-white">
          <button onClick={() => handleScroll("home")} className="hover:text-yellow-400 transition">Home</button>
          <button onClick={() => handleScroll("about")} className="hover:text-yellow-400 transition">About</button>
          <button onClick={() => handleScroll("experience")} className="hover:text-yellow-400 transition">Experience</button>
          <button onClick={() => handleScroll("skills")} className="hover:text-yellow-400 transition">Skills</button>
          <button onClick={() => handleScroll("education")} className="hover:text-yellow-400 transition">Education</button>
          <button onClick={() => handleScroll("blogs")} className="hover:text-yellow-400 transition">Blogs</button>
          <button onClick={() => handleScroll("projects")} className="hover:text-yellow-400 transition">Projects</button>
          <button onClick={() => handleScroll("contact")} className="hover:text-yellow-400 transition">Contact</button>
        </div>

        {/* Get Resume Button (Only on large screens and hidden when mobile menu is open) */}
        <div className={`hidden lg:flex space-x-4 ${isMenuOpen ? "hidden" : "flex"}`}>
          <a
            href="/vc-portfolio/public/Vincent-Covelli Resume 2025.pdf"
            className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Get Resume
          </a>
        </div>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 shadow-lg md:hidden">
          <div className="flex flex-col items-center space-y-4 py-6 text-white">
            <button onClick={() => handleScroll("home")} className="hover:text-yellow-400 transition">Home</button>
            <button onClick={() => handleScroll("about")} className="hover:text-yellow-400 transition">About</button>
            <button onClick={() => handleScroll("experience")} className="hover:text-yellow-400 transition">Experience</button>
            <button onClick={() => handleScroll("skills")} className="hover:text-yellow-400 transition">Skills</button>
            <button onClick={() => handleScroll("education")} className="hover:text-yellow-400 transition">Education</button>
            <button onClick={() => handleScroll("blogs")} className="hover:text-yellow-400 transition">Blogs</button>
            <button onClick={() => handleScroll("projects")} className="hover:text-yellow-400 transition">Projects</button>
            <button onClick={() => handleScroll("contact")} className="hover:text-yellow-400 transition">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}
