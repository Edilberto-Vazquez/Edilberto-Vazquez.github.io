import React from "react";

const ExperienceEducationCard = ({ jobDate, jobTitle, jobDescription }) => {
  return (
    <div className="education-job">
      <span className="education-job__from-to-date">{jobDate}</span>
      <h3 className="education-job__title">{jobTitle}</h3>
      <p className="education-job__description">{jobDescription}</p>
    </div>
  );
};

export default ExperienceEducationCard;
