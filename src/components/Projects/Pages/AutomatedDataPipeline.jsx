import React from "react";

export default function AutomatedDataPipeline() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Automated Data Pipeline</h1>
      <p className="mt-4 text-lg">
        This project is an ETL pipeline built using Snowflake, dbt, and AWS Lambda for data transformation.
        It automates data ingestion, cleaning, and storage for analytics.
      </p>
      <h2 className="mt-6 text-2xl font-semibold">Tech Stack</h2>
      <ul className="list-disc pl-6">
        <li>❄️ Snowflake for data warehousing</li>
        <li>📜 dbt for data transformation</li>
        <li>🖥️ AWS Lambda for serverless processing</li>
      </ul>
      <h2 className="mt-6 text-2xl font-semibold">Features</h2>
      <ul className="list-disc pl-6">
        <li>✔️ Automated data ingestion</li>
        <li>✔️ Schema validation</li>
        <li>✔️ Scalable & cost-efficient</li>
      </ul>
    </div>
  );
}
