import React, { Component } from "react";

import TemplateContext from "../context/templateContext";
import MainNavigation from "../components/MainNavigation";
import "./Products.css";

class ProductsPage extends Component {
  render() {
    return (
      <TemplateContext.Consumer>
        {context => (
          <React.Fragment>
            <MainNavigation />
            <main className="products" />
          </React.Fragment>
        )}
      </TemplateContext.Consumer>
    );
  }
}

export default ProductsPage;
