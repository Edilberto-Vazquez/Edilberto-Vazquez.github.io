import React, { useEffect, useState } from "react"
import Icon from "../Icon"
import ToggleSwitch from "../Inputs/ToggleSwitch"
import CustomLink from "../Navigation/CustomLink"

const Header = () => {
  const [theme, setTheme] = useState("dark")

  const handleTheme = (e) => {
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
          <CustomLink href="/about">About</CustomLink>
          <CustomLink href="/resume">Resume</CustomLink>
        </div>
        <div className="social-networks">
          <CustomLink href="github.com/Edilberto-Vazquez">
            <Icon
              content={
                theme === "dark"
                  ? "/assets/icons/github-dark.svg"
                  : "/assets/icons/github-light.svg"
              }
              alt="github"
            />
          </CustomLink>
          <CustomLink href="github.com/Edilberto-Vazquez">
            <Icon content="/assets/icons/linkedin.svg" alt="linkedin" />
          </CustomLink>
          <CustomLink href="github.com/Edilberto-Vazquez">
            <Icon content="/assets/icons/twitter.svg" alt="twitter" />
          </CustomLink>
        </div>
        <div className="color-mode">
          <ToggleSwitch
            onChange={handleTheme}
            checked={theme === "dark"}
            id={"color-mode"}
          />
          <span className="color-mode__text">Dark mode</span>
        </div>
      </nav>
    </header>
  )
}

export default Header
