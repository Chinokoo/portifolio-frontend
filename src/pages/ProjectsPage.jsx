import { FaPython, FaGitAlt, FaEye, FaGithub, FaLaravel } from "react-icons/fa";
import { FaFlutter, FaReact, FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFastapi } from "react-icons/si";
import { BiLogoGoLang, BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

const projects = [
  {
    name: "KJV BIBLE",
    image: "/images/kjv.png",
    type: "frontend",
    date: "October 2023",
    githubUrl: "https://github.com/Chinokoo",
    liveUrl: "",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ametcommodi quo minima non veritatis eius, et aliquid oditeligendi soluta. Lorem ipsum dolor sit amet consectetur,adipisicing elit. Animi reprehenderit natus similique ab iste magni voluptate fuga ducimus rerum molestiae.",
  },
  {
    name: "ECOMMERCE",
    image: "/images/mens_wear_screenshot.png",
    type: "frontend",
    date: "October 2023",
    githubUrl: "https://github.com/Chinokoo",
    liveUrl: "https://ecommerce-web-app-frontend-ashy.vercel.app/",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ametcommodi quo minima non veritatis eius, et aliquid oditeligendi soluta. Lorem ipsum dolor sit amet consectetur,adipisicing elit. Animi reprehenderit natus similique ab iste magni voluptate fuga ducimus rerum molestiae.",
  },
  {
    name: "PETER GAMES",
    image: "/images/peter-games.png",
    type: "frontend",
    date: "October 2023",
    githubUrl: "https://github.com/Chinokoo",
    liveUrl: "https://ecommerce-web-app-frontend-ashy.vercel.app/",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ametcommodi quo minima non veritatis eius, et aliquid oditeligendi soluta. Lorem ipsum dolor sit amet consectetur,adipisicing elit. Animi reprehenderit natus similique ab iste magni voluptate fuga ducimus rerum molestiae.",
  },
  {
    name: "PETER GAMES",
    image: "/images/peter-games.png",
    type: "frontend",
    date: "October 2023",
    githubUrl: "https://github.com/Chinokoo",
    liveUrl: "https://ecommerce-web-app-frontend-ashy.vercel.app/",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ametcommodi quo minima non veritatis eius, et aliquid oditeligendi soluta. Lorem ipsum dolor sit amet consectetur,adipisicing elit. Animi reprehenderit natus similique ab iste magni voluptate fuga ducimus rerum molestiae.",
  },
  {
    name: "PETER GAMES",
    image: "/images/peter-games.png",
    type: "frontend",
    date: "October 2023",
    githubUrl: "https://github.com/Chinokoo",
    liveUrl: "https://ecommerce-web-app-frontend-ashy.vercel.app/",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ametcommodi quo minima non veritatis eius, et aliquid oditeligendi soluta. Lorem ipsum dolor sit amet consectetur,adipisicing elit. Animi reprehenderit natus similique ab iste magni voluptate fuga ducimus rerum molestiae.",
  },
  {
    name: "PETER GAMES",
    image: "/images/peter-games.png",
    type: "frontend",
    date: "October 2023",
    githubUrl: "https://github.com/Chinokoo",
    liveUrl: "https://ecommerce-web-app-frontend-ashy.vercel.app/",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ametcommodi quo minima non veritatis eius, et aliquid oditeligendi soluta. Lorem ipsum dolor sit amet consectetur,adipisicing elit. Animi reprehenderit natus similique ab iste magni voluptate fuga ducimus rerum molestiae.",
  },
];

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
    name: "PHP",
    icon: FaLaravel,
  },
];

const ProjectsPage = () => {
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
              <skill.icon className="h-7 w-7" />
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
          <span className="px-4 py-2 bg-gray-500 rounded-full text-white">
            all
          </span>
          <span className="px-4 py-2 bg-gray-500 rounded-full text-white">
            frontend
          </span>
          <span className="px-4 py-2 bg-gray-500 rounded-full text-white">
            backend
          </span>
          <span className="px-4 py-2 bg-gray-500 rounded-full text-white">
            fullstack
          </span>
        </div>
        <div className="w-full flex  flex-col px-2 gap-5 my-5 mx-2">
          {projects.map((project) => (
            <div
              className="flex flex-col bg-[#F5F5F0] hover:bg-gray-500 shadow-lg hover:text-white md:flex-row gap-5  mt-2 rounded-md"
              key={project.name}
            >
              <div>
                <img
                  className="w-full md:w-full max-h-122  rounded-l-md  object-cover"
                  src={project.image}
                  alt={project.name}
                />
              </div>
              <div className="px-5 py-4">
                <h2 className="text-lg font-medium">{project.name}</h2>
                <p className="">{project.description}</p>
                <div className="flex gap-5 px-2 py-4">
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
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
