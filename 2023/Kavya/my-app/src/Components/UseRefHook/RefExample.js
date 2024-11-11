import React, { useRef } from 'react';

const RefExample = () => {
  const inputRef = useRef();

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => {inputRef.current.focus();inputRef.current.value= ""}}>change Input</button>
    </div>
  );
};

export default RefExample;