import React from "react"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="color-scheme" content="light dark" />
        <meta name="apple-mobile-web-app-title" content="potatofy.dev" />
        {/* <meta property="og:url" content="https://potatofy.dev/" /> */}
        <meta property="og:type" content="website" />
        <meta name="application-name" content="potatofy.dev" />
        {/* <meta name="description" content="Edilberto Vazquez website" /> */}
        <meta property="og:site_name" content="potatofy.dev" />
        <meta property="og:locale" content="en_US" />
        {/* <meta property="og:description" content="Edilberto Vazquez website" /> */}
        <meta
          property="og:title"
          content="Frontend, JavaScript, TypeScript CSS, HTML, React, NextJS, Backend, Golang, Docker, MongoDB, SQL"
        />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

const themeInitializer = `(${setInitialColorMode.toString()}())`

function setInitialColorMode() {
  let theme: string
  const themes = new Map<boolean, string>([
    [true, "dark"],
    [false, "light"],
  ])
  const storedTheme: string = window.localStorage.getItem("color-mode")
  if (typeof storedTheme === "string") {
    theme = storedTheme
  } else {
    const { matches } = window.matchMedia("(prefers-color-scheme: dark)")
    window.localStorage.setItem("color-mode", themes.get(matches))
    theme = themes.get(matches)
  }
  document.documentElement.setAttribute("color-mode", theme)
}
