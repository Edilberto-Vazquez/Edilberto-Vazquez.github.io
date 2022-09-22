import React from "react"
import Layout from "../components/Layout"
import ProfileCard from "../components/DataDisplay/ProfileCard"
import JobCard from "../components/DataDisplay/JobCard"
import { Job } from "../types/types"
import { useLanguageContext } from "../context/useContext"
import { useGqlQuery } from "../graphql/useFetchQuery"
import { aboutPageQuery } from "../graphql/queries"
import {
  aboutPage,
  languageSelector,
  downloadCV,
  profileCard,
} from "../i18n/pagecontent.json"

export default function About(): JSX.Element {
  const { language } = useLanguageContext()
  const { loading, error, data } = useGqlQuery({
    query: aboutPageQuery,
    variables: language,
  })

  if (loading) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Something wrong</span>
  }

  return (
    <Layout
      headMetaTags={{
        title: "Edilberto Vazquez; About me | Sobre mí",
        descriptionMeta: "About me | Sobre mí",
        propertyUrl: "https://potatofy.dev/about",
        propertyDescription:
          "Frontend, JavaScript, TypeScript CSS, HTML, React, NextJS, Backend, Golang, Docker, MongoDB, SQL",
      }}
    >
      <div className="about-page">
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
        <section className="resume-section">
          <h3 className="resume-section__title">
            {aboutPage[language.lang].resume}
          </h3>
          <p className="resume-section__history">{data.resume}</p>
        </section>
        <section className="jobs-section">
          <h3 className="jobs-section__title">
            {aboutPage[language.lang].previousJobs}
          </h3>
          <ul className="previous-jobs">
            {data.jobs.map(
              (
                { position, company, location, description, dates }: Job,
                index: number
              ): JSX.Element => (
                <li className="previous-jobs__item" key={index}>
                  <JobCard
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
