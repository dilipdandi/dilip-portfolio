import React from "react";
import {data} from "../data.js"
import Education from "./ui/Education.jsx";
import Project from "./ui/project.jsx";
import Certificate from "./ui/Certificate.jsx";

const Resume = () => {

  const {education} = data;
  const {skills} = data;
  const {interpersonalSkills} = data;
  const {projects} = data;
  const {certificates} = data;

  const handleDownload = () => {
    const resumeContent = document.getElementById("resume-content").innerHTML;

    const printWindow = window.open("", "", "width=800,height=600");

    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Resume</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
          </style>
        </head>
        <body>
          ${resumeContent}
        </body>
      </html>
    `);
    printWindow.document.close();

    printWindow.onload = () => {
      printWindow.print();
      printWindow.onafterprint = () => {
        printWindow.close();
      };
    };
  };

  return (
    <div className="content w-full flex items-center justify-center" id="resume-content">
      <section className="content py-10 px-5 md:px-20 rounded-lg">
        <div className="content container mx-auto max-w-5xl border p-8 rounded-lg shadow-md">
          <div className="text-center mb-10 flex flex-col gap-4 items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">
              Dilip Santosh Dandi
            </h1>
            <p className="text-xl">
              Web Developer | Automation Tester
            </p>
            <div>
              <a
                href="mailto:dilipdandi4@gmail.com"
                className="hover:text-green-400 font-semibold"
              >
                dilipdandi4@gmail.com |
              </a>
              <a
                href="tel:+917666833806"
                className="hover:text-green-400 font-semibold"
              >
                {" "}(+91) 7666833806 |
              </a>
              <a
                href="https://linkedin.com/in/dilipdandi"
                className="hover:text-green-400 font-semibold"
              >
                {" "}linkedin.com/in/dilipdandi |
              </a>
              <a
                href="https://github.com/dilipdandi"
                className="hover:text-green-400 font-semibold"
              >
                {" "}github.com/dilipdandi
              </a>
            </div>
            <button onClick={handleDownload} className="button-8 w-fit px-6 py-2 rounded-lg transition duration-300">
              Download Resume
            </button>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              Profile Summary
            </h2>
            <p className="leading-relaxed">
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
            <h2 className="text-2xl font-semibold mb-3">
              Education
            </h2>
            {education.map((edu) => (
              <figure key={edu.degree}>
                <Education
                institution={edu.institution}
                degree={edu.degree}
                year={edu.year}
                percentage={edu.percentage}
                />

              </figure>
            ))}
            
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              Projects
            </h2>
            {projects.map((item) =>(
              <figure className="flex flex-col my-4">
              <Project
              key={item.name}
              name={item.name}
              gitLink={item.gitLink}
              />
              </figure>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              Skills
            </h2>
            {skills.map((skill,idx) =>{
              return(
                <div key={idx} className="flex items-center justify-center w-full bg-highlightBg px-4 py-2 border rounded-xl">
                  <p>{skill.name}</p>
                </div>
              )
            })}
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              INTERPERSONAL Skills
            </h2>
            {interpersonalSkills.map((skill,idx) =>{
              return(
                <div key={idx} className="flex items-center justify-center w-full bg-highlightBg px-4 py-2 border rounded-xl">
                  <p className="w-full flex flex-col text-center">{skill.name}</p>
                </div>
              )
            })}
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">
              Certifications
            </h2>
              {certificates.map((item) => (
                <figure className="flex flex-col my-4">
               <Certificate 
               key={item.link} 
               name={item.name}
               link={item.link} 
               />
               </figure>
              ))}
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Interests</h2>
            <div className="flex flex-wrap gap-4">
              {["Travelling", "Cooking", "Googling", "Video Gaming"].map(
                (interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 rounded-full"
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
