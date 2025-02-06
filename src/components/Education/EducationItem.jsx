import React from "react";

export default function EducationItem({ icon, title, institution, description, duration }) {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">{icon}</div>
      <div className="timeline-content">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{institution}</p>
        <p className="text-gray-300 mt-2">{description}</p>
        <span className="text-yellow-400 mt-2 block">{duration}</span>
      </div>
    </div>
  );
}
