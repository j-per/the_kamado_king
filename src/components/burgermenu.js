import React from "react"
import { Link } from "gatsby"
import { stack as Menu } from "react-burger-menu"
import { FaInstagram } from "react-icons/fa";

import "./burgermenu.css"

class BurgerMenu extends React.Component {
  render() {
    return (
      <Menu right>
        <Link to="/" className="menu-item">
          Home
        </Link>
        <Link to="/recipes" className="menu-item">
          My Recipes
        </Link>
        <Link to="/gear" className="menu-item">
          Gear
        </Link>
        <Link to="/contact" className="menu-item">
          Contact
        </Link>
        <a href="https://www.instagram.com/the_kamado_king/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} color="#fff" /></a>

      </Menu>
    )
  }
}

export default BurgerMenu
