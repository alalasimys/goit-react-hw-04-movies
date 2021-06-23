import React from "react";
// import PropTypes from "prop-types";
//Components
import Navigation from "../Navigation";
//styles
import s from "./Header.module.css";

const Header = () => (
  <header className={s.header}>
    <Navigation />
  </header>
);
export default Header;
