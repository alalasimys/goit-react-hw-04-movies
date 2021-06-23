import React from "react";
import { Link, withRouter } from "react-router-dom";
//Routes
import routes from "../../routes";
//Components
import MoviePreview from "../MoviePreview";

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `${routes.movies}/${movie.id}`,
              state: { from: location },
            }}
          >
            <MoviePreview title={movie.title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
