import Project from "./ui/project.jsx";
import { data } from "../data.js";

const Projects = () => {
  const { projects } = data;
  return (
    <article className="w-full flex flex-col gap-4 bg-backgroundColor border border-borderColor px-6 py-4 rounded-xl md:px-8 md:py-8 lg:px-6  lg:py-6">
      <h2 className="text-xl font-bold text-textColor md:text-2xl lg:text-3xl">
        PROJECTS
      </h2>
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-4">
        {projects.map((item, index) => (
          <Project
            key={index}
            name={item.name}
            gitLink={item.gitLink}
            link={item.link}
          />
        ))}
      </div>
    </article>
  );
};

export default Projects;
