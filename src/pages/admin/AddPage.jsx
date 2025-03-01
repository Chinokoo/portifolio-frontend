import AddEducation from "./components/addEducation";
import AddExperience from "./components/AddExperience";
import AddProject from "./components/AddProject";

const AddPage = () => {
  return (
    <div className="flex flex-col overflow-hidden md:flex-row md:gap-5 md:m-5">
      <div className="flex-1">
        <AddProject />
      </div>
      <div className="flex flex-col gap-5">
        <AddEducation />
        <AddExperience />
      </div>
    </div>
  );
};

export default AddPage;
