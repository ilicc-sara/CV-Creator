import React from "react";

function PersonalDetails(props) {
  const { photo, personalInfo } = props;
  return (
    <div className="personal-details-cont">
      <span>
        {" "}
        <img src={photo} className="profile-pic" />
      </span>

      <h3 className="color-green">Personal Details</h3>

      <div>
        <h4> Addrress </h4>
        <p> {personalInfo.address} </p>
      </div>

      <div>
        <h4> Phone Number </h4>
        <p> {personalInfo.phoneNumber} </p>
      </div>

      <div>
        <h4> Email </h4>
        <p> {personalInfo.email} </p>
      </div>
    </div>
  );
}

export default PersonalDetails;
