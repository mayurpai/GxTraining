import React from 'react'

const Counter = () => {

  let count = 1;

  const handleIncrement = () =>{
    count++;
    console.log(count);
  }

  return (
    <div>
      <button
      onClick={handleIncrement}
      >
        Without State Increment
      </button>
      <div>{count}</div>
    </div>
  )
}

export default Counter