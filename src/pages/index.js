import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <div class="container">
        <div class="prime">
          <h1 className={indexStyles.title}>
            Hello, my name is Allan Wakefield-Olson
          </h1>
          <p class="about">
            I am currently a <b>Branch Operations Manager</b> that is self
            teaching how to code. I am extremely passionate about becoming a
            Full-Stack Developer someday and am open to any opportunity that
            comes my way. If you'd like to get in touch, please get in touch!
          </p>

          <a href="mailto:allanmolson@gmail.com">
            <button className={indexStyles.button}>Contact Me</button>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
