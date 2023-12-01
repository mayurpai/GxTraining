import React from "react";
import MyContext from "./MyContext";
class MyClassComponent extends React.Component {
  render() {
    return (
      <MyContext.Consumer>{(value) => <div> The value is: {value} </div>}</MyContext.Consumer>
    );
  }
}
export default MyClassComponent;
