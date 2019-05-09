import "bootstrap/dist/css/bootstrap.css"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import footerStyles from "./footer.module.scss"
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <div styles="color: black;" className>
        ©2019 {data.site.siteMetadata.author}
      </div>
      <ul className={footerStyles.ul}>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.logo}
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="430.117px"
            height="430.118px"
            viewBox="0 0 430.117 430.118"
          >
            <g>
              <path
                d="M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471
		c0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0z
		 M130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563
		c0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315z
		 M364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621
		c-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531
		c8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99
		c0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z"
              />
            </g>
          </svg>
        </a>
        <a
          href="https://www.github.com/hermetheus"
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.logo}
        >
          <svg
            className={footerStyles.logo}
            xmlns="http://www.w3.org/2000/svg"
            id="Capa_1"
            viewBox="0 0 438.549 438.549"
            x="0px"
            y="0px"
            width="438.549px"
            height="438.549px"
            version="1.1"
          >
            <g>
              <path d="M 409.132 114.573 c -19.608 -33.596 -46.205 -60.194 -79.798 -79.8 C 295.736 15.166 259.057 5.365 219.271 5.365 c -39.781 0 -76.472 9.804 -110.063 29.408 c -33.596 19.605 -60.192 46.204 -79.8 79.8 C 9.803 148.168 0 184.854 0 224.63 c 0 47.78 13.94 90.745 41.827 128.906 c 27.884 38.164 63.906 64.572 108.063 79.227 c 5.14 0.954 8.945 0.283 11.419 -1.996 c 2.475 -2.282 3.711 -5.14 3.711 -8.562 c 0 -0.571 -0.049 -5.708 -0.144 -15.417 c -0.098 -9.709 -0.144 -18.179 -0.144 -25.406 l -6.567 1.136 c -4.187 0.767 -9.469 1.092 -15.846 1 c -6.374 -0.089 -12.991 -0.757 -19.842 -1.999 c -6.854 -1.231 -13.229 -4.086 -19.13 -8.559 c -5.898 -4.473 -10.085 -10.328 -12.56 -17.556 l -2.855 -6.57 c -1.903 -4.374 -4.899 -9.233 -8.992 -14.559 c -4.093 -5.331 -8.232 -8.945 -12.419 -10.848 l -1.999 -1.431 c -1.332 -0.951 -2.568 -2.098 -3.711 -3.429 c -1.142 -1.331 -1.997 -2.663 -2.568 -3.997 c -0.572 -1.335 -0.098 -2.43 1.427 -3.289 c 1.525 -0.859 4.281 -1.276 8.28 -1.276 l 5.708 0.853 c 3.807 0.763 8.516 3.042 14.133 6.851 c 5.614 3.806 10.229 8.754 13.846 14.842 c 4.38 7.806 9.657 13.754 15.846 17.847 c 6.184 4.093 12.419 6.136 18.699 6.136 c 6.28 0 11.704 -0.476 16.274 -1.423 c 4.565 -0.952 8.848 -2.383 12.847 -4.285 c 1.713 -12.758 6.377 -22.559 13.988 -29.41 c -10.848 -1.14 -20.601 -2.857 -29.264 -5.14 c -8.658 -2.286 -17.605 -5.996 -26.835 -11.14 c -9.235 -5.137 -16.896 -11.516 -22.985 -19.126 c -6.09 -7.614 -11.088 -17.61 -14.987 -29.979 c -3.901 -12.374 -5.852 -26.648 -5.852 -42.826 c 0 -23.035 7.52 -42.637 22.557 -58.817 c -7.044 -17.318 -6.379 -36.732 1.997 -58.24 c 5.52 -1.715 13.706 -0.428 24.554 3.853 c 10.85 4.283 18.794 7.952 23.84 10.994 c 5.046 3.041 9.089 5.618 12.135 7.708 c 17.705 -4.947 35.976 -7.421 54.818 -7.421 s 37.117 2.474 54.823 7.421 l 10.849 -6.849 c 7.419 -4.57 16.18 -8.758 26.262 -12.565 c 10.088 -3.805 17.802 -4.853 23.134 -3.138 c 8.562 21.509 9.325 40.922 2.279 58.24 c 15.036 16.18 22.559 35.787 22.559 58.817 c 0 16.178 -1.958 30.497 -5.853 42.966 c -3.9 12.471 -8.941 22.457 -15.125 29.979 c -6.191 7.521 -13.901 13.85 -23.131 18.986 c -9.232 5.14 -18.182 8.85 -26.84 11.136 c -8.662 2.286 -18.415 4.004 -29.263 5.146 c 9.894 8.562 14.842 22.077 14.842 40.539 v 60.237 c 0 3.422 1.19 6.279 3.572 8.562 c 2.379 2.279 6.136 2.95 11.276 1.995 c 44.163 -14.653 80.185 -41.062 108.068 -79.226 c 27.88 -38.161 41.825 -81.126 41.825 -128.906 C 438.536 184.851 428.728 148.168 409.132 114.573 Z" />
            </g>
          </svg>
        </a>
        <a
          href="resume"
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.logo}
        >
          <svg
            className={footerStyles.logo}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
          >
            <g>
              <g>
                <path d="M414.007,148.75c5.522,0,10-4.477,10-10V30c0-16.542-13.458-30-30-30h-364c-16.542,0-30,13.458-30,30v452    c0,16.542,13.458,30,30,30h364c16.542,0,30-13.458,30-30v-73.672c0-5.523-4.478-10-10-10c-5.522,0-10,4.477-10,10V482    c0,5.514-4.486,10-10,10h-364c-5.514,0-10-4.486-10-10V30c0-5.514,4.486-10,10-10h364c5.514,0,10,4.486,10,10v108.75    C404.007,144.273,408.485,148.75,414.007,148.75z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M212.007,54c-50.729,0-92,41.271-92,92c0,26.317,11.11,50.085,28.882,66.869c0.333,0.356,0.687,0.693,1.074,1    c16.371,14.979,38.158,24.13,62.043,24.13c23.885,0,45.672-9.152,62.043-24.13c0.387-0.307,0.741-0.645,1.074-1    c17.774-16.784,28.884-40.552,28.884-66.869C304.007,95.271,262.736,54,212.007,54z M212.007,218    c-16.329,0-31.399-5.472-43.491-14.668c8.789-15.585,25.19-25.332,43.491-25.332c18.301,0,34.702,9.747,43.491,25.332    C243.405,212.528,228.336,218,212.007,218z M196.007,142v-6.5c0-8.822,7.178-16,16-16s16,7.178,16,16v6.5c0,8.822-7.178,16-16,16    S196.007,150.822,196.007,142z M269.947,188.683c-7.375-10.938-17.596-19.445-29.463-24.697c4.71-6.087,7.523-13.712,7.523-21.986    v-6.5c0-19.851-16.149-36-36-36s-36,16.149-36,36v6.5c0,8.274,2.813,15.899,7.523,21.986    c-11.867,5.252-22.088,13.759-29.463,24.697c-8.829-11.953-14.06-26.716-14.06-42.683c0-39.701,32.299-72,72-72s72,32.299,72,72    C284.007,161.967,278.776,176.73,269.947,188.683z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M266.007,438h-54c-5.522,0-10,4.477-10,10s4.478,10,10,10h54c5.522,0,10-4.477,10-10S271.529,438,266.007,438z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M266.007,382h-142c-5.522,0-10,4.477-10,10s4.478,10,10,10h142c5.522,0,10-4.477,10-10S271.529,382,266.007,382z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M266.007,326h-142c-5.522,0-10,4.477-10,10s4.478,10,10,10h142c5.522,0,10-4.477,10-10S271.529,326,266.007,326z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M88.366,272.93c-1.859-1.86-4.439-2.93-7.079-2.93c-2.631,0-5.211,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07    s1.069,5.21,2.93,7.07c1.87,1.86,4.439,2.93,7.07,2.93c2.64,0,5.21-1.07,7.079-2.93c1.86-1.86,2.931-4.44,2.931-7.07    S90.227,274.79,88.366,272.93z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M88.366,328.93c-1.869-1.86-4.439-2.93-7.079-2.93c-2.631,0-5.2,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07    s1.069,5.21,2.93,7.07c1.87,1.86,4.439,2.93,7.07,2.93c2.64,0,5.21-1.07,7.079-2.93c1.86-1.86,2.931-4.44,2.931-7.07    S90.227,330.79,88.366,328.93z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M88.366,384.93c-1.869-1.86-4.439-2.93-7.079-2.93c-2.631,0-5.2,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07    s1.069,5.21,2.93,7.07c1.859,1.86,4.439,2.93,7.07,2.93c2.64,0,5.22-1.07,7.079-2.93c1.86-1.86,2.931-4.44,2.931-7.07    S90.227,386.79,88.366,384.93z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M266.007,270h-142c-5.522,0-10,4.477-10,10s4.478,10,10,10h142c5.522,0,10-4.477,10-10S271.529,270,266.007,270z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M491.002,130.32c-9.715-5.609-21.033-7.099-31.871-4.196c-10.836,2.904-19.894,9.854-25.502,19.569L307.787,363.656    c-0.689,1.195-1.125,2.52-1.278,3.891l-8.858,79.344c-0.44,3.948,1.498,7.783,4.938,9.77c1.553,0.896,3.278,1.34,4.999,1.34    c2.092,0,4.176-0.655,5.931-1.948l64.284-47.344c1.111-0.818,2.041-1.857,2.73-3.052l125.841-217.963    C517.954,167.638,511.058,141.9,491.002,130.32z M320.063,426.394l4.626-41.432l28.942,16.71L320.063,426.394z M368.213,386.996    l-38.105-22l100.985-174.91l38.105,22L368.213,386.996z M489.054,177.693l-9.857,17.073l-38.105-22l9.857-17.073    c2.938-5.089,7.682-8.729,13.358-10.25c5.678-1.522,11.606-0.74,16.694,2.198c5.089,2.938,8.729,7.682,10.25,13.358    C492.772,166.675,491.992,172.604,489.054,177.693z" />
              </g>
            </g>
          </svg>
        </a>
        <a
          href="mailto:allanmolson@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.logo}
        >
          <svg
            className={footerStyles.logo}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="79.536px"
            height="79.536px"
            viewBox="0 0 79.536 79.536"
          >
            <g>
              <path d="M39.773,1.31L0,31.004v47.222h79.536V31.004L39.773,1.31z M28.77,22.499   c1.167-2.133,2.775-3.739,4.815-4.805c2.035-1.075,4.357-1.616,6.983-1.616c2.214,0,4.191,0.435,5.921,1.292   c1.729,0.87,3.045,2.094,3.967,3.687c0.9,1.595,1.367,3.334,1.367,5.217c0,2.247-0.694,4.279-2.082,6.097   c-1.74,2.292-3.961,3.436-6.68,3.436c-0.732,0-1.279-0.122-1.654-0.38c-0.365-0.262-0.621-0.632-0.743-1.129   c-1.022,1.012-2.231,1.52-3.589,1.52c-1.465,0-2.679-0.507-3.643-1.509c-0.966-1.012-1.447-2.361-1.447-4.031   c0-2.084,0.578-3.966,1.743-5.672c1.416-2.084,3.218-3.13,5.424-3.13c1.571,0,2.731,0.601,3.475,1.805l0.331-1.468h3.5   l-1.998,9.479c-0.125,0.606-0.187,0.986-0.187,1.163c0,0.228,0.052,0.38,0.149,0.497c0.099,0.111,0.223,0.165,0.357,0.165   c0.436,0,0.979-0.248,1.646-0.769c0.901-0.663,1.627-1.574,2.181-2.695c0.554-1.129,0.839-2.299,0.839-3.508   c0-2.165-0.782-3.977-2.352-5.445c-1.573-1.45-3.77-2.185-6.578-2.185c-2.393,0-4.417,0.487-6.077,1.468   c-1.66,0.966-2.913,2.343-3.765,4.114c-0.839,1.76-1.258,3.607-1.258,5.52c0,1.856,0.479,3.552,1.411,5.074   c0.945,1.533,2.26,2.641,3.956,3.345c1.696,0.697,3.643,1.046,5.828,1.046c2.097,0,3.909-0.293,5.432-0.881   c1.522-0.587,2.739-1.457,3.666-2.641h2.807c-0.88,1.792-2.227,3.192-4.049,4.215c-2.092,1.163-4.64,1.74-7.644,1.74   c-2.918,0-5.426-0.487-7.542-1.468c-2.121-0.986-3.689-2.434-4.73-4.35c-1.028-1.918-1.535-4.008-1.535-6.268   C27.017,26.952,27.595,24.64,28.77,22.499z M2.804,31.941l29.344,19.68L2.804,74.333V31.941z M5.033,75.844l34.74-26.885   l34.729,26.885H5.033z M76.729,74.333L47.391,51.621l29.339-19.68V74.333z M41.205,24.661c0.466,0.531,0.699,1.295,0.699,2.292   c0,0.891-0.174,1.856-0.513,2.879c-0.334,1.036-0.743,1.826-1.209,2.361c-0.318,0.375-0.658,0.652-0.992,0.826   c-0.439,0.249-0.906,0.37-1.41,0.37c-0.674,0.006-1.23-0.264-1.691-0.794c-0.45-0.531-0.673-1.346-0.673-2.465   c0-0.839,0.158-1.805,0.487-2.889c0.329-1.088,0.81-1.916,1.453-2.509c0.647-0.588,1.346-0.881,2.1-0.881   C40.162,23.856,40.749,24.125,41.205,24.661z" />
            </g>
          </svg>
        </a>
      </ul>
    </footer>
  )
}
export default Footer
