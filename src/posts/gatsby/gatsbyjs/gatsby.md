---
title: "The Great Gatsby-JS"
date: "2019-04-24"
bio: "In this article I talk about how I learned how to make a site using GatsbyJS and all the wonders of a static website"
featuredImage: "./learn.jpg"
---

<div style="display: flex; flex-direction: column; justify-content: center;
background-color:rgba(0, 0, 0, 0.0470588); text-align:left; vertical-align: middle; width: 100%;padding-left: 25px; padding-right: 25px;">

I'm building my portfolio in The Great Gatsby-JS

![Learn, Practice](./learn.jpg)

## Topics Covered

1. Gatsby

For this project I used a gatsby bare essentials boilerplate.

<div style="background-color: #006aad;">

```Javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

</div>

2. GraphQL - Used for pulling data such as Titles, Dates, Images and much much more!

```GraphQL
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              bio
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 630) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

```

3. React
4. SCSS
5. Working with Markdown

</div>
