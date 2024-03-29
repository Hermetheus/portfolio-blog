import React from "react"
import "../styles/index.scss"
import Footer from "./Footer/footer"
import Header from "./Header/header"
import layoutStyles from "./layout.module.scss"
import Head from "./Header/head"

export const introduction = {
  tagline: ["> -- Hello,", "I'm Allan Wakefield-Olson!"],
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
    <>
      <Head />
      <Header />
      <div className={layoutStyles.content}>{props.children}</div>
      <Footer />
    </>
  )
}

export default Layout
