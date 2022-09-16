import React from "react"
import Layout from "../components/Layout"
import ProfileCard from "../components/DataDisplay/ProfileCard"
import ProjectItem from "../components/DataDisplay/ProjectItem"
import PageContent from "../i18n/pagecontent.json"

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
          {profile.projects.map((project, index) => (
            <ProjectItem
              key={index}
              name={project.name}
              description={project.description}
              repository={project.description}
              technologies={project.technologies}
            />
          ))}
        </section>
      </div>
    </Layout>
  )
}
