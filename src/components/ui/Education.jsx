import React from "react";

const Education = ({ institution, degree, year, percentage }) => {
  return (
    <article className="px-4 py-4 border border-borderColor bg-backgroundColor rounded-xl md:px-6 md:py-6 lg:px-8 lg:py-8">
      <h2 className="text-xs md:text-sm lg:text-base font-bold text-textColor">{institution}</h2>
      <p className="text-xs md:text-sm lg:text-base text-black-600 text-textColor">{year}</p>
      <h3 className="text-xs md:text-sm lg:text-base text-textColor">{degree}</h3>
      <p className="text-xs md:text-sm lg:text-base text-textColor">{percentage}</p>
    </article>
  );
};

export default Education;
