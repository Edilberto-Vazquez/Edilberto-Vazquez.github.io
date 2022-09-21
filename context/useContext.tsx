import React, { createContext, useContext, useState, useEffect } from "react"

type Lang = {
  lang: string
}

type LanguageState = {
  language: Lang
  handleLanguage: (lang: string) => void
}

type LanguageProps = {
  children: React.ReactNode
}

const LanguageContext = createContext<LanguageState>({
  language: { lang: "" },
  handleLanguage: (lang: string) => {},
})

export const LanguageWrapper = ({ children }: LanguageProps): JSX.Element => {
  const [language, setLanguage] = useState<Lang>({ lang: "en-US" })

  const handleLanguage = (lang: string) => {
    setLanguage({ lang })
    window.localStorage.setItem("language", lang)
  }

  useEffect(() => {
    const acceptedLang: string[] = ["en-US", "es-MX"]
    const lang: string = window.localStorage.getItem("language")
    if (!acceptedLang.includes(lang)) {
      window.localStorage.setItem("language", "en-US")
      setLanguage({ lang: "en-US" })
    }
    setLanguage({ lang })
  }, [])

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext(): LanguageState {
  return useContext(LanguageContext)
}
