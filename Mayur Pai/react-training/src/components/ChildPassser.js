import React, { useState, useEffect } from "react";

export default function ChildPassser(props) {
  const [setter, setSetter] = useState([]);
  useEffect(() => {
    setSetter(props.incrementer(0));
  }, [props.incrementer]);
  return (
    <div>
      <h1>ChildPassser</h1>
      <h1>
        {setter &&
          setter?.map((i) => {
            return <h4>{i}</h4>;
          })}
      </h1>
    </div>
  );
}
