import React from "react";

const Project = ({ name, gitLink }) => {
  return (
    <figure className="flex flex-col md:flex-row justify-between items-center text-center bg-backgroundColor rounded-sm bg-highlightBg border border-backgroundColor p-4 md:px-6 md:py-3">
      <h2 className="text-textColor uppercase decoration-secondary font-semibold cursor-default text-lg md:text-xl rounded-lg  px-1 py-2 border border-borderColor">
        {name}
      </h2>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-2 md:mt-0">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={gitLink}
          className="button-32 text-center"
        >
          Github Link
        </a>
      </div>
    </figure>
  );
};

export default Project;
