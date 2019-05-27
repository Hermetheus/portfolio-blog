import React from "react"
import resumeStyles from "./resume.module.scss"

const ResumePage = () => {
  return (
    <Layout>
      <body className={resumeStyles.background}>
        <div className={resumeStyles.border}>
          <div className={resumeStyles.header}>
            <div className={resumeStyles.pdf}>
              <a href="https://www.allanmolson.com" download="" class="b">
                Download PDF
              </a>
            </div>
            <h1>Allan Wakefield-Olson</h1>
            <a
              target="_blank"
              href="https://www.allanmolson.com"
              className={resumeStyles.hrefStyles}
            >
              Open Portfolio
            </a>
            <div id="about" className={resumeStyles.about} />
            <div className={resumeStyles.experience}>
              <h4>EXPERIENCE</h4>
              <div id="workExperience">
                <h3>E-Commerce Website</h3>
                <a
                  target="_blank"
                  href="https://www.minnitravelers.com"
                  className={resumeStyles.hrefStyles}
                >
                  MinniTravelers - January 2019 - Present
                </a>
                MinniTravelers is a startup company I am designing a e-commerce
                site which is on the Content Manager Wordpress, with
                WooCommerce.
                <h3>Personal Portfolio</h3>
                <a
                  target="_blank"
                  href="https://www.allanmolson.com"
                  className={resumeStyles.hrefStyles}
                >
                  My Personal Portfolio - May 2019 - Present
                </a>
                My personal portfolio is made with a static website generator
                known as GatsbyJS. It is a react based platform.
                <a
                  target="_blank"
                  href="https://github.com/Hermetheus/portfolio-blog"
                  className={resumeStyles.hrefStyles}
                >
                  Source Code Here
                </a>
              </div>
              <h4 className={resumeStyles.education}>EDUCATION</h4>
              <div class={resumeStyles.myeducation} id="education">
                My Education
              </div>
              <p>
                <a
                  className={resumeStyles.hrefStyles}
                  target="_blank"
                  href="https://www.freecodecamp.org/allanmolson"
                >
                  freeCodeCamp - August 2018-November 2018
                </a>
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.freecodecamp.org/certification/allanmolson/responsive-web-design"
                    target="_blank"
                  >
                    Responsive Web Design Certificate
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freecodecamp.org/certification/allanmolson/javascript-algorithms-and-data-structures"
                    target="_blank"
                  >
                    Javascript Algorithms & Data Structures Certificate
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freecodecamp.org/certification/allanmolson/front-end-libraries"
                    target="_blank"
                  >
                    Front End Libraries Certificate
                  </a>
                </li>
              </ul>
              Additonal Sources
              <ul>
                <li>Reddit</li>
                <li>
                  <a href="www.github.com/hermetheus">Github</a>
                </li>
              </ul>
            </div>
            <div className={resumeStyles.design}>
              <h4>DESIGN SKILLS</h4>
              <ul class="mt2" id="skills">
                <li>UI/UX</li>
                <li>Design Research</li>
                <li>Grid & Layout</li>
              </ul>

              <h4 class="mt5">TOOLS</h4>
              <div class="mt2" id="design-tools" />
              <img
                className={resumeStyles.grow}
                style="width: 50px; height: 50px;"
                src="images/photoshop.svg"
              />
              <span>Photoshop</span>
              <img
                className={resumeStyles.grow}
                style="width: 50px; height: 50px;"
                src="images/github.svg"
              />
              <span>
                <a href="https://www.github.com/hermetheus" target="_blank">
                  Github
                </a>
              </span>
              <span>
                <img
                  className={resumeStyles.grow}
                  style="width: 50px; height: 50px;"
                  src="images/vscode.svg"
                />
                VsCode
              </span>
              <h4 class="mt5">DEVELOPMENT SKILLS</h4>
              <div class="mt4" id="development-tools">
                <span>
                  <img
                    className={resumeStyles.grow}
                    style="width: 50px; height: 50px;"
                    src="images/html5.svg"
                  />
                  HTML5
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    style="width: 50px; height: 50px;"
                    src="images/react.svg"
                  />
                  React
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    style="width: 50px; height: 50px;"
                    src="images/gatsby.svg"
                  />
                  GatsbyJS
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    style="width: 50px; height: 50px;"
                    src="images/javascript.svg"
                  />
                  Javascript
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    style="width: 50px; height: 50px;"
                    src="images/css3.svg"
                  />
                  CSS3
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    style="width: 50px; height: 50px;"
                    src="images/mysql.svg"
                  />
                  MySql
                </span>
              </div>
            </div>
          </div>
        </div>
      </body>
    </Layout>
  )
}

export default ResumePage
