import React from "react";

function Input(props) {
  const { type, value, name, placeholder, handlePersonalInfoChange } = props;

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handlePersonalInfoChange}
    />
  );
}

export default Input;
