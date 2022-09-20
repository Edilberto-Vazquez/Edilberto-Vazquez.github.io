import React from "react"
import PageContent from "../i18n/pagecontent.json"
import Layout from "../components/Layout"
import ProfileCard from "../components/DataDisplay/ProfileCard"
import ProjectList from "../components/DataDisplay/ProjectsList"
import { useGqlQuery } from "../graphql/useFetchQuery"
import { indexPageQuery } from "../graphql/queries"

const variables = { lang: "es-MX" }

export default function Home(): JSX.Element {
  const { profile } = PageContent

  const { loading, error, data } = useGqlQuery({
    query: indexPageQuery,
    variables,
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
            description={data.description}
            technologies={data.technologies}
          />
        </section>
        <section className="projects-section">
          <h3 className="projects-section__title">Projects</h3>
          <ProjectList projects={data.projects} />
        </section>
      </div>
    </Layout>
  )
}
