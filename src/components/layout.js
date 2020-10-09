/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./layout.css"

import Logo from "./logo"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => setToggleMenu(prevState => !prevState)

  return (
    <>
      <div class="container mx-auto bg-purple-300 p-5">
        <nav class="flex justify-between">
          <div>
            <a href="#">
              <Logo />
            </a>

            <p
              id="hamburgerbtn"
              class="md:hidden bg-purple-800"
              onClick={handleToggle}
            >
              menu
            </p>
          </div>
          <ul
            class="hidden md:flex md:flex-row"
            id="mobileMenu"
            style={{ display: toggleMenu && "block" }}
          >
            <li class="pr-5">
              <a>
                <Link to="/services/">Services</Link>
              </a>
            </li>
            <li class="pr-5">
              <a>
                <Link to="/porfolio/">Porfolio</Link>
              </a>
            </li>
            <li class="pr-5">
              <a>
                <Link to="/about/">About</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/contact/">Contact</Link>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
