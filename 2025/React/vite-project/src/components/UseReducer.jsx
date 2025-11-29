import React, { useReducer } from 'react'



const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 }
        case "incrementBy5":
            return { ...state, count: state.count + action.payload }
        case "decrement":
            return { ...state, count: state.count - 1 }
        case "incrementCounter":
            return { ...state, counter: state.counter + 1 }
        default:
            return state;
    }

}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
    count: 0,
    counter: 0
})
    return (
        <div>

            <h2>useReducer Demo</h2>
            {console.log(state)}

            <h1>Count:{state.count}</h1>
            <h1>Counter: {state.counter}</h1>

            <button onClick={() => dispatch({ type: "increment", payload: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: "incrementBy5", payload: 5 })}>Increment By 5</button>
            <button onClick={() => dispatch({ type: "incrementCounter" })}>Increment Counter</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>


        </div>
    )
}

export default UseReducer
