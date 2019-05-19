import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/main"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
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
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
