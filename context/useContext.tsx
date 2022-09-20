import React, { createContext, useContext, useState } from "react"

type Lang = {
  lang: string
}

type LanguageState = {
  language: Lang
  setLanguage: React.Dispatch<
    React.SetStateAction<{
      lang: string
    }>
  >
}

type LanguageProps = {
  children: React.ReactNode
}

const LanguageContext = createContext<LanguageState>({
  language: { lang: "" },
  setLanguage: (lang: Lang): Lang => lang,
})

export const LanguageWrapper = ({ children }: LanguageProps): JSX.Element => {
  const [language, setLanguage] = useState<Lang>({ lang: "es-MX" })
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext(): LanguageState {
  return useContext(LanguageContext)
}
