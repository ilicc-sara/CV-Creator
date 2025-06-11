import React from "react";
import Input from "./Input";
import Button from "./Button";

function EducationInfo(props) {
  // prettier-ignore
  const { id, educationInfo, deleteEducation, handleEducationInfoChange } = props;

  return (
    <div data-id={id} className="education-info-cont">
      <h3>Education</h3>

      <Input
        type="text"
        value={educationInfo.uniName}
        name="uniName"
        placeholder="University name"
        handleInputChange={(e) => handleEducationInfoChange(e, id)}
      />

      <Input
        type="text"
        value={educationInfo.city}
        name="city"
        placeholder="City"
        handleInputChange={(e) => handleEducationInfoChange(e, id)}
      />

      <Input
        type="text"
        value={educationInfo.degree}
        name="degree"
        placeholder="Degree"
        handleInputChange={(e) => handleEducationInfoChange(e, id)}
      />

      <Input
        type="text"
        value={educationInfo.subject}
        name="subject"
        placeholder="Subject"
        handleInputChange={(e) => handleEducationInfoChange(e, id)}
      />

      <Input
        type="text"
        value={educationInfo.startDate}
        name="startDate"
        placeholder="From (dd/mm/yy)"
        handleInputChange={(e) => handleEducationInfoChange(e, id)}
      />

      <Input
        type="text"
        value={educationInfo.endDate}
        name="endDate"
        placeholder="To (dd/mm/yy)"
        handleInputChange={(e) => handleEducationInfoChange(e, id)}
      />

      <Button
        type="button"
        className="delete-btn"
        handleClick={() => deleteEducation(id)}
        text="Delete"
      />
    </div>
  );
}

export default EducationInfo;
