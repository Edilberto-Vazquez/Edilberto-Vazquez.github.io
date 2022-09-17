import React from "react"
import Image from "next/future/image"

const ICONS = new Map<string, string>([
  ["css", "/assets/icons/technologies/css.svg"],
  ["sass", "/assets/icons/technologies/sass.svg"],
  ["javascript", "/assets/icons/technologies/javascript.svg"],
  ["typescript", "/assets/icons/technologies/typescript.svg"],
  ["nextjs", "/assets/icons/technologies/nextjs.png"],
  ["react", "/assets/icons/technologies/react.svg"],
  ["graphql", "/assets/icons/technologies/graphql.svg"],
  ["nodejs", "/assets/icons/technologies/nodejs.svg"],
  ["golang", "/assets/icons/technologies/golang.svg"],
  ["docker", "/assets/icons/technologies/docker.svg"],
  ["sequelize", "/assets/icons/technologies/sequelize.svg"],
  ["mongodb", "/assets/icons/technologies/mongodb.svg"],
  ["sql", "/assets/icons/technologies/sql.svg"],
  ["git", "/assets/icons/technologies/git.svg"],
  ["github", "/assets/icons/social-media/github.svg"],
  ["linkedin", "/assets/icons/social-media/linkedin.svg"],
  ["tiwtter", "/assets/icons/social-media/twitter.svg"],
])

type AvailableIcons =
  | "css"
  | "sass"
  | "javascript"
  | "typescript"
  | "nextjs"
  | "react"
  | "graphql"
  | "nodejs"
  | "golang"
  | "docker"
  | "sequelize"
  | "mongodb"
  | "sql"
  | "git"
  | "github"
  | "linkedin"
  | "tiwtter"

type IconProps = {
  icon: string | AvailableIcons
  width: string | number | undefined
  height: string | number | undefined
} & typeof defaultProps

const defaultProps = {
  width: "38",
  height: "38",
}

const Icon = ({
  icon,
  width = "38",
  height = "38",
}: IconProps): JSX.Element => {
  return (
    <Image
      src={ICONS.get(icon.toLowerCase())}
      width={width}
      height={height}
      alt={icon}
    />
  )
}

Icon.defaultProps = defaultProps

export default Icon
