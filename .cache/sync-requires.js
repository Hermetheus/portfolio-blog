const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-js": hot(preferDefault(require("C:\\Users\\ALaptop\\gatsby-portfolio\\src\\templates\\blog.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\ALaptop\\gatsby-portfolio\\src\\pages\\404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("C:\\Users\\ALaptop\\gatsby-portfolio\\src\\pages\\blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\ALaptop\\gatsby-portfolio\\src\\pages\\index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("C:\\Users\\ALaptop\\gatsby-portfolio\\src\\pages\\portfolio.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("C:\\Users\\ALaptop\\gatsby-portfolio\\src\\pages\\resume.js")))
}

