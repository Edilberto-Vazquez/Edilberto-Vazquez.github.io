import React from "react"

const ToggleSwitch = ({ onChange, checked = false, id = "" }) => {
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
