import React from "react";
import MyContext from "./MyContext";
class MyProvider extends React.Component {
  state = {
    value: "Hello from Context!",
  };
  render() {
    return (
      <MyContext.Provider value={this.state.value}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default MyProvider;
