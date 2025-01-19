import React from "react";

const Sidebar = () => {
  // Handle navigation to a specific section
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-full h-16 bg-neutral-900 text-white p-4 shadow-lg flex justify-center items-center">
        <ul className="flex space-x-6">
          {[
            { id: "Home", label: "Home" },
            { id: "Skills", label: "Skills" },
            { id: "Resume", label: "Resume" },
            { id: "Experience", label: "Experience" },
            { id: "Projects", label: "Projects" },
            { id: "Contact", label: "Contact" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigation(item.id)}
                className="hover:text-cyan-400 text-md"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
