const educations = [
  {
    title: "Bachelor's Degree in Computer Science",
    institution: "XYZ University",
    date: "2018",
    description:
      " I completed my Bachelor's degree in Computer Science from XYZ University in 2018.",
  },
  {
    title: "Master's Degree",
    institutionId: "ABC University",
    description:
      " I completed my Master's degree in Computer Science from ABC University in 2020.",
  },
  {
    title: "Certifications",
    institution: "Java, Python, and JavaScript",
    description:
      "I have completed various certifications in programming languages such as Java, Python, and JavaScript.",
  },
];

const EducationPage = () => {
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row md:justify-center gap-10 my-5">
        <h2 className="text-3xl font-bold text-center md:text-left  mt-2 hover:text-3xl">
          My Educational Background
        </h2>
        <div>
          <div className="grid grid-rows-3 gap-5 px-2">
            {educations.map((education) => (
              <div
                key={education.title}
                className="card rounded bg-[#F5F5F0] hover:bg-gray-300 px-4 py-2 shadow-md"
              >
                <div className="flex justify-between">
                  <h3 className="font-bold text-2xl ">{education.title}</h3>
                  <span className="italic font-bold">{education.date}</span>
                </div>
                <p className="text-sm text-gray-400">{education.institution}</p>
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
