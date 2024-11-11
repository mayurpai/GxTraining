import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "SET":
      return { count: action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "SET", payload: 0 })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: "SET", payload: 10 })}>
        Set to 10
      </button>
    </div>
  );
};

export default Counter;
