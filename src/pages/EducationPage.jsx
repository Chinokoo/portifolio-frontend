import { useEducationStore } from "./../store/educationStore";
import { useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const EducationPage = () => {
  const { educations, loading, getEducation } = useEducationStore();

  useEffect(() => {
    getEducation();
  }, [getEducation]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-5">
          <AiOutlineLoading className="h-20 w-20 animate-spin" />
          <h1 className="text-2xl font-bold">Loading please wait...</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      {educations.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold">No Education Found !</h1>
        </div>
      ) : (
        <div className="w-full flex flex-col md:flex-row md:justify-center gap-10 my-5">
          <h2 className="text-3xl font-bold text-center md:text-left  mt-2 hover:text-3xl">
            My Educational Background
          </h2>
          <div className="md:w-5/5 lg:w-3/5">
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
                  <p className="text-md text-gray-500">
                    {education.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationPage;
