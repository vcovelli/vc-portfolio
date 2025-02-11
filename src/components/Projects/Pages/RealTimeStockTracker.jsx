import React from "react";

export default function RealTimeStockTracker() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Real-Time Stock Tracker</h1>
      <p className="mt-4 text-lg">
        This project is a real-time stock tracking system built using Kafka, PostgreSQL, and Pandas.
        It streams live market data, processes it, and stores it in a structured format for analysis.
      </p>
      <h2 className="mt-6 text-2xl font-semibold">Tech Stack</h2>
      <ul className="list-disc pl-6">
        <li>📊 Kafka for real-time data streaming</li>
        <li>🗄️ PostgreSQL for database storage</li>
        <li>🐼 Pandas for data processing</li>
      </ul>
      <h2 className="mt-6 text-2xl font-semibold">Features</h2>
      <ul className="list-disc pl-6">
        <li>✔️ Live stock price updates</li>
        <li>✔️ Historical data analysis</li>
        <li>✔️ Real-time alerts</li>
      </ul>
    </div>
  );
}
