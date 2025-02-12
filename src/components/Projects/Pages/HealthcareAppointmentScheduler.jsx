import React from "react";
import { motion } from "framer-motion";

export default function HealthcareAppointmentScheduler() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-24 pb-12">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        
        {/* Hero Section */}
        <motion.div 
          className="relative w-full h-64 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/vc-portfolio/images/Healthcare1.jpg"
            alt="Healthcare Appointment Scheduler"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold text-center px-6 drop-shadow-lg">
              Healthcare Appointment Scheduler
            </h1>
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div 
          className="mt-8 text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            This project is a <span className="font-bold">full-stack appointment booking app</span> for healthcare businesses. 
            Clients can book appointments, and staff can efficiently manage schedules.
          </p>

          {/* Tech Stack */}
          <h2 className="mt-6 text-2xl font-semibold text-gray-900 border-l-4 border-yellow-400 pl-3">
            Tech Stack
          </h2>
          <ul className="mt-2 list-disc list-inside space-y-2">
            <li>🖥️ <span className="font-bold">React</span> for frontend</li>
            <li>🌐 <span className="font-bold">Django</span> for backend</li>
            <li>📅 <span className="font-bold">PostgreSQL</span> for database</li>
            <li>🔒 <span className="font-bold">Firebase</span> for authentication</li>
          </ul>

          {/* Features */}
          <h2 className="mt-6 text-2xl font-semibold text-gray-900 border-l-4 border-yellow-400 pl-3">
            Features
          </h2>
          <ul className="mt-2 list-disc list-inside space-y-2">
            <li>✔️ <span className="font-bold">Role-based access</span> (Clients, Staff, Admins)</li>
            <li>✔️ <span className="font-bold">Calendar integration</span> (FullCalendar)</li>
            <li>✔️ <span className="font-bold">Automated reminders</span></li>
          </ul>

          {/* Showcasing Project (Placeholder for Demo, Code, or Images) */}
          <h2 className="mt-8 text-2xl font-semibold text-gray-900 border-l-4 border-yellow-400 pl-3">
            Project Showcase
          </h2>
          <p className="mt-2">
            Below are some <span className="font-bold">snapshots</span> and a <span className="font-bold">demo</span> of the project in action. Stay tuned for more updates!
          </p>
          
          {/* Placeholder for Demo Video or GIF */}
          <div className="mt-6 flex justify-center">
            <motion.div
              className="w-full h-56 bg-gray-300 rounded-lg flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-gray-600">Demo video or image goes here 🎥</p>
            </motion.div>
          </div>

          {/* GitHub & Live Demo Buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <a 
              href="https://github.com/vcovelli/healthcare-backend" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 text-white font-bold rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
            >
              View Code on GitHub
            </a>
            <a 
              href="#" 
              className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
            >
              Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
