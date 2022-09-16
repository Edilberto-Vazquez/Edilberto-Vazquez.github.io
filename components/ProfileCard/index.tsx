import React from "react"
import Icon from "../Icon"

type ProfileCardProps = {
  data: {
    image: string
    name: string
    descirption: string
    technologies: { name: string; icon: string }[]
  }
}

const ProfileCard = ({ data }: ProfileCardProps): JSX.Element => {
  const { image, name, descirption, technologies } = data
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
        {technologies.map(({ name, icon }) => (
          <span key={name} className="card-technologies__chip">
            <Icon image={{ src: icon, alt: name }} width="20px" height="20px" />
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProfileCard
