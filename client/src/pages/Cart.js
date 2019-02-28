import React, { Component } from "react";

import TemplateContext from "../context/templateContext";
import MainNavigation from "../components/MainNavigation";

import "./Cart.css";

class CartPage extends Component {
  static contextType = TemplateContext;

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return (
      <React.Fragment>
        <MainNavigation />
        <main className="cart" />
      </React.Fragment>
    );
  }
}

export default CartPage;
