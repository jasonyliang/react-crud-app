import React, { Component } from "react";

class AddItem extends Component {
  render() {
    return (
      <div>
        <h3>Add Product</h3>
        <input placeholder="Name" /> <br />
        <input placeholder="Price" /> <br />
        <button>Submit</button>
        <hr />
      </div>
    );
  }
}

export default AddItem;
