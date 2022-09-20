import React from "react"

type Language = {
  type: string
  value: string
}

type LanguageSelectorProps = {
  languages: []
  value: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

const LanguageSelector = ({
  languages,
  value,
  onChange,
}: LanguageSelectorProps): JSX.Element => {
  return (
    <select
      className="language-selector"
      name="select"
      onChange={onChange}
      value={value}
    >
      {languages.map(
        ({ type, value }: Language): JSX.Element => (
          <option className="language-selector__option" key={type} value={type}>
            {value}
          </option>
        )
      )}
    </select>
  )
}

export default LanguageSelector
