import React, { Component } from "react";

//Components
import MovieList from "../components/MovieList";
import BackgroundLayout from "../layout/BackgroundLayout";
//Fetch
import { fetchTrendingMovies } from "../services/fetchMoviesApi";
//Style
import "./HomePage.scss";

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const trendingMovies = await fetchTrendingMovies();

    this.setState({ movies: trendingMovies, isLoading: false });
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <BackgroundLayout>
        <h2 className="HomePage--title">Trending today</h2>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <MovieList movies={movies} /*from={this.props.location}*/ />
        )}
      </BackgroundLayout>
    );
  }
}

export default HomePage;
