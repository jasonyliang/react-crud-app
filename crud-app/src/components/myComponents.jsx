import React, { Component } from "react";

class MyComponent extends Component {
  state = {};
  render() {
    return (
      <div className="Component">
        <p>Title: {this.props.title}</p>
      </div>
    );
  }
}

export default MyComponent;
