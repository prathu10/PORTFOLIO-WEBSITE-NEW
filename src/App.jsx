import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Sidebar from './components/sidebar/Sidebar';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  React.useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Cleanup: Reset scrolling on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-200 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Styling */}
      <div className="fixed top-0 -z-10 h-full w-full bg-neutral-900"></div>

      {/* Container for All Sections */}
      <div className="container mx-auto px-6 py-4">
        {/* Home Section */}
        <section id="Home" className="relative min-h-screen">
          <Navbar />
          <Hero />
        </section>

        {/* Sidebar */}
        <Sidebar />

        {/* Skills Section */}
        <section
          id="Skills"
          className="min-h-screen flex flex-col justify-center items-center bg-neutral-900"
        >
          <h1 className="text-4xl font-bold mb-10 ">My Skills</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-8">
            {[
              "Python",
              "Tableau",
              "Power BI",
              "JavaScript",
              "SQL",
              "React.js",
              "React Native",
              "Node.js",
              "Tailwind CSS",
              
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-neutral-800 p-6 rounded-lg text-center shadow-md hover:bg-cyan-700 transition-transform transform hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Resume Section */}
        <section
          id="Resume"
          className=" min-h-screen flex flex-col justify-center items-center py-16 "
        >
          <h1 className="text-4xl font-bold text-center mb-10">
            Resume
          </h1>

          <p className="text-lg text-gray-200 font-medium mb-12 text-center ">
            Explore my professional experience, skills, and education by viewing
            or downloading my resume.
          </p>

          <a
            href="https://drive.google.com/file/d/1eBSF8U5G7SSXBY_ff_b53N13Io0NeCk4/view?usp=sharing" // Replace YOUR_FILE_ID with the actual ID
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-white border-2 border-white py-3 px-8 rounded-full text-xl font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out transform hover:bg-white hover:text-cyan-400 hover:scale-105 shadow-2xl hover:shadow-xl"
          >
            View or Download My Resume
          </a>
        </section>

        {/* Experience Section */}
        <section
          id="Experience"
          className="h-screen bg-neutral-900 overflow-y-auto"
        >
          <div>
            <Experience />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="Projects"
          className="h-screen bg-neutral-900 overflow-y-auto "
        >
          <div>
            <Projects />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="Contact"
          className="h-screen bg-neutral-900 overflow-y-auto"
        >
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
