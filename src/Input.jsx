import React from "react";

function Input(props) {
  const { type, value, name, placeholder, handleInputChange } = props;

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  );
}

export default Input;
