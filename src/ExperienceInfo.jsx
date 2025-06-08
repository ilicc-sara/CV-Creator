import React from "react";

function ExperienceInfo(props) {
  const { id, cv, setCV } = props;

  // function handleExperienceInfoChange(e) {
  //   {
  //     setExperienceInfo((prev) =>
  //       prev.map((object) => {
  //         if (object.id === id) {
  //           return { ...object, [e.target.name]: e.target.value };
  //         } else {
  //           return { ...object };
  //         }
  //       })
  //     );
  //   }
  // }

  function handleExperienceInfoChange(e) {
    setCV((prev) => {
      return {
        ...prev,
        experienceInfo: prev.experienceInfo.map((object) => {
          if (object.id === id) {
            return { ...object, [e.target.name]: e.target.value };
          } else {
            return { ...object };
          }
        }),
      };
    });
  }

  const index = cv.experienceInfo.findIndex((object) => object.id === id);

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   console.log(cv.experienceInfo);
  // }

  return (
    <div data-id={id} className="experience-info-cont">
      <h3>Experience</h3>
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={cv.experienceInfo[index].position}
        onChange={handleExperienceInfoChange}
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={cv.experienceInfo[index].company}
        onChange={handleExperienceInfoChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={cv.experienceInfo[index].city}
        onChange={handleExperienceInfoChange}
      />

      <input
        type="text"
        name="startDate"
        placeholder="From (dd/mm/yy)"
        value={cv.experienceInfo[index].startDate}
        onChange={handleExperienceInfoChange}
      />
      <input
        type="text"
        name="endDate"
        placeholder="To (dd/mm/yy)"
        value={cv.experienceInfo[index].endDate}
        onChange={handleExperienceInfoChange}
      />
      <button
        type="button"
        className="delete-btn"
        onClick={() =>
          setCV((prev) => {
            return {
              ...prev,
              experienceInfo: prev.experienceInfo.filter(
                (object) => object.id !== id
              ),
            };
          })
        }
      >
        Delete
      </button>
      <button className="hidden"></button>
    </div>
  );
}

export default ExperienceInfo;
