import React from "react"
import Icon from "../Icon"

const ProfileCard = () => {
  const technologies = [
    { name: "Nextjs", icon: "/assets/icons/technologies/nextjs.png" },
    { name: "JavaScript", icon: "/assets/icons/technologies/javascript.svg" },
    { name: "CSS", icon: "/assets/icons/technologies/css.svg" },
    { name: "SASS", icon: "/assets/icons/technologies/sass.svg" },
    { name: "Graphql", icon: "/assets/icons/technologies/graphql.svg" },
    { name: "NodeJS", icon: "/assets/icons/technologies/nodejs.svg" },
    { name: "Golang", icon: "/assets/icons/technologies/golang.svg" },
    { name: "Docker", icon: "/assets/icons/technologies/docker.svg" },
    { name: "Git", icon: "/assets/icons/technologies/git.svg" },
    { name: "Sequelize", icon: "/assets/icons/technologies/sequelize.svg" },
    { name: "MongoDB", icon: "/assets/icons/technologies/mongodb.svg" },
    { name: "SQL", icon: "/assets/icons/technologies/sql.svg" },
  ]
  return (
    <div className="card-profile">
      <div className="card-header">
        <img
          className="card-header__image"
          src="https://s.gravatar.com/avatar/1bf51742e09fee803505b9c0a845e262?s=80"
          alt="profile image"
        />
        <h3 className="card-header__name">Edilberto Vazquez Luna</h3>
      </div>
      <div className="card-description">
        <p className="card-description__description">
          Hello, Welcome to my Website where you can see my projects and other
          things. I am currently working as a JavaScript developer but I work
          with other languages such like Go
        </p>
      </div>
      <div className="card-technologies">
        {technologies.map(({ name, icon }) => (
          <span key={name} className="card-technologies__chip">
            <Icon content={icon} width="20px" height="20px" />
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProfileCard
