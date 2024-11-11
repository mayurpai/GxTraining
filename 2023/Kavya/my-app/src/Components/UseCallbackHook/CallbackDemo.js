import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

export default function CallbackDemo() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hello GalaxE!!");

  
  const returnComment = useCallback((item) => {
      return data +" " + item;
    },
    [data]
  )
  
    

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
          setData("We are Enjoying the Session")
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}