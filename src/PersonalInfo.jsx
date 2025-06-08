import React from "react";

function PersonalInfo(props) {
  const { id, cv, setCV } = props;

  // function handlePersonalInfoChange(e) {
  //   setPersonalInfo((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value };
  //   });
  // }

  function handlePersonalInfoChange(e) {
    setCV((prev) => {
      return {
        ...prev,
        // personalInfo: prev.personalInfo.map((object) => {
        //   return { ...object, [e.target.name]: e.target.value };
        // }),
        personalInfo: { ...prev.personalInfo, [e.target.name]: e.target.value },
      };
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
        value={cv.personalInfo.firstName}
        onChange={handlePersonalInfoChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={cv.personalInfo.lastName}
        onChange={handlePersonalInfoChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={cv.personalInfo.title}
        onChange={handlePersonalInfoChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={cv.personalInfo.address}
        onChange={handlePersonalInfoChange}
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone number"
        value={cv.personalInfo.phoneNumber}
        onChange={handlePersonalInfoChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={cv.personalInfo.email}
        onChange={handlePersonalInfoChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={cv.personalInfo.description}
        onChange={handlePersonalInfoChange}
      />
      <button className="hidden"></button>
    </div>
  );
}

export default PersonalInfo;
