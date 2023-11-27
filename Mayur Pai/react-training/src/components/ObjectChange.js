import React, { useState } from "react";

export default function ObjectChange() {
  const [data, setData] = useState([
    {
      name: "Mayur",
      age: 24,
    },
  ]);

  function handleChange() {
    data[0] = { ...data[0], age: 15 };
    setData([...data]);
  }

  return (
    <div>
      <button onClick={handleChange}>Click!</button>
      <div>
        <h1>{data[0].name}</h1>
        <h1>{data[0].age}</h1>
      </div>
    </div>
  );
}
