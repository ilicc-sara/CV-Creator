import React from "react";

function Button(props) {
  const { type, handleClick, text, typeProp } = props;
  // const baseClassName = "button";
  let modifierClassName;
  // if (type === "reset") {
  //   modifierClassName = "btn-reset reset";
  // }

  if (typeProp === "PrintBtn") {
    modifierClassName = "print-btn";
  }
  if (typeProp === "BackBtn") {
    modifierClassName = "back-btn";
  }
  if (typeProp === "AddBtn") {
    modifierClassName = "add-btn";
  }
  if (typeProp === "DeleteBtn") {
    modifierClassName = "delete-btn";
  }
  if (typeProp === "PreviewBtn") {
    modifierClassName = "finish-btn btn-preview";
  }
  if (typeProp === "ResetBtn") {
    modifierClassName = "finish-btn btn-reset";
  }
  if (handleClick) {
    return (
      <button
        type={type}
        className={`${modifierClassName}`}
        onClick={handleClick}
      >
        {text}
      </button>
    );
  } else {
    return (
      <button type={type} className={`${modifierClassName}`}>
        {text}
      </button>
    );
  }
}

export default Button;
