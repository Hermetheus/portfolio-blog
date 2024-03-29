import "bootstrap/dist/css/bootstrap.min.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout, { introduction } from "../components/main"
import CursorImitator from "../utils/CursorImitator"
import indexStyles from "./index.module.scss"
import Card from "../components/Card/Card"
import SEO from "../components/Seo/seo"

const IndexPage = props => {
  // console.log(props)
  return (
    <Layout>
      <SEO
        title="Allan Olson's Personal Portfolio"
        keywords={[`blog`, `portfolio`, `looking for work`, `react`]}
      />
      <div className={indexStyles.container}>
        <h1 className={indexStyles.title}>
          <CursorImitator
            content={introduction.tagline}
            key={introduction.description}
          />
        </h1>
        <Img
          className={indexStyles.Img1}
          fluid={props.data.ImageOne.childImageSharp.fluid}
        />
        <div className={indexStyles.contactMe}>
          <div className={indexStyles.secondcard}>
            <p>
              I am currently a <b>lucky man</b> to have a amazing wife and
              daughter, that is extremely self-motivated to learn how to perfect
              my code and create programs that will hopefully help future
              generations to come. I am extremely passionate about becoming a
              Full-Stack Developer someday and I am open to any opportunity that
              comes my way. If you'd like to get in touch, please get in touch!
            </p>
            <p>{introduction.description}</p>
            <a href="mailto:allanmolson@gmail.com">
              <button className={indexStyles.btn}>Contact Me</button>
            </a>
          </div>
        </div>
        <h1>Projects</h1>
        <Card />
        <div className={indexStyles.aboutMe}>
          <div className={indexStyles.secondcard}>
            <ul>
              I started my developing journey on August 26, 2018. There have
              been moments that I've struggled and moments that I've triumphed
              like all developers out there. At the young age of 29, I decided
              now is the time to better myself and do what I've always wanted to
              do.
            </ul>
            <ul>
              <br />I am a completely self-taught developer. I work a full time
              job and I am also full time dad and husband. I am extremely
              interested in becoming a <b>Full Stack Developer</b>. The main
              languages I have utilized are HTML, CSS, JavaScript, React,
              NodeJS, Python, MongoDB, MySQL, C#.
            </ul>
            <ul>
              <br />
              When I am not coding you can find me spending time with my wife
              and daughter, teaching myself to become a better Developer, and
              working on my house.
            </ul>

            <a
              href="https://www.freecodecamp.org/allanmolson"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                className={indexStyles.Img}
                fluid={props.data.ImageTwo.childImageSharp.fluid}
              />
              <button className={indexStyles.btn}>Certificates Earned</button>
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
          ...GatsbyImageSharpFluid
        }
      }
    }
    ImageTwo: file(relativePath: { eq: "images/FreeCodeCamp.png" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allContentfulPortfolio {
      edges {
        node {
          projectName
          link
          sourceLink
          projectDescription {
            projectDescription
          }
          projectLanguages {
            content
          }
          projectImage {
            fluid(maxWidth: 1260) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
