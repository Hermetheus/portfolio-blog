import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import portfolioStyles from "./portfolio.module.scss"

const PortfolioPage = props => {
  return (
    <Layout>
      <h1>My Projects</h1>
      <div className={portfolioStyles.projectblocks}>
        <div className={portfolioStyles.projects}>
          <a
            href="https://codepen.io/hermetheus/pen/rqGxRM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fluid={props.data.ImageOne.childImageSharp.fluid} />
          </a>
          <span className={portfolioStyles.span}>
            <hr />
            View Code:
            <a
              className={portfolioStyles.source}
              href="https://codepen.io/hermetheus/pen/rqGxRM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source / Demo
            </a>
          </span>
        </div>
        <div className={portfolioStyles.projects}>
          <a
            href="https://codepen.io/hermetheus/pen/rqGxRM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fluid={props.data.ImageTwo.childImageSharp.fluid} />
          </a>

          <span className={portfolioStyles.span}>
            <hr />
            View Code:
            <a
              className={portfolioStyles.source}
              href="https://codepen.io/hermetheus/pen/zMKjpo"
            >
              Source / Demo
            </a>
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage

export const query = graphql`
  query {
    ImageOne: file(relativePath: { eq: "images/image1.png" }) {
      childImageSharp {
        fluid(maxWidth: 550) {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
    ImageTwo: file(relativePath: { eq: "images/image2.png" }) {
      childImageSharp {
        fluid(maxWidth: 550) {
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
