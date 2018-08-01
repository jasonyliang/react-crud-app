import React, { Component } from "react";
import "./App.css";
import MyComponent from "./components/MyComponents.jsx";
class App extends Component {
  // onClick() {
  //   alert("Clicked");
  // }
  // onMouseEnter() {
  //   alert("Mouse Entered!!!!!");
  // }
  constructor(props) {
    super(props);

    this.state = {
      name: "initial name",
      title: "initial title"
    };
  }
  onClick = () => {
    this.setState({
      name: "New Name",
      title: "New Title"
    });
  };
  render() {
    const list = ["hello", "world", "xD"];
    return (
      <div className="App">
        <h1>My App</h1>
        {list.map(i => {
          return (
            // <li onClick={this.onClick} onMouseEnter={this.onMouseEnter}>
            <li key={i}>{i}</li>
          );
        })}
        <MyComponent
          title={this.state.title}
          onClick={this.onClick}
          name={this.state.name}
        />
      </div>
    );
  }
}

export default App;
