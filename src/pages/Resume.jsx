import React from "react";
import SectionCard from "../components/SectionCard";
import { Education, Experience } from "../utils/resume";

const Resume = () => {
  return (
    <div className="resume">
      <div className="experience-education">
        <h2 className="experience-education__title">Experience</h2>
        <div className="experience-education__cards">
          {Experience.map(({ date, title, description }, index) => {
            return (
              <SectionCard
                subtitle={date}
                title={title}
                description={description}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="experience-education">
        <h2 className="experience-education__title">Education</h2>
        <div className="experience-education__cards">
          {Education.map(({ date, title, description }, index) => {
            return (
              <SectionCard
                subtitle={date}
                title={title}
                description={description}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resume;
