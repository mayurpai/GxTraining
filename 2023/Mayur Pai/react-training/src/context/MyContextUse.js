import React, { useContext } from "react";
import MyContext from "./MyContext";

export default function MyContextUse() {
  const myContext = useContext(MyContext);
  return <div>{myContext}</div>;
}
