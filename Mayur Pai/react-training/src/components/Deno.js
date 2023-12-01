import React, { useCallback, useEffect, useRef, useState } from "react";
import ChildComp from "./ChildComp";

const Deno = () => {
    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
    const [items, setItems] = useState([]);
    const renderCount = useRef(0);
    
    const memoFunction = useCallback(
        (url) => {
            {console.log("Hello1")}
            fetch(url)
            .then((response) => response.json())
            .then((data) => setItems(data.slice(0, 5))); // Displaying only the first 5 items
    },
    [url]
  );

  const ListItem = (props) => {
    console.log(props.item);
    let itemTemp = props.item;
    {console.log("Hello")}
    
    return itemTemp.map((i) => {
      return (
          <>
          <div>{i.id}</div>
          <div>{i.title}</div>
        </>
      );
    });
};

useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => setItems(data.slice(0, 5))); // Displaying only the first 5 items
    renderCount.current++;
}, [url]);
return (
    <div>
      {console.log(`render count: ${renderCount.current}`)}
      <h1>List Component</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <ListItem item={items} />
        </tbody>
      </table>
      <ChildComp memoFunction={memoFunction} />
    </div>
  );
};
export default Deno;
