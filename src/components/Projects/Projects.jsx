import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Real-Time Stock Tracker",
    description: "Built a real-time stock tracking system using Kafka, PostgreSQL, and Pandas.",
    github: "https://github.com/vcovelli/real-time-stock-tracker",
    liveDemo: "/projects/real-time-stock-tracker",
    image: "/vc-portfolio/images/Stocks1.jpg",
  },
  {
    title: "Healthcare Appointment Scheduler",
    description: "Developed a full-stack appointment booking app for healthcare businesses.",
    github: "/projects/healthcare-appointment-scheduler",
    liveDemo: "/projects/healthcare-appointment-scheduler",
    image: "/vc-portfolio/images/Healthcare1.jpg",
  },
  {
    title: "Automated Data Pipeline",
    description: "Created an ETL pipeline using Snowflake, dbt, and AWS Lambda for data transformation.",
    github: "https://github.com/vcovelli/data-pipeline-project",
    liveDemo: "/projects/automated-data-pipeline",
    image: "/vc-portfolio/images/DataPipeline1.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Clickable Card to Navigate */}
              <Link to={project.liveDemo} className="block">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-400 mt-2">{project.description}</p>
                </div>
              </Link>

              <div className="p-5 flex items-center justify-between">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <FaGithub className="text-2xl" />
                </a>
                <Link to={project.liveDemo} className="text-yellow-400 hover:text-yellow-300">
                  <FaExternalLinkAlt className="text-xl" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
