import React from "react"
import PageContent from "../i18n/pagecontent.json"
import Layout from "../components/Layout"
import ProfileCard from "../components/DataDisplay/ProfileCard"
import ProjectList from "../components/DataDisplay/ProjectsList"
import { Job } from "../types/types"
import ProfileJobs from "../components/DataDisplay/ProfileJobs"

export default function About(): JSX.Element {
  const { profile } = PageContent
  return (
    <Layout>
      <div className="about-page">
        <section className="profile-section">
          <ProfileCard
            image={profile.image}
            name={profile.name}
            descirption={profile.descirption}
            technologies={profile.technologies}
          />
        </section>
        <section className="resume-section">
          <h3 className="resume-section__title">Resume</h3>
          <p className="resume-section__history">
            I started in this world of programming in 2016 when I entered
            university, but during the pandemic I felt that university did not
            help me achieve my goals, so I decided to study on my own at platzi.
            That was the place where I started to learn about JavaScript and
            Frontend technologies, but not only that, I also decided to explore
            other areas like Backend, some Data Science stuff and programming
            languages like Python, Golang and Rust. And thanks to all the
            courses I took at platzi and hours and hours of self-study, I was
            able to build frontend and backend applications.
          </p>
        </section>
        <section className="jobs-section">
          <h3 className="jobs-section__title">Previous jobs</h3>
          <ul className="previous-jobs">
            {profile.jobs.map(
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
