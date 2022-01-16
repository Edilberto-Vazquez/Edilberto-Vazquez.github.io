import React, { useState, createRef, useEffect } from "react";
import arrowButton from "../assets/icons/icons8-flecha-ampliar-48.png";

const ProjectsCard = ({ projectName, information }) => {
  const [display, setDisplay] = useState(false);
  const displayInfo = createRef();
  const displayButton = createRef();

  const handleDisplay = () => {
    setDisplay(!display);
    displayButton.current.ariaExpanded = display;
    displayInfo.current.ariaExpanded = display;
    if (!display === true) {
      displayButton.current.style.background = "#b8b8b8";
    } else {
      displayButton.current.style.background = "#337be2";
    }
  };
  useEffect(() => {
    if (display === false) {
      displayButton.current.style.background = "#337be2";
    }
  }, []);

  return (
    <div className="project" key={projectName}>
      <button
        ref={displayButton}
        className="project__display-information"
        onClick={handleDisplay}
      >
        <img
          className="arrow-image"
          src={arrowButton}
          alt="arrow icon"
          aria-expanded={display}
        />
        {projectName}
      </button>
      <div
        ref={displayInfo}
        className="project-information"
        aria-expanded={display}
      >
        <div className="project-information__description">
          <h3>Description:</h3>
          <p>{information.description}</p>
        </div>
        <div className="project-information__technologies-used">
          <h3>Technologies Used:</h3>
          <ul className="technologies">
            {information.technologiesUsed.map((technology) => {
              return (
                <li className="technology" key={technology}>
                  {technology}
                </li>
              );
            })}
          </ul>
        </div>
        <a
          className="project-information__repository"
          href={information.repository}
        >
          Repository
        </a>
        <a
          className="project-information__page-or-api"
          href={information.pageOrAPI}
        >
          Page or API
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
