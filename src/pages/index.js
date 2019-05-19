import "bootstrap/dist/css/bootstrap.min.css"
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
              Full-Stack Developer someday and am open to any opportunity that
              comes my way. If you'd like to get in touch, please get in touch!
            </p>
            <a href="mailto:allanmolson@gmail.com">
              <button className={indexStyles.button}>Contact Me</button>
            </a>
          </div>
        </div>
        <div className={indexStyles.aboutMe}>
          <div className={indexStyles.secondcard}>
            <p>
              I started my development journey August 26, 2018. There have been
              moments that I've struggled and moments that I've triumphed like
              all developers out there. This journey has taken me many of
              places, but not the place I've always wanted to be in my life. At
              the young age of 29, I decided now is the time.
              <br />
              My wife helped push me into this direction and I am grateful to
              her, I found a website any true beginner should use to learn.
            </p>
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
