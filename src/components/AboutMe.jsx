import React, { useRef } from 'react';
import profilePic from "../assets/profilePic.jpg";
import { Link } from "react-router-dom";
import Summary from './Summary';


const AboutMe = () => {
  const sectionRef = useRef(null);

  const handleLinkClick = () => {
    setIsMenuOpen(false); 
  };

  
  return (
    <section id="about-me-section" ref={sectionRef} className="p-6 md:p-12 content">
      <figure className="flex flex-col items-center text-center">
        <img
          src={profilePic}
          alt="Dilip Dandi"
          className="img-animation zoom-out w-52 h-64 object-cover my-4"
        />
        <Summary />
            <Link
              to="/contact"
              className="btn"
              onClick={handleLinkClick} 
            >
              Contact
            </Link>
      </figure>
    </section>
  );
};

export default AboutMe;
