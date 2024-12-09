import { useEffect, useState } from "react";

const UseEffectHook = () => {
    const [data, setData] = useState([]);
    const [showMayur, setShowMayur] = useState(false);

    useEffect(() => {
        console.log("Initial Use Effect")
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);
    // Callback Function And List Of Dependency States/
    // There Are 3 Variations To It.
    // Note: In Any Of The Variations, It Will Render Atleast Once.
    // 1. Empty Array
    // 2. Dependency Array []
    // 3. Dependency Array of State Variables [<State Variables (One Or Many)>]

    useEffect(() => {
        console.log("Use Effect Logs")
        console.log("Mayur");
    }, [showMayur]);

    return (
        <div>
            <h1>UseEffectHook</h1>
            <button onClick={() => setShowMayur((prev) => !prev)}> Toggle </button>
            <h4>Users</h4>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name} </li>
                ))}
            </ul>
        </div>
    );
};

export default UseEffectHook;
