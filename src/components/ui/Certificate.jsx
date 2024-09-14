import React from "react";

const Certificate = ({ name, link }) => {
  return (
    <figure className="flex flex-col md:flex-row justify-between items-center px-4 py-4 border border-borderColor rounded-xl bg-backgroundColor">
      <h2 className="text-textColor font-semibold cursor-default text-center md:text-left mb-2 md:mb-0">
        {name}
      </h2>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className="button-8 mt-2 md:mt-0"
      >
        View
      </a>
    </figure>
  );
};

export default Certificate;
