import React, { useState } from "react";
import MyContext from "./MyContext";

const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyContextProvider;
