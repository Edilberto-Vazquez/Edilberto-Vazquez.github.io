import React from "react"
import Layout from "../components/Layout"
import ProfileCard from "../components/ProfileCard"
import ProjectsSection from "../components/ProjectsSection"
import { profileCard } from "../i18n/pagecontent.json"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className="main-page">
        <ProfileCard data={profileCard} />
        <ProjectsSection>Projects section</ProjectsSection>
      </div>
    </Layout>
  )
}
