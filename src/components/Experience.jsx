import React from "react";

const experiences = [
  {
    title: "Full-Stack Development Intern",
    company: "CodeClause",
    duration: "May 2024",
    description: [
      "Developed a task management app with Django, leveraging CRUD operations to boost efficiency by 30%.",
      "Created a responsive calculator with React.js, enhancing interaction speed by 25%.",
    ],
    technologies: ["Django", "React.js", "CRUD Operations", "Javascript"],
  },
  {
    title: "Machine Learning Intern",
    company: "Corizo",
    duration: "Mar 2024",
    description: [
      "Gained expertise in Machine Learning, covering algorithms, NLP, predictive modeling, and data analysis.",
      "Worked on text summarization project achieving 90% accuracy.",
    ],
    technologies: ["Machine Learning", "NLP", "Predictive Modeling", "Data Analysis"],
  },
  {
    title: "Web Development Intern",
    company: "MSME & AICTE",
    duration: "Nov 2023",
    description: [
      "Developed a full-stack E-commerce website using Django for back-end and React.js for front-end.",
      "Built dynamic, user-friendly web pages with HTML, CSS, and JavaScript, focusing on responsive design.",
    ],
    technologies: ["Django", "React.js", "HTML", "CSS", "JavaScript"],
  },
];

const Experience = () => {
  return (
    <div className="bg-gray-1000 text-white py-12">
      <h1 className="text-4xl font-extrabold text-center text-white mb-10">Internship Experience</h1>
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
