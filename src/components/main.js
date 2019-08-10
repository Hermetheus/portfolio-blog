import React from "react"
import "../styles/index.scss"
import Footer from "./footer"
import Header from "./header"
import layoutStyles from "./layout.module.scss"

export const introduction = {
  tagline: ["Hello,", "I'm Allan Wakefield-Olson!"],
  description: [
    "> -- I work as a full-time a Branch Operations Manager at Fastenal and",
    "I am excited to bring my experiences to a career in Developing.",
    "> -- Below are the main languages/frameworks I have worked with",
    "> -- Javascript, HTML, CSS, React, GraphQL and GatsbyJS",
    "> -- I have also had experience with, PHP, PYTHON, C# and MySQL",
  ],
}

const Layout = props => {
  return (
    <div>
      <div className={layoutStyles.container}>
        <div>
          <Header />
        </div>
        <div>
          <div className={layoutStyles.content}>{props.children}</div>
        </div>
        <div />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
