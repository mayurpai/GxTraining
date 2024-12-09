import { createContext, useContext, useState } from "react";

export const GlobalStateContext = createContext(null);

const UseContextHook = () => {
    const [isToggle, setIsToggle] = useState(false);

    return (
        <GlobalStateContext.Provider value={{ isToggle, setIsToggle }}>
            <div>
                <h1>UseContextHook</h1>
                <h4>Parent Component</h4>
                <ChildToggle />
                <ChildDisplay />
            </div>
        </GlobalStateContext.Provider>
    );
};

const ChildToggle = () => {
    const { setIsToggle } = useContext(GlobalStateContext);
    return (
        <div>
            <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
        </div>
    );
};

// Child Component to Display State
const ChildDisplay = () => {
    const { isToggle } = useContext(GlobalStateContext);

    return (
        <div>
            <p>Current State: {isToggle ? "ON" : "OFF"}</p>
        </div>
    );
};

export default UseContextHook;
