import React from "react";

const experiences = [
  {
    title: "Teaching Assistant – Information Systems",
    company: "University of Utah – David Eccles School of Business",
    duration: "Jan 2026 – Present",
    description: [
      "Performed analytical research and comparative evaluations across AI, Machine Learning, Business Analytics, and Python curricula, delivering structured insights that informed course design.",
      "Synthesized large volumes of technical and business content into clear, data-backed insights for curriculum planning.",
      "Analyzed and validated student performance datasets using Canvas and Excel to identify trends and ensure consistent evaluation standards.",
      "Communicated analytical findings to cross-functional stakeholders, translating complex concepts into actionable insights."
    ],
    technologies: [
      "Excel",
      "Data Analysis",
      "Trend Analysis",
      "Stakeholder Communication",
      "Business Analytics"
    ],
  },
  {
    title: "Order Fulfillment & Operations Assistant",
    company: "University of Utah Campus Store",
    duration: "Sep 2024 – May 2025",
    description: [
      "Managed and assessed high-volume operational data including orders, inventory, and shipments using NetSuite (ERP).",
      "Monitored workflows to identify exceptions, delays, and data discrepancies affecting fulfillment operations.",
      "Performed data validation and quality checks to ensure accurate inventory and operational records.",
      "Tracked fulfillment metrics and order statuses to support metrics-driven operational decisions."
    ],
    technologies: [
      "NetSuite (ERP)",
      "Data Validation",
      "Operational Analytics",
      "Process Monitoring"
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Corizo",
    duration: "Mar 2024 – May 2024",
    description: [
      "Analyzed multiple datasets using classification and NLP techniques to extract analytical insights.",
      "Evaluated model performance using accuracy and ROC-AUC metrics to support data-driven conclusions."
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "NLP",
      "Model Evaluation"
    ],
  }
];

const Experience = () => {
  return (
    <div className="bg-gray-1000 text-white py-12">
      <h1 className="text-4xl font-extrabold text-center text-white mb-10">Work Experience</h1>
      <div className="max-w-4xl mx-auto flex flex-col space-y-8 px-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-cyan-400">{exp.title}</h2>
              <p className="text-gray-300">{exp.company}</p>
              <p className="text-gray-400 text-sm">{exp.duration}</p>
            </div>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-cyan-300">Technologies:</h3>
              <ul className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-cyan-600 text-white text-sm px-3 py-1 rounded-lg shadow-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
