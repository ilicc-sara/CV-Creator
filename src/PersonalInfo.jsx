import React from "react";

function PersonalInfo(props) {
  const { setPersonalInfo, id, personalInfo } = props;

  function handlePersonalInfoChange(e) {
    setPersonalInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  return (
    <div
      data-id={id}
      className="personal-info-cont"
      onClick={(e) => {
        console.log(e.target.closest(".personal-info-cont").dataset.id);
      }}
    >
      <h3>Personal Information</h3>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={personalInfo.firstName}
        onChange={handlePersonalInfoChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={personalInfo.lastName}
        onChange={handlePersonalInfoChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={personalInfo.title}
        onChange={handlePersonalInfoChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={personalInfo.address}
        onChange={handlePersonalInfoChange}
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone number"
        value={personalInfo.phoneNumber}
        onChange={handlePersonalInfoChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={personalInfo.email}
        onChange={handlePersonalInfoChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={personalInfo.description}
        onChange={handlePersonalInfoChange}
      />
      <button className="hidden"></button>
    </div>
  );
}

export default PersonalInfo;
