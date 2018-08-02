import React, { Component } from "react";
import "./App.css";
import ProductItem from "./ProductItem";
import AddItem from "./AddItem";
const products = [
  {
    name: "iPad",
    price: 200
  },
  {
    name: "iPhone",
    price: 650
  }
];
localStorage.setItem("products", JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem("products"))
    };
  }
  componentWillMount() {
    const products = this.getProducts();
    this.setState({ products });
  }
  getProducts(name) {
    return this.state.products;
  }
  onDelete = name => {
    const products = this.getProducts();
    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });

    this.setState({
      products: filteredProducts
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Products Manage</h1>
        <AddItem />
        {this.state.products.map(product => {
          return (
            <ProductItem
              key={product.name}
              // name={product.name}
              // price={product.price}
              {...product}
              onDelete={this.onDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
