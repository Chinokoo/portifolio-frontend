import { useState } from "react";
import { useExperienceStore } from "../../../store/experienceStore";

const AddExperience = () => {
  const [experience, setExperience] = useState({
    companyName: "",
    jobTitle: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const { addExperience, loading } = useExperienceStore();

  const handleExperience = (e) => {
    e.preventDefault();
    addExperience(experience);
    setExperience({
      companyName: "",
      jobTitle: "",
      description: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div className=" bg-gray-300 shadow-md rounded-md">
      <h3 className="text-2xl font-medium text-center mt-5">Add Experience</h3>
      <form
        className="flex flex-col space-y-5 px-2"
        onSubmit={handleExperience}
      >
        <label htmlFor="companyName" className="font-medium mb-1.5">
          Company Name
        </label>
        <input
          type="text"
          name="companyName"
          onChange={(e) =>
            setExperience({ ...experience, companyName: e.target.value })
          }
          className="border-2 border-black rounded-md p-2"
        />
        <label htmlFor="jobTitle" className="font-medium mb-1.5">
          Job Title
        </label>
        <input
          type="text"
          name="jobTitle"
          onChange={(e) =>
            setExperience({ ...experience, jobTitle: e.target.value })
          }
          className="border-2 border-black rounded-md p-2"
        />
        <label htmlFor="description" className="font-medium mb-1.5">
          Description
        </label>
        <textarea
          rows={4}
          name="description"
          id="name"
          onChange={(e) =>
            setExperience({ ...experience, description: e.target.value })
          }
          className="border-2 border-black rounded-md p-2"
        />
        <div className="flex flex-col flex-wrap md:flex-row gap-3 md:gap-5">
          <label className="font-medium mb-1.5" htmlFor="startDate">
            Starting Date
          </label>
          <input
            type="date"
            name="startDate"
            id="date"
            onChange={(e) =>
              setExperience({ ...experience, startDate: e.target.value })
            }
            className="border-2 border-black rounded-md p-2"
          />
          <label className="font-medium mb-1.5" htmlFor="endDate">
            Ending Date
          </label>
          <input
            type="date"
            name="endDate"
            id="date"
            onChange={(e) =>
              setExperience({ ...experience, endDate: e.target.value })
            }
            className="border-2 border-black rounded-md p-2"
          />
        </div>
        <button
          className={`${
            !loading
              ? "w-full py-2 bg-black hover:bg-gray-700 my-5 text-white rounded-md"
              : "w-full py-2 bg-black hover:bg-gray-700 opacity-50 cursor-not-allowed my-5 text-white rounded-md"
          } `}
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading. . ." : "Add Experience"}
        </button>
      </form>
    </div>
  );
};

export default AddExperience;
