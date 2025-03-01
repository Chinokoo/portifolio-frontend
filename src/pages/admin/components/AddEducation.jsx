const AddEducation = () => {
  const loading = false;
  return (
    <div className="w-full shadow-md rounded-md bg-[#F5F5F0]">
      <h3 className="text-2xl font-medium text-center mt-5">Add Education</h3>
      <form className="flex flex-col space-y-5 px-2">
        <label htmlFor="name" className="font-medium mb-1.5">
          Name
        </label>
        <input
          type="text"
          name="name"
          //onChange={(e) => setName(e.target.value)}
          className="border-2 border-black rounded-md p-2"
        />
        <select
          className="border-2  p-2 rounded-md"
          //onChange={(e) => setType(e.target.value)}
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
          //onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-black rounded-md p-2"
        />
        <label className="font-medium mb-1.5" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          name="date"
          //onChange={(e) => setDate(e.target.value)}
          className="border-2 border-black rounded-md p-2"
        />
        <button
          className="w-full py-2 bg-black hover:bg-gray-700 my-5 text-white rounded-md"
          type="submit"
        >
          {loading ? "Loading. . ." : "Add Education"}
        </button>
      </form>
    </div>
  );
};

export default AddEducation;
