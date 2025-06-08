import React from "react";

function EducationInfo(props) {
  const { id, cv, setCV } = props;

  // function handleEducationInfoChange(e) {
  //   {
  //     setEducationInfo((prev) =>
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

  // function handlePersonalInfoChange(e) {
  //   setCV((prev) => {
  //     return {
  //       ...prev,
  //       // personalInfo: prev.personalInfo.map((object) => {
  //       //   return { ...object, [e.target.name]: e.target.value };
  //       // }),
  //       personalInfo: { ...prev.personalInfo, [e.target.name]: e.target.value },
  //     };
  //   });
  // }

  // function handleEducationInfoChange(e) {
  //   setCV((prev) => {
  //     return {
  //       ...prev,
  //       educationInfo: [
  //         {
  //           ...prev.educationInfo,
  //           [e.target.name]: e.target.value,
  //         },
  //       ],
  //     };
  //   });
  // }

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

  const index = cv.educationInfo.findIndex((object) => object.id === id);

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
        value={cv.educationInfo[index].uniName}
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={cv.educationInfo[index].city}
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={cv.educationInfo[index].degree}
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={cv.educationInfo[index].subject}
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="startDate"
        placeholder="From (dd/mm/yy)"
        value={cv.educationInfo[index].startDate}
        onChange={handleEducationInfoChange}
      />
      <input
        type="text"
        name="endDate"
        placeholder="To (dd/mm/yy)"
        value={cv.educationInfo[index].endDate}
        onChange={handleEducationInfoChange}
      />
      <button
        type="button"
        className="delete-btn"
        onClick={() =>
          setCV((prev) => {
            return {
              ...prev,
              educationInfo: prev.educationInfo.filter(
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

export default EducationInfo;
