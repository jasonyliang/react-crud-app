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
          title="This is the title of the component"
          onSelected={true}
        />
      </div>
    );
  }
}

export default App;
