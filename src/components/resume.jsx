import React from "react";

const Resume = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-400 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200 mb-8">
          My Resume
        </h1>

        {/* Description */}
        <p className="text-lg font-medium text-gray-200 mb-12">
          Explore my skills, experience, and projects by downloading or viewing my resume. Get a glimpse into my journey.
        </p>

        {/* Resume Button */}
        <a
          href="/resume.pdf" // Link to your resume.pdf
          target="_blank" // Open in a new tab
          rel="noopener noreferrer"
          className="bg-transparent text-white border-2 border-white py-3 px-10 rounded-full text-xl font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out transform hover:bg-white hover:text-blue-600 hover:scale-110 shadow-2xl hover:shadow-xl"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
