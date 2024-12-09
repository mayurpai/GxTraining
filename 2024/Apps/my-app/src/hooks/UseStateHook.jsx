import React, { useState } from 'react'

const UseStateHook = () => {
    const [count, setCount] = useState(0)
    // let count = 0;

    function incrementCounter() {
        // count = count + 1;
        console.log("Use State Logs")
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div>
            <h1>UseStateHook</h1>
            <p>Count: {count}</p>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    )
}

export default UseStateHook
