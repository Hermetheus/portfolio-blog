const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-js": hot(preferDefault(require("C:\\Users\\allan\\portfolio-blog\\src\\templates\\blog.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\allan\\portfolio-blog\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\allan\\portfolio-blog\\src\\pages\\404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("C:\\Users\\allan\\portfolio-blog\\src\\pages\\blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\allan\\portfolio-blog\\src\\pages\\index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("C:\\Users\\allan\\portfolio-blog\\src\\pages\\portfolio.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("C:\\Users\\allan\\portfolio-blog\\src\\pages\\resume.js")))
}

