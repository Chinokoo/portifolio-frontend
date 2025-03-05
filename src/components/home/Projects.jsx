import { FaEye, FaGithub } from "react-icons/fa";
import Header from "./Header";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useProjectStore } from "./../../store/projectStore";
import { useEffect } from "react";

const Projects = () => {
  const { getRecommendedProjects, projects } = useProjectStore();
  useEffect(() => {
    getRecommendedProjects();
  }, [getRecommendedProjects]);

  if (projects.length === 0) {
    return (
      <div className="w-full h-20 flex justify-center">
        <p className="text-sm text-gray-500">No projects Available!</p>
      </div>
    );
  }
  return (
    <div>
      {/* project section */}
      <div>
        <Header headingText={"Projects"} />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              className="card mb-5 shadow-md bg-[#F5F5F0] w-full  px-5 py-2 mt-2 rounded-md"
              key={project.name}
            >
              <div className="w-full max-h-[800px]">
                <img
                  className="object-contain w-full max-h-[200px] rounded-lg"
                  src={project.image}
                  alt="project"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold underline py-2 tracking-wider hover:text-gray-500 ">
                  {project.name}
                </h1>
                <p className="text-gray-400 font-bold">
                  {new Date(project.date).getFullYear()}{" "}
                  {new Date(project.date).toLocaleString("default", {
                    month: "long",
                  })}
                </p>
                <div className="w-[90%]  overflow-hidden">
                  <p className="text-sm  text-ellipsis line-clamp-3 text-gray-500">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5 mt-5">
                {project.liveUrl && (
                  <a
                    target="_blank"
                    href={project.liveUrl}
                    className="bg-black text-white px-4 py-2 hover:bg-white hover:text-black border border-black rounded-md flex flex-row gap-2"
                  >
                    <FaEye size={24} />
                    live url
                  </a>
                )}
                <a
                  target="_blank"
                  href={project.githubUrl}
                  className="bg-black text-white px-4 py-2 hover:bg-white hover:text-black border border-black rounded-md flex flex-row gap-2"
                >
                  <FaGithub size={24} />
                  github
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end mb-10 px-2">
          <Link
            className="text-sm text-gray-400 flex flex-row gap-2 hover:text-gray-200"
            to={"/projects"}
          >
            <p className="text-sm">All Projects</p>
            <FaArrowRightLong size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
