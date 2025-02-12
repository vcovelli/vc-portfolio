import React, {useEffect} from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function AutomatedDataPipeline() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Hero Section */}
        <motion.div 
          className="relative w-full h-64 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/vc-portfolio/images/DataPipeline1.jpg"
            alt="Automated Data Pipeline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold text-center px-4">
              Automated Data Pipeline
            </h1>
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.div 
          className="mt-6 text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            This project is an ETL pipeline built using Snowflake, dbt, and AWS Lambda for data transformation. 
            It automates data ingestion, cleaning, validation, and storage for analytics, ensuring high performance and scalability.
          </p>

          {/* Tech Stack Section */}
          <h2 className="mt-6 text-2xl font-semibold text-gray-900">Tech Stack</h2>
          <ul className="mt-2 list-disc pl-6">
            <li>❄️ <span className="font-semibold">Snowflake</span> - Cloud-based data warehousing.</li>
            <li>📜 <span className="font-semibold">dbt</span> - Transforming and modeling data efficiently.</li>
            <li>🖥️ <span className="font-semibold">AWS Lambda</span> - Serverless processing for real-time ingestion.</li>
            <li>🔄 <span className="font-semibold">Kafka</span> - Streaming data in real-time.</li>
            <li>🔒 <span className="font-semibold">IAM & Security</span> - Secure access controls & data encryption.</li>
          </ul>

          {/* Features Section */}
          <h2 className="mt-6 text-2xl font-semibold text-gray-900">Key Features</h2>
          <ul className="mt-2 list-disc pl-6">
            <li>✔️ Automated data ingestion from multiple sources.</li>
            <li>✔️ Schema validation and transformation for consistency.</li>
            <li>✔️ Real-time processing with Kafka and Lambda.</li>
            <li>✔️ Scalable and cost-efficient with cloud-native architecture.</li>
            <li>✔️ End-to-end orchestration using Prefect.</li>
          </ul>

          {/* Project Showcase */}
          <h2 className="mt-6 text-2xl font-semibold text-gray-900">Project Showcase</h2>
          <p className="mt-2 text-center">
            Below are some snapshots and a demo video of the project in action. Stay tuned for more updates!
          </p>
          <div className="mt-4 bg-gray-300 h-40 flex items-center justify-center rounded-lg">
            🎥 Demo video or image gallery goes here 📸
          </div>

          {/* Centered Buttons */}
          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://github.com/vcovelli/data-pipeline-project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-900 text-white font-bold rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
            >
              <FaGithub className="mr-2" /> GitHub Repo
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
            >
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
