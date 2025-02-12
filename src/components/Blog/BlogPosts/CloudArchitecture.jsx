import React from "react";
import { motion } from "framer-motion";

export default function CloudArchitecture() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-24 pb-12"> {/* Fixed Navbar Overlap */}
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        
        {/* Hero Section */}
        <motion.div 
          className="relative w-full h-64 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/vc-portfolio/images/Optimizing1.jpg"
            alt="Cloud Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold text-center px-6 drop-shadow-lg">
              Optimizing Cloud Architecture for Scalability
            </h1>
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.div 
          className="mt-8 text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            Cloud architecture plays a crucial role in ensuring applications remain 
            <span className="font-bold"> scalable, secure, and cost-efficient</span>. 
            Engineers must design systems that can 
            <span className="font-bold"> handle increasing workloads dynamically</span> while maintaining 
            <span className="font-bold"> performance and reliability</span>.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-gray-900 border-l-4 border-yellow-400 pl-3">
            Key Principles of Scalable Cloud Architecture
          </h2>
          <p className="mt-2">
            Building a scalable cloud system requires 
            <span className="font-bold"> modular design, automation, and monitoring</span>. 
            Here are some best practices:
          </p>

          {/* Section 1 */}
          <h3 className="mt-6 text-xl font-medium text-gray-800">1. Use Auto Scaling & Load Balancing</h3>
          <ul className="mt-2 list-disc list-inside space-y-2">
            <li>Implement <span className="font-bold">Auto Scaling</span> to dynamically adjust resources based on traffic.</li>
            <li>Use <span className="font-bold">Load Balancers</span> (e.g., AWS ALB, Nginx) to distribute incoming traffic efficiently.</li>
          </ul>

          {/* Section 2 */}
          <h3 className="mt-6 text-xl font-medium text-gray-800">2. Microservices & Containerization</h3>
          <ul className="mt-2 list-disc list-inside space-y-2">
            <li>Break applications into <span className="font-bold">microservices</span> to improve scalability.</li>
            <li>Use <span className="font-bold">containers</span> (Docker, Kubernetes) for better resource utilization.</li>
          </ul>

          {/* Section 3 */}
          <h3 className="mt-6 text-xl font-medium text-gray-800">3. Optimize Storage & Databases</h3>
          <ul className="mt-2 list-disc list-inside space-y-2">
            <li>Use <span className="font-bold">object storage</span> (S3, Blob Storage) for large data handling.</li>
            <li>Implement <span className="font-bold">database replication & partitioning</span> for high availability.</li>
          </ul>

          <p className="mt-8 border-l-4 border-yellow-400 pl-3 italic text-gray-600">
            By following these strategies, businesses can create 
            <span className="font-bold"> resilient and cost-efficient</span> cloud architectures that adapt to changing demands.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
