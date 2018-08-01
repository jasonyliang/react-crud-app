import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string.isRequred,
  onClick: PropTypes.func,
  title: PropTypes.any
};

const defaultProps = {
  name: "Default name of the APP"
};
class MyComponent extends Component {
  state = {};
  render() {
    const { title, name, onClick } = this.props;
    return (
      <div className="Component">
        <p>Title: {title}</p>
        <p>Name: {name}</p>
        <div onClick={onClick}>Click</div>
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
