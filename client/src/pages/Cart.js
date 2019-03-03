import React from "react";

// import TemplateContext from "../context/templateContext";
import MainNavigation from "../components/MainNavigation";

import "./Cart.css";

const CartPage = props => {
  // const context = useContext(TemplateContext);

  return (
    <React.Fragment>
      <MainNavigation />
      <main className="cart">cart page{props.match.params.id}</main>
      {/* {console.log(props)} */}
    </React.Fragment>
  );
};

export default CartPage;
