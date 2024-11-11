import React from 'react'

const EffectDemo = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState("");

  return (
    <div>
        <button
        onClick={() =>{
            setCount(prevState => prevState +1);
        }}
        >
        Increment
        </button>

        <p>{data}</p>


    </div>
  )
}

export default EffectDemo