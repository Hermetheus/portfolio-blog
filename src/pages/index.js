import "bootstrap/dist/css/bootstrap.css"
import { Link } from "gatsby"
import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import "../styles/index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <div class="container">
        <div class="prime">
          <h1 class="title">Hello, my name is Allan Wakefield-Olson</h1>
          <p class="about">
            I am currently a <b>Branch Operations Manager</b> that is self
            teaching how to code. I am extremely passionate about becoming a
            Full-Stack Developer someday and am open to any opportunity that
            comes my way. If you'd like to get in touch, please send me an email
            below.
          </p>

          <Link to="/about" class="button">
            Learn more
          </Link>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#Modal"
            data-whatever="@mdo"
          >
            Contact Me
          </button>

          <div
            class="modal fade"
            id="Modal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="Contact Me"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="Modal">
                    New message
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">
                        Recipient:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="message-text" class="col-form-label">
                        Message:
                      </label>
                      <textarea class="form-control" id="message-text" />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h6>
            <a
              href="mailto:allanmolson@gmail.com"
              class="hvr-grow"
              title="Email"
            >
              <ion-icon name="mail" />
            </a>
          </h6>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
