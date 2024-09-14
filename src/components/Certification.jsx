import Certificate from "./ui/Certificate.jsx";
import { data } from "../data.js";

const Certification = () => {
  const { certificates } = data;
  return (
    <article className="w-full flex flex-col gap-4 bg-backgroundColor px-6 py-6 border border-borderColor rounded-xl md:px-8 md:py-8 lg:px-10 lg:py-10">
      <h1 className="text-xl font-bold text-textColor md:text-2xl lg:text-3xl">
        CERTIFICATIONS
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((item, index) => (
          <Certificate key={index} name={item.name} link={item.link} />
        ))}
      </div>
    </article>
  );
};

export default Certification;
