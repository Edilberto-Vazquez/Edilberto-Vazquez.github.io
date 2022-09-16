import React from "react"
import Layout from "../components/Layout"
import ProfileCard from "../components/DataDisplay/ProfileCard"
import PageContent from "../i18n/pagecontent.json"
import ProjectList from "../components/DataDisplay/ProjectsList"

export default function Home(): JSX.Element {
  const { profile } = PageContent
  return (
    <Layout>
      <div className="main-page">
        <section className="profile-section">
          <ProfileCard
            image={profile.image}
            name={profile.name}
            descirption={profile.descirption}
            technologies={profile.technologies}
          />
        </section>
        <section className="projects-section">
          <h3 className="projects-section__title">Projects</h3>
          <ProjectList projects={profile.projects} />
        </section>
      </div>
    </Layout>
  )
}
