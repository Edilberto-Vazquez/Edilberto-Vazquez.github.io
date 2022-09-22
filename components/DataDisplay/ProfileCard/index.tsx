import React, { useState } from "react"
import Link from "next/link"
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
  const [downLoadLang, setDownLoadLang] = useState<string>("en-US")
  const lang = new Map<string, string>([
    ["en-US", `resume-cv-en`],
    ["es-MX", `resume-cv-es`],
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
          <span>{language.value}</span>
        </a>
      </div>
      <div className="card-description">
        <p className="card-description__description">{description}</p>
      </div>
      {/* <div className="platzi">
        <p className="platzi__link">
          {platziLink.phrase1}{" "}
          <Link href="https://platzi.com/p/Edi-Vazquez/">
            <a>{platziLink.linkPhrase}</a>
          </Link>{" "}
          {platziLink.phrase2}
        </p>
      </div> */}
      <Technologies technologies={technologies} />
    </div>
  )
}

export default ProfileCard
