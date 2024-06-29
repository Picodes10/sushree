// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Sushree.</h2>
      </div>
      <ul className="navlinks">
        <li className="links">
          <a href="#home">Home</a>
        </li>
        <li className="links">
          <a href="#about">About</a>
        </li>
        <li className="links">
          <a href="#projects">Projects</a>
        </li>
        <li className="links">
          <a href="#connect">Connect</a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          fontsize={27}
          color="#fff"
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="links">
                <a href="#home">Home</a>
              </li>
              <li className="links">
                <a href="#about">About</a>
              </li>
              <li className="links">
                <a href="#projects">Projects</a>
              </li>
              <li className="links">
                <a href="#connect">Connect</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
