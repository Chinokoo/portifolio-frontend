const AddExperience = () => {
  return (
    <div className="w-full bg-gray-300 shadow-md rounded-md">
      <h3 className="text-2xl font-medium text-center mt-5">Add Experience</h3>
      <form className="flex flex-col space-y-5 px-2">
        <label htmlFor="companyName" className="font-medium mb-1.5">
          Company Name
        </label>
        <input
          type="text"
          name="companyName"
          //onChange={(e) => setName(e.target.value)}
          className="border-2 border-black rounded-md p-2"
        />
        <label htmlFor="jobTitle" className="font-medium mb-1.5">
          Job Title
        </label>
        <input
          type="text"
          name="jobTitle"
          //onChange={(e) => setName(e.target.value)}
          className="border-2 border-black rounded-md p-2"
        />
        <label htmlFor="description" className="font-medium mb-1.5">
          Description
        </label>
        <textarea
          rows={4}
          name="description"
          id="name"
          //onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-black rounded-md p-2"
        />
        <div className="flex gap-5">
          <label className="font-medium mb-1.5" htmlFor="startDate">
            Starting Date
          </label>
          <input
            type="date"
            name="startDate"
            id="date"
            //onChange={(e) => setDate(e.target.value)}
            className="border-2 border-black rounded-md p-2"
          />
          <label className="font-medium mb-1.5" htmlFor="endDate">
            Ending Date
          </label>
          <input
            type="date"
            name="endDate"
            id="date"
            //onChange={(e) => setDate(e.target.value)}
            className="border-2 border-black rounded-md p-2"
          />
        </div>
        <button
          className="w-full py-2 bg-black hover:bg-gray-700 my-5 text-white rounded-md"
          type="submit"
        >
          Add Experience
        </button>
      </form>
    </div>
  );
};

export default AddExperience;
