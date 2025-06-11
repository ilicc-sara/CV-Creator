import React from "react";
import Input from "./Input";
import Button from "./Button";

function ExperienceInfo(props) {
  // prettier-ignore
  const { id, experienceInfo, deleteExperience, handleExperienceInfoChange } = props;

  return (
    <div data-id={id} className="experience-info-cont">
      <h3>Experience</h3>

      <Input
        type="text"
        value={experienceInfo.position}
        name="position"
        placeholder="Position"
        handleInputChange={(e) => handleExperienceInfoChange(e, id)}
      />

      <Input
        type="text"
        value={experienceInfo.company}
        name="company"
        placeholder="Company"
        handleInputChange={(e) => handleExperienceInfoChange(e, id)}
      />

      <Input
        type="text"
        value={experienceInfo.city}
        name="city"
        placeholder="City"
        handleInputChange={(e) => handleExperienceInfoChange(e, id)}
      />

      <Input
        type="text"
        value={experienceInfo.startDate}
        name="startDate"
        placeholder="From (dd/mm/yy)"
        handleInputChange={(e) => handleExperienceInfoChange(e, id)}
      />

      <Input
        type="text"
        value={experienceInfo.endDate}
        name="endDate"
        placeholder="To (dd/mm/yy)"
        handleInputChange={(e) => handleExperienceInfoChange(e, id)}
      />

      <Button
        type="button"
        className="delete-btn"
        handleClick={() => deleteExperience(id)}
        text="Delete"
      />
    </div>
  );
}

export default ExperienceInfo;
