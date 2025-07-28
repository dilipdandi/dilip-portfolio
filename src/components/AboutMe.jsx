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
    <section ref={sectionRef} className="h-screen content pt-[5rem]">
      <figure className="flex flex-col items-center text-center">
        <img
          src={profilePic}
          alt="Dilip Dandi"
          className="img-animation zoom-out w-52 h-64 object-cover my-8"
        />
        <div className="px-5 leading-7">
        <Summary />
        </div>
            <Link
              to="/contact"
              className="text-textColor border border-primaryColor hover:bg-[#F4A700] px-4 py-2 mt-5"
              onClick={handleLinkClick} 
            >
              Contact
            </Link>
      </figure>
    </section>
  );
};

export default AboutMe;