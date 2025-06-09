import React from "react";

function EducationInfo(props) {
  // prettier-ignore
  const { id, educationInfo, deleteEducation, setCV } =
    props;

  function handleEducationInfoChange(e) {
    setCV((prev) => {
      return {
        ...prev,
        educationInfo: prev.educationInfo.map((object) => {
          if (object.id === id) {
            return { ...object, [e.target.name]: e.target.value };
          } else {
            return { ...object };
          }
        }),
      };
    });
  }

  return (
    <div data-id={id} className="education-info-cont">
      <h3>Education</h3>
      <input
        type="text"
        name="uniName"
        placeholder="University name"
        value={educationInfo.uniName}
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={educationInfo.city}
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={educationInfo.degree}
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={educationInfo.subject}
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="startDate"
        placeholder="From (dd/mm/yy)"
        value={educationInfo.startDate}
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="endDate"
        placeholder="To (dd/mm/yy)"
        value={educationInfo.endDate}
        onChange={handleEducationInfoChange}
      />
      <button
        type="button"
        className="delete-btn"
        onClick={() => deleteEducation(id)}
      >
        Delete
      </button>
      <button className="hidden"></button>
    </div>
  );
}

export default EducationInfo;
