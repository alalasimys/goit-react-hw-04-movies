import React, { Component } from "react";
import PropTypes from "prop-types";

//Fetch
import { fetchReviews } from "../../services/fetchMoviesApi";

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
    const { reviews } = this.state;
    return reviews.length > 0 ? (
      <div>
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div>
        <p>We don't have any review for this movie.</p>
      </div>
    );
  }
}

export default Reviews;
