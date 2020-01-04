import React from "react"
import Layout from "../components/main"
import resume from "../images/AllanWakefieldOlson.pdf"
import csharp from "../images/csharp.svg"
import cssSVG from "../images/css3.svg"
import freeCodeCampSVG from "../images/freecodecamp.svg"
import gatsbySVG from "../images/gatsby.svg"
import githubSVG from "../images/github.svg"
import htmlSVG from "../images/html5.svg"
import javascriptSVG from "../images/javascript.svg"
import mysqlSVG from "../images/mysql.svg"
import npmSVG from "../images/npm.svg"
import photoshopSVG from "../images/photoshop.svg"
import reactSVG from "../images/react.svg"
import vscodeSVG from "../images/vscode.svg"
import resumeStyles from "./resume.module.scss"
import adobexdSVG from "../images/adobexd.svg"
import pythonSVG from "../images/python-icon.svg"
import graphqlSVG from "../images/graphql-icon.svg"

const ResumePage = () => {
  return (
    <Layout>
      <div className={resumeStyles.background}>
        <div className={resumeStyles.border}>
          <div className={resumeStyles.header}>
            <h1 className={resumeStyles.h1}>Allan Wakefield-Olson</h1>

            <div className={resumeStyles.utils}>
              <div className={resumeStyles.portfolio}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.allanmolson.com"
                  className={resumeStyles.hrefStyles}
                >
                  Open Portfolio
                </a>
              </div>
              <div className={resumeStyles.pdf}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/allanmolson"
                  className={resumeStyles.hrefStyles}
                >
                  LinkedIn
                </a>
              </div>
              <div className={resumeStyles.pdf}>
                <a className={resumeStyles.hrefStyles} href={resume} download>
                  Download PDF
                </a>
              </div>
            </div>
            <div id="about" className={resumeStyles.about}>
              Hi, I'm Allan. A self taught highly motivated Developer. I have a
              primary focus on Front-End, UI/UX and with years of management and
              customer service experience. I have knowledge with many different
              languages, I am proficient in HTML, CSS, JavaScript, React,
              MongoDB and GraphQL. I am familiar with C#, Python, MySQL and
              other Technologies.
            </div>
            <div className={resumeStyles.experience}>
              <h4>EXPERIENCE</h4>
              <div id="workExperience">
                <h3>MinniTravelers</h3>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.minnitravelers.com"
                  className={resumeStyles.hrefStyles}
                >
                  MinniTravelers - January 2019 - Present - E-Commerce Website
                </a>
                MinniTravelers is a startup company I am designing a e-commerce
                site which is on the Content Manager Wordpress, with
                WooCommerce.
                <h3>Personal Portfolio</h3>
                <a
                  target="_blank"
                  href="https://www.allanmolson.com"
                  rel="noopener noreferrer"
                  className={resumeStyles.hrefStyles}
                >
                  My Personal Portfolio - May 2019 - Present
                </a>
                My personal portfolio is made with a static website generator
                known as GatsbyJS.
                <br />
                Utilized: HTML, CSS, JavaScript, React, GatsbyJS, GraphQL,
                Contentful & Netlify.
                <a
                  target="_blank"
                  href="https://github.com/Hermetheus/portfolio-blog"
                  rel="noopener noreferrer"
                  className={resumeStyles.hrefStyles}
                >
                  Source Code Here
                </a>
                <h3>Dev Connector</h3>
                <a
                  target="_blank"
                  href="https://reactdevconnector.herokuapp.com/"
                  rel="noopener noreferrer"
                  className={resumeStyles.hrefStyles}
                >
                  Dev Connector
                </a>
                A Developer Portal for other Developers to connect with one
                another
                <br />
                Utilized: HTML, CSS, JavaScript, React, Redux, MongoDB, Express,
                NodeJS, Heroku
                <a
                  target="_blank"
                  href="https://github.com/Hermetheus/Dev-Connector"
                  rel="noopener noreferrer"
                  className={resumeStyles.hrefStyles}
                >
                  Source Code Here
                </a>
              </div>
              <h4 className={resumeStyles.education}>EDUCATION</h4>
              <div className={resumeStyles.myeducation} id="education">
                My Education
              </div>
              <p>
                <a
                  className={resumeStyles.hrefStyles}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    rel="noopener noreferrer"
                    className={resumeStyles.educationStyles}
                  >
                    Responsive Web Design Certificate
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freecodecamp.org/certification/allanmolson/javascript-algorithms-and-data-structures"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={resumeStyles.educationStyles}
                  >
                    Javascript Algorithms & Data Structures Certificate
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freecodecamp.org/certification/allanmolson/front-end-libraries"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={resumeStyles.educationStyles}
                  >
                    Front End Libraries Certificate
                  </a>
                </li>
              </ul>
              Additonal Resources
              <ul>
                <li>Reddit</li>
                <li>
                  <a
                    href="www.github.com/hermetheus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={resumeStyles.educationStyles}
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div className={resumeStyles.design}>
              <h4>DESIGN SKILLS</h4>
              <ul className={resumeStyles.mt2} id="skills">
                <li>UI/UX</li>
                <li>Design Research</li>
                <li>Grid & Layout</li>
                <li>WireFrames</li>
              </ul>

              <h4 className={resumeStyles.mt5}>TOOLS</h4>
              <div className={resumeStyles.designtools}>
                <span>
                  <img
                    className={resumeStyles.grow}
                    src={adobexdSVG}
                    alt="AdobeXd"
                  />
                  <div>AdobeXD</div>
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    src={photoshopSVG}
                    alt="Photoshop"
                  />
                  <div>Photoshop</div>
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="Github"
                    src={githubSVG}
                  />

                  <a
                    href="https://www.github.com/hermetheus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={resumeStyles.educationStyles}
                  >
                    <div>Github</div>
                  </a>
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="VsCode"
                    src={vscodeSVG}
                  />
                  <div>VsCode</div>
                </span>
                <span>
                  <img className={resumeStyles.grow} alt="npm" src={npmSVG} />
                  <div>NPM</div>
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="freeCodeCamp"
                    style={{ backgroundColor: "	#ffffff" }}
                    src={freeCodeCampSVG}
                  />
                  <div>freeCodeCamp</div>
                </span>
              </div>
              <h4 className={resumeStyles.mt5}>DEVELOPMENT SKILLS</h4>
              <div className={resumeStyles.designtools}>
                <span>
                  <img className={resumeStyles.grow} alt="HTML" src={htmlSVG} />
                  <div>HTML5</div>
                </span>

                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="Javascript"
                    src={javascriptSVG}
                  />
                  <div>Javascript</div>
                </span>
                <span>
                  <img className={resumeStyles.grow} alt="CSS" src={cssSVG} />
                  <div>CSS3</div>
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="React"
                    src={reactSVG}
                  />
                  <div>React</div>
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="Python"
                    src={pythonSVG}
                  />
                  <div>Python</div>
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="GraphQL"
                    src={graphqlSVG}
                  />
                  <div>GraphQL</div>
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="MySQL"
                    src={mysqlSVG}
                  />
                  <div>MySql</div>
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="CSharp"
                    src={csharp}
                  />
                  <div>C#</div>
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="GatsbyJS"
                    src={gatsbySVG}
                  />
                  <div>GatsbyJS</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ResumePage
