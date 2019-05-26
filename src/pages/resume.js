import React from "react"
import Layout from "../components/main"
import resumeStyles from "./resume.module.scss"

const ResumePage = () => {
  return (
    <Layout>
      <div className={resumeStyles.wrapper}>
        <div className={resumeStyles.sidebar}>
          <h3>Allan Wakefield-Olson</h3>
          <span>Developer</span>
        </div>
        <div className={resumeStyles.main}>
          <h3>Career Profile</h3>
          <h3>Experiences</h3>
          <h3>Projects</h3>
          <h3>Skills & Proficiencies</h3>
          <div className={resumeStyles.skills} />
        </div>
      </div>
    </Layout>
  )
}

export default ResumePage
