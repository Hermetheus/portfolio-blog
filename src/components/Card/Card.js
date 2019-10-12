import React, { Component } from "react"
import ReactCardFlip from "react-card-flip"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import cardStyles from "./card.module.scss"

class Card extends Component {
  constructor() {
    super()
    this.state = {
      isFlipped: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allContentfulPortfolio {
              edges {
                node {
                  projectName
                  link
                  sourceLink
                  projectDescription {
                    projectDescription
                  }
                  projectLanguages {
                    content
                  }
                  projectImage {
                    fluid(maxWidth: 1260) {
                      ...GatsbyContentfulFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <>
            {/* {console.log(data)} */}
            {data.allContentfulPortfolio.edges.map((edge, index) => {
              return (
                <div className={cardStyles.card} key={index}>
                  <ReactCardFlip
                    isFlipped={this.state.isFlipped}
                    flipDirection="vertical"
                    key={index}
                  >
                    <div key="front">
                      <div key={index}>
                        <div>
                          {/* {console.log(edge)} */}
                          <Img
                            className={cardStyles.img}
                            fluid={edge.node.projectImage.fluid}
                          />
                          <h3>{edge.node.projectName}</h3>
                          <button
                            className={cardStyles.btn}
                            onClick={this.handleClick}
                          >
                            See Details
                          </button>
                        </div>
                      </div>
                    </div>

                    <div key="back">
                      <Img
                        className={cardStyles.imgbackside}
                        fluid={edge.node.projectImage.fluid}
                      />
                      <div>
                        <span>
                          <hr />
                          View Code:{" "}
                          <a
                            href={edge.node.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <b>Demo</b>
                          </a>
                          {" / "}
                          <a
                            href={edge.node.sourceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <b>Source</b>
                          </a>
                        </span>
                      </div>
                      <h3>Technologies Used</h3>
                      <ul>
                        {edge.node.projectLanguages.map((items, index) => {
                          // console.log(items)
                          return (
                            <ul className={cardStyles.technologies} key={index}>
                              {items.content}
                            </ul>
                          )
                        })}
                      </ul>
                      <span>
                        {edge.node.projectDescription.projectDescription}
                      </span>
                      <button
                        className={cardStyles.btn}
                        onClick={this.handleClick}
                      >
                        Back to Front!
                      </button>
                    </div>
                  </ReactCardFlip>
                </div>
              )
            })}
          </>
        )}
      />
    )
  }
}

export default Card
