import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Optimizing Cloud Architecture for Scalability",
    description: "How to design AWS cloud solutions that scale seamlessly with business growth.",
    link: "#",
    image: "https://source.unsplash.com/400x250/?cloud,technology",
  },
  {
    title: "Data Pipelines: A Guide for Engineers",
    description: "Breaking down ETL processes, dbt, Snowflake, and best practices for data engineering.",
    link: "#",
    image: "https://source.unsplash.com/400x250/?data,engineering",
  },
  {
    title: "Mastering React Animations with Framer Motion",
    description: "A deep dive into animations that make UI experiences feel smooth and modern.",
    link: "#",
    image: "https://source.unsplash.com/400x250/?react,javascript",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Latest Blogs</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                <p className="text-gray-400 mt-2">{post.description}</p>
                <span className="text-yellow-400 font-bold mt-4 inline-block">Read More →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
