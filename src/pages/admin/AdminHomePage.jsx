import { PiProjectorScreenChartThin } from "react-icons/pi";
import { MdAddCircle, MdOutlineSchool } from "react-icons/md";
import { BsWrenchAdjustable } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { useState } from "react";
import AddPage from "./AddPage";
import ProjectsPage from "./ProjectsPage";
import ExperiencePage from "./ExperiencePage";
import EducationPage from "./EducationPage";

const AdminHomePage = () => {
  const [isTab, setIsTab] = useState("add");

  const handleLogout = () => {
    console.log("logout");
  };
  return (
    <div className="min-h-screen w-full flex">
      <div className=" w-2/12 bg-[#F5F5F0] shadow-md min-h-screen">
        <ul className="w-full mt-10">
          <li>
            <button
              className={`flex group w-full gap-2 items-center px-4 py-2 hover:bg-gray-500 ${
                isTab === "add" ? "bg-black text-white" : ""
              } hover:text-white `}
              onClick={() => setIsTab("add")}
            >
              <MdAddCircle className="group-hover:animate-ping" size={20} />
              <h2 className="font-medium hidden md:block ">Add</h2>
            </button>
          </li>
          <li>
            <button
              className={`flex group w-full gap-2 items-center px-4 py-2 hover:bg-gray-500 ${
                isTab === "projects" ? "bg-black text-white" : ""
              } hover:text-white `}
              onClick={() => setIsTab("projects")}
            >
              <PiProjectorScreenChartThin
                className="group-hover:animate-bounce"
                size={20}
              />
              <h2 className="font-medium hidden md:block">Projects</h2>
            </button>
          </li>
          <li>
            <button
              className={`flex group w-full gap-2 items-center px-4 py-2 hover:bg-gray-500 ${
                isTab === "experience" ? "bg-black text-white" : ""
              } hover:text-white `}
              onClick={() => setIsTab("experience")}
            >
              <BsWrenchAdjustable size={20} />
              <h2 className="font-medium hidden md:block">Experience</h2>
            </button>
          </li>
          <li>
            <button
              className={`flex group w-full gap-2 items-center px-4 py-2 hover:bg-gray-500 ${
                isTab === "education" ? "bg-black text-white" : ""
              } hover:text-white `}
              onClick={() => setIsTab("education")}
            >
              <MdOutlineSchool
                className="group-hover:animate-bounce"
                size={20}
              />
              <h2 className="font-medium hidden md:block">Education</h2>
            </button>
          </li>
          <li>
            <button
              className={`flex group w-full gap-2 items-center px-4 py-2 hover:bg-gray-500 ${
                isTab === "logout" ? "bg-black text-white" : ""
              } hover:text-white `}
              onClick={() => handleLogout}
            >
              <AiOutlineLogout
                className="group-hover:animate-pulse"
                size={20}
              />
              <h2 className="font-medium hidden md:block">Log out</h2>
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        {isTab === "add" && <AddPage />}
        {isTab === "projects" && <ProjectsPage />}
        {isTab === "experience" && <ExperiencePage />}
        {isTab === "education" && <EducationPage />}
      </div>
    </div>
  );
};

export default AdminHomePage;
