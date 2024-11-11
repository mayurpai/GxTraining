import React, { Component } from "react";

class TemperatureConverterClass extends Component {
  constructor() {
    super();
    this.state = {
      celsius: 0,
      fahrenheit: 32,
    };
  }

  handleCelsiusChange = (e) => {
    const value = e.target.value;
    this.setState({
      celsius: value,
      fahrenheit: (value * 9) / 5 + 32,
    });
  };

  handleFahrenheitChange = (e) => {
    const value = e.target.value;
    this.setState({
      fahrenheit: value,
      celsius: ((value - 32) * 5) / 9,
    });
  };

  render() {
    return (
      <div>
        <label>Celsius:</label>
        <input
          type="number"
          value={this.state.celsius}
          onChange={this.handleCelsiusChange}
        />
        <br />
        <label>Fahrenheit:</label>
        <input
          type="number"
          value={this.state.fahrenheit}
          onChange={this.handleFahrenheitChange}
        />
        <h1>
          {this.state.fahrenheit} Fahrenheit = {this.state.celsius} Celsius{" "}
        </h1>
        <h1>
          {this.state.celsius} Celsius = {this.state.fahrenheit} Fahrenheit{" "}
        </h1>
      </div>
    );
  }
}

export default TemperatureConverterClass;
