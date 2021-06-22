import React, { Component } from "react";
import PropTypes from "prop-types";
//Fetch
// import { fetchCast } from "../../services/fetchMoviesApi";

class Cast extends Component {
  static propTypes = {
    movieId: PropTypes.number.isRequired,
  };
  // subscribe = true;

  // state = {
  //   cast: [],
  //   isLoading: false,
  // };

  // async componentDidMount() {
  //   this.setState({ isLoading: true });

  //   const cast = await fetchCast(this.props.movieId);

  //   if (this.subscribe) {
  //     this.setState({ cast: cast, isLoading: false });
  //   }
  // }

  // componentWillUnmount() {
  //   this.subscribe = false;
  // }

  render() {
    // const { cast, isLoading } = this.state;

    // if (isLoading) {
    //   return <h1>loading...</h1>;
    // }

    const { cast } = this.props;
    console.log(cast);

    return (
      <div>
        <ul>
          {cast.map(({ name, cast_id, character, profile_path }) => (
            <li key={cast_id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                />
              ) : (
                <img
                  width="200"
                  src="https://kazut.pl/ru/wp-content/themes/Aether/library/img/default-image.jpg"
                  alt={name}
                />
              )}

              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;
