import React, { useEffect, useState } from "react"
import Link from "next/link"
import Icon from "../Icon"

const Header = () => {
  const [theme, setTheme] = useState("dark")

  const handleTheme = (e) => {
    const theme = new Map([
      [true, "dark"],
      [false, "light"],
    ])
    document.documentElement.setAttribute(
      "data-theme",
      theme.get(e.target.checked)
    )
    window.localStorage.setItem("data-theme", theme.get(e.target.checked))
    setTheme(theme.get(e.target.checked))
    console.log("a")
  }

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("data-theme")
    setTheme(storedTheme)
  }, [])

  return (
    <header className="header">
      <Link href="/">
        <a className="header__logo link-theme-dark">Edilberto</a>
      </Link>
      <div>
        <label>
          <input
            type="checkbox"
            onChange={handleTheme}
            checked={theme === "dark"}
          />
          <span className="slider" />
        </label>
      </div>
      <input className="header__nav-icon-mobile" type="checkbox" />
      <nav className="nav">
        <div className="pages">
          <Link href="/about">
            <a className="link-theme-dark">About</a>
          </Link>
          <Link href="/resume">
            <a className="link-theme-dark">Resume</a>
          </Link>
        </div>
        <div className="social-networks">
          <Link href="github.com/Edilberto-Vazquez">
            <a className="link-theme-dark">
              <Icon content="/assets/icons/github.svg" alt="github" />
            </a>
          </Link>
          <Link href="github.com/Edilberto-Vazquez">
            <a className="link-theme-dark">
              <Icon content="/assets/icons/linkedin.svg" alt="linkedin" />
            </a>
          </Link>
          <Link href="github.com/Edilberto-Vazquez">
            <a className="link-theme-dark">
              <Icon content="/assets/icons/twitter.svg" alt="twitter" />
            </a>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
