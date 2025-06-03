import React from "react";

function ExperienceInfo(props) {
  const { setExperienceInfo, id } = props;

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

  return (
    <div data-id={id} className="experience-info-cont">
      <h3>Experience</h3>
      <input
        type="text"
        name="position"
        placeholder="Position"
        onChange={handleExperienceInfoChange}
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        onChange={handleExperienceInfoChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={handleExperienceInfoChange}
      />

      <input
        type="text"
        name="startDate"
        placeholder="From (dd/mm/yy)"
        onChange={handleExperienceInfoChange}
      />
      <input
        type="text"
        name="endDate"
        placeholder="To (dd/mm/yy)"
        onChange={handleExperienceInfoChange}
      />
      <button
        type="button"
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
