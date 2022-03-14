import React from "react";

const Box = ({ boxColor, boxNumber, handleDrag, handleDrop }) => {
  return (
    <div
      draggable
      id={boxNumber}
      onDragOver={(ev) => ev.preventDefault()}
      onDragStart={handleDrag}
      onDrop={handleDrop}
      style={{
        backgroundColor: boxColor,
       
        borderColor: boxColor,
        borderRadius: "100px",
        color: "black",
        width: "10%",
        border: "1px solid  black ",
        height: "30px"
      }}
    >
      {boxNumber}
    </div>
  );
};

export default Box;
