import { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
    const [count, setCount] = useState(0);
    const previousCount = useRef(0);
    const inputText = useRef();

    useEffect(() => {
        previousCount.current = count;
    }, [count]);

    return (
        <>
            <h1>UseRefHook</h1>
            <p> Count: {count}</p>
            <p> Previous Count: {previousCount.current} </p>
            <input type="text" ref={inputText}></input>
            <button onClick={() => {
                setCount((prev) => prev + 1)
                inputText.current.focus()
            }
            }> Increment</button>
        </>
    );
};

export default UseRefHook;
