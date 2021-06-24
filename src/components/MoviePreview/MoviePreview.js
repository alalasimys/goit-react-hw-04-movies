import React from "react";
import PropTypes from "prop-types";
import "./MoviePreview.scss";

const MoviePreview = ({ title, poster, id }) => {
  return (
    <div key={id} className="MoviePreview--container">
      <img
        src={`https://image.tmdb.org/t/p/w300${poster}`}
        alt={title}
        className="MoviePreview--img"
      />
      <h3 className="MoviePreview--title">{title}</h3>
    </div>
  );
};

MoviePreview.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MoviePreview;
