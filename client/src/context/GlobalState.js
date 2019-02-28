import React, { Component } from "react";
import axios from "axios";

import TemplateContext from "./templateContext";

class GlobalState extends Component {
  state = {
    products: [],
    cart: []
  };

  componentDidMount() {
    let self = this;
    axios
      .get("/api/todos")
      .then(function(response) {
        const todos = response.data;
        console.log(todos);
        self.setState({ products: todos }, () =>
          console.log("Customers fetched...", todos)
        );
      })
      .catch(function(error) {
        console.log(error);
      });

    // fetch("/api/todos")
    //   .then(res => res.json())
    //   .then(todos =>
    //     this.setState({ products: todos }, () =>
    //       console.log("Customers fetched...", todos)
    //     )
    //   );
  }

  addProductToCart = product => {
    console.log("Adding product", product);
    // пишем функцию обработчик, обновляем состояние
  };

  removeProductFromCart = productId => {
    console.log("Removing product with id: " + productId);
  };

  render() {
    console.log("from global", this.state);

    return (
      <TemplateContext.Provider
        value={{
          products: this.state.products,
          cart: this.state.cart,
          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart
        }}
      >
        {this.props.children}
      </TemplateContext.Provider>
    );
  }
}

export default GlobalState;
