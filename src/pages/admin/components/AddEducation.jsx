import { useState } from "react";
import { useEducationStore } from "../../../store/educationStore";

const AddEducation = () => {
  const [education, setEducation] = useState({
    name: "",
    type: "",
    description: "",
    yearCompleted: "",
  });

  const { addEducation, loading } = useEducationStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    addEducation(education);
    setEducation({
      name: "",
      type: "",
      description: "",
      yearCompleted: "",
    });
  };
  return (
    <div className=" shadow-md rounded-md bg-[#F5F5F0]">
      <h3 className="text-2xl font-medium text-center mt-5">Add Education</h3>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5 px-2">
        <label htmlFor="name" className="font-medium mb-1.5">
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={(e) => setEducation({ ...education, name: e.target.value })}
          className="border-2 border-black rounded-md p-2"
        />
        <select
          className="border-2  p-2 rounded-md"
          onChange={(e) => setEducation({ ...education, type: e.target.value })}
        >
          <option value={""}>Select the type of education</option>
          <option value="degree">Degree</option>
          <option value="certificate">Certificate</option>
          <option value="diploma">Diploma</option>
        </select>
        <label htmlFor="description" className="font-medium mb-1.5">
          Description
        </label>
        <textarea
          rows={4}
          name="description"
          id="name"
          onChange={(e) =>
            setEducation({ ...education, description: e.target.value })
          }
          className="border-2 border-black rounded-md p-2"
        />
        <label className="font-medium mb-1.5" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          name="date"
          onChange={(e) =>
            setEducation({ ...education, yearCompleted: e.target.value })
          }
          className="border-2 border-black rounded-md p-2"
        />
        <button
          className={`${
            !loading
              ? "w-full py-2 bg-black hover:bg-gray-700 my-5 text-white rounded-md"
              : "w-full py-2 bg-black hover:bg-gray-700 opacity-50 cursor-not-allowed my-5 text-white rounded-md"
          } `}
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading. . ." : "Add Education"}
        </button>
      </form>
    </div>
  );
};

export default AddEducation;
