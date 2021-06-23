import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
//Fetch
import { fetchMovieDetails } from "../services/fetchMoviesApi";
//Routes
import routes from "../routes";

class MovieDetailsPage extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  state = {
    isLoading: false,
    data: {},
    error: null,
    title: null,
    vote_average: null,
    overview: null,
    genres: [],
    poster_path: "",
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    this.setState({ isLoading: true });

    try {
      const movieDetails = await fetchMovieDetails(Number(movieId));
      this.setState({ ...movieDetails, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      history.push(location.state.from);
      return;
    }

    history.push(routes.home);
  };

  render() {
    const {
      title,
      vote_average,
      overview,
      genres,
      poster_path,
      isLoading,
      error,
    } = this.state;
    const { url } = this.props.match;

    if (isLoading) {
      return <h1>loading...</h1>;
    }

    if (error) {
      return <div>error</div>;
    }

    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Back to results
        </button>
        <div>
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />
          )}
          <h2>{title}</h2>
          <p>Rate: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Additional information</h4>
          <ul>
            <li>
              <NavLink className="" activeClassName="" to={`${url}/cast`}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink className="" activeClassName="" to={`${url}/reviews`}>
                Review
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
