import React from "react";
import UserProfileCard from "../components/UserProfileCard";
import SectionLayout from "../components/SectionLayout";
import SectionCard from "../components/SectionCard";
import { languagesAndTechnologies, WhatIDoList } from "../utils/information";

const AboutMe = () => {
  return (
    <main className="about-me">
      <UserProfileCard technologies={languagesAndTechnologies} />
      <SectionLayout title="What I do">
        {WhatIDoList.map((item, key) => (
          <SectionCard
            title={item.title}
            description={item.description}
            key={key}
          />
        ))}
      </SectionLayout>
    </main>
  );
};

export default AboutMe;
