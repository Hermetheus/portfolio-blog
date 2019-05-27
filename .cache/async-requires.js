// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-js": () => import("C:\\Users\\ALaptop\\gatsby-portfolio\\src\\templates\\blog.js" /* webpackChunkName: "component---src-templates-blog-js" */),
  "component---src-pages-404-js": () => import("C:\\Users\\ALaptop\\gatsby-portfolio\\src\\pages\\404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-js": () => import("C:\\Users\\ALaptop\\gatsby-portfolio\\src\\pages\\blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-index-js": () => import("C:\\Users\\ALaptop\\gatsby-portfolio\\src\\pages\\index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-portfolio-js": () => import("C:\\Users\\ALaptop\\gatsby-portfolio\\src\\pages\\portfolio.js" /* webpackChunkName: "component---src-pages-portfolio-js" */),
  "component---src-pages-resume-js": () => import("C:\\Users\\ALaptop\\gatsby-portfolio\\src\\pages\\resume.js" /* webpackChunkName: "component---src-pages-resume-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "C:\\Users\\ALaptop\\gatsby-portfolio\\.cache\\data.json")

