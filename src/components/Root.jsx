import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Root = () => {
  return (
    <section className="flex flex-col gap-2 justify-between items-start h-screen bg-[#181818] pt-[5rem] w-screen">
      <Header />
      <Outlet />
      <Footer/>
    </section>
  );
};

export default Root;
