import React, { createContext, useContext, useState, useEffect } from "react"

type Lang = {
  lang: string
}

type LanguageState = {
  language: Lang
  setLanguage: React.Dispatch<React.SetStateAction<Lang>>
}

type LanguageProps = {
  children: React.ReactNode
}

const LanguageContext = createContext<LanguageState>({
  language: { lang: "en-US" },
  setLanguage: (lang: React.SetStateAction<Lang>) => lang,
})

export const LanguageWrapper = ({ children }: LanguageProps): JSX.Element => {
  const [language, setLanguage] = useState<Lang>({ lang: "en-US" })

  useEffect(() => {
    console.log(typeof window !== "undefined")
    if (typeof window !== "undefined") {
      const acceptedLang: string[] = ["en-US", "es-MX"]
      const lang: string = window.localStorage.getItem("language")
      if (acceptedLang.includes(lang)) {
        setLanguage({ lang })
      }
      window.localStorage.setItem("language", "en-US")
      setLanguage({ lang: "en-US" })
    } else {
      setLanguage({ lang: "en-US" })
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext(): LanguageState {
  return useContext(LanguageContext)
}
