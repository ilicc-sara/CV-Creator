import React from "react";

function ExperienceInfo(props) {
  // prettier-ignore
  const { id, experienceInfo, deleteExperience, handleExperienceInfoChange } = props;

  return (
    <div data-id={id} className="experience-info-cont">
      <h3>Experience</h3>
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={experienceInfo.position}
        onChange={(e) => handleExperienceInfoChange(e, id)}
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={experienceInfo.company}
        onChange={(e) => handleExperienceInfoChange(e, id)}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={experienceInfo.city}
        onChange={(e) => handleExperienceInfoChange(e, id)}
      />

      <input
        type="text"
        name="startDate"
        placeholder="From (dd/mm/yy)"
        value={experienceInfo.startDate}
        onChange={(e) => handleExperienceInfoChange(e, id)}
      />
      <input
        type="text"
        name="endDate"
        placeholder="To (dd/mm/yy)"
        value={experienceInfo.endDate}
        onChange={(e) => handleExperienceInfoChange(e, id)}
      />
      <button
        type="button"
        className="delete-btn"
        onClick={() => deleteExperience(id)}
      >
        Delete
      </button>
      <button className="hidden"></button>
    </div>
  );
}

export default ExperienceInfo;
