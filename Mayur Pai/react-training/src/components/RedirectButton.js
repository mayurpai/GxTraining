import React from "react";
import { useNavigate } from "react-router-dom";

const RedirectButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/RedirectedComponent")}>
        Redirect to Another URL and Render Component
      </button>
    </div>
  );
};

export default RedirectButton;
