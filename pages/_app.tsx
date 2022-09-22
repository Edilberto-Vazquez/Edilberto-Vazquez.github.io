import React from "react"
import Head from "next/head"
import "../styles/_main.scss"
import { LanguageWrapper } from "../context/useContext"

function MyApp({ Component, pageProps }) {
  return (
    <LanguageWrapper>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </LanguageWrapper>
  )
}

export default MyApp
