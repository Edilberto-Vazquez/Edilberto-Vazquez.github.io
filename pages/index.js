import React from "react"
import Layout from "../components/Layout"
import ProfileCard from "../components/ProfileCard"
import ProjectsSection from "../components/ProjectsSection"

export default function Home() {
  return (
    <Layout>
      <div className="main-page">
        <ProfileCard />
        <ProjectsSection />
      </div>
    </Layout>
  )
}
