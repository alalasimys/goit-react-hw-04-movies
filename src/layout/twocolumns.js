import React, { Component } from "react";

class TwoColumns extends Component {
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
