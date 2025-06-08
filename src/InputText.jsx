import React from "react";

function InputText(props) {
  const { value, type, name, placeholder, handlePersonalInfoChange } = props;

  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handlePersonalInfoChange}
    />
  );
}

export default InputText;
