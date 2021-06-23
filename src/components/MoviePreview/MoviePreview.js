import React from "react";
import PropTypes from "prop-types";

const MoviePreview = ({ title }) => {
  return <div>{title}</div>;
};

MoviePreview.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MoviePreview;
