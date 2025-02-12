import React, {useEffect} from "react";
import { motion } from "framer-motion";

export default function DataPipelines() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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
            src="/vc-portfolio/images/Pipes1.jpg"
            alt="Data Pipelines"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold text-center px-6 drop-shadow-lg">
              Data Pipelines: A Guide for Engineers
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
            Data pipelines are essential for efficiently moving and transforming data from one system to another.
            Engineers rely on them to <span className="font-bold">automate workflows</span>, 
            ensure <span className="font-bold">data integrity</span>, and optimize <span className="font-bold">performance</span> in large-scale systems.
          </p>

          {/* Section: What is a Data Pipeline? */}
          <h2 className="mt-6 text-2xl font-semibold text-gray-900 border-l-4 border-yellow-400 pl-3">
            What is a Data Pipeline?
          </h2>
          <p className="mt-2">
            A data pipeline is a series of steps that <span className="font-bold">process, transform,</span> and <span className="font-bold">transport</span> data from its source to a destination, 
            often a <span className="font-bold">data warehouse</span> or <span className="font-bold">analytics platform</span>. 
            The goal is to enable real-time or batch processing of data for business intelligence, machine learning, or operational analytics.
          </p>

          {/* Section: ETL (Extract, Transform, Load) */}
          <h2 className="mt-6 text-2xl font-semibold text-gray-900 border-l-4 border-yellow-400 pl-3">
            Understanding the ETL Process
          </h2>
          <p className="mt-2">
            The <span className="font-bold">ETL (Extract, Transform, Load)</span> process is a fundamental part of any data pipeline:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-2">
            <li><span className="font-bold">Extract:</span> Collect data from various sources (APIs, databases, event streams).</li>
            <li><span className="font-bold">Transform:</span> Clean, normalize, and apply business logic to the raw data.</li>
            <li><span className="font-bold">Load:</span> Store the transformed data in a <span className="font-bold">data warehouse</span> or <span className="font-bold">data lake</span> for further analysis.</li>
          </ul>

          {/* Section: dbt for Data Transformations */}
          <h2 className="mt-6 text-2xl font-semibold text-gray-900 border-l-4 border-yellow-400 pl-3">
            How dbt Helps with Data Transformations
          </h2>
          <p className="mt-2">
            <span className="font-bold">dbt (Data Build Tool)</span> is an essential tool for transforming raw data into structured models directly within the data warehouse. 
            Unlike traditional ETL tools, <span className="font-bold">dbt focuses only on the "T" (Transformation) step</span>, making SQL-based transformations <span className="font-bold">modular, testable, and scalable</span>.
          </p>
          <ul className="mt-2 list-disc list-inside space-y-2">
            <li>Enables <span className="font-bold">version-controlled SQL models</span>.</li>
            <li>Supports <span className="font-bold">modular transformations</span>, making data workflows more maintainable.</li>
            <li>Automates <span className="font-bold">data testing</span> to ensure data integrity.</li>
          </ul>

          {/* Section: Why Use Snowflake for Data Pipelines? */}
          <h2 className="mt-6 text-2xl font-semibold text-gray-900 border-l-4 border-yellow-400 pl-3">
            Why Use Snowflake for Data Pipelines?
          </h2>
          <p className="mt-2">
            <span className="font-bold">Snowflake</span> is a cloud-based data warehouse that is optimized for modern data pipelines. 
            It provides <span className="font-bold">elastic scalability, built-in security, and high-speed query performance</span>. Key benefits include:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-2">
            <li><span className="font-bold">Separation of compute and storage:</span> Scale resources independently to optimize cost.</li>
            <li><span className="font-bold">Automatic scaling:</span> Handles <span className="font-bold">high-concurrency workloads</span> without performance degradation.</li>
            <li><span className="font-bold">Time Travel & Cloning:</span> Enables easy recovery from data corruption.</li>
          </ul>

          {/* Section: Best Practices for Data Engineering */}
          <h2 className="mt-6 text-2xl font-semibold text-gray-900 border-l-4 border-yellow-400 pl-3">
            Best Practices for Building Scalable Data Pipelines
          </h2>
          <ul className="mt-2 list-disc list-inside space-y-2">
            <li>Use <span className="font-bold">event-driven architectures</span> for real-time processing (e.g., Kafka, AWS Kinesis).</li>
            <li>Implement <span className="font-bold">data partitioning</span> to optimize large-scale queries.</li>
            <li>Set up <span className="font-bold">monitoring & logging</span> (e.g., Prometheus, ELK Stack) to track pipeline performance.</li>
            <li>Apply <span className="font-bold">data validation & testing</span> to ensure data quality at every stage.</li>
          </ul>

          <p className="mt-8 border-l-4 border-yellow-400 pl-3 italic text-gray-600">
            By leveraging <span className="font-bold">modern ETL processes, dbt transformations, and scalable platforms like Snowflake</span>, 
            data engineers can build <span className="font-bold">high-performance, cost-efficient</span> data pipelines that drive <span className="font-bold">real business value</span>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
