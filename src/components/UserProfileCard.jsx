import React from "react";

const UserProfileCard = ({ technologies }) => {
  return (
    <section className="user-profile-card">
      <img
        className="user-profile-card__img"
        src="https://s.gravatar.com/avatar/1bf51742e09fee803505b9c0a845e262?s=80"
        alt=""
      />
      <div className="information-card">
        <span className="information-card__job-title">
          Full Stack JavaScript Developer
        </span>
        <h1 className="information-card__name">Edilberto Vazquez Luna</h1>
        <p className="information-card__description">
          Hi, I am a developer who likes to learn about the world of technology
          and play videogames, I don't use twitter much but you can follow me if
          you want. Currently I specialize more in the Front-End with HTML, CSS
          vanilla JavaScritp and ReactJS, I like NodeJS and Golang to use in the
          backen and I use Python for projects where I have to work with AI and
          Data Science.
        </p>
        <ul className="information-card__technologies">
          {technologies.map((technology) => {
            return <li key={technology}>{technology}</li>;
          })}
        </ul>
        <div className="information-card__btn">
          <button>Download CV</button>
          <a href="mailto:edi_vazquez12@hotmail.com">
            <button>Contact</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UserProfileCard;
