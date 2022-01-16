import React from "react";
import ExperienceEducationCard from "../components/ExperienceEducationCard";
import { Education, Experience } from "../utils/resume";

const Resume = () => {
  return (
    <div className="resume">
      <div className="experience">
        {Education.map(({ date, title, description }, index) => {
          return (
            <ExperienceEducationCard
              jobDate={date}
              jobTitle={title}
              jobDescription={description}
              key={index}
            />
          );
        })}
      </div>
      <div className="education">
        {Experience.map(({ date, title, description }, index) => {
          return (
            <ExperienceEducationCard
              jobDate={date}
              jobTitle={title}
              jobDescription={description}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
