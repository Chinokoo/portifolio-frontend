import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="w-full h-[80vh] flex flex-col md:flex-row md:justify-center gap-20 ">
        <div className="text-center md:text-left  flex flex-col  justify-center">
          <h1 className="text-5xl font-bold mb-5 mt-2 hover:text-6xl">
            Hi, I&apos;m Peter
          </h1>
          <p className="text-4xl mb-1.5">
            Software Engineer
            <br /> based in Johannesburg,SA
          </p>
          <p className="text-lg text-gray-400">
            Creating Unforgettable Experiences in the Digital Space
          </p>
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
        <div className="border mt-2 md:mt-5 rounded  md:rounded-full border-[#F5F5F0] bg-[#F5F5F0]">
          <img
            className="object-contain w-full h-auto "
            src="/peter.png"
            alt="me"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
