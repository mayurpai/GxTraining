import React, { useState } from "react";
import InputField from "./InputField";

const Login = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <div>
      <h2>Login</h2>
      <InputField onInputChange={handleInputChange} />
      <h3>Input value in Login component: {inputValue}</h3>
    </div>
  );
};

export default Login;
