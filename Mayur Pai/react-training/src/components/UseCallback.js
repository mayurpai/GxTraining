import React, { useState, useCallback } from "react";
import ChildPassser from "./ChildPassser";

export default function UseCallback() {
  const [inc, setInc] = useState(0);
  const incrementer = useCallback(
    (incre) => [inc + incre, inc + incre + 1, inc + incre + 2],
    [inc]
  );
  return (
    <div>
      <h1>Use Call Back</h1>
      <input
        type="number"
        value={inc}
        onChange={(e) => {
          setInc(Number(e.target.value));
        }}
      ></input>
      <ChildPassser incrementer={incrementer}></ChildPassser>
    </div>
  );
}
