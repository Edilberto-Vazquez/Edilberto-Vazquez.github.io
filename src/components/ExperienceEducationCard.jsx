import React from "react";

const ExperienceEducationCard = ({ jobDate, jobTitle, jobDescription }) => {
  return (
    <div className="experience-education-card">
      <span className="experience-education-card__from-to-date">{jobDate}</span>
      <h3 className="experience-education-card__title">{jobTitle}</h3>
      <p className="experience-education-card__description">{jobDescription}</p>
    </div>
  );
};

export default ExperienceEducationCard;
