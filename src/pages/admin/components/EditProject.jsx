import { useRef, useState } from "react";
import { useProjectStore } from "../../../store/projectStore";
import { PropTypes } from "prop-types";

const EditProject = ({ project }) => {
  const id = project._id;
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [githubUrl, setGithubUrl] = useState(project.githubUrl);
  const [liveUrl, setLiveUrl] = useState(project.liveUrl);
  const [image, setImage] = useState(project.image);
  const [type, setType] = useState(project.type);
  const [date, setDate] = useState(project.date);

  const { updateProject, loading } = useProjectStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    console.log({
      id,
      name,
      type,
      description,
      liveUrl,
      githubUrl,
      image,
      date,
    });
    updateProject({
      id,
      name,
      type,
      description,
      liveUrl,
      githubUrl,
      image,
      date,
    });
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
      <h3 className="text-2xl font-medium text-center pt-5">Edit Project </h3>
      <form className="flex flex-col space-y-5 px-2" onSubmit={handleSubmit}>
        {/* div for name and select component */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-25 mt-2">
          <div>
            <label htmlFor="name" className="font-medium mb-1.5 mr-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-black rounded-md p-2 w-full "
            />
          </div>
          <select
            className="border-2  rounded-md py-2 md:mt-5 md:h-12"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value={""}>Select the type of project</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
        <label htmlFor="description" className="font-medium mb-1.5">
          Description
        </label>
        <textarea
          rows={4}
          name="description"
          id="name"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-black rounded-md p-2"
        />
        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <label htmlFor="githubUrl" className="font-medium mb-1.5 mr-1">
              Github Url
            </label>
            <input
              type="text"
              name="githubUrl"
              id="githubUrl"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              className="border-2 border-black rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="liveUrl" className="font-medium mb-1.5 mr-1">
              Live Url
            </label>
            <input
              type="text"
              name="liveUrl"
              id="liveUrl"
              value={liveUrl}
              onChange={(e) => setLiveUrl(e.target.value)}
              className="border-2 border-black rounded-md p-2"
            />
          </div>
        </div>
        <label className="font-medium mb-1.5" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border-2 border-black rounded-md p-2"
        />
        <div className="flex">
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
              {/* <img src={image} alt="Project" className="mt-2 w-52" /> */}
              <p className="text-sm text-ellipsis overflow-hidden text-black w-[200px] p-2">
                {image}
              </p>
            </div>
          )}
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
          {loading ? "Loading. . ." : "Update Project"}
        </button>
      </form>
    </div>
  );
};

export default EditProject;

EditProject.propTypes = {
  project: PropTypes.object.isRequired,
};
