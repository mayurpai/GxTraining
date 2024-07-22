import React, { useState } from "react";

const UseStateExample= () => {
  const [inputValue, setInputValue] = useState("Galaxy Solutions");

  let handleChange= (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input 
        className="input"
        placeholder="enter something..." 
        onChange={handleChange} 
        />
        <p>{inputValue}</p>
    </div>
  );
};

export default UseStateExample;
