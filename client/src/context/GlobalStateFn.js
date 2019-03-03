import React, { useState, useEffect } from "react";

import TemplateContext from "./templateContext";

const GlobalStateFn = props => {
  /* eslint-disable */
  const [todos, setTodos] = useState(null);
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/todos")
      .then(res => res.json())
      .then(todos => {
        // console.log(todos);
        setTodos(todos);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  /* eslint-enable */

  const addProductToCart = todo => {
    console.log("Adding todo", todo);
    // пишем функцию обработчик, обновляем состояние
  };

  const removeProductFromCart = todoId => {
    console.log("Removing todo with id: " + todoId);
  };

  return (
    <TemplateContext.Provider
      value={{
        todos: todos,
        cart: cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        isLoading: isLoading
      }}
    >
      {props.children}
    </TemplateContext.Provider>
  );
};

export default GlobalStateFn;
