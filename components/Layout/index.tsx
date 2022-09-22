import React from "react"
import Head from "next/head"
import Header from "../Navigation/Header"

type HeadMetaTagsProps = {
  title: string
  descriptionMeta: string
  propertyUrl: string
  propertyDescription: string
}

type LayoutProps = {
  children: React.ReactNode
  headMetaTags: HeadMetaTagsProps
}

const Layout = ({ children, headMetaTags }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{headMetaTags.title}</title>
        <meta name="description" content={headMetaTags.descriptionMeta} />
        <meta property="og:url" content={headMetaTags.propertyUrl} />
        <meta
          property="og:description"
          content={headMetaTags.propertyDescription}
        />
      </Head>
      <Header />
      <main className="main-container">{children}</main>
    </>
  )
}

export default Layout
