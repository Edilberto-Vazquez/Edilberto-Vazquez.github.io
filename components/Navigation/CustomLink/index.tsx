import React from "react"
import Link from "next/link"

type Themes = "link-theme-dark" | "link-theme-light" | "link-theme"

type CustomLinkProps = {
  href: string
  theme: Themes
  children: React.ReactNode
} & typeof defaultProps

const defaultProps = {
  theme: "link-theme",
}

const CustomLink = ({
  href,
  theme,
  children,
}: CustomLinkProps): JSX.Element => {
  return (
    <Link href={href}>
      <a className={theme}>{children}</a>
    </Link>
  )
}

CustomLink.defaultProps = defaultProps

export default CustomLink
