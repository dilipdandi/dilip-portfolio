import React, { useEffect, useRef, useState } from 'react';
import TypingEffect from 'react-typing-effect';
import profilePic from "../assets/profilePic.jpg";
import { Link } from "react-router-dom";
import Summary from './Summary';


const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleLinkClick = () => {
    setIsMenuOpen(false); 
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about-me-section" ref={sectionRef} className="p-6 md:p-12 content">
      <figure className="flex flex-col items-center text-center">
        <img
          src={profilePic}
          alt="Dilip Dandi"
          className="img-animation w-56 h-72 object-cover mb-4"
        />
        <Summary />
        <li className="mt-6 items-center justify-center">
            <Link
              to="/contact"
              className="btn"
              onClick={handleLinkClick} 
            >
              Contact
            </Link>
          </li>
      </figure>
    </section>
  );
};

export default AboutMe;
