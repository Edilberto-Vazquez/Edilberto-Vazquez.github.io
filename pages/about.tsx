import React from "react"
import Layout from "../components/Layout"
import ProfileCard from "../components/DataDisplay/ProfileCard"
import ProfileJobs from "../components/DataDisplay/ProfileJobs"
import { Job } from "../types/types"
import { useGqlQuery } from "../graphql/useFetchQuery"
import { aboutPageQuery } from "../graphql/queries"

const variables = { lang: "es-MX" }

export default function About(): JSX.Element {
  const { loading, error, data } = useGqlQuery({
    query: aboutPageQuery,
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
      <div className="about-page">
        <section className="profile-section">
          <ProfileCard
            image={data.image}
            name={data.name}
            description={data.description}
            technologies={data.technologies}
          />
        </section>
        <section className="resume-section">
          <h3 className="resume-section__title">Resume</h3>
          <p className="resume-section__history">{data.resume}</p>
        </section>
        <section className="jobs-section">
          <h3 className="jobs-section__title">Previous jobs</h3>
          <ul className="previous-jobs">
            {data.jobs.map(
              (
                { position, company, location, description, dates }: Job,
                index: number
              ): JSX.Element => (
                <li className="previous-jobs__item" key={index}>
                  <ProfileJobs
                    position={position}
                    company={company}
                    location={location}
                    description={description}
                    dates={dates}
                  />
                </li>
              )
            )}
          </ul>
        </section>
      </div>
    </Layout>
  )
}
