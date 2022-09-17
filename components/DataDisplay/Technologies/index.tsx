import React from "react"
import Icon from "../../CustomIcon"

type TechnologiesProps = {
  technologies: string[]
}

const Technologies = ({ technologies }: TechnologiesProps) => {
  return (
    <ul className="technologies">
      {technologies.map(
        (technology: string): JSX.Element => (
          <li key={technology} className="technologies__item">
            <Icon icon={technology} width="18" height="18" />
            {technology}
          </li>
        )
      )}
    </ul>
  )
}

export default Technologies
