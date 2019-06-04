import React from "react";

const cardStyles = {
  background: "whitesmoke",
  borderRadius: 4,
  width: "250px",
  height: "425px",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0

};

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>{children}</div>
  

);

export default Card;