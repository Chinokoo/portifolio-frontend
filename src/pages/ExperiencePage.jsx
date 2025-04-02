import { useEffect } from "react";
import Header from "./../components/home/Header";
import { useExperienceStore } from "./../store/experienceStore";
import { AiOutlineLoading } from "react-icons/ai";

const ExperiencePage = () => {
  const { experiences, loading, getExperience } = useExperienceStore();

  useEffect(() => {
    getExperience();
  }, [getExperience]);

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
      {experiences.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold">No Experiences Found !</h1>
        </div>
      ) : (
        <div>
          <Header headingText={"Experience"} />
          <div>
            {experiences.map((experience) => (
              <div
                key={experience._id}
                className="card rounded bg-[#F5F5F0] hover:bg-gray-300 px-4 py-2 m-5 shadow-md"
              >
                <div className="flex flex-col md:flex-row  justify-between">
                  <div>
                    <span className="font-bold italic text-gray-500 ">
                      {new Date(experience.startDate).getFullYear()}{" "}
                      {new Date(experience.startDate).toLocaleString(
                        "default",
                        {
                          month: "long",
                        }
                      )}{" "}
                      -{" "}
                      {experience.endDate === null
                        ? "Present"
                        : new Date(experience.endDate).getFullYear() +
                          " " +
                          new Date(experience.endDate).toLocaleString(
                            "default",
                            {
                              month: "long",
                            }
                          )}
                    </span>
                  </div>

                  <div className="md:border-l-2 border-gray-500 pl-2 md:w-4/5">
                    <div className="flex flex-row gap-2">
                      <h1 className="text-2xl font-bold">
                        {experience.jobTitle} -
                      </h1>{" "}
                      <span className="text-lg text-gray-400 italic">
                        {experience.companyName}
                      </span>
                    </div>
                    <p>{experience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperiencePage;
