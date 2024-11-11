import React, { useState, useEffect } from "react";
import axios from "axios";

export default function API() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9092/product/api/v1/GET")
    //   .get("https://65682d0c9927836bd9742fd6.mockapi.io/api/v1/MyApp")
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      API
      {data.map((i) => {
        return (
          <>
            <h1>{i.productId}</h1>
            <h1>{i.productName}</h1>
            {/* <h1>{i.lastName}</h1> */}
          </>
        );
      })}
    </div>
  );
}
