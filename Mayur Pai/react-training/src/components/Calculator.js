import React, { useState, useMemo } from "react";
const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const result = useMemo(() => {
    console.log("Performing expensive calculation...");
    return num1 + num2; // Example of an expensive calculation
  }, [num1, num2]);
  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <p>Result: {result}</p>
    </div>
  );
};
export default Calculator;
