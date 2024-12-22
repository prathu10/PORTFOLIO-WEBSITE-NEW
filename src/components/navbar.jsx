import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center py-4 px-4 ">
      <div className="flex items-center gap-8 text-2xl text-white">
        <FaLinkedin />
        <FaGithub />
        <FaEnvelope />
      </div>
    </nav>
  );
};

export default Navbar;
