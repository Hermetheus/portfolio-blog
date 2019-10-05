import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/main"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
      sort: {
      fields:publishedDate,
      order:DESC,
    }
    ){
      edges{
        node {
          title
          slug
          publishedDate (fromNow:true)
        	image {
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
  `)

  return (
    <Layout>
      <div className={blogStyles.contactMe}>
        <div className={blogStyles.secondcard}>
          <h1>My Blog</h1>
          <p>
            This is a home for all my journies. This includes developing and all
            of the stuff in between! If you ever have any questions or just feel
            like talking.
          </p>
          <a href="mailto:allanmolson@gmail.com">
            <button className={blogStyles.button}>Contact Me</button>
          </a>
        </div>
      </div>
      <div className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <div className={blogStyles.border}>
              <li className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                  <Img fluid={edge.node.image.fluid} />
                </Link>
              </li>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogPage
