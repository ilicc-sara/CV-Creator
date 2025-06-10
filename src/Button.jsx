import React from "react";

function Button(props) {
  const { type, className, func, text } = props;

  if (func) {
    return (
      <button type={type} className={className} onClick={() => func()}>
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
