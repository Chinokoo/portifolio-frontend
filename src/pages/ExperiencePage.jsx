import Header from "./../components/home/Header";

const experiences = [
  {
    role: "DCHSA",
    start: "2023",
    end: "date",
    company: "mamlaalaaa",
    description:
      "fjhdjfhdf  hdhsdkshdh sdjdsdjsdjsdj  odjiwuehfhhe8fefhr e9wurrefhefnfe wihwhfehfhffhd f wiqwri0fiefhifwqiqiqhffh q f qf wqf wfwf9iwhfqhfqf qw fwqhfqwfiwwifhwifwfhwf9eytqwrufdiwq  f hwqihfiwqhhfwqifhwrwiwfwq.",
  },
  {
    role: "DCHSA",
    start: "2023",
    end: "date",
    company: "mamlaalaaa",
    description:
      "fjhdjfhdf  hdhsdkshdh sdjdsdjsdjsdj  odjiwuehfhhe8fefhr e9wurrefhefnfe wihwhfehfhffhd f wiqwri0fiefhifwqiqiqhffh q f qf wqf wfwf9iwhfqhfqf qw fwqhfqwfiwwifhwifwfhwf9eytqwrufdiwq  f hwqihfiwqhhfwqifhwrwiwfwq.",
  },
  {
    role: "DCHSA",
    start: "2023",
    end: "date",
    company: "mamlaalaaa",
    description:
      "fjhdjfhdf  hdhsdkshdh sdjdsdjsdjsdj  odjiwuehfhhe8fefhr e9wurrefhefnfe wihwhfehfhffhd f wiqwri0fiefhifwqiqiqhffh q f qf wqf wfwf9iwhfqhfqf qw fwqhfqwfiwwifhwifwfhwf9eytqwrufdiwq  f hwqihfiwqhhfwqifhwrwiwfwq.",
  },
  {
    role: "DCHSA",
    start: "2023",
    end: "date",
    company: "mamlaalaaa",
    description:
      "fjhdjfhdf  hdhsdkshdh sdjdsdjsdjsdj  odjiwuehfhhe8fefhr e9wurrefhefnfe wihwhfehfhffhd f wiqwri0fiefhifwqiqiqhffh q f qf wqf wfwf9iwhfqhfqf qw fwqhfqwfiwwifhwifwfhwf9eytqwrufdiwq  f hwqihfiwqhhfwqifhwrwiwfwq.",
  },
  {
    role: "DCHSA",
    start: "2023",
    end: "date",
    company: "mamlaalaaa",
    description:
      "fjhdjfhdf  hdhsdkshdh sdjdsdjsdjsdj  odjiwuehfhhe8fefhr e9wurrefhefnfe wihwhfehfhffhd f wiqwri0fiefhifwqiqiqhffh q f qf wqf wfwf9iwhfqhfqf qw fwqhfqwfiwwifhwifwfhwf9eytqwrufdiwq  f hwqihfiwqhhfwqifhwrwiwfwq.",
  },
  {
    role: "DCHSA",
    start: "2023",
    end: "date",
    company: "mamlaalaaa",
    description:
      "fjhdjfhdf  hdhsdkshdh sdjdsdjsdjsdj  odjiwuehfhhe8fefhr e9wurrefhefnfe wihwhfehfhffhd f wiqwri0fiefhifwqiqiqhffh q f qf wqf wfwf9iwhfqhfqf qw fwqhfqwfiwwifhwifwfhwf9eytqwrufdiwq  f hwqihfiwqhhfwqifhwrwiwfwq.",
  },
  {
    role: "DCHSA",
    start: "2023",
    end: "date",
    company: "mamlaalaaa",
    description:
      "fjhdjfhdf  hdhsdkshdh sdjdsdjsdjsdj  odjiwuehfhhe8fefhr e9wurrefhefnfe wihwhfehfhffhd f wiqwri0fiefhifwqiqiqhffh q f qf wqf wfwf9iwhfqhfqf qw fwqhfqwfiwwifhwifwfhwf9eytqwrufdiwq  f hwqihfiwqhhfwqifhwrwiwfwq.",
  },
  {
    role: "DCHSA",
    start: "2023",
    end: "date",
    company: "mamlaalaaa",
    description:
      "fjhdjfhdf  hdhsdkshdh sdjdsdjsdjsdj  odjiwuehfhhe8fefhr e9wurrefhefnfe wihwhfehfhffhd f wiqwri0fiefhifwqiqiqhffh q f qf wqf wfwf9iwhfqhfqf qw fwqhfqwfiwwifhwifwfhwf9eytqwrufdiwq  f hwqihfiwqhhfwqifhwrwiwfwq.",
  },
];
const ExperiencePage = () => {
  return (
    <div>
      <div>
        <Header headingText={"Experience"} />
        <div>
          {experiences.map((experience) => (
            <div
              key={experience.role}
              className="card rounded bg-[#F5F5F0] hover:bg-gray-300 px-4 py-2 m-5 shadow-md"
            >
              <div className="flex flex-col md:flex-row  justify-between">
                <span className="font-bold italic text-gray-500 md:w-md">
                  {experience.start} - {experience.end}
                </span>
                <div className="md:border-l-2 border-gray-500 pl-2">
                  <div className="flex flex-row gap-2">
                    <h1 className="text-2xl font-bold">{experience.role} -</h1>{" "}
                    <span className="text-lg text-gray-400 italic">
                      {experience.company}
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
