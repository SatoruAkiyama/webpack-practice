import * as React from "react";

const Alert: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div style={{ backgroundColor: "green", padding: "10px" }}>{message}</div>
  );
};

export default Alert;
