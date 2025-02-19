import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";

const Root = () => {
  return (
    <section className="flex flex-col gap-2 justify-between items-start h-screen bg-[#181818] pt-[5rem] w-screen">
    <Section>
      <Header />
       <Outlet />
      </Section>
      <Footer/>
    </section>
  );
};

export default Root;
