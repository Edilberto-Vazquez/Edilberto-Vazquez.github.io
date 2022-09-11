import React from "react"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Edilberto</title>
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

const themeInitializer = `(${setInitialColorMode.toString()}())
`

function setInitialColorMode() {
  let theme = ""
  const themes = new Map([
    [true, "dark"],
    [false, "light"],
  ])
  const storedTheme = window.localStorage.getItem("data-theme")
  if (typeof storedTheme === "string") {
    theme = storedTheme
  } else {
    const { matches } = window.matchMedia("(prefers-color-scheme: dark)")
    window.localStorage.setItem("data-theme", themes.get(matches))
    theme = themes.get(matches)
  }
  document.documentElement.setAttribute("data-theme", theme)
}
