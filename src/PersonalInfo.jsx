import React from "react";
import Input from "./Input";

function PersonalInfo(props) {
  const { id, personalInfo, handlePersonalInfoChange, setPhoto, setCV } = props;

  return (
    <div
      data-id={id}
      className="personal-info-cont"
      onClick={(e) => {
        console.log(e.target.closest(".personal-info-cont").dataset.id);
      }}
    >
      <h3>Personal Information</h3>

      <Input
        type="text"
        value={personalInfo.firstName}
        name="firstName"
        placeholder="First Name"
        handleInputChange={handlePersonalInfoChange}
      />

      <Input
        type="text"
        value={personalInfo.lastName}
        name="lastName"
        placeholder="Last Name"
        handleInputChange={handlePersonalInfoChange}
      />

      <Input
        type="text"
        value={personalInfo.title}
        name="title"
        placeholder="Title"
        handleInputChange={handlePersonalInfoChange}
      />

      <label className="chose-photo" for="input-file">
        Photo
      </label>
      <input
        type="file"
        name="photo"
        placeholder="Photo"
        className="hidden"
        onChange={
          (e) =>
            setCV((prev) => {
              return {
                ...prev,
                personalInfo: {
                  ...prev.personalInfo,
                  [e.target.name]: e.target.files[0].name,
                },
              };
            })
          // {
          //   setPhoto(e.target.files[0].name);
          // }
        }
        // onChange={(e) => setPhoto(e.target.files[0])}
        id="input-file"
        accept="accept/jpeg, image/png, image/jpg image/jpeg "
      />

      <Input
        type="text"
        value={personalInfo.address}
        name="address"
        placeholder="Address"
        handleInputChange={handlePersonalInfoChange}
      />

      <Input
        type="tel"
        value={personalInfo.phoneNumber}
        name="phoneNumber"
        placeholder="Phone number"
        handleInputChange={handlePersonalInfoChange}
      />

      <Input
        type="email"
        value={personalInfo.email}
        name="email"
        placeholder="Email"
        handleInputChange={handlePersonalInfoChange}
      />

      <Input
        type="text"
        value={personalInfo.description}
        name="description"
        placeholder="Description"
        handleInputChange={handlePersonalInfoChange}
      />
    </div>
  );
}

export default PersonalInfo;
