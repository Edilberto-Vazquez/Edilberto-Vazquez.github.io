import React from "react"
import Link from "next/link"
import { Project } from "../../../types/types"
import Technologies from "../Technologies"
import { useLanguageContext } from "../../../context/useContext"
import { projectCard } from "../../../i18n/pagecontent.json"

const ProjectCard = ({
  name,
  description,
  repository,
  technologies,
  website,
}: Project) => {
  const { language } = useLanguageContext()

  return (
    <div className="project-card">
      <Link href={website}>
        <a className="project-card__link_website">{name}</a>
      </Link>
      <p className="project-card__description">{description}</p>
      <Link href={repository}>
        <a className="project-card__repository">
          {projectCard[language.lang].repository}
        </a>
      </Link>
      {/* <h3 className="project-card__name">{name}</h3> */}
      <Technologies technologies={technologies} />
    </div>
  )
}

export default ProjectCard
