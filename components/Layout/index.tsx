import React from "react"
import Header from "../Header"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main className="main-container">{children}</main>
    </>
  )
}

export default Layout
