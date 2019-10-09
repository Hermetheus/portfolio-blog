import { Link } from "gatsby"
import React, { Component } from "react"
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from "reactstrap"
import appRoutes from "../utils/appRoutes"
import DarkModeToggle from "../utils/DarkMode/DarkModeToggle.js"
import headerStyles from "./header.module.scss"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: headerStyles.active } : null
}

const ExactNavLink = props => <Link getProps={isActive} {...props} />

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: headerStyles.active } : null
}

const PartialNavLink = props => <Link getProps={isPartiallyActive} {...props} />

const ListLink = props => {
  if (props.isPurelink !== undefined && props.isPurelink === true) {
    return (
      <NavItem style={{ marginBottom: "0" }}>
        <div className={headerStyles.navlink}>
          {props.external === true ? (
            <a href={props.route} target="_blank" rel="noopener noreferrer">
              {props.routeName}
            </a>
          ) : (
            <a href={props.route}>{props.routeName}</a>
          )}
        </div>
      </NavItem>
    )
  } else {
    return (
      <NavItem style={{ marginBottom: "0" }}>
        <div className={headerStyles.navlink}>
          {props.exact === true ? (
            <ExactNavLink to={props.route}>{props.routeName}</ExactNavLink>
          ) : (
            <PartialNavLink to={props.route}>{props.routeName}</PartialNavLink>
          )}
        </div>
      </NavItem>
    )
  }
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggleNavbar.bind(this)

    // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    if (typeof window !== "undefined") {
      let prevScrollpos = window.pageYOffset
      window.onscroll = function() {
        const maxScroll = document.body.clientHeight - window.innerHeight
        let currentScrollPos = window.pageYOffset
        if (
          (maxScroll > 0 &&
            prevScrollpos > currentScrollPos &&
            prevScrollpos <= maxScroll) ||
          (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
          (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
          document.getElementById("navbar").style.top = "0"
        } else {
          document.getElementById("navbar").style.top = "-5.0rem"
        }
        prevScrollpos = currentScrollPos
      }
    }
  }

  state = {
    isOpen: false,
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <div className={headerStyles.border} style={{ fontSize: "1.2rem" }}>
        <Navbar
          id="navbar"
          light
          style={{ backgroundColor: "	#6b6b6b" }}
          className={headerStyles.navbar}
          expand="md"
          fixed="top"
        >
          <Container>
            <div className={headerStyles.navbarbrand}>
              <Link className={headerStyles.logo} to={appRoutes.home}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  width="175pt"
                  height="55pt"
                  viewBox="0 0 1124.000000 485.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,485.000000) scale(0.100000,-0.100000)"
                    fill="#333333"
                    stroke="none"
                    fillRule="evenodd"
                  >
                    <path d="M430 4230 l0 -230 120 0 120 0 0 115 0 115 5020 0 5020 0 0 -115 0 -115 120 0 120 0 0 230 0 230 -5260 0 -5260 0 0 -230z" />
                    <path d="M9174 3861 c-199 -44 -359 -142 -485 -298 -142 -177 -208 -366 -209 -595 0 -245 86 -459 260 -642 165 -173 359 -256 601 -256 229 0 428 85 591 254 165 170 253 365 264 585 15 294 -68 512 -271 716 -128 128 -237 192 -395 232 -93 23 -263 25 -356 4z m279 -296 c85 -20 131 -41 203 -94 93 -69 168 -174 215 -301 20 -55 24 -83 24 -190 0 -139 -11 -190 -61 -290 -67 -134 -179 -239 -311 -291 -69 -27 -241 -38 -307 -19 -237 67 -409 277 -430 521 -7 76 7 245 22 277 69 143 82 162 152 233 82 84 148 123 250 150 82 22 161 23 243 4z" />
                    <path d="M1709 3791 c-33 -27 -49 -67 -218 -518 -101 -268 -189 -501 -196 -518 -7 -16 -25 -66 -40 -110 -15 -44 -31 -84 -35 -90 -4 -5 -17 -39 -29 -75 -13 -36 -27 -73 -32 -82 -5 -10 -9 -23 -9 -29 0 -6 -6 -25 -14 -42 -48 -107 -41 -175 23 -227 30 -26 44 -30 94 -30 89 0 108 24 188 238 l64 172 298 -2 299 -3 39 -105 c22 -58 51 -135 65 -173 14 -37 39 -81 56 -97 26 -26 37 -30 85 -30 45 0 63 5 90 26 62 47 79 116 47 191 -19 44 -20 46 -69 178 -45 124 -420 1125 -442 1180 -61 155 -80 175 -167 175 -53 0 -66 -4 -97 -29z m111 -563 c38 -103 60 -160 80 -213 26 -67 73 -194 80 -217 l9 -28 -190 0 -189 0 19 48 c10 26 51 136 92 245 41 108 77 197 80 197 4 0 12 -15 19 -32z" />
                    <path d="M4327 3802 c-39 -10 -97 -69 -98 -101 -4 -61 5 -97 46 -191 24 -55 47 -110 51 -122 6 -20 23 -60 64 -153 11 -24 48 -111 59 -140 5 -11 18 -41 30 -66 11 -25 21 -49 21 -53 0 -3 9 -25 19 -49 26 -56 272 -638 278 -657 3 -8 21 -47 40 -87 40 -85 76 -113 147 -113 41 0 52 5 85 38 24 23 50 66 71 117 18 44 40 98 50 120 10 22 48 112 85 200 37 88 77 183 89 210 13 28 31 71 42 97 10 27 22 48 25 48 3 0 32 -62 63 -137 32 -76 67 -157 77 -180 11 -24 19 -45 19 -48 0 -4 25 -61 71 -162 10 -24 19 -46 19 -49 0 -4 9 -25 19 -48 11 -23 28 -63 38 -89 10 -27 35 -64 56 -83 31 -28 45 -34 83 -34 48 0 89 16 116 46 9 11 39 75 67 144 29 69 56 134 61 145 16 35 47 109 53 127 8 22 163 391 189 448 11 25 35 81 53 125 52 126 79 192 105 250 58 130 120 293 120 314 -1 37 -30 91 -63 115 -20 15 -43 20 -82 20 -96 0 -112 -21 -230 -309 -58 -142 -66 -160 -75 -180 -5 -11 -46 -108 -90 -215 -84 -199 -122 -291 -146 -347 -8 -17 -27 -61 -43 -99 l-29 -67 -15 29 c-8 16 -18 40 -22 54 -4 14 -19 50 -32 80 -13 30 -28 64 -33 75 -5 11 -57 135 -116 275 -59 140 -114 263 -122 273 -44 50 -137 62 -192 25 -32 -23 -46 -43 -73 -108 -39 -93 -79 -187 -87 -205 -5 -11 -45 -108 -90 -215 -110 -263 -120 -284 -124 -279 -2 2 -32 72 -66 154 -109 260 -140 334 -160 380 -5 11 -18 43 -30 70 -12 28 -25 59 -30 70 -5 11 -23 54 -40 95 -17 41 -38 89 -46 107 -8 17 -14 34 -14 37 0 3 -11 29 -25 58 -14 28 -25 55 -25 59 0 24 -67 143 -89 158 -31 22 -84 32 -124 23z" />
                    <path d="M2574 1906 c-45 -20 -74 -66 -74 -116 0 -36 6 -48 39 -81 l39 -39 791 0 c859 0 828 -2 865 54 9 14 16 45 16 71 0 38 -6 52 -34 83 l-34 37 -789 2 c-647 2 -794 0 -819 -11z" />
                    <path d="M6835 1913 c-48 -13 -95 -72 -95 -120 0 -35 25 -78 59 -102 29 -21 35 -21 822 -21 l792 0 33 25 c36 28 56 81 47 125 -3 16 -21 43 -40 62 l-34 33 -782 1 c-430 1 -791 0 -802 -3z" />
                    <path d="M430 1410 l0 -230 5260 0 5260 0 0 230 0 230 -120 0 -120 0 0 -115 0 -115 -5020 0 -5020 0 0 115 0 115 -120 0 -120 0 0 -230z" />
                    <path d="M2960 765 c0 -41 2 -45 25 -45 18 0 25 5 25 20 0 20 7 20 2680 20 2673 0 2680 0 2680 -20 0 -15 7 -20 25 -20 23 0 25 4 25 45 l0 45 -2730 0 -2730 0 0 -45z" />
                    <path d="M7085 686 c-124 -54 -136 -244 -21 -315 36 -22 115 -28 158 -12 41 16 86 71 98 121 34 143 -103 264 -235 206z m132 -78 c12 -12 27 -36 33 -53 21 -63 -34 -145 -97 -145 -34 0 -81 37 -93 75 -14 43 -8 72 21 109 39 50 92 55 136 14z" />
                    <path d="M3185 618 c-16 -40 -41 -107 -57 -148 -37 -98 -37 -120 1 -120 24 0 31 6 45 40 15 39 17 40 64 40 48 0 49 -1 65 -40 12 -32 20 -40 42 -40 14 0 28 6 31 14 3 7 -21 83 -53 167 -53 142 -60 154 -84 157 -25 3 -29 -3 -54 -70z" />
                    <path d="M3425 668 c-3 -13 -4 -88 -3 -168 l3 -145 33 -3 32 -3 -2 168 -3 168 -27 3 c-22 3 -29 -2 -33 -20z" />
                    <path d="M3545 668 c-3 -13 -4 -88 -3 -168 l3 -145 33 -3 32 -3 -2 168 -3 168 -27 3 c-22 3 -29 -2 -33 -20z" />
                    <path d="M4393 683 c-22 -8 -15 -33 48 -185 58 -140 63 -148 89 -148 26 0 31 7 56 72 l28 71 33 -72 c30 -66 35 -72 60 -69 24 3 32 17 90 157 57 135 63 155 50 168 -30 30 -52 7 -98 -103 l-44 -106 -32 71 c-30 66 -35 72 -59 69 -22 -2 -31 -14 -52 -65 -14 -35 -29 -63 -32 -63 -4 0 -24 42 -45 93 -49 120 -54 126 -92 110z" />
                    <path d="M5215 678 c-3 -8 -4 -83 -3 -168 l3 -155 30 0 c26 0 30 4 33 30 6 48 18 49 53 6 24 -31 40 -41 61 -41 40 0 37 32 -8 87 l-37 45 37 37 c45 46 48 81 8 81 -20 0 -40 -12 -67 -41 l-40 -40 -5 83 c-5 82 -5 83 -33 86 -16 2 -29 -2 -32 -10z" />
                    <path d="M5817 673 c-8 -10 -19 -30 -22 -45 -4 -16 -13 -28 -20 -28 -24 0 -28 -34 -6 -51 17 -14 21 -30 23 -105 l3 -89 30 0 30 0 3 91 c2 82 5 92 22 97 27 7 27 47 0 54 -25 7 -26 33 -1 33 21 0 33 22 25 45 -8 21 -67 19 -87 -2z" />
                    <path d="M6374 677 c-2 -7 -3 -82 -2 -167 l3 -155 30 0 30 0 3 145 c3 174 0 190 -34 190 -13 0 -27 -6 -30 -13z" />
                    <path d="M6657 684 c-4 -4 -7 -28 -7 -53 l0 -46 -55 3 c-52 4 -57 2 -90 -31 -31 -31 -35 -41 -35 -87 0 -46 4 -56 34 -86 33 -33 35 -34 120 -33 l86 1 -2 166 c-3 159 -4 167 -23 170 -12 2 -24 0 -28 -4z" />
                    <path d="M7405 678 c-3 -8 -4 -83 -3 -168 l3 -155 30 0 30 0 0 165 0 165 -28 3 c-16 2 -29 -2 -32 -10z" />
                    <path d="M3677 569 c-37 -29 -53 -88 -38 -138 19 -65 49 -81 145 -80 46 1 84 7 88 13 4 6 8 54 8 106 0 52 -4 100 -8 106 -4 6 -42 12 -88 13 -68 1 -86 -2 -107 -20z" />
                    <path d="M3954 577 c-2 -7 -3 -60 -2 -118 l3 -104 30 0 30 0 5 79 c4 61 9 81 23 90 12 8 22 8 35 0 13 -9 18 -29 22 -90 l5 -79 30 0 30 0 3 74 c3 81 -9 123 -42 146 -27 20 -164 21 -172 2z" />
                    <path d="M4942 574 c-52 -36 -67 -115 -32 -171 27 -45 47 -53 139 -52 l81 1 0 118 0 118 -83 1 c-59 0 -89 -4 -105 -15z" />
                    <path d="M5512 574 c-29 -20 -52 -66 -52 -104 0 -38 23 -84 52 -104 13 -9 43 -16 71 -16 68 0 112 25 100 58 -6 14 -45 13 -84 -3 -10 -4 -27 3 -45 19 l-29 25 88 1 c68 0 89 3 93 15 10 25 -5 66 -36 96 -24 25 -36 29 -82 29 -32 0 -62 -6 -76 -16z" />
                    <path d="M5945 577 c-3 -7 -4 -60 -3 -118 l3 -104 30 0 30 0 0 115 0 115 -28 3 c-16 2 -29 -2 -32 -11z" />
                    <path d="M6098 561 c-31 -27 -33 -34 -33 -91 0 -57 2 -64 33 -91 27 -24 41 -29 85 -29 59 0 97 20 97 51 0 21 -23 25 -64 9 -29 -11 -71 3 -80 26 -4 11 12 14 80 14 96 0 103 6 84 64 -17 53 -52 76 -116 76 -45 0 -59 -5 -86 -29z" />
                    <path d="M7532 574 c-16 -11 -22 -25 -22 -53 0 -45 12 -57 71 -74 51 -15 64 -37 22 -37 -16 0 -34 5 -40 11 -18 18 -58 7 -61 -18 -7 -49 120 -73 172 -32 19 15 26 30 26 53 0 40 -21 60 -77 75 -24 7 -43 16 -43 21 0 14 36 12 59 -2 44 -27 71 27 29 56 -12 9 -43 16 -68 16 -25 0 -56 -7 -68 -16z" />
                    <path d="M7792 574 c-80 -56 -61 -191 31 -221 49 -16 92 -7 126 28 50 50 48 125 -6 181 -22 24 -35 28 -78 28 -30 0 -60 -6 -73 -16z" />
                    <path d="M8054 577 c-2 -7 -3 -60 -2 -118 l3 -104 30 0 30 0 5 79 c4 61 9 81 23 90 12 8 22 8 35 0 13 -9 18 -29 22 -90 5 -74 7 -79 29 -82 32 -5 41 12 41 85 0 71 -10 103 -41 132 -19 17 -35 21 -96 21 -52 0 -75 -4 -79 -13z" />
                    <path d="M2960 270 l0 -40 2730 0 2730 0 0 40 c0 36 -2 40 -25 40 -18 0 -25 -5 -25 -20 0 -20 -7 -20 -2680 -20 -2673 0 -2680 0 -2680 20 0 15 -7 20 -25 20 -22 0 -25 -4 -25 -40z" />
                  </g>
                </svg>

                {this.props.siteTitle}
              </Link>
            </div>
            <NavbarToggler
              className="mr-2"
              style={{ backgroundColor: "#ffffff" }}
              onClick={this.toggle}
            />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <ListLink
                  exact={true}
                  route={appRoutes.home}
                  routeName={"Home"}
                />
                <ListLink route={appRoutes.resume} routeName={"Resume"} />
                <ListLink route={appRoutes.blog} routeName={"Blog"} />
                {/* <ListLink route={appRoutes.portfolio} routeName={"Portfolio"} /> */}
                <DarkModeToggle />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Header
