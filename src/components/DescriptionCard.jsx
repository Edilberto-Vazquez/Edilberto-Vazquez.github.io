import React from "react";

const DescriptionCard = ({ iconName, title, description }) => {
  return (
    <div className="description-card">
      <h3 className="description-card__title">{title}</h3>
      <p className="description-card__information">{description}</p>
    </div>
  );
};

export default DescriptionCard;
