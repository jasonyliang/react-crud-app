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
      title: "initial title",
      check: true,
      shouldRender: true
    };
  }
  onClick = () => {
    this.setState({
      name: "New Name",
      title: "New Title"
    });
  };
  updateName = event => {
    this.setState({
      name: event.target.value
    });
  };
  updateCheck = () => {
    this.setState({
      check: !this.state.check
    });
  };
  // renderWords = words => {
  //   if (!this.state.shouldRender) {
  //     return null;
  //   }
  //   return words;
  // };
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

        <input onChange={this.updateName} value={this.state.name} />
        <input
          type="checkbox"
          onChange={this.updateCheck}
          value={this.state.check}
        />

        {/* <p>{this.renderWords("Conditional Practice")}</p> */}
        <div>
          {this.state.shouldRender ? <div>Conditional Practice</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
