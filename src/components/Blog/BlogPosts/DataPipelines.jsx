import React from "react";
import { motion } from "framer-motion";

export default function DataPipelines() {
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
            src="/vc-portfolio/images/Pipes1.jpg"
            alt="Data Pipelines"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">Data Pipelines: A Guide for Engineers</h1>
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
            Data pipelines are essential for efficiently moving and transforming data from one system to another.
            Engineers rely on them to automate workflows, ensure data integrity, and optimize performance in large-scale systems.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-gray-900">What is a Data Pipeline?</h2>
          <p className="mt-2">
            A data pipeline is a series of steps that process and transport data from its source to a destination, 
            often a data warehouse or analytics platform.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-gray-900">Why Data Pipelines Matter</h2>
          <p className="mt-2">
            - They enable **automation** of data movement and transformation.<br />
            - They improve **data quality** and **consistency**.<br />
            - They enhance **scalability** for handling large datasets.<br />
          </p>
          
          <p className="mt-6">
            Stay tuned for more insights into designing scalable and efficient data pipelines!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
