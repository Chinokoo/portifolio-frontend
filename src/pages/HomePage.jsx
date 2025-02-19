import { Link } from "react-router-dom";
import AboutSection from "../components/home/AboutSection";
import Projects from "./../components/home/Projects";
import Footer from "../components/home/Footer";

import ExperienceSection from "../components/home/ExperienceSection";

const HomePage = () => {
  return (
    <>
      {/* hero section container -start */}
      <div className="w-full h-[80%] flex flex-col md:flex-row md:justify-center gap-20 mb-10 overflow-hidden ">
        <div className="text-center md:text-left  flex flex-col  justify-center">
          {/* hero text */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 mt-2 transform transition-transform duration-500 cursor-pointer">
            Hi, I&apos;m Peter
          </h1>
          <p className="text-4xl mb-1.5">
            Software Engineer
            <br /> based in Johannesburg,SA
          </p>
          <p className="text-lg text-gray-400">
            Creating Unforgettable Experiences in the Digital Space
          </p>
          {/* hero buttons */}
          <div className="flex flex-row gap-5 justify-center md:justify-start mt-5">
            <Link
              className="bg-black text-white px-3 py-2 rounded-md hover:bg-[#F5F5F0] hover:text-black"
              to={"/contact"}
            >
              Talk with Me
            </Link>
            <Link
              className="border border-gray-400  px-3 py-2 rounded-md hover:bg-[#F5F5F0]"
              to={"/projects"}
            >
              View My Work
            </Link>
          </div>
        </div>
        {/* image container */}
        <div className="border mt-2 md:mt-5 rounded shadow-md  md:rounded-full border-[#F5F5F0] bg-[#F5F5F0] hover:bg-gray-200">
          <img className=" w-3/4 " src="/peter.png" alt="me" />
        </div>
      </div>
      {/* hero section container - end */}
      <AboutSection />

      {/* projects section */}
      <Projects />
      {/* experience section  */}
      <ExperienceSection />

      {/* footer */}
      <Footer />
    </>
  );
};

export default HomePage;
