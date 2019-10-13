import { graphql } from "gatsby"
import React, { Component } from "react"
import { FormGroup, Label, Input } from "reactstrap"

class Search extends Component {
  constructor(query) {
    super(query)

    this.state = {
      selectedType: "front-end",
    }

    this.onSelectChange = this.onSelectChange.bind(this)
  }
  onSelectChange(e) {
    this.setState({ selectedType: e.target.value })
  }

  render() {
    const { selectedType } = this.state
    // console.log(query)
    return (
      <>
        <div>
          <div>
            <FormGroup controlId="formControlsSelect">
              <Label>
                <Input
                  type="select"
                  placeholder="select"
                  defaultValue={selectedType}
                  onChange={this.onSelectChange}
                >
                  <option value="front-end">Front End</option>
                  <option value="back-end">Back End</option>
                  <option value="react">React</option>
                </Input>
              </Label>
            </FormGroup>
          </div>
        </div>
      </>
    )
  }
}

export default Search

export const query = graphql`
  query {
    ImageOne: file(relativePath: { eq: "images/index.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ImageTwo: file(relativePath: { eq: "images/FreeCodeCamp.png" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
`
