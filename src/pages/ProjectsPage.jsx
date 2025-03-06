import { FaPython, FaGitAlt, FaEye, FaGithub, FaLaravel } from "react-icons/fa";
import { FaFlutter, FaReact, FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFastapi } from "react-icons/si";
import { BiLogoGoLang, BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { useProjectStore } from "../store/projectStore";
import { useEffect, useState } from "react";

const skills = [
  {
    name: "Flutter",
    icon: FaFlutter,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Javascript",
    icon: IoLogoJavascript,
  },
  {
    name: "Nodejs",
    icon: FaNodeJs,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
  {
    name: "GoLang",
    icon: BiLogoGoLang,
  },
  {
    name: "Nextjs",
    icon: RiNextjsFill,
  },
  {
    name: "SQL",
    icon: BiLogoPostgresql,
  },
  {
    name: "MongoDB",
    icon: BiLogoMongodb,
  },
  {
    name: "Laravel",
    icon: FaLaravel,
  },
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState("all");
  const { projects, getProjects } = useProjectStore();

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.type === filter;
  });

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <div className="overflow-hidden w-full">
      <div className="mb-5">
        <h1 className=" text-3xl font-bold mb-2 px-2 mt-2 hover:text-4xl">
          Tech Stack
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 mx-2">
          {skills.map((skill) => (
            <div
              className="bg-[#F5F5F0] hover:bg-black hover:text-white rounded-md px-4 py-2 mt-5  flex gap-5"
              key={skill.id}
            >
              <skill.icon className="h-7 w-7 hidden md:block" />
              <h1 className="text-lg font-medium">{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className=" text-3xl font-bold mb-2 px-2 mt-2 hover:text-4xl">
          Projects
        </h1>
        <div className="flex gap-5 px-2">
          <button
            className="px-4 py-2 bg-gray-500 hover:bg-gray-700 rounded-full text-white"
            onClick={() => handleFilter("all")}
          >
            all
          </button>
          <button
            className="px-4 py-2 bg-gray-500 hover:bg-gray-700 rounded-full text-white"
            onClick={() => handleFilter("frontend")}
          >
            frontend
          </button>
          <button
            className="px-4 py-2 bg-gray-500 hover:bg-gray-700 rounded-full text-white"
            onClick={() => handleFilter("backend")}
          >
            backend
          </button>
          <button
            className={`px-4 py-2 bg-gray-500 hover:bg-gray-700 rounded-full text-white ${
              filter === "fullstack" ? "bg-black text-white" : ""
            } `}
            onClick={() => handleFilter("fullstack")}
          >
            fullstack
          </button>

          <button
            className="px-4 py-2 bg-gray-500 hover:bg-gray-700 rounded-full text-white font-bold"
            onClick={() => handleFilter("mobile")}
          >
            Mobile
          </button>
        </div>
        <div className="w-full flex  flex-col px-2 gap-5 my-5 mx-2">
          {filteredProjects.length === 0 && (
            <div className="flex justify-center items-center">
              <p>No projects found for {filter} </p>
            </div>
          )}

          {filteredProjects.map((project) => (
            <div
              className="flex flex-col bg-[#F5F5F0] hover:bg-gray-500 shadow-lg hover:text-white md:flex-row gap-5 md:h-[300px] mt-2 rounded-md"
              key={project.name}
            >
              <div className="w-full h-[300px] md:h-full md:w-[400px] flex-shrink-0 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-l-md"
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                />
              </div>
              <div className="overflow-y-auto p-4">
                <h2 className="text-lg font-medium">{project.name}</h2>
                <p className="mt-2">{project.description}</p>
                <div className="flex gap-5 mt-4">
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
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default ProjectsPage;
