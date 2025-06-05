import React from "react";

function EducationInfo(props) {
  const { setEducationInfo, id, educationInfo } = props;

  function handleEducationInfoChange(e) {
    {
      setEducationInfo((prev) =>
        prev.map((object) => {
          if (object.id === id) {
            return { ...object, [e.target.name]: e.target.value };
          } else {
            return { ...object };
          }
        })
      );
    }
  }

  const index = educationInfo.findIndex((object) => object.id === id);

  return (
    <div
      data-id={id}
      className="education-info-cont"
      onClick={(e) => {
        console.log(e.target.closest(".education-info-cont").dataset.id);
      }}
    >
      <h3>Education</h3>
      <input
        type="text"
        name="uniName"
        placeholder="University name"
        value={educationInfo[index].uniName}
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={educationInfo[index].city}
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={educationInfo[index].degree}
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={educationInfo[index].subject}
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="startDate"
        placeholder="From (dd/mm/yy)"
        value={educationInfo[index].startDate}
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="endDate"
        placeholder="To (dd/mm/yy)"
        value={educationInfo[index].endDate}
        onChange={handleEducationInfoChange}
      />
      <button
        type="button"
        className="delete-btn"
        onClick={() =>
          setEducationInfo((prev) => prev.filter((object) => object.id !== id))
        }
      >
        Delete
      </button>
    </div>
  );
}

export default EducationInfo;
