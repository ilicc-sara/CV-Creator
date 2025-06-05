import React from "react";

function ExperienceInfo(props) {
  const { setExperienceInfo, id, experienceInfo } = props;

  function handleExperienceInfoChange(e) {
    {
      setExperienceInfo((prev) =>
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

  const index = experienceInfo.findIndex((object) => object.id === id);

  return (
    <div data-id={id} className="experience-info-cont">
      <h3>Experience</h3>
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={experienceInfo[index].position}
        onChange={handleExperienceInfoChange}
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={experienceInfo[index].company}
        onChange={handleExperienceInfoChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={experienceInfo[index].city}
        onChange={handleExperienceInfoChange}
      />

      <input
        type="text"
        name="startDate"
        placeholder="From (dd/mm/yy)"
        value={experienceInfo[index].startDate}
        onChange={handleExperienceInfoChange}
      />
      <input
        type="text"
        name="endDate"
        placeholder="To (dd/mm/yy)"
        value={experienceInfo[index].endDate}
        onChange={handleExperienceInfoChange}
      />
      <button
        type="button"
        className="delete-btn"
        onClick={() =>
          setExperienceInfo((prev) => prev.filter((object) => object.id !== id))
        }
      >
        Delete
      </button>
    </div>
  );
}

export default ExperienceInfo;
