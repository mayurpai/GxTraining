import React, { useState, useEffect, useCallback, useRef } from "react";

const ChildComp = (props) => {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
  useEffect(() => {
    props.memoFunction(url);
  }, [url]);

  return (
    <>
      <button
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/todos")}
      >
        Click to change
      </button>
    </>
  );
};
export default ChildComp;
