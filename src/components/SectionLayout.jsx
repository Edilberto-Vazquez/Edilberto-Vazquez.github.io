import React from "react";

const SectionLayout = ({ title, children }) => {
  return (
    <div className="section">
      <h3 className="section__title">{title}</h3>
      <div className="section__cards">{children}</div>
    </div>
  );
};

export default SectionLayout;
