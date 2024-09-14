import React, { useEffect, useRef, useState } from 'react';
import TypingEffect from 'react-typing-effect';
import profilePic from "../assets/profilePic.jpg";
import { Link } from "react-router-dom";


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
    <section id="about-me-section" ref={sectionRef} className="p-6 md:p-12 bg-backgroundColor">
      <figure className="flex flex-col items-center text-center">
        <img
          src={profilePic}
          alt="Dilip Dandi"
          className={`w-56 h-72 object-cover mb-4 shadow-lg items-center justify-center border-4 border-primaryColor transform ${
            isVisible ? 'zoom-out' : ''
          }`}
        />
        <figcaption className="text-3xl font-bold text-textColor">
          <TypingEffect
            text={['DILIP SANTOSH DANDI']}
            speed={100}
            typingDelay={400}
          />
        </figcaption>
        <figcaption className="text-2xl font-bold text-center text-textColor mt-2">
          <TypingEffect
            text={['Web Developer', 'Automation Tester']}
            speed={100}
            typingDelay={200}
          />
        </figcaption>
        <p className="mt-4 text-textColor">
       
I am a passionate software engineer with hands-on experience in web development and automation testing. 
I enjoy creating innovative solutions that enhance user experiences and am particularly skilled in designing 
user-friendly interfaces and efficient back-end systems. My expertise lies in front-end and back-end development,
including a strong foundation in technologies like JavaScript, React, and Node.js, as well as proficiency in 
automation testing frameworks. I am committed to continuous learning and improvement, staying up-to-date with
the latest industry trends and best practices to deliver high-quality, scalable solutions. My dedication to both
individual and team success drives me to consistently seek out new challenges and opportunities for growth.
        </p>
        <li className="mt-6 items-center justify-center">
            <Link
              to="/contact"
              className="button-32 hover:underline"
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
