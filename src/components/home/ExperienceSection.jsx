import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useExperienceStore } from "./../../store/experienceStore";
import { useEffect } from "react";

const ExperienceSection = () => {
  const { experiences, getExperience } = useExperienceStore();

  useEffect(() => {
    getExperience();
  }, [getExperience]);

  if (experiences.length === 0) {
    return (
      <div className="flex justify-center">
        <h1 className="text-gray-500 italic">No Experiences Available!</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full flex flex-col md:flex-row md:justify-center gap-10 mb-5">
        <h1 className="text-3xl font-bold text-center md:text-left  mt-2 hover:text-4xl">
          Experience
        </h1>
        <div>
          <div className="grid grid-rows-3 gap-5">
            {experiences.map((experience) => (
              <div
                key={experience._id}
                className="card rounded bg-gray-300 px-4 py-2 shadow-md"
              >
                <div className="flex justify-between">
                  <h1 className="font-bold text-2xl">{experience.jobTitle}</h1>
                  <div>
                    <span className="font-bold italic  text-gray-500">
                      {new Date(experience.startDate).toLocaleString(
                        "default",
                        {
                          month: "long",
                        }
                      )}{" "}
                      {new Date(experience.endDate).getFullYear()} -{" "}
                      {new Date(experience.endDate).toLocaleString("default", {
                        month: "long",
                      })}{" "}
                      {new Date(experience.endDate).getFullYear()}
                    </span>
                    <p>{experience.location}</p>
                  </div>
                </div>
                <p>{experience.companyName}</p>
                <p className="text-gray-500 text-ellipsis line-clamp-3 ">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end mb-10 px-2">
        <Link
          className="text-sm text-gray-400 flex flex-row gap-2 hover:text-gray-200"
          to={"/experience"}
        >
          <p className="text-sm">my experiences</p>
          <FaArrowRightLong size={20} />
        </Link>
      </div>
    </div>
  );
};

export default ExperienceSection;
