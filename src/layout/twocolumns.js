import React, { Component } from "react";
import PropTypes from "prop-types";

class TwoColumns extends Component {
  static propTypes = {
    component: PropTypes.object.isRequired,
    children: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        <div>{this.props.component}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default TwoColumns;
