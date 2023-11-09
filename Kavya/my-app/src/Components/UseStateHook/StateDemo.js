import React from "react";

const StateDemo= () => {
    let inputValue = "Galaxe Solutions"


    const handleChange = (event) =>{
        inputValue = event.target.value;
        console.log(inputValue);
    }
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

export default StateDemo;
