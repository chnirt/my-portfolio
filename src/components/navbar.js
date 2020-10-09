import { Link } from "gatsby"
import React, { useState } from "react"

import Logo from "./logo"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => setToggleMenu(prevState => !prevState)
  return (
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
  )
}

export default Navbar
