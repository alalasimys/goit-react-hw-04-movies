import React, { Component } from "react";
// import PropTypes from "prop-types";

//Components
import MovieList from "../components/MovieList";
//Fetch
import { fetchTrendingMovies } from "../services/fetchMoviesApi";

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  // static propTypes = {};

  async componentDidMount() {
    this.setState({ isLoading: true });
    const trendingMovies = await fetchTrendingMovies();

    this.setState({ movies: trendingMovies, isLoading: false });
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <div>
        <h2>Trending today</h2>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <MovieList movies={movies} /*from={this.props.location}*/ />
        )}
      </div>
    );
  }
}

export default HomePage;
