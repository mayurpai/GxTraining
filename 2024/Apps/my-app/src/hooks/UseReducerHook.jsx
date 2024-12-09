import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return {...state, count: state.count - 1};
        case "double":
            return { ...state, newCount: state.newCount * 2};
        default:
            console.log("No Action Type");
    }
};

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, newCount: 1 });

    return (
        <>
            <h1>UseReducerHook</h1>
            <p>Count: {state.count}</p>
            <p>New Count: {state.newCount}</p>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "double" })}>Double</button>
        </>
    );
};

export default UseReducerHook;
