import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        cartCount: state.cartCount + 1,
      };
    case "DECREMENT":
      return {
        cartCount: state.cartCount - 1,
      };

    default:
      return state;
  }
}

export default function ShoppingCart() {
  const intialState = {
    cartCount: 0,
  };
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h1>Shopping Cart</h1>
      <button
        onClick={function () {
          dispatch({ type: "INCREMENT" });
        }}
      >
        INCREMENT BUTTON
      </button>
      <button
        onClick={function () {
          if (state.cartCount > 0) dispatch({ type: "DECREMENT" });
        }}
      >
        DECREMENT BUTTON
      </button>
      <h3>Shopping Cart Count: {state.cartCount}</h3>
    </div>
  );
}
