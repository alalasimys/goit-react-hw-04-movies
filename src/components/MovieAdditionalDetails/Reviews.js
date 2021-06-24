import React, { Component } from "react";
import PropTypes from "prop-types";

//Fetch
import { fetchReviews } from "../../services/fetchMoviesApi";
//styles
import "./Reviews.scss";
//loader
import Loader from "react-loader-spinner";

class Reviews extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  state = {
    reviews: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const reviews = await fetchReviews(this.props.match.params.movieId);

    this.setState({ reviews: reviews, isLoading: false });
  }

  render() {
    const { reviews, isLoading } = this.state;
    if (isLoading) {
      return (
        <Loader
          className="Loader"
          type="BallTriangle"
          color="#001529"
          height={100}
          width={100}
        />
      );
    }
    return reviews.length > 0 ? (
      <div>
        <ul className="Reviews">
          {reviews.map(({ author, content, id }) => (
            <li key={id} className="Reviews--item">
              <h4 className="title">Author: {author}</h4>
              <p className="text">{content}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div style={{ textAlign: "center" }}>
        <p>We don't have any review for this movie.</p>
      </div>
    );
  }
}

export default Reviews;
