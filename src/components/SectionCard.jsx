import React from "react";

const SectionCard = ({ subtitle, title, description }) => {
  return (
    <div className="section-card">
      {subtitle && <span className="section-card__subtitle">{subtitle}</span>}
      <h3 className="section-card__title">{title}</h3>
      <p className="section-card__information">{description}</p>
    </div>
  );
};

export default SectionCard;
