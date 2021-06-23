import React from "react";
import { NavLink } from "react-router-dom";
//Routes
import routes from "../../routes";
//styles
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav>
      <ul className="NavBar">
        <li className="NavBar--item">
          <NavLink
            exact
            to={routes.home}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.movies}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
