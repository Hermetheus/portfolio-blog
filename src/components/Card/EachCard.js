import React, { Component } from "react"
import ReactCardFlip from "react-card-flip"
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
    const { item } = this.props
    // console.log(item)

    const { node } = item

    return (
      <>
        <div>
          <ReactCardFlip
            isFlipped={this.state.isFlipped}
            flipDirection="vertical"
            cardZIndex="auto"
            key={node.id}
          >
            <div key={(node.id, "front")} value={node.id}>
              <div>
                <Img
                  className={cardStyles.img}
                  fluid={node.projectImage.fluid}
                />
                <hr />
                <h3>{node.projectName}</h3>
                <h6>Technologies Used</h6>
                <ul>
                  {node.projectLanguages.map((items, index) => {
                    // console.log(items)
                    return (
                      <ul className={cardStyles.technologies} key={index}>
                        {items.content}
                      </ul>
                    )
                  })}
                </ul>
                <button className={cardStyles.btn} onClick={this.handleClick}>
                  See Details
                </button>
              </div>
            </div>

            <div key="back">
              <Img
                className={cardStyles.imgbackside}
                fluid={node.projectImage.fluid}
              />
              <div>
                <span>
                  <hr />
                  View Code:{" "}
                  <a href={node.link} target="_blank" rel="noopener noreferrer">
                    <b>Demo</b>
                  </a>
                  {" / "}
                  <a
                    href={node.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <b>Source</b>
                  </a>
                </span>
              </div>
              <h3>Technologies Used</h3>
              <ul>
                {node.projectLanguages.map((items, index) => {
                  // console.log(items)
                  return (
                    <ul className={cardStyles.technologies} key={index}>
                      {items.content}
                    </ul>
                  )
                })}
              </ul>
              <span>{node.projectDescription.projectDescription}</span>
              <button className={cardStyles.btn} onClick={this.handleClick}>
                Back to Front!
              </button>
            </div>
          </ReactCardFlip>
        </div>
      </>
    )
  }
}

export default Card
