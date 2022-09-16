import React from "react"

type ToggleSwitchProps = {
  checked: boolean
  id: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ToggleSwitch = ({
  id,
  checked,
  onChange,
}: ToggleSwitchProps): JSX.Element => {
  return (
    <label className="toggle-switch" htmlFor={id}>
      <input
        id={id}
        className="toggle-switch__input"
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <span className="toggle-switch__slider" />
    </label>
  )
}

export default ToggleSwitch
