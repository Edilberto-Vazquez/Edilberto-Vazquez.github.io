import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activetab, setActiveTab] = useState("");
  const sections = [
    { name: "About me", section: "" },
    { name: "Resume", section: "resume" },
    { name: "Portafolio", section: "portafolio" },
  ];
  return (
    <nav className="navbar">
      <h3 className="navbar__name">Edilberto</h3>
      <input className="navbar__menu-icon" type="checkbox" />
      <div className="navbar-options">
        <div className="sections">
          {sections.map(({ name, section }, key) => {
            let className = `sections__selected`;
            if (activetab === section) {
              className = "sections__not-selected";
            }
            return (
              <Link to={`/${section}`} key={key}>
                <button
                  className={className}
                  onClick={() => setActiveTab(section)}
                >
                  {name}
                </button>
              </Link>
            );
          })}
        </div>
        <div className="social-networks-icons">
          <a
            className="social-networks-icons__github"
            href="https://github.com/Edilberto-Vazquez"
          />
          <a
            className="social-networks-icons__linkedin"
            href="https://www.linkedin.com/in/edilberto-vazquez-luna-7a038621b/"
          />
          <a
            className="social-networks-icons__twitter"
            href="https://twitter.com/edivazquez98"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
