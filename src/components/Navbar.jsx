import React, { useState } from "react"; // ✅ import useState
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // ✅ state to track menu open/close

  return (
    <div className="flex items-center justify-between sticky top-0 z-50 bg-[#021526] p-4 md:px-28 lg:px-40">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-32 h-auto cursor-pointer" />

      {/* Hamburger button (mobile only) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer md:hidden"
      >
        {isOpen ? (
          // X icon when open
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
               strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon when closed
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
               strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 text-white font-semibold">
        <HashLink smooth to="/#home">Home</HashLink>
        <HashLink smooth to="/#about">About Me</HashLink>
        <Link to="/portfolio">Projects</Link>
        <Link to="/resume">Resume</Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#021526] flex flex-col gap-4 pt-10 pl-5 h-screen text-white font-light md:hidden">
          <HashLink smooth to="/#home" onClick={() => setIsOpen(false)}>Home</HashLink>
        <HashLink smooth to="/#about" onClick={() => setIsOpen(false)}>About Me</HashLink>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
