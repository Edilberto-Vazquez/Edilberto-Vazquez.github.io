import React from "react"
import Header from "../Header"

const Layout = ({ children }) => {
  return (
    <main className="main-container">
      <Header />
      {children}
    </main>
  )
}

export default Layout
