import React, { useEffect, useState } from "react"
import Icon from "../../CustomIcon"
import CustomLink from "../CustomLink"
import ToggleSwitch from "../../Inputs/ToggleSwitch"
import LanguageSelector from "../../Inputs/LanguageSelector"
import { useLanguageContext } from "../../../context/useContext"
import { header, languageSelector } from "../../../i18n/pagecontent.json"

const Header = (): JSX.Element => {
  const { language, setLanguage } = useLanguageContext()
  const [theme, setTheme] = useState<string>("dark")

  const handleTheme = (e: { target: { checked: boolean } }): void => {
    const themes = new Map([
      [true, "dark"],
      [false, "light"],
    ])
    document.documentElement.setAttribute(
      "color-mode",
      themes.get(e.target.checked)
    )
    window.localStorage.setItem("color-mode", themes.get(e.target.checked))
    setTheme(themes.get(e.target.checked))
  }

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("color-mode")
    setTheme(storedTheme)
  }, [])

  return (
    <header className="header">
      <CustomLink href="/">Edilberto</CustomLink>
      <input className="header__nav-icon-mobile" type="checkbox" />
      <nav className="nav">
        <div className="pages">
          <CustomLink href="/">{header[language.lang].projects}</CustomLink>
          <CustomLink href="/about">{header[language.lang].about}</CustomLink>
        </div>
        <div className="social-networks">
          <CustomLink href="https://www.github.com/Edilberto-Vazquez">
            <Icon icon="github" width="32" height="32" />
          </CustomLink>
          <CustomLink href="https://www.linkedin.com/in/edilberto-vazquez-luna-7a038621b/">
            <Icon icon="linkedin" width="32" height="32" />
          </CustomLink>
          {/* <CustomLink href="">
            <Icon icon="tiwtter" />
          </CustomLink> */}
        </div>
        <div className="header-options">
          <div className="color-mode">
            <ToggleSwitch
              onChange={handleTheme}
              checked={theme === "dark"}
              id="color-mode"
            />
            <span className="color-mode__text">
              {header[language.lang].theme}
            </span>
          </div>
          <div className="language">
            <LanguageSelector
              languages={languageSelector[language.lang]}
              value={language.lang}
              onChange={(e) => setLanguage({ lang: e.target.value })}
            />
            <span className="language__text">
              {header[language.lang].language}
            </span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
