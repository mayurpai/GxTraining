import React from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectedComponent() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      Redirected Component
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}
