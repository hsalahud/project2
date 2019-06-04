import React from "react";

const buttonStyles = {
  padding: "16px 24px",
  background: "whitesmoke",
  cursor: "pointer",
  border: "none",
  borderRadius: 100,
  opacity: 0.8,
  marginTop: '175px'
};

const Button = ({ children, onClick }) => (
  <button onClick={onClick} style={{ ...buttonStyles }}>
    {children}
  </button>
);

export default Button;