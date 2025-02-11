import React from "react";

export default function HealthcareAppointmentScheduler() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Healthcare Appointment Scheduler</h1>
      <p className="mt-4 text-lg">
        This project is a full-stack appointment booking app for healthcare businesses.
        Clients can book appointments, and staff can manage schedules efficiently.
      </p>
      <h2 className="mt-6 text-2xl font-semibold">Tech Stack</h2>
      <ul className="list-disc pl-6">
        <li>🖥️ React for frontend</li>
        <li>🌐 Django for backend</li>
        <li>📅 PostgreSQL for database</li>
      </ul>
      <h2 className="mt-6 text-2xl font-semibold">Features</h2>
      <ul className="list-disc pl-6">
        <li>✔️ Role-based access (Clients, Staff, Admins)</li>
        <li>✔️ Calendar integration</li>
        <li>✔️ Automated reminders</li>
      </ul>
    </div>
  );
}
