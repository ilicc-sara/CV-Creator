import React from "react";
import InputText from "./InputText";

function PersonalInfo(props) {
  const { id, personalInfo, handlePersonalInfoChange, cv } = props;

  function handleSubmit(e) {
    e.preventDefault();

    console.log(cv.personalInfo);
  }

  return (
    <form
      data-id={id}
      className="personal-info-cont"
      onClick={(e) => {
        console.log(e.target.closest(".personal-info-cont").dataset.id);
      }}
      onSubmit={handleSubmit}
    >
      <h3>Personal Information</h3>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={personalInfo.firstName}
        onChange={handlePersonalInfoChange}
      />
      {/* <InputText
        value={firstName}
        name={firstName}
        placeholder={"First Name"}
        handlePersonalInfoChange={handlePersonalInfoChange}
      /> */}
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={personalInfo.lastName}
        onChange={handlePersonalInfoChange}
      />
      {/* <InputText
        value={lastName}
        name={lastName}
        placeholder={"Last Name"}
        handlePersonalInfoChange={handlePersonalInfoChange}
      /> */}
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={personalInfo.title}
        onChange={handlePersonalInfoChange}
      />

      <label className="chose-photo" for="input-file">
        Photo
      </label>
      <input
        type="file"
        name="photo"
        placeholder="Photo"
        className="hidden"
        // value={cv.personalInfo.title}
        onChange={handlePersonalInfoChange}
        id="input-file"
        accept="accept/jpeg, image/png, image/jpg "
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
    </form>
  );
}

export default PersonalInfo;
