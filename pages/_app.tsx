import React from "react"
import "../styles/_main.scss"
import { LanguageWrapper } from "../context/useContext"

function MyApp({ Component, pageProps }) {
  return (
    <LanguageWrapper>
      <Component {...pageProps} />
    </LanguageWrapper>
  )
}

export default MyApp
