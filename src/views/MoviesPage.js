import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
//Fetch
import { fetchSearch } from "../services/fetchMoviesApi";

export class MoviesPage extends Component {
  state = {
    query: "",
    searchedMovies: [],
  };

  // static propTypes = {};

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

    const searchedMovies = await fetchSearch(this.state.query);

    this.setState({ searchedMovies });
  };

  render() {
    const { searchedMovies } = this.state;

    return (
      <>
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
          <ul>
            {searchedMovies.map((item) => (
              <li key={item.id}>
                <Link to={`movies/${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default MoviesPage;
