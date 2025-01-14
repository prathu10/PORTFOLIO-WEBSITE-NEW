import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Toggle the sidebar open/closed
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Handle navigation to a specific section and close the sidebar after navigating
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Optionally keep the sidebar open after navigating if required
    // setIsOpen(false); // Uncomment if you want to close sidebar after navigation
  };

  return (
    <div>
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="text-2xl p-2 bg-neutral-800 text-white fixed top-1 left-4 z-50 rounded-md"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-16 bg-neutral-900 text-white p-4 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex space-x-6 justify-center items-center h-full">
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
                className="hover:text-cyan-400 text-lg"
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
