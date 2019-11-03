import React, { Component } from "react"
import ReactCardFlip from "react-card-flip"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import cardStyles from "./card.module.scss"
import classNames from "classnames"
import { FormGroup, Input } from "reactstrap"

class Card extends Component {
  constructor() {
    super()
    this.state = {
      isFlipped: false,
      selectedType: "front-end",
    }
    this.handleClick = this.handleClick.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }
  onSelectChange(e) {
    this.setState({ selectedType: e.target.value })
  }

  render() {
    const { selectedType } = this.state
    // console.log(selectedType)
    return (
      <StaticQuery
        query={graphql`
          query {
            allContentfulPortfolio {
              edges {
                node {
                  id
                  projectName
                  link
                  type
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
            <br />
            {/* {console.log(data)}
            {console.log(this.onSelectChange)} */}
            <FormGroup>
              <Input
                type="select"
                placeholder="select"
                defaultValue={selectedType}
                onChange={this.onSelectChange}
              >
                <option value="front-end">Front End</option>
                <option value="full-stack">Full Stack</option>
              </Input>
            </FormGroup>
            {data.allContentfulPortfolio.edges.map((edge, index) => {
              // console.log(edge)
              const isSelectedType = selectedType === edge.node.type
              // console.log(isSelectedType)
              const singleCardClass = classNames("card", {
                hide: !isSelectedType,
              })

              return (
                <div className={singleCardClass} key={edge.node.id}>
                  <ReactCardFlip
                    isFlipped={this.state.isFlipped}
                    flipDirection="vertical"
                    cardZIndex="auto"
                    key={index}
                  >
                    <div key="front">
                      <div key={edge.node.id}>
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
