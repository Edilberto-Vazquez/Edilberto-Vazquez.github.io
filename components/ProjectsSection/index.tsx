import React from "react"

type ProjectsSectionProps = {
  children: React.ReactNode
}

const ProjectsSection = ({ children }: ProjectsSectionProps): JSX.Element => {
  return <div>{children}</div>
}

export default ProjectsSection
