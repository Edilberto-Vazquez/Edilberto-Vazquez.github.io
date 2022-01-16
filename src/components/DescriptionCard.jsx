import React from "react";

const DescriptionCard = ({ iconName, title, description }) => {
  return (
    <div className="description-card">
      <span className={`description-card__icon-${iconName}`} />
      <div className="description-card__information">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DescriptionCard;
