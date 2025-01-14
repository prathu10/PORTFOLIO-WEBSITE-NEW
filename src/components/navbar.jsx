import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center py-4 px-4 fixed bottom-0 left-0 w-full bg-neutral-900">
      <div className="flex items-center gap-8 text-2xl text-white mx-auto">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/prathsonawane/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/prathu10"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          <FaGithub />
        </a>

        {/* Email */}
        <a
          href="mailto:prathamesh4402@gmail.com"
          className="hover:text-cyan-400"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
