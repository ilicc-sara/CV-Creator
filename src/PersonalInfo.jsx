import React from "react";
import Input from "./Input";

function PersonalInfo(props) {
  const { id, personalInfo, handlePersonalInfoChange, cv } = props;

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   console.log(cv.personalInfo);
  // }

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

      {/*         
      <Input type={'text'} value={cv.personalInfo.firstName} name={cv.personalInfo.firstName} placeholder={"First Name"} handlePersonalInfoChange={handlePersonalInfoChange} />

      
      <Input type={'text'} value={cv.personalInfo.lastName} name={cv.personalInfo.lastName} placeholder={"Last Name"} handlePersonalInfoChange={handlePersonalInfoChange} />

    
      <Input type={'text'} value={cv.personalInfo.title} name={cv.personalInfo.title} placeholder={"Title"} handlePersonalInfoChange={handlePersonalInfoChange} />

    
      <Input type={'text'} value={cv.personalInfo.address} name={cv.personalInfo.address} placeholder={"Address"} handlePersonalInfoChange={handlePersonalInfoChange} />
      
      <Input type={'text'} value={cv.personalInfo.description} name={cv.personalInfo.description} placeholder={"Description"} handlePersonalInfoChange={handlePersonalInfoChange} /> */}

      <button className="hidden"></button>
    </div>
  );
}

export default PersonalInfo;
