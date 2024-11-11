import React from "react";

const InputField = ({ onInputChange }) => {
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  return <input type="text" onChange={handleChange} />;
};

export default InputField;
