import React, { useEffect } from "react"
import Layout from "../components/Layout"
import ProfileCard from "../components/DataDisplay/ProfileCard"
import ProjectList from "../components/DataDisplay/ProjectList"
import { useLanguageContext } from "../context/useContext"
import { useGqlQuery } from "../graphql/useFetchQuery"
import { indexPageQuery } from "../graphql/queries"
import {
  indexPage,
  languageSelector,
  downloadCV,
} from "../i18n/pagecontent.json"

export default function Home(): JSX.Element {
  const { language } = useLanguageContext()
  const { loading, error, data } = useGqlQuery({
    query: indexPageQuery,
    variables: language,
  })

  if (loading) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Something wrong</span>
  }

  return (
    <Layout>
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
