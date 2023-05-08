import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
        <div class="container">
          <Link class="navbar-brand" to="#">
            AppsGenii
          </Link>

          <div class="" id="navbarColor01">
            <ul class="navbar-nav me-auto myNavBar">
              <li class="nav-item">
                <Link class="nav-link active liNavbar" to="/">
                  Home
                  <span class="visually-hidden ">(current)</span>
                </Link>
              </li>
              <li class="nav-item liNavbar">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item liNavbar">
                <Link class="nav-link active" to="/services">
                  Services
                </Link>
              </li>
              <li class="nav-item liNavbar">
                <Link nk class="nav-link active" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li class="nav-item liNavbar">
                <Link nk class="nav-link active" to="/countries">
                  Countries
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
