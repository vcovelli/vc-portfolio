import React from "react";
import { motion } from "framer-motion";

export default function CloudArchitecture() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
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
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold text-center px-4">
              Optimizing Cloud Architecture for Scalability
            </h1>
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.div 
          className="mt-6 text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            Cloud architecture plays a crucial role in ensuring applications remain **scalable, secure, and cost-efficient**. 
            Engineers must design systems that can **handle increasing workloads dynamically** while maintaining **performance and reliability**.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-gray-900">Key Principles of Scalable Cloud Architecture</h2>
          <p className="mt-2">
            Building a scalable cloud system requires **modular design, automation, and monitoring**. Here are some best practices:
          </p>

          <h3 className="mt-4 text-xl font-medium text-gray-800">1. Use Auto Scaling & Load Balancing</h3>
          <p className="mt-2">
            - Implement **Auto Scaling** to dynamically adjust resources based on traffic.<br />
            - Use **Load Balancers** (e.g., AWS ALB, Nginx) to distribute incoming traffic efficiently.
          </p>

          <h3 className="mt-4 text-xl font-medium text-gray-800">2. Microservices & Containerization</h3>
          <p className="mt-2">
            - Break applications into **microservices** to improve scalability.<br />
            - Use **containers** (Docker, Kubernetes) for better resource utilization.
          </p>

          <h3 className="mt-4 text-xl font-medium text-gray-800">3. Optimize Storage & Databases</h3>
          <p className="mt-2">
            - Use **object storage** (S3, Blob Storage) for large data handling.<br />
            - Implement **database replication & partitioning** for high availability.
          </p>

          <p className="mt-6">
            By following these strategies, businesses can create **resilient and cost-efficient** cloud architectures that adapt to changing demands.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
