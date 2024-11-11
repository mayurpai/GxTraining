import React, { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [counterState, setCounterState] = useState(true);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    let name = event.target.value;
    setInputValue(name);
  }

  useEffect(() => {
    let timer;
    if (counterState) {
      timer = setTimeout(() => {
        setCount(count + 1);
      }, 500);
    }

    return () => {
      if (inputValue && counterState) {
        clearTimeout(timer);
        setCounterState(false);
      }
    };
  }, [count, inputValue]);

  return (
    <div>
      <input
        style={{
          border: "1px solid white",
          padding: "1rem",
          color: "white",
        }}
        type="text"
        name="name"
        value={inputValue}
        placeholder="Input Here..."
        onChange={handleChange}
      ></input>
      <h1 style={{ color: "whitesmoke" }}>{count}</h1>
    </div>
  );
}
