import { useEffect } from "react";
import { useExperienceStore } from "../store/experienceStore";
import { AiOutlineLoading } from "react-icons/ai";
import TitleHeader from "../components/TitleHeader";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  const { experiences, loading, getExperience } = useExperienceStore();

  useEffect(() => {
    getExperience();
  }, [getExperience]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-5">
          <AiOutlineLoading className="w-20 h-20 animate-spin" />
          <h1 className="font-bold text-2xl">Loading please wait...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-10 md:py-20 container">
      <div className="mb-10 md:mb-16">
        <TitleHeader title={"Experience"} text={"Journey and growth"} />
      </div>

      {experiences.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <h1 className="font-bold text-2xl">No Experiences Found</h1>
        </div>
      ) : (
        <div className="relative">
          {/* Timeline line - adjusted for mobile */}
          <div className="left-4 md:left-8 absolute bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-primary)] w-0.5 h-full"></div>

          <div className="space-y-6 md:space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot - adjusted for mobile */}
                <div className="left-4 md:left-8 absolute bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] rounded-full w-5 h-5 -translate-x-1/2 -translate-y-1/2 transform"></div>

                <div className="ml-6 md:ml-16 pt-1 pl-6 md:pl-16">
                  <div className="bg-[var(--color-bg)] dark:bg-[var(--color-bg-dark)] shadow-lg hover:shadow-xl p-6 rounded-2xl transition-shadow duration-300">
                    <div className="flex md:flex-row flex-col justify-between gap-4">
                      <div className="md:w-1/3">
                        <span className="font-semibold text-[var(--color-accent)]">
                          {new Date(experience.startDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                            }
                          )}{" "}
                          -{" "}
                          {experience.endDate === null
                            ? "Present"
                            : new Date(experience.endDate).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                }
                              )}
                        </span>
                        <h3 className="mt-2 font-bold text-lg">
                          {experience.companyName}
                        </h3>
                      </div>

                      <div className="md:w-2/3">
                        <h2 className="font-bold text-[var(--color-primary)] text-xl">
                          {experience.jobTitle}
                        </h2>
                        <p className="mt-2 text-[var(--color-text)]">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperiencePage;
