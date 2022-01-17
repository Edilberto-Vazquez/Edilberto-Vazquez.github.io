import React from "react";
import UserProfileCard from "../components/UserProfileCard";
import SectionCard from "../components/SectionCard";
import { languagesAndTechnologies, WhatIDoList } from "../utils/information";

const AboutMe = () => {
  return (
    <main className="about-me">
      <UserProfileCard technologies={languagesAndTechnologies} />
      <div className="what-i-do">
        <h3 className="what-i-do__title">What I Do</h3>
        <div className="what-i-do__cards">
          {WhatIDoList.map((item, key) => (
            <SectionCard
              title={item.title}
              description={item.description}
              key={key}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
