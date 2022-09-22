import React, { useEffect } from "react"
import Head from "next/head"
import Layout from "../components/Layout"
import ProfileCard from "../components/DataDisplay/ProfileCard"
import ProjectList from "../components/DataDisplay/ProjectList"
import Loading from "../components/Animations/Loading"
import { useLanguageContext } from "../context/useContext"
import { useGqlQuery } from "../graphql/useFetchQuery"
import { indexPageQuery } from "../graphql/queries"
import {
  indexPage,
  languageSelector,
  downloadCV,
  profileCard,
} from "../i18n/pagecontent.json"
import Error from "../components/Animations/Error"

export default function Home(): JSX.Element {
  const { language } = useLanguageContext()
  const { loading, error, data } = useGqlQuery({
    query: indexPageQuery,
    variables: language,
  })

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <Layout
      headMetaTags={{
        title:
          "Edilberto Vazquez; Software Developer | desarrollador de software ",
        descriptionMeta: "Edilberto website",
        propertyUrl: "https://potatofy.dev/",
        propertyDescription:
          "Frontend, JavaScript, TypeScript CSS, HTML, React, NextJS, Backend, Golang, Docker, MongoDB, SQL",
      }}
    >
      <div className="main-page">
        <section className="profile-section">
          <ProfileCard
            image={data.image}
            name={data.name}
            language={{
              languages: languageSelector[language.lang],
              value: downloadCV[language.lang],
            }}
            description={data.description}
            platziLink={profileCard[language.lang].platziLink}
            technologies={data.technologies}
          />
        </section>
        <section className="projects-section">
          <h3 className="projects-section__title">
            {indexPage[language.lang].projects}
          </h3>
          <ProjectList projects={data.projects} />
        </section>
      </div>
    </Layout>
  )
}
