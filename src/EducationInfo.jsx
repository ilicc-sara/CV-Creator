import React from "react";

function EducationInfo(props) {
  const { setEducationInfo, id } = props;

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
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="startDate"
        placeholder="From (dd/mm/yy)"
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="endDate"
        placeholder="To (dd/mm/yy)"
        onChange={handleEducationInfoChange}
      />
      <button className="hidden"></button>
    </div>
  );
}

export default EducationInfo;
