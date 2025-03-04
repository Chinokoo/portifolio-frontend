import { useState, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { TbTableOff } from "react-icons/tb";
import { useExperienceStore } from "../../store/experienceStore";
import { MdDelete, MdEdit } from "react-icons/md";

const ExperiencePage = () => {
  const { experiences, loading, getExperience } = useExperienceStore();
  // State variable to track modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [experience, setExperience] = useState({});

  useEffect(() => {
    getExperience();
  }, [getExperience]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <AiOutlineLoading className="animate-spin w-40 h-40" />
      </div>
    );
  }

  if (experiences.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-full">
        <TbTableOff className="h-48 w-48 text-red-500" />
        <p className="text-lg text-gray-400 italic">No projects available !</p>
      </div>
    );
  }

  const handleDelete = async (id) => {
    deleteProject(id);
    setIsDelete(false);
  };

  const handleEditButton = (experience) => {
    setExperience(experience);
    setIsModalOpen("true");
  };

  return (
    <div className="">
      <div className="px-2 py-4">
        <table className="w-full table-fixed divide-y divide-gray-700 rounded shadow-md">
          <thead className="bg-[#F5F5F0]">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider hidden lg:block "
                scope="col"
              >
                Company
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider "
                scope="col"
              >
                Job Title
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider hidden lg:block"
                scope="col"
              >
                Description
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider "
                scope="col"
              >
                Starting Date
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider "
                scope="col"
              >
                Ending Date
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider "
                scope="col"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 divide-y divide-gray-700">
            {experiences.map((experience) => (
              <tr className="hover:bg-gray-200" key={experience._id}>
                <td className="px-2 py-2 whitespace-nowrap hidden lg:block">
                  <span className="text-md font-medium text-black">
                    {experience.companyName}
                  </span>
                </td>
                <td className="px-2 py-2 whitespace-nowrap">
                  <span className="text-md font-medium text-black">
                    {experience.jobTitle}
                  </span>
                </td>
                <td className="px-2 py-2  whitespace-nowrap hidden lg:block">
                  <span className="text-md font-medium text-black  overflow-hidden line-clamp-1 text-ellipsis">
                    {experience.description}
                  </span>
                </td>

                <td className="px-2 py-2  whitespace-nowrap ">
                  <span className="text-md font-medium text-black  overflow-hidden">
                    {new Date(experience.startDate).toLocaleString("default", {
                      month: "long",
                    })}
                    ,{new Date(experience.startDate).getFullYear()}
                  </span>
                </td>
                <td className="px-2 py-4 whitespace-nowrap">
                  <div className="flex gap-2">
                    <button
                      className="text-black hover:text-red-500"
                      onClick={() => handleEditButton(experience)}
                    >
                      <MdEdit />
                    </button>
                    <button
                      className="text-black hover:text-red-500"
                      onClick={() => {
                        setExperience(experience);
                        setIsDelete(true);
                      }}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="w-[81%]  bg-[rgba(0,0,0,0.3)] z-20 absolute top-0">
          <div className=" lg:m-4 lg:mb-10 md:mb-20 opacity-100 max-h-full overflow-hidden bg-gray-100 w-full  md:w-2xl  inset-0  z-50 rounded-md lg:relative lg:left-50">
            <div className="flex justify-end">
              <button
                className="px-4 py-2"
                onClick={() => setIsModalOpen(false)}
              >
                <FaXmark className="w-5 h-5" />
              </button>
            </div>
            <EditProject project={project} />
          </div>
        </div>
      )}
      {isDelete && (
        <div className="w-[81%] min-h-screen flex justify-center items-center  bg-[rgba(0,0,0,0.3)] z-20 absolute top-0  ">
          <div className=" mx-4 lg:m-4 lg:mb-20 opacity-100 max-h-full overflow-hidden bg-gray-100 w-full  md:w-md  inset-0  z-50 rounded-md">
            <div className="flex justify-end">
              <button className="px-4 py-2" onClick={() => setIsDelete(false)}>
                <FaXmark className="w-5 h-5" />
              </button>
            </div>
            <h1 className="text-2xl font-bold px-2 text-red-500">
              Delete {project.name} !
            </h1>
            <p className="px-2 py-2 text-sm text-gray-500">
              Are you sure you want to delete this project?
            </p>
            <div className="px-2 flex gap-2">
              <button
                className="w-full py-2 bg-black hover:bg-gray-700  my-5 text-white rounded-md"
                onClick={() => setIsDelete(false)}
              >
                Cancel
              </button>
              <button
                className="w-full py-2 bg-red-500 hover:bg-red-700  my-5 text-white rounded-md"
                onClick={() => handleDelete(project._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ExperiencePage;
