import React from "react"

type ProjectItemProps = {
  name: string
  description: string
  repository: string
  technologies: string[]
}

const ProjectItem = ({
  name,
  description,
  repository,
  technologies,
}: ProjectItemProps): JSX.Element => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{repository}</span>
      {technologies.map(
        (technology: string): JSX.Element => (
          <span>{technology}</span>
        )
      )}
    </li>
  )
}

export default ProjectItem
