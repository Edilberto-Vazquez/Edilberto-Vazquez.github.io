import React from "react"

const Error = () => {
  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div className="error">
      <div className="error__message">Oops something happened</div>
      <button className="error__reload" type="button" onClick={handleReload}>
        Reload the page
      </button>
    </div>
  )
}

export default Error
