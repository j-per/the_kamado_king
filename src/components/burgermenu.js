import React from "react";
import { Link } from "gatsby"
import { stack as Menu } from 'react-burger-menu'
import './burgermenu.css'

class BurgerMenu extends React.Component {
    render() {
        return (
            <Menu right>
                <Link to="/about" className="menu-item">About</Link>
                <Link to="/recipes" className="menu-item">Recipes</Link>
                <Link to="/gear" className="menu-item">Gear</Link>
                <Link to="/contact" className="menu-item">Contact</Link>
                <a href="https://www.instagram.com/the_kamado_king/" target="__blank">Instagram</a>
            </Menu>
        );
    }
}

export default BurgerMenu;
