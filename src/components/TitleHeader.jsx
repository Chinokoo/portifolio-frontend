import React from "react";

const TitleHeader = ({ title, text }) => {
  return (
    <div className="flex justify-items-start items-center">
      <div>
        <h1 className="font-semibold text-4xl md:text-6xl gradient-title">
          {title}
        </h1>
        <p className="md:mt-5 md:text-3xl">{text}</p>
      </div>
    </div>
  );
};

export default TitleHeader;
