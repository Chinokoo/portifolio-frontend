import { FaPython, FaGitAlt, FaEye, FaGithub } from "react-icons/fa";
import { FaFlutter, FaReact, FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoGoLang, BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { useProjectStore } from "../store/projectStore";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

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
      <div className="my-5">
        <div className="">
          <Carousel responsive={responsive}>
            {skills.map((skill) => (
              <div
                className="bg-[#F5F5F0] hover:bg-black hover:text-white rounded-md px-4 py-2 mx-2 flex gap-4"
                key={skill.id}
              >
                <skill.icon className="h-7 w-7 hidden md:block" />
                <h1 className="text-lg font-medium">{skill.name}</h1>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div>
        <h1 className=" text-3xl font-bold mb-2 px-2 mt-2 hover:text-4xl">
          Projects
        </h1>
        <div className="">
          <select
            value={filter}
            onChange={(e) => handleFilter(e.target.value)}
            className="px-4 py-2"
          >
            <option value="all">All</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
            <option value="mobile">Mobile</option>
          </select>
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
