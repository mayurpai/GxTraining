import React from "react";


export default function Hello() {
    console.log("Hello!")
    const element = <h1 className="greet">Hello</h1>
    const element2 = React.createElement("h1", { className: "greet" }, "Hello")
    return (
        <div>{element}</div>
    )
}
