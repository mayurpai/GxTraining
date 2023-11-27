import { useRef } from "react";
export default function UseRefExample() {
  const buttonStyle = {
    padding: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "5rem",
    cursor: "pointer",
    margin: "1rem",
    color: "whitesmoke",
    fontFamily: "Poppins"
  };
  const countRef = useRef(0);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} Times`);
  };
  console.log("Use Ref Rendered!");
  return (
    <button style={buttonStyle} onClick={handle}>
      Use Ref Click Me!
    </button>
  );
}
