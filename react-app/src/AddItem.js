import React, { Component } from "react";

class AddItem extends Component {
  onSubmit = event => {
    event.preventDefault();
    this.props.onAdd(this.nameInput.value, this.priceInput.value);
    this.nameInput.value = "";
    this.priceInput.value = "";
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Add Product</h3>
        <input
          placeholder="Name"
          ref={nameInput => (this.nameInput = nameInput)}
        />{" "}
        <br />
        <input
          placeholder="Price"
          ref={priceInput => (this.priceInput = priceInput)}
        />{" "}
        <br />
        <button>Submit</button>
        <hr />
      </form>
    );
  }
}

export default AddItem;
