import React, { Component } from "react";
// import PropTypes from "prop-types";

import { Link } from "react-router-dom";
//Fetch
import { fetchTrendingMovies } from "../services/fetchMoviesApi";

class HomePage extends Component {
  state = {
    movies: [],
  };

  // static propTypes = {};

  async componentDidMount() {
    const trendingMovies = await fetchTrendingMovies();

    this.setState({ movies: trendingMovies });
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h2>Trending today</h2>
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
