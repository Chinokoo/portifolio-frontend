import AddEducation from "./components/addEducation";
import AddExperience from "./components/AddExperience";
import AddProject from "./components/AddProject";

const AddPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 m-5">
      <div className="w-full lg:w-lg">
        <AddProject />
      </div>
      <div className="w-full md:w-lg flex flex-col gap-5">
        <AddEducation />
        <AddExperience />
      </div>
    </div>
  );
};

export default AddPage;
