import React from "react"
import Technologies from "../Technologies"

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
      <Technologies technologies={technologies} />
    </div>
  )
}

export default ProfileCard
