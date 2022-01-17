import React, { useState, createRef, useEffect } from "react";
import arrowButton from "../assets/icons/click.gif";

const ProjectCard = ({ projectName, information }) => {
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
    <div className="project-card" key={projectName}>
      <button
        ref={displayButton}
        className="project-card__display-information"
        onClick={handleDisplay}
      >
        <img
          className="clic-image"
          src={arrowButton}
          alt="arrow icon"
          aria-expanded={display}
        />
        {projectName}
      </button>
      <div
        ref={displayInfo}
        className="project-card__details"
        aria-expanded={display}
      >
        <div className="project-card__details-description">
          <h3>Description:</h3>
          <p>{information.description}</p>
        </div>
        <div className="project-card__details-technologies">
          <h3>Technologies Used:</h3>
          <ul>
            {information.technologiesUsed.map((technology) => {
              return (
                <li className="technology" key={technology}>
                  {technology}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="project-card__details-links">
          <a href={information.repository} target="_blank">
            Repository
          </a>
          <a href={information.pageOrAPI} target="_blank">
            Page or API
          </a>
        </div>
        <img
          className="project-card__details-image"
          src={information.image}
          alt="project image"
          aria-expanded={display}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
