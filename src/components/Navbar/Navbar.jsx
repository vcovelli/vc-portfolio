import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-yellow-400 text-2xl font-bold">Vince Covelli</div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-yellow-400 text-2xl focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#experience" className="hover:text-yellow-400 transition">Experience</a>
          <a href="#skills" className="hover:text-yellow-400 transition">Skills</a>
          <a href="#education" className="hover:text-yellow-400 transition">Education</a>
          <a href="#blogs" className="hover:text-yellow-400 transition">Blogs</a>
          <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="/resume.pdf"
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
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition">About</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition">Experience</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition">Skills</a>
            <a href="#education" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition">Education</a>
            <a href="#blogs" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition">Blogs</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition">Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
