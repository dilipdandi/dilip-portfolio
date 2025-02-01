import React, { useState } from "react";
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
    <header className="content p-4 fixed w-full border-b top-0 left-0 z-50">
      <nav className="container mx-auto flex items-center justify-center">
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="btn focus:outline-none bg-transparent"
          >
            <svg
              className="w-6 h-6"
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
              className="btn hover:text-gray-300"
              onClick={handleLinkClick} 
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="btn hover:text-gray-300"
              onClick={handleLinkClick} 
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="education"
              className="btn hover:text-gray-300 "
              onClick={handleLinkClick} 
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              className="btn hover:text-gray-300 "
              onClick={handleLinkClick} 
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className="btn hover:text-gray-300 "
              onClick={handleLinkClick} 
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="certification"
              className="btn hover:text-gray-300"
              onClick={handleLinkClick} 
            >
              Certification
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="btn hover:text-gray-300"
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
