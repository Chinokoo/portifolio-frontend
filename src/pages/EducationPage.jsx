import { useEducationStore } from "./../store/educationStore";
import { useEffect } from "react";

const EducationPage = () => {
  const { educations, getEducation } = useEducationStore();

  useEffect(() => {
    getEducation();
  }, [getEducation]);
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row md:justify-center gap-10 my-5">
        <h2 className="text-3xl md:w-md lg:w-lg font-bold text-center md:text-left  mt-2 hover:text-3xl">
          My Educational Background
        </h2>
        <div>
          <div className="grid grid-rows-3 gap-5 px-2">
            {educations.map((education) => (
              <div
                key={education._id}
                className="card rounded bg-[#F5F5F0] hover:bg-gray-300 px-4 py-2 shadow-md"
              >
                <div className="flex justify-between">
                  <h3 className="font-bold text-2xl ">{education.name}</h3>
                  <span className="italic font-bold">
                    {new Date(education.yearCompleted).getFullYear()}
                    {", "}
                    {new Date(education.yearCompleted).toLocaleString(
                      "default",
                      {
                        month: "long",
                      }
                    )}{" "}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{education.type}</p>
                <p className="text-md text-gray-500">{education.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
