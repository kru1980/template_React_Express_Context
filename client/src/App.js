import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStateFn from "./context/GlobalStateFn";
import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";

import "./App.css";

class App extends Component {
  render() {
    return (
      <GlobalStateFn>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ProductsPage} exact />
            <Route path="/cart:id" component={CartPage} exact />
          </Switch>
        </BrowserRouter>
      </GlobalStateFn>
    );
  }
}

export default App;
