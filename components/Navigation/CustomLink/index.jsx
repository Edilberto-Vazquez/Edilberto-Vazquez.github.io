import React from "react"
import Link from "next/link"

const CustomLink = ({ href = "", theme = "", children }) => {
  const themes = new Map([
    ["dark", "link-theme-dark"],
    ["light", "link-theme-light"],
    ["default", "link-theme"],
  ])
  return (
    <Link href={href}>
      <a className={theme ? themes.get(theme) : "link-theme"}>{children}</a>
    </Link>
  )
}

export default CustomLink
