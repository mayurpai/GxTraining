import react, { Component } from "react";

export class WelcomeInClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Mayur",
      company: "Gx",
      caller: function () {
        console.log("Hello Everyone");
      },
    };
  }

  updateState() {
    this.setState({
      company: "Something",
    });
  }

  diplayer() {
    console.log("Hi");
  }
  render() {
    let { nameProp } = this.props;
    console.log({nameProp});
    return (
      <>
        <h1>
          Hello, {nameProp}, {this.state.company}
        </h1>
        {this.diplayer()}
        {this.state.caller()}
        <button type="button" onClick={() => this.updateState()}>
          Click
        </button>
      </>
    );
  }
}

export default WelcomeInClass;
