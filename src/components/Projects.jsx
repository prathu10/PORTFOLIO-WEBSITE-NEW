import React from "react";

const Projects = () => {
  // Array of projects with titles, descriptions, and GitHub URLs
  const projects = [
    {
      title: "Extinct Species Tracker",
      description: "A CS-6630 project, ",
      link: "https://github.com/your-username/voice-controlled-robot", // Replace with actual GitHub link
    },
    {
      title: "React Native Movie App",
      description: "A cross-platform mobile app built with React Native and Expo that lets users browse trending movies and view detailed info using the TMDB API.",
      link: "https://github.com/prathu10/React_Native_Movie_App", // Replace with actual GitHub link
    },
    {
      title: "E-Commerce Website",
      description: "A responsive e-commerce website with Django for the backend and React.js for the frontend.",
      link: "https://github.com/prathu10/webmart", // Replace with actual GitHub link
    },
    
    {
      title: "Calculator App",
      description: "A responsive calculator application using React.js",
      link: "https://github.com/prathu10/Calculator-App", // Replace with actual GitHub link
    },
    {
      title: "Healthcare Chatbot",
      description: "An intelligent virtual assistant powered by NLP and machine learning to respond to healthcare-related queries with 92% accuracy, improving patient support and reducing response time.",
      link: "https://github.com/prathu10/HealthCare-Chatbot", // Replace with actual GitHub link
    },
    
  ];

  return (
    <div className="py-16 bg-gray-1000 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-white mb-10">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">{project.title}</h2>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold text-lg underline hover:text-cyan-500"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
