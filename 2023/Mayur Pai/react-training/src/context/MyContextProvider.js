import React, { useState } from "react";
import MyContext from "./MyContext";

const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState("My Context Provider!");

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyContextProvider;
