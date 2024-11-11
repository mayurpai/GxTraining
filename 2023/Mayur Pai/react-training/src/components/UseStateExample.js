import { useState } from "react";
export default function UseStateExample() {
  const buttonStyle = {
    padding: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "5rem",
    cursor: "pointer",
    margin: "1rem",
    color: "whitesmoke",
    fontFamily: "Poppins",
  };
  const [count, setCount] = useState(0);

  const handle = () => {
    const updatedCount = count + 1
    setCount(updatedCount);
    console.log(`Clicked ${updatedCount} Times`);
  };
  console.log("Use State Rendered!");
  return (
    <button style={buttonStyle} onClick={handle}>
      Use State Click Me!
    </button>
  );
}
