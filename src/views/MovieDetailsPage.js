import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
//Fetch
import { fetchMovieDetails } from "../services/fetchMoviesApi";
//Routes
import routes from "../routes";
//components
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

//styles
import "./MovieDetailsPage.scss";

class MovieDetailsPage extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  state = {
    isLoading: false,
    error: null,
    title: null,
    vote_average: null,
    overview: null,
    genres: [],
    poster_path: "",
    backdrop_path: "",
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
      <>
        <Button type="primary" onClick={this.handleGoBack}>
          <ArrowLeftOutlined />
          Back to results
        </Button>

        <div className="MovieDetailsPage">
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />
          ) : (
            <img
              className="MoviePreview--img"
              src="https://www.proficinema.ru/assets/images/cnt/poster_no.png"
              alt={title}
            />
          )}
          <div className="MovieDetailsPage--description">
            <h2 className="title">{title}</h2>
            <p>Rate: {vote_average}</p>
            <h3 className="title">Overview</h3>
            <p>{overview}</p>
            <h3 className="title">Genres</h3>
            <ul className="Genres">
              {genres.map(({ id, name }) => (
                <li key={id} className="Genres--item">
                  {name}
                </li>
              ))}
            </ul>
            <h4 className="title">Additional information</h4>
            <ul className="Additional">
              <li>
                <NavLink
                  className="Additional--item"
                  activeClassName="Additional--item__active"
                  to={`${url}/cast`}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="Additional--item"
                  activeClassName="Additional--item__active"
                  to={`${url}/reviews`}
                >
                  Review
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
