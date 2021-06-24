import React, { Component } from "react";
import PropTypes from "prop-types";
//Fetch
import { fetchSearch } from "../services/fetchMoviesApi";
//Components
import MovieList from "../components/MovieList";
import BackgroundLayout from "../layout/BackgroundLayout";

export class MoviesPage extends Component {
  state = {
    query: "",
    searchedMovies: [],
    isLoading: false,
  };

  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  async componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);

    if (searchParams.get("query")) {
      const searchedMovies = await fetchSearch(searchParams.get("query"));

      this.setState({ searchedMovies });
    }
  }

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append("query", this.state.query);

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: params.toString(),
    });
    this.setState({ isLoading: true });
    const searchedMovies = await fetchSearch(this.state.query);

    this.setState({ searchedMovies, isLoading: false });
  };

  render() {
    const { searchedMovies, isLoading } = this.state;

    return (
      <BackgroundLayout>
        <form className="MoviesSearch" onSubmit={this.handleSubmit}>
          <input
            value={this.state.query}
            onChange={this.handleChange}
            className="MoviesSearch-input"
            type="text"
            autoComplete="off"
            autoFocus
          />
          <button type="submit" className="MoviesSearch-button">
            <span className="MoviesSearch-button-label">Search</span>
          </button>
        </form>
        <div>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <MovieList movies={searchedMovies} /*from={this.props.location}*/ />
          )}
        </div>
      </BackgroundLayout>
    );
  }
}

export default MoviesPage;
