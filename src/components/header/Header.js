import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "/home";

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <header className="header" style={{ backgroundColor: theme.body }}>
          <NavLink to={link} className="logo">
            <img
              src={require("../../assets/images/sm.png")}
              alt="Logo"
              className="logo-image"
            />
          </NavLink>

          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>

          <ul className="menu">
            {[
              { name: "Home", path: "/home" },
              { name: "Education", path: "/education" },
              { name: "Experience", path: "/experience" },
              { name: "Projects", path: "/projects" },
              //{ name: "Open Source", path: "/opensource" },
              { name: "Contact Me", path: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  activeStyle={{ fontWeight: "bold" }}
                  className="nav-link"
                  style={{ color: theme.text }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </header>
        <div className="navbar-spacing"></div>
      </Fade>
    );
  }
}

export default Header;
