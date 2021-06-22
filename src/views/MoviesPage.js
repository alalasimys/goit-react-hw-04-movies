import React, { Component } from "react";
// import PropTypes from "prop-types";

export class MoviesPage extends Component {
  state = {};
  // static propTypes = {};

  render() {
    return (
      <form className="MoviesSearch">
        <input
          className="MoviesSearch-input"
          type="text"
          autoComplete="off"
          autoFocus
        />
        <button type="submit" className="MoviesSearch-button">
          <span className="MoviesSearch-button-label">Search</span>
        </button>
      </form>
    );
  }
}

export default MoviesPage;
