import { Link } from "react-router-dom";
import AboutSection from "../components/home/AboutSection";
import Projects from "./../components/home/Projects";
import Footer from "../components/home/Footer";

const HomePage = () => {
  return (
    <>
      {/* hero section container -start */}
      <div className="w-full h-[80%] flex flex-col md:flex-row md:justify-center gap-20 mb-10 ">
        <div className="text-center md:text-left  flex flex-col  justify-center">
          {/* hero text */}
          <h1 className="text-5xl font-bold mb-5 mt-2 hover:text-6xl cursor-pointer">
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
        <div className="border mt-2 md:mt-5 rounded  md:rounded-full border-[#F5F5F0] bg-[#F5F5F0]">
          <img className=" w-3/4 " src="/peter.png" alt="me" />
        </div>
      </div>
      {/* hero section container - end */}
      <AboutSection />

      {/* projects section */}
      <Projects />
      {/* experience section  */}
      <div className="w-full flex flex-col md:flex-row md:justify-center gap-20 mb-10">
        <h1 className="text-3xl font-bold mb-5 mt-2 hover:text-4xl">
          Experience
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="border shadow-md rounded-md p-5">
            <h2 className="text-lg font-bold mb-2">Software Engineer</h2>
            <p className="text-gray-400">ABC Company (2020-2022)</p>
            <ul className="list-disc list-inside text-gray-400">
              <li>
                Designed and developed multiple web applications using React and
                Node.js
              </li>
              <li>
                Collaborated with cross-functional teams to identify and
                prioritize project requirements
              </li>
              <li>
                Implemented automated testing and deployment scripts using Jest
                and CircleCI
              </li>
            </ul>
          </div>
          <div className="border shadow-md rounded-md p-5">
            <h2 className="text-lg font-bold mb-2">Front-end Developer</h2>
            <p className="text-gray-400"> DEF Agency (2018-2020)</p>
            <ul className="list-disc list-inside text-gray-400">
              <li>
                Developed responsive and interactive web applications using
                HTML, CSS, and JavaScript
              </li>
              <li>
                Worked with designers to implement visually appealing and
                user-friendly interfaces
              </li>
              <li>
                Optimized website performance using caching, minification, and
                compression techniques
              </li>
            </ul>
          </div>
          <div className="border shadow-md rounded-md p-5">
            <h2 className="text-lg font-bold mb-2">Intern</h2>
            <p className="text-gray-400">GHI Startup (Summer 2018)</p>
            <ul className="list-disc list-inside text-gray-400">
              <li>
                Assisted in the development of a mobile app using React Native
              </li>
              <li>
                Contributed to the design and implementation of a RESTful API
                using Node.js and Express
              </li>
              <li>
                Participated in code reviews and ensured high-quality code
                standards
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default HomePage;
