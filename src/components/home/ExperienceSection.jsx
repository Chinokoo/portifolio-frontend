const experiences = [
  {
    role: "DCHSA",
    company: "Ministry of Health",
    location: "Lilongwe, Malawi",
    yearStarted: "2022",
    yearEnded: "2023",
    description:
      " Designed and developed multiple web applications using React and Node.js Collaborated with cross-functional teams to identify and prioritize project requirements Implemented automated testing and deployment scripts using Jes and CircleCI",
  },
  {
    role: "DCHSA",
    company: "Ministry of Health",
    location: "Lilongwe, Malawi",
    yearStarted: "2022",
    yearEnded: "2023",

    description:
      " Designed and developed multiple web applications using React and Node.js Collaborated with cross-functional teams to identify and prioritize project requirements Implemented automated testing and deployment scripts using Jes and CircleCI",
  },
  {
    role: "DCHSA",
    company: "Ministry of Health",
    location: "Lilongwe, Malawi",
    yearStarted: "2022",
    yearEnded: "2023",

    description:
      " Designed and developed multiple web applications using React and Node.js Collaborated with cross-functional teams to identify and prioritize project requirements Implemented automated testing and deployment scripts using Jes and CircleCI",
  },
];

const ExperienceSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-center gap-10 mb-10">
      <h1 className="text-3xl font-bold text-center md:text-left  mt-2 hover:text-4xl">
        Experience
      </h1>
      <div className="grid grid-rows-3 gap-5">
        {experiences.map((experience) => (
          <div
            key={experience.role}
            className="card rounded bg-gray-300 px-4 py-2 shadow-md"
          >
            <div className="flex justify-between">
              <h1 className="font-bold text-2xl">{experience.role}</h1>
              <div>
                <span className="font-bold italic  text-gray-500">
                  {experience.yearStarted} - {experience.yearEnded}
                </span>
                <p className="text-md text-gray-500">{experience.location}</p>
              </div>
            </div>
            <p>{experience.company}</p>
            <p className="text-gray-500 text-ellipsis line-clamp-3 ">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
