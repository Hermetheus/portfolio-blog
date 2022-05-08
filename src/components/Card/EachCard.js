import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import Img from "gatsby-image"

// imports
import cardStyles from "./card.module.scss"

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    setIsFlipped(!isFlipped)
  }
  const { item } = props
  // console.log(item)

  const { node } = item

  return (
    <>
      <div class="cardContainer">
        <div class="card">
          <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="vertical"
            cardZIndex="auto"
            key={node.id}
          >
            <div key={(node.id, "front")} value={node.id}>
              <div className="content">
                <Img className="cardImg" fluid={node.projectImage.fluid} />
                <div className="contentBox">
                  <hr />
                  <h3>{node.projectName}</h3>
                  <h6>Technologies Used</h6>
                  <ul>
                    {node.projectLanguages.map((items, index) => {
                      // console.log(items)
                      return (
                        <ul className={cardStyles.technologies} key={index}>
                          <li>{items.content}</li>
                        </ul>
                      )
                    })}
                  </ul>
                  <button className={cardStyles.btn} onClick={handleClick}>
                    See Details
                  </button>
                </div>
              </div>
            </div>

            <div className="content" key="back">
              <Img className="cardBackImg" fluid={node.projectImage.fluid} />
              <div className="contentBackBox">
                <div>
                  <span>
                    View Code:{" "}
                    <a
                      href={node.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                        <li>{items.content}</li>
                      </ul>
                    )
                  })}
                </ul>
                <span>{node.projectDescription.projectDescription}</span>
                <button className={cardStyles.btn} onClick={handleClick}>
                  See Front
                </button>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </>
  )
}

export default Card
