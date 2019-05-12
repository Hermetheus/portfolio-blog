import "bootstrap/dist/css/bootstrap.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"

const IndexPage = props => {
  return (
    <Layout>
      <Head />
      <div class="container">
        <div className={indexStyles.firstcard}>
          <div className={indexStyles.card}>
            <div className={indexStyles.titlebox}>
              <Img
                className={indexStyles.Img}
                fluid={props.data.ImageOne.childImageSharp.fluid}
              />
              <h1 className={indexStyles.title}>
                Hello, I'm
                <br /> Allan Wakefield-Olson
              </h1>
            </div>
          </div>
        </div>
        <div className={indexStyles.secondcard}>
          <div className={indexStyles.card}>
            <p>
              I am currently a <b>lucky man</b> to have a amazing woman and
              daughter, that is extremely self-motivated to learn how to perfect
              my code and create programs that will hopefully help future
              generations to come. I am extremely passionate about becoming a
              Full-Stack Developer someday and am open to any opportunity that
              comes my way. If you'd like to get in touch, please get in touch!
            </p>
            <a href="mailto:allanmolson@gmail.com">
              <button className={indexStyles.button}>Contact Me</button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    ImageOne: file(relativePath: { eq: "images/index.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`
