import React from "react";
import SectionLayout from "../components/SectionLayout";
import SectionCard from "../components/SectionCard";
import { Education, Experience } from "../utils/resume";

const Resume = () => {
  return (
    <div className="resume">
      <div className="experience-education">
        <SectionLayout title="Experience">
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
        </SectionLayout>
        <SectionLayout title="Education">
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
        </SectionLayout>
      </div>
    </div>
  );
};

export default Resume;
