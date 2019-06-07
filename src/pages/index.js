import "bootstrap/dist/css/bootstrap.min.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Head from "../components/head"
import Layout from "../components/main"
import indexStyles from "./index.module.scss"

const IndexPage = props => {
  return (
    <Layout>
      <Head />
      <div className={indexStyles.card}>
        <h1 className={indexStyles.title}>
          Hello, I'm
          <br /> Allan Wakefield-Olson
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
            <a href="mailto:allanmolson@gmail.com">
              <button className={indexStyles.button}>Contact Me</button>
            </a>
          </div>
        </div>
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
              languages I have used include primarily Javascript, CSS, HTML,
              MySQL and C#.
            </ul>
            <ul>
              <br />
              When I am not coding you can find me spending time with my
              daughter and wife, teaching myself to become a better Developer,
              and working on my house.
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
              <button className={indexStyles.button}>
                Certificates Earned
              </button>
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
    ImageTwo: file(relativePath: { eq: "images/FreeCodeCamp.png" }) {
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
