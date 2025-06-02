import React from "react";

function PersonalInfo(props) {
  const { setPersonalInfo, id, handleSubmit } = props;

  function handlePersonalInfoChange(e) {
    setPersonalInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  return (
    <form
      data-id={id}
      className="personal-info-cont"
      onClick={(e) => {
        console.log(e.target.closest(".personal-info-cont").dataset.id);
      }}
      // onSubmit={handleSubmit}
    >
      <h3>Personal Information</h3>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handlePersonalInfoChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handlePersonalInfoChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handlePersonalInfoChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={handlePersonalInfoChange}
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone number"
        onChange={handlePersonalInfoChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handlePersonalInfoChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={handlePersonalInfoChange}
      />
      <button className="hidden"></button>
    </form>
  );
}

export default PersonalInfo;
