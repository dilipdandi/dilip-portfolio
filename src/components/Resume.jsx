import React from "react";

const Resume = () => {
  const handleDownload = () => {
    const resumeContent = document.getElementById("resume-content").innerHTML;
    const originalContent = document.body.innerHTML;

    // Set the body's HTML to only the resume content
    document.body.innerHTML = resumeContent;

    // Trigger the print dialog
    window.print();

    // Restore the original HTML after print
    document.body.innerHTML = originalContent;

    // Ensure React re-renders after modifying the DOM
    window.location.reload();
  };
  return (
    <div className="w-full flex items-center justify-center" id="resume-content">
      <section className="bg-backgroundColor py-10 px-5 md:px-20 border border-borderColor rounded-lg">
        <div className="container mx-auto max-w-5xl bg-backgroundColor p-8 rounded-lg shadow-md">
          <div className="text-center mb-10 flex flex-col gap-4 items-center justify-center">
            <h1 className="text-4xl font-bold text-textColor mb-4">
              Dilip Santosh Dandi
            </h1>
            <p className="text-xl text-textColor">
              Web Developer | Automation Tester
            </p>
            <div>
              <a
                href="dilipdandi4@gmail.com"
                className="text-textColor hover:text-green-400 font-semibold"
              >
                dilipdandi4@gmail.com |
              </a>
              <a
                href="tel-+91 7666833806"
                className="text-textColor hover:text-green-400 font-semibold"
              >
                {" "}
                (+91) 7666833806 |
              </a>
              <a
                href="linkedin.com/in/dilipdandi"
                className="text-textColor hover:text-green-400 font-semibold"
              >
                {" "}
                linkedin.com/in/dilipdandi |
              </a>
              <a
                href="github.com/dilipdandi"
                className="text-textColor hover:text-green-400 font-semibold"
              >
                {" "}
                github.com/dilipdandi
              </a>
            </div>
            <button onClick={handleDownload} className="button-8 w-fit px-6 py-2 bg-backgroundColor text-textColor rounded-lg hover:bg-backgroundColor transition duration-300">
              Download Resume
            </button>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-textColor mb-3">
              Profile Summary
            </h2>
            <p className="text-textColor leading-relaxed">
              Highly poised and dedicated, with a strong talent for design
              principles and robust proficiency in various programming
              languages. Adept at collaborating in dynamic team environments and
              passionate about crafting user-friendly, innovative web solutions.
              Skilled in both front-end and back-end development, Possesses a
              keen eye for detail and a commitment to continuous learning and
              improvement.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-textColor mb-3">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-textColor">
                  Master's in Computer Applications
                </h3>
                <p className="text-textColor">
                  Dr.J.J.Magdum College of Engineering, Jaysingpur, Dist -
                  Kolhapur | 2024
                </p>
                <p className="text-textColor">Percentage:- 69.71% </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-textColor">
                  Bachelor's in Computer Science
                </h3>
                <p className="text-textColor">
                  Mangalvedhekar Institute of Management, Solapur | 2022
                </p>
                <p className="text-textColor">Percentage:- 76.77% </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-textColor">
                  Higher Secondary 12th (Commerce)
                </h3>
                <p className="text-textColor">
                  Kuchan Junior College, Solapur | 2019
                </p>
                <p className="text-textColor">Percentage:- 43.85% </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-textColor">
                  Secondary Education 10th
                </h3>
                <p className="text-textColor">
                  Shri Neelkanteshwar Prashala, Solapur | 2017
                </p>
                <p className="text-textColor">Percentage:- 53.40% </p>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-textColor mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-textColor">
                  HEALTH AND FITNESS TRACKER
                </h3>
                <ul className="list-disc pl-5 mt-2 text-textColor">
                  <li>
                    This Health and Fitness Tracker application is made using
                    reactJs with TalwindCSS for the front end, Node.js for the
                    back end, and MySQL Workbench for the database.
                  </li>
                  <li>
                    Leveraged Node.js to build scalable and secure backend
                    functionalities.
                  </li>
                  <li>
                    Utilized MySQL for efficient and reliable data storage,
                    retrieval, and management, ensuring data integrity and
                    optimal performance.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-textColor">
                  GYM MANAGEMENT SYSTEM
                </h3>
                <ul className="list-disc pl-5 mt-2 text-textColor">
                  <li>
                    Developed a comprehensive Gym Management System using PHP
                    and MySQL, seamlessly integrating all operational aspects to
                    enhance facility management efficiency.
                  </li>
                  <li>
                    Engineered robust functionalities in the Gym Management
                    System to streamline member registration, class scheduling,
                    and payment processing, significantly improving
                    administrative workflows.
                  </li>
                  <li>
                    Leveraged PHP and MySQL to build a scalable Gym Management
                    System, ensuring reliable data handling and operational
                    integration for an improved member and staff experience.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-textColor">
                  Automated E - Commerce Websites (OrangeHRM, Saucedemo,
                  Flipkart, Makemytrip, Indianrailways etc )
                </h3>
                <ul className="list-disc pl-5 mt-2 text-textColor">
                  <li>Technology - Automation Testing (Selenium, TestNG)</li>
                  <li>
                    Implemented & Automated the Website using Automation tool
                    Selenium and TestNG Test Automation framework.
                  </li>
                  <li>
                    Executed the Testcases and updated the status as
                    passes/failed by Report generation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-textColor mb-3">
              Skills
            </h2>
            <div className="flex flex-wrap gap-4">
              {[
                "Core Java",
                "Python",
                "Selenium Webdriver",
                "JavaScript",
                "React",
                "HTML",
                "CSS",
                "PHP",
                "MySQL",
                "Automation Testing",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-backgroundColor text-textColor rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-textColor">
              Certifications
            </h2>
            <ul className="list-disc pl-5 text-textColor">
              <li>Python For Data Science - IBM</li>
              <li>Java Mastery Intermediate - Udemy</li>
              <li>Javascript with HTML5, CSS3 - Udemy</li>
              <li>
                Selenium Webdriver With Java & TestNG Testung Framework -Udemy
              </li>
              <li>Agile Methodology Virtual Experience Program - Cognizant</li>
              <li>Mastering C & C++ Programming -Udemy</li>
              <li>Web Development - MERN Stack - Udemy</li>
              <li>Selenium Essential Training - Linkedin</li>
              <li>Python For Data Science - IBM</li>
              <li>Java Webdriver Automation: Mastering Selenium Web Testing</li>
              <li>Communication Skills - TCS ION</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-textColor">Interests</h2>
            <div className="flex flex-wrap gap-4">
              {["Travelling", "Cooking", "Googling", "Video Gaming"].map(
                (interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-backgroundColor text-textColor rounded-full"
                  >
                    {interest}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
