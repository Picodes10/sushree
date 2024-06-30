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
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#connect">Connect</a>
        </li>
      </ul>

      <div className="smallscreen">
        <GiHamburgerMenu
          fontsize={27}
          color="#fff"
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="close-nav flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="mobile-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
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
