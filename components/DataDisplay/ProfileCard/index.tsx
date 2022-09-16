import React from "react"
import Icon from "../../Icon"

type ProfileCardProps = {
  image: string
  name: string
  descirption: string
  technologies: string[]
}

const ProfileCard = ({
  image,
  name,
  descirption,
  technologies,
}: ProfileCardProps): JSX.Element => {
  return (
    <div className="card-profile">
      <div className="card-header">
        <img className="card-header__image" src={image} alt="profile image" />
        <h3 className="card-header__name">{name}</h3>
      </div>
      <div className="card-description">
        <p className="card-description__description">{descirption}</p>
      </div>
      <div className="card-technologies">
        {technologies.map((technology: string) => (
          <span key={name} className="card-technologies__chip">
            <Icon icon={technology} width="20px" height="20px" />
            {technology}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProfileCard
