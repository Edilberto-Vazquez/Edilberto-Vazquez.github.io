import React, { useState } from "react"
import LanguageSelector from "../../Inputs/LanguageSelector"
import Technologies from "../Technologies"

type LanguageSelectorProps = {
  languages: []
  value: string
}

type ProfileCardProps = {
  image: string
  name: string
  language: LanguageSelectorProps
  description: string
  technologies: string[]
}

const ProfileCard = ({
  image,
  name,
  language,
  description,
  technologies,
}: ProfileCardProps): JSX.Element => {
  const [downLoadLang, setDownLoadLang] = useState<string>("es-MX")
  const lang = new Map<string, string>([
    ["es-MX", `resume-cv-es`],
    ["en-US", `resume-cv-en`],
  ])

  return (
    <div className="card-profile">
      <div className="card-header">
        <img className="card-header__image" src={image} alt="profile image" />
        <h3 className="card-header__name">{name}</h3>
      </div>
      <div className="download-cv">
        <LanguageSelector
          languages={language.languages}
          value={downLoadLang}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setDownLoadLang(e.target.value)
          }
        />
        <a
          className="download-cv__button"
          href={`${process.env.NEXT_PUBLIC_API_URL}/${lang.get(downLoadLang)}`}
          download={lang.get(downLoadLang)}
        >
          {language.value}
        </a>
      </div>
      <div className="card-description">
        <p className="card-description__description">{description}</p>
      </div>
      <Technologies technologies={technologies} />
    </div>
  )
}

export default ProfileCard
