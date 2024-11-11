import React,{useState} from 'react'

const CounterUsingUseState = () => {
  const [count, setcount] = useState(1)


  const handleIncrement = () =>{
    setcount(prevCount => prevCount+1);
  }

  return (
    <div>
      <button
      onClick={handleIncrement}
      >
        Increment
      </button>
      <div>{count}</div>
    </div>
  )
}

export default CounterUsingUseState