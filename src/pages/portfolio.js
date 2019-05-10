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
            <Img
              className={portfolioStyles.Img}
              fixed={props.data.ImageOne.childImageSharp.fixed}
            />
          </a>
          <span className={portfolioStyles.span}>
            <hr />
            <h3>Random Quote Generator</h3>
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
          <span>
            <p>
              This random quote generator was made primarily with HTML, CSS,
              jQuery, and a random quote site API. Find a quote to get you
              inspired and send it out to the Twitterverse!
            </p>
          </span>
        </div>
        <div className={portfolioStyles.projects}>
          <a
            href="https://codepen.io/hermetheus/pen/rqGxRM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              className={portfolioStyles.Img}
              fixed={props.data.ImageTwo.childImageSharp.fixed}
            />
          </a>

          <span className={portfolioStyles.span}>
            <hr />
            <h3>Pomodoro Timer</h3>
            View Code:
            <a
              className={portfolioStyles.source}
              href="https://codepen.io/hermetheus/pen/zMKjpo"
            >
              Source / Demo
            </a>
          </span>
          <span>
            <p>
              Take a break would ya? This Pomodoro timer is made with React,
              SCSS and blood sweat and tears. Remember to break as needed to
              keep mental sanity whilst coding.
            </p>
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
        fixed(width: 550, height: 350) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
    ImageTwo: file(relativePath: { eq: "images/image2.png" }) {
      childImageSharp {
        fixed(width: 550, height: 350) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
`
