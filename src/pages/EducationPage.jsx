import React from "react";

const EducationPage = () => {
  return (
    <div>
      <h1>Education</h1>
      <div className="w-full flex flex-col md:flex-row md:justify-center gap-10 mb-5">
        <h2 className="text-3xl font-bold text-center md:text-left  mt-2 hover:text-4xl">
          My Educational Background
        </h2>
        <div>
          <div className="grid grid-rows-3 gap-5">
            <div className="card rounded bg-gray-300 px-4 py-2 shadow-md">
              <h3 className="font-bold text-2xl">Bachelor's Degree</h3>
              <p className="text-md text-gray-500">
                I completed my Bachelor's degree in Computer Science from XYZ
                University in 2018.
              </p>
            </div>
            <div className="card rounded bg-gray-300 px-4 py-2 shadow-md">
              <h3 className="font-bold text-2xl">Master's Degree</h3>
              <p className="text-md text-gray-500">
                I completed my Master's degree in Computer Science from ABC
                University in 2020.
              </p>
            </div>
            <div className="card rounded bg-gray-300 px-4 py-2 shadow-md">
              <h3 className="font-bold text-2xl">Certifications</h3>
              <p className="text-md text-gray-500">
                I have completed various certifications in programming languages
                such as Java, Python, and JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
