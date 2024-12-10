import React, { useEffect } from "react";
export default function UseRefHookExample() {
    const [value, setValue] = React.useState("");
    const inputElement = React.useRef();
    const count = React.useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
        console.log("Render count:", count.current);
        alert("re rendered");
    });
    return (
        <div>
            <input ref={inputElement}
                placeholder="Enter Text"
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            />
            <h2>{value}</h2>
            <button onClick={() => {
                inputElement.current.focus();
            }}>Click Me</button>
            <h4>{count.current}</h4>
        </div>
    );
}
