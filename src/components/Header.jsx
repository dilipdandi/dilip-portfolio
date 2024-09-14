import React, { useState } from "react";
import profilePic from "../assets/profilePic.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); 
  };

  return (
    <header className="bg-backgroundColor text-textColor p-4 fixed w-full border-b top-0 left-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={profilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-lg font-bold truncate md:whitespace-nowrap">
            DILIP SANTOSH DANDI
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="focus:outline-none bg-transparent"
          >
            <svg
              className="w-6 h-6 text-textColor"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-y-6 md:space-y-0 md:space-x-6 mt-4 md:mt-0 md:items-center w-full md:w-auto`}
        >
          <li>
            <Link
              to={"resume"}
              className="button-32 hover:text-gray-300 hover:underline"
              onClick={handleLinkClick} 
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="button-32 hover:text-gray-300 hover:underline"
              onClick={handleLinkClick} 
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="education"
              className="button-32 hover:text-gray-300 hover:underline"
              onClick={handleLinkClick} 
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              className="button-32 hover:text-gray-300 hover:underline"
              onClick={handleLinkClick} 
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className="button-32 hover:text-gray-300 hover:underline"
              onClick={handleLinkClick} 
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="certification"
              className="button-32 hover:text-gray-300 hover:underline"
              onClick={handleLinkClick} 
            >
              Certification
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="button-32 hover:text-gray-300 hover:underline"
              onClick={handleLinkClick} 
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
