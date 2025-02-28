import React from "react";

function Card({ children }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", maxWidth: "400px", margin: "20px auto" }}>
      {children}
    </div>
  );
}

export default Card;
