import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
// import PropTypes from 'prop-types'
//Fetch
import { fetchMovieDetails, fetchCast } from "../services/fetchMoviesApi";
//Components
import Cast from "../components/MovieAdditionalDetails";

class MovieDetailsPage extends Component {
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
  // static propTypes = {}

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    this.setState({ isLoading: true });

    try {
      const movieDetails = await fetchMovieDetails(movieId);

      this.setState({ ...movieDetails, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

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

    const { url, path, params } = this.props.match;

    if (isLoading) {
      return <h1>loading...</h1>;
    }

    if (error) {
      return <div>error</div>;
    }

    return (
      <div>
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
          <Route
            path={`${path}/cast`}
            render={async () => {
              const cast = await fetchCast(Number(params.movieId));
              return <Cast cast={cast} />;
            }}
          />
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
