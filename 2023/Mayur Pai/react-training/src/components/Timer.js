import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Child from "./Child";

export default function Timer() {
  const [incrementer, setIncrementer] = useState();
  const [buttonStates, setButtonStates] = useState({
    startButton: false,
    resetButton: false,
  });
  const [visible, setVisible] = useState(false);

  const updateVisibility = (booleanValue) => {
    setVisible(booleanValue);
  };

  const updateStartState = (booleanValue) => {
    setButtonStates({ ...buttonStates, startButton: booleanValue });
  };

  const updateResetButtonState = (booleanValue) => {
    setButtonStates({ ...buttonStates, resetButton: booleanValue });
  };

  const startLogic = (event) => {
    event.preventDefault();
    if (incrementer <= 0 || incrementer === undefined) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please Enter A Valid Time In Second(s)",
        showConfirmButton: false,
        timer: 1000,
      });
      // alert("Please Enter A Valid Time In Second(s)");
    } else if (!buttonStates.startButton) {
      updateStartState(true);
      updateVisibility(true);
    } else {
      updateVisibility(true);
      updateStartState(false);
    }
  };

  const resetLogic = (event) => {
    event.preventDefault();
    updateResetButtonState(true);
    updateVisibility(false);
    setButtonStates({ startButton: false, resetButton: true });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ fontWeight: "bold" }}>Timer ⏰</h1>
      <input
        placeholder="Enter Time In Seconds..."
        style={{ padding: "0.5rem" }}
        type="number"
        value={incrementer}
        onChange={(e) => {
          setIncrementer(Number(e.target.value));
        }}
      ></input>
      {visible ? (
        <Child
          incrementer={incrementer}
          updateVisibility={updateVisibility}
          startState={buttonStates.startButton}
          resetState={buttonStates.resetButton}
          updateStartState={updateStartState}
          updateResetButtonState={updateResetButtonState}
        ></Child>
      ) : null}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          style={{ margin: "1rem" }}
          onClick={(e) => startLogic(e)}
          type="button"
          class="btn btn-primary"
        >
          {buttonStates.startButton ? "Pause" : "Start"}
          {/* Start */}
        </Button>
        {/* <Button
          style={{ margin: "1rem" }}
          onClick={(e) => startLogic(e)}
          type="button"
          class="btn btn-primary"
        > */}
        {/* {!buttonStates.startButton ? "Pause" : "Start"} */}
        {/* Pause */}
        {/* </Button> */}
        <Button
          style={{ margin: "1rem" }}
          onClick={(e) => resetLogic(e)}
          type="button"
          class="btn btn-primary"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
