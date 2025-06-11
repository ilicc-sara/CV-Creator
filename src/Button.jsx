import React from "react";

function Button(props) {
  const { type, className, handleClick, text } = props;
  const baseClassName = "button";
  let modifierClassNames;
  if (type === "reset") {
    modifierClassNames = "btn-reset reset";
  }
  if (handleClick) {
    return (
      <button
        type={type}
        // className={`${baseClassName} ${modifierClassNames}`}
        className={className}
        onClick={handleClick}
      >
        {text}
      </button>
    );
  } else {
    return (
      <button type={type} className={className}>
        {text}
      </button>
    );
  }
}

export default Button;
