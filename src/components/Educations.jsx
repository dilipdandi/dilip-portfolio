import Education from "./ui/Education";
import { data } from "../data.js";

const Educations = () => {
  const { education } = data;
  return (
    <section className="content w-full py-2 px-4 md:py-4 md:px-4 border rounded-xl">
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-4">
        EDUCATION
      </h1>
      {education.map((edu, index) => (
        <figure key={index} className="mb-4 md:mb-4">
          <Education
            institution={edu.institution}
            degree={edu.degree}
            year={edu.year}
            percentage={edu.percentage}
          />
        </figure>
      ))}
    </section>
  );
};

export default Educations;
