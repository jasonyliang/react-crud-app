import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};
class MyComponent extends Component {
  state = {};
  render() {
    const { title } = this.props;
    return (
      <div className="Component">
        <p>Title: {title}</p>
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;

export default MyComponent;
