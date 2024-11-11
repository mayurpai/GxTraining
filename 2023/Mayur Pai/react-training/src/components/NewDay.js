import React, { Component } from "react";

class NewDay extends Component {
  constructor(props) {
    super(props);
    this.updateAnyProperty = this.updateAnyProperty.bind(this)
    this.state = {
      anyProperty: "example",
    };
  }

  updateAnyProperty() {
    this.setState({
      anyProperty: "something",
    });
  }
  render() {
    return (
      <>
        <h1>Hello, {this.state.anyProperty}</h1>
        <h1>Hello, {this.props.name}</h1>
        <button onClick={this.updateAnyProperty}>Click</button>
      </>
    );
  }
}

export default NewDay;
