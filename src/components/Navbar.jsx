import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-yellow-400 text-2xl font-bold">
          Vince Covelli
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#experience" className="hover:text-yellow-400">Experience</a>
          <a href="#skills" className="hover:text-yellow-400">Skills</a>
          <a href="#education" className="hover:text-yellow-400">Education</a>
          <a href="#blogs" className="hover:text-yellow-400">Blogs</a>
          <a href="#projects" className="hover:text-yellow-400">Projects</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <a
            href="/resume.pdf"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Get Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
