import React from "react";

const Education = ({ institution, degree, year, percentage }) => {
  return (
    <article className="content border px-4 py-4 rounded-xl md:px-6 md:py-6 lg:px-8 lg:py-8">
      <h2 className="text-xs md:text-sm lg:text-base font-bold ">{institution}</h2>
      <p className="text-xs md:text-sm lg:text-base text-black-600 ">{year}</p>
      <h3 className="text-xs md:text-sm lg:text-base ">{degree}</h3>
      <p className="text-xs md:text-sm lg:text-base">{percentage}</p>
    </article>
  );
};

export default Education;
