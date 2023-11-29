import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
export default function Child(props) {
  const [counter, setCounter] = useState(props.incrementer);

  useEffect(() => {
    let timer;
    let tempCount;

    if (props.startState) {
      tempCount = counter - 1;
      timer = setTimeout(() => {
        setCounter(tempCount);
      }, 1000);
    }

    if (props.resetState) {
      clearTimeout(timer);
      setCounter(props.incrementer);
      timer = setTimeout(() => {
        setCounter(tempCount);
      }, 1000);
      props.updateStartState(true);
      props.updateResetButtonState(false);
    }

    if (!props.startState) {
      clearTimeout(timer);
    }

    if (tempCount <= -2) {
      clearTimeout(timer);
      props.updateVisibility(false);
      props.updateStartState(false);
      setTimeout(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${props.incrementer} Second(s) Completed!`,
          showConfirmButton: false,
          timer: 1000,
        });
        // alert(`${props.incrementer} Second Completed!`);
      }, 0);
    }
    console.log(props.startState, props.resetState);

  }, [counter, props.startState, props.resetState]);
  return (
    <div>
      <h1 style={{ marginTop: "1rem" }}>{counter}</h1>
    </div>
  );
}
