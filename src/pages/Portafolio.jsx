import React from "react";
import SectionLayout from "../components/SectionLayout";
import ProjectCard from "../components/ProjectCard";
import Projects from "../utils/portafolio";

const Portafolio = () => {
  return (
    <main className="portafolio">
      <SectionLayout title="Projects">
        {Projects.map(({ projectName, information }) => {
          return (
            <ProjectCard
              projectName={projectName}
              information={information}
              key={projectName}
            />
          );
        })}
      </SectionLayout>
    </main>
  );
};

export default Portafolio;
