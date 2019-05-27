import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/main"
import portfolioStyles from "./portfolio.module.scss"

const PortfolioPage = props => {
  return (
    <Layout>
      <div className={portfolioStyles.padding}>
        <h1>My Projects</h1>
      </div>
      <div className={portfolioStyles.projectBlocks}>
        <div className={portfolioStyles.projectCard}>
          <div className={portfolioStyles.card}>
            <a
              href="https://github.com/Hermetheus/portfolio-blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                className={portfolioStyles.Img}
                fluid={props.data.ImageThree.childImageSharp.fluid}
              />
            </a>

            <span className={portfolioStyles.span}>
              <hr />
              <h3>Gatsby JS Portfolio Page</h3>
              View Code:
              <a
                className={portfolioStyles.source}
                href="https://github.com/Hermetheus/portfolio-blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Source</b>
              </a>
            </span>
            <span>
              <p>
                This is my portfolio page source code! This was an extremely fun
                project. It helps me showcase my journey and everything in
                between! Thanks for taking your time in me.
              </p>
            </span>
          </div>
        </div>
        <div className={portfolioStyles.projectCard}>
          <div className={portfolioStyles.card}>
            <a
              href="https://codepen.io/hermetheus/pen/rqGxRM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                className={portfolioStyles.Img}
                fluid={props.data.ImageOne.childImageSharp.fluid}
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
                <b>Source / Demo</b>
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
        </div>
        <div className={portfolioStyles.projectCard}>
          <div className={portfolioStyles.card}>
            <a
              href="https://codepen.io/hermetheus/pen/zMKjpo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                className={portfolioStyles.Img}
                fluid={props.data.ImageTwo.childImageSharp.fluid}
              />
            </a>

            <span className={portfolioStyles.span}>
              <hr />
              <h3>Pomodoro Timer</h3>
              View Code:
              <a
                className={portfolioStyles.source}
                href="https://codepen.io/hermetheus/pen/zMKjpo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Source / Demo</b>
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
      </div>
    </Layout>
  )
}

export default PortfolioPage

export const query = graphql`
  query {
    ImageOne: file(relativePath: { eq: "images/image1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
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
        fluid(maxWidth: 1000) {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
    ImageThree: file(relativePath: { eq: "images/image3.PNG" }) {
      childImageSharp {
        fluid(maxWidth: 750) {
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
