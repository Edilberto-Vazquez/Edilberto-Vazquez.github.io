import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import Projects from "../utils/portafolio";

const Portafolio = () => {
  return (
    <main className="portafolio">
      <div className="projects">
        <h2 className="projects__title">Projects</h2>
        <div className="project-list">
          {Projects.map(({ projectName, information }) => {
            return (
              <ProjectsCard
                projectName={projectName}
                information={information}
                key={projectName}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Portafolio;
