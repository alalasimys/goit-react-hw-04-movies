import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  static propTypes = {};

  render() {
    return (
      <header>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
