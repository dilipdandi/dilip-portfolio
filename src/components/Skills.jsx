import { data } from "../data.js";

const Skills = () => {
  const { skills } = data;
  const { interpersonalSkills } = data;
  return (
    <article className="w-full flex flex-col gap-4 bg-backgroundColor border border-borderColor px-4 py-4 rounded-lg md:px-2 md:py-2 lg:px-8 lg:py-4">
      <h2 className="text-xl font-bold text-textColor sm:text-2xl lg:text-3xl">TECHNICAL SKILLS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, idx) => {
          return (
            <div
              key={idx}
              className="flex items-center justify-center w-full bg-highlightBg px-4 py-2 border border-borderColor rounded-xl"
            >
              <p className="text-textColor cursor-default text-center">{skill.name}</p>
            </div>
          );
        })}
      </div>
      <hr className="border-borderColor" />
      <h2 className="text-xl font-bold text-textColor sm:text-2xl lg:text-3xl">INTERPERSONAL SKILLS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {interpersonalSkills.map((skill, idx) => {
          return (
            <div
              key={idx}
              className="flex items-center justify-center w-full bg-highlightBg px-4 py-2 border border-borderColor rounded-xl"
            >
              <p className="text-textColor cursor-default text-center">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Skills;
