import { useRef, useState } from "react";
import { useProjectStore } from "../../../store/projectStore";

const AddProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [image, setImage] = useState(null);
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  const { loading, addProject } = useProjectStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ name, type, description, liveUrl, githubUrl, image, date });
    setName("");
    setDescription("");
    setGithubUrl("");
    setLiveUrl("");
    setImage(null);
    setType("");
    setDate("");
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const fileInputRef = useRef(null);
  //
  return (
    <div className=" bg-gray-100 shadow-md rounded-md">
      <h3 className="text-2xl font-medium text-center pt-5">Add Project </h3>
      <form className="flex flex-col space-y-5 px-2" onSubmit={handleSubmit}>
        <label htmlFor="name" className="font-medium mb-1.5">
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-black rounded-md p-2"
        />
        <select
          className="border-2  p-2 rounded-md"
          onChange={(e) => setType(e.target.value)}
        >
          <option value={""}>Select the type of project</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
          <option value="mobile">Mobile</option>
        </select>
        <label htmlFor="description" className="font-medium mb-1.5">
          Description
        </label>
        <textarea
          rows={4}
          name="description"
          id="name"
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-black rounded-md p-2"
        />
        <label htmlFor="githubUrl" className="font-medium mb-1.5">
          Github Url
        </label>
        <input
          type="text"
          name="githubUrl"
          id="githubUrl"
          onChange={(e) => setGithubUrl(e.target.value)}
          className="border-2 border-black rounded-md p-2"
        />
        <label htmlFor="liveUrl" className="font-medium mb-1.5">
          Live Url
        </label>
        <input
          type="text"
          name="liveUrl"
          id="liveUrl"
          onChange={(e) => setLiveUrl(e.target.value)}
          className="border-2 border-black rounded-md p-2"
        />
        <label className="font-medium mb-1.5" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={(e) => setDate(e.target.value)}
          className="border-2 border-black rounded-md p-2"
        />
        <div className="mt-1 flex items-center">
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="inline-flex items-center px-4 py-2 border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2"
          >
            UploadImage
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        {image && (
          <div>
            <img src={image} alt="Project" className="mt-2 w-52" />
            <p className="text-sm text-ellipsis overflow-hidden text-black w-[200px] p-2">
              {image}
            </p>
          </div>
        )}

        <button
          className={`${
            !loading
              ? "w-full py-2 bg-black hover:bg-gray-700 my-5 text-white rounded-md"
              : "w-full py-2 bg-black hover:bg-gray-700 opacity-50 cursor-not-allowed my-5 text-white rounded-md"
          } `}
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading. . ." : "Add Project"}
        </button>
      </form>
    </div>
  );
};

export default AddProject;
