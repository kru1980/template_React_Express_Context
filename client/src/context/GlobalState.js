import React, { Component } from "react";

import TemplateContext from "./templateContext";

class GlobalState extends Component {
  state = {
    products: [
      { id: "p1", title: "Gaming Mouse", price: 29.99 },
      { id: "p2", title: "Harry Potter 3", price: 9.99 },
      { id: "p3", title: "Used plastic bottle", price: 0.99 },
      { id: "p4", title: "Half-dried plant", price: 2.99 }
    ],
    cart: []
  };

  addProductToCart = product => {
    console.log("Adding product", product);
    // пишем функцию обработчик, обновляем состояние
  };

  removeProductFromCart = productId => {
    console.log("Removing product with id: " + productId);
  };

  render() {
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
