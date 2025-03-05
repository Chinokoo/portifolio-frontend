import { PiProjectorScreenChartThin } from "react-icons/pi";
import { MdAddCircle, MdOutlineSchool } from "react-icons/md";
import { BsWrenchAdjustable } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { useState } from "react";
import AddPage from "./AddPage";
import { FaXmark } from "react-icons/fa6";
import ProjectsPage from "./ProjectsPage";
import ExperiencePage from "./ExperiencePage";
import EducationPage from "./EducationPage";
import { useAuthStore } from "../../store/authStore";

const AdminHomePage = () => {
  const [isTab, setIsTab] = useState("add");
  const { logOut } = useAuthStore();
  const [logOutModal, setLogOutModal] = useState(false);

  const handleLogout = () => {
    logOut();
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
              onClick={() => setLogOutModal(true)}
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
      {logOutModal && (
        <div className="w-[90%] min-h-screen flex justify-center items-center  bg-[rgba(0,0,0,0.3)] z-20 absolute top-0  ">
          <div className=" mx-4 lg:m-4 lg:mb-20 opacity-100 max-h-full overflow-hidden bg-gray-100 w-full  md:w-md  inset-0  z-50 rounded-md">
            <div className="flex justify-end">
              <button
                className="px-4 py-2"
                onClick={() => setLogOutModal(false)}
              >
                <FaXmark className="w-5 h-5" />
              </button>
            </div>
            <h1 className="text-2xl font-bold px-2 text-red-500">Log Out!</h1>
            <p className="px-2 py-2 text-sm text-gray-500">
              Are you sure you want to log out?
            </p>
            <div className="px-2 flex gap-2">
              <button
                className="w-full py-2 bg-black hover:bg-gray-700  my-5 text-white rounded-md"
                onClick={() => setLogOutModal(false)}
              >
                Cancel
              </button>
              <button
                className="w-full py-2 bg-red-500 hover:bg-red-700  my-5 text-white rounded-md"
                onClick={handleLogout}
              >
                logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHomePage;
