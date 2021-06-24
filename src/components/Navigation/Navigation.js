import React from "react";
import { NavLink } from "react-router-dom";
//Routes
import routes from "../../routes";
//styles

import { Menu } from "antd";

const Navigation = () => {
  return (
    <nav>
      {/* <ul className="NavBar">
        <li className="NavBar--item"></li>
        <li></li>
      </ul> */}
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <NavLink
            exact
            to={routes.home}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink
            to={routes.movies}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </Menu.Item>
      </Menu>
    </nav>
  );
};

export default Navigation;
