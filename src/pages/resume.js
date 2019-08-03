import React from "react";
import Layout from "../components/main";
import resume from "../images/AllanWakefieldOlson.pdf";
import csharp from "../images/csharp.svg";
import cssSVG from "../images/css3.svg";
import freeCodeCampSVG from "../images/freecodecamp.svg";
import gatsbySVG from "../images/gatsby.svg";
import githubSVG from "../images/github.svg";
import htmlSVG from "../images/html5.svg";
import javascriptSVG from "../images/javascript.svg";
import mysqlSVG from "../images/mysql.svg";
import npmSVG from "../images/npm.svg";
import photoshopSVG from "../images/photoshop.svg";
import reactSVG from "../images/react.svg";
import vscodeSVG from "../images/vscode.svg";
import resumeStyles from "./resume.module.scss";

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
                <a className={resumeStyles.hrefStyles} href={resume} download>
                  Download PDF
                </a>
              </div>
            </div>
            <div id="about" className={resumeStyles.about}>
              Hi, I'm Allan. A self taught highly motivated developer. I have a
              primary focus on Front-End, UI/UX and with years of customer
              service interactions. I have knowledge with many different
              languages, however I primarily have utilized Javascript, HTML, and
              CSS.
            </div>
            <div className={resumeStyles.experience}>
              <h4>EXPERIENCE</h4>
              <div id="workExperience">
                <h3>E-Commerce Website</h3>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.minnitravelers.com"
                  className={resumeStyles.hrefStyles}
                >
                  MinniTravelers - January 2019 - Present - Template Design
                </a>
                MinniTravelers is a startup company I am designing a e-commerce
                site which is on the Content Manager Wordpress, with
                WooCommerce.
                <h3>Personal Portfolio</h3>
                <a
                  target="_blank"
                  href="www.allanmolson.com"
                  rel="noopener noreferrer"
                  className={resumeStyles.hrefStyles}
                >
                  My Personal Portfolio - May 2019 - Present
                </a>
                My personal portfolio is made with a static website generator
                known as GatsbyJS. It is a react based platform.
                <a
                  target="_blank"
                  href="https://github.com/Hermetheus/portfolio-blog"
                  rel="noopener noreferrer"
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
              </ul>

              <h4 className={resumeStyles.mt5}>TOOLS</h4>
              <div className={resumeStyles.designtools}>
                <span>
                  <img
                    className={resumeStyles.grow}
                    src={photoshopSVG}
                    alt="Photoshop"
                  />
                  Photoshop
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
                    Github
                  </a>
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="VsCode"
                    src={vscodeSVG}
                  />
                  VsCode
                </span>
                <span>
                  <img className={resumeStyles.grow} alt="npm" src={npmSVG} />
                  NPM
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="freeCodeCamp"
                    style={{ backgroundColor: "	#ffffff" }}
                    src={freeCodeCampSVG}
                  />
                  freeCodeCamp
                </span>
              </div>
              <h4 className={resumeStyles.mt5}>DEVELOPMENT SKILLS</h4>
              <div className={resumeStyles.designtools}>
                <span>
                  <img className={resumeStyles.grow} alt="HTML" src={htmlSVG} />
                  HTML5
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="React"
                    src={reactSVG}
                  />
                  React
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="GatsbyJS"
                    src={gatsbySVG}
                  />
                  GatsbyJS
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="Javascript"
                    src={javascriptSVG}
                  />
                  Javascript
                </span>
                <span>
                  <img className={resumeStyles.grow} alt="CSS" src={cssSVG} />
                  CSS3
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="MySQL"
                    src={mysqlSVG}
                  />
                  MySql
                </span>
                <span>
                  <img
                    className={resumeStyles.grow}
                    alt="CSharp"
                    src={csharp}
                  />
                  C#
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
