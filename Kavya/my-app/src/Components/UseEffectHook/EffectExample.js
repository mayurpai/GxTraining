import React,{useState,useEffect, useContext} from 'react'
import axios from  'axios'
import MyContext from '../UseContextHook/MyContext';

const EffectExample = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

const {sharedData, setSharedData} = useContext(MyContext);


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(response =>{
            setData(response.data[0].email)
            console.log("Api was called")
        })
      
    }, [count])
    
  return (
    <div>
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button
        onClick={()=>{
            setCount(preCount => preCount + 1);
        }}
        >
            Click
        </button>
        {console.log(sharedData.theme)}
    </div>
  )
}

export default EffectExample