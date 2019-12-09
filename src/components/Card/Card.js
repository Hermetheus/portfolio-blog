import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import { FormGroup, Input } from "reactstrap"
import EachCard from "./EachCard"
import classNames from "classnames"

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
            {data.allContentfulPortfolio.edges.map(edge => {
              const isSelectedType = selectedType === edge.node.type
              // console.log(isSelectedType)
              // console.log(edge)
              const singleCardClass = classNames("card", {
                hide: !isSelectedType,
              })

              return (
                <>
                  <div className={singleCardClass}>
                    <EachCard
                      item={edge}
                      key={edge.node.id}
                      value={edge.node.type}
                    />
                  </div>
                </>
              )
            })}
          </>
        )}
      />
    )
  }
}

export default Card
