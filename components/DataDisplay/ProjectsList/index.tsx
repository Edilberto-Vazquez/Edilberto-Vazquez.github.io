import React from "react"
import { Project } from "../../../types/types"
import ProjectCard from "../ProjectCard"

type ProjectListProps = {
  projects: Project[]
}

const ProjectList = ({ projects }: ProjectListProps): JSX.Element => {
  return (
    <ul className="project-list">
      {projects.map(
        ({
          name,
          description,
          repository,
          technologies,
        }: Project): JSX.Element => (
          <li key={name} className="project-list__item">
            <ProjectCard
              name={name}
              description={description}
              repository={repository}
              technologies={technologies}
            />
          </li>
        )
      )}
    </ul>
  )
}

export default ProjectList
