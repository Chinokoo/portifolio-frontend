import { useEffect } from "react";
import Header from "./../components/home/Header";
import { useExperienceStore } from "./../store/experienceStore";

const ExperiencePage = () => {
  const { experiences, getExperience } = useExperienceStore();

  useEffect(() => {
    getExperience();
  }, [getExperience]);

  return (
    <div>
      <div>
        <Header headingText={"Experience"} />
        <div>
          {experiences.map((experience) => (
            <div
              key={experience._id}
              className="card rounded bg-[#F5F5F0] hover:bg-gray-300 px-4 py-2 m-5 shadow-md"
            >
              <div className="flex flex-col md:flex-row  justify-between">
                <span className="font-bold italic text-gray-500 md:w-md">
                  {new Date(experience.startDate).getFullYear()}{" "}
                  {new Date(experience.startDate).toLocaleString("default", {
                    month: "long",
                  })}{" "}
                  -{" "}
                  {experience.endDate === null
                    ? "Present"
                    : new Date(experience.endDate).getFullYear() +
                      " " +
                      new Date(experience.endDate).toLocaleString("default", {
                        month: "long",
                      })}
                </span>
                <div className="md:border-l-2 border-gray-500 pl-2">
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
    </div>
  );
};

export default ExperiencePage;
