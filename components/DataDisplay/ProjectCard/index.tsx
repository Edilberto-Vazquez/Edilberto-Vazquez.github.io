import React from "react"
import Link from "next/link"
import { Project } from "../../../types/types"
import Technologies from "../Technologies"

const ProjectCard = ({
  name,
  description,
  repository,
  technologies,
}: Project) => {
  return (
    <div className="project-card">
      <Link href={repository}>
        <a className="project-card__repository">{name}</a>
      </Link>
      <p className="project-card__description">{description}</p>
      {/* <h3 className="project-card__name">{name}</h3> */}
      <Technologies technologies={technologies} />
    </div>
  )
}

export default ProjectCard
