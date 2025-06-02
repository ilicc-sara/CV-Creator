import React from "react";

function EducationInfo(props) {
  const { setEducationInfo, handleSubmit, id } = props;

  // let educationInfoElementId;
  // console.log(educationInfoElementId);

  // let elementId;

  //  function handlePersonalInfoChange(e) {
  //   setPersonalInfo((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value };
  //   });
  // }

  return (
    <form
      data-id={id}
      className="education-info-cont"
      onClick={(e) => {
        console.log(e.target.closest(".education-info-cont").dataset.id);
        // elementId = e.target.closest(".education-info-cont").dataset.id;
      }}
      onSubmit={handleSubmit}
    >
      <h3>Education</h3>
      <input
        type="text"
        placeholder="University name"
        // onChange={(e) =>
        //   setEducationInfo((prev) => {
        //     return { ...prev, uniName: e.target.value };
        //   })
        // }
        onChange={(e) => {
          setEducationInfo((prev) =>
            prev.map((object) => {
              if (object.id === id) {
                return { ...object, uniName: e.target.value };
              } else {
                return { ...object };
              }
            })
          );
        }}
      />
      <input
        type="text"
        placeholder="City"
        // onChange={(e) =>
        //   setEducationInfo((prev) => {
        //     return { ...prev, city: e.target.value };
        //   })
        // }
        onChange={(e) => {
          setEducationInfo((prev) =>
            prev.map((object) => {
              if (object.id === id) {
                return { ...object, city: e.target.value };
              } else {
                return { ...object };
              }
            })
          );
        }}
      />
      <input
        type="text"
        placeholder="Degree"
        // onChange={(e) =>
        //   setEducationInfo((prev) => {
        //     return { ...prev, degree: e.target.value };
        //   })
        // }
        onChange={(e) => {
          setEducationInfo((prev) =>
            prev.map((object) => {
              if (object.id === id) {
                return { ...object, degree: e.target.value };
              } else {
                return { ...object };
              }
            })
          );
        }}
      />
      <input
        type="text"
        placeholder="Subject"
        // onChange={(e) =>
        //   setEducationInfo((prev) => {
        //     return { ...prev, subject: e.target.value };
        //   })
        // }
        onChange={(e) => {
          setEducationInfo((prev) =>
            prev.map((object) => {
              if (object.id === id) {
                return { ...object, subject: e.target.value };
              } else {
                return { ...object };
              }
            })
          );
        }}
      />
      <input
        type="text"
        placeholder="From (dd/mm/yy)"
        // onChange={(e) =>
        //   setEducationInfo((prev) => {
        //     return { ...prev, startDate: e.target.value };
        //   })
        // }
        onChange={(e) => {
          setEducationInfo((prev) =>
            prev.map((object) => {
              if (object.id === id) {
                return { ...object, startDate: e.target.value };
              } else {
                return { ...object };
              }
            })
          );
        }}
      />
      <input
        type="text"
        placeholder="To (dd/mm/yy)"
        // onChange={(e) =>
        //   setEducationInfo((prev) => {
        //     return { ...prev, endDate: e.target.value };
        //   })
        // }
        onChange={(e) => {
          setEducationInfo((prev) =>
            prev.map((object) => {
              if (object.id === id) {
                return { ...object, endDate: e.target.value };
              } else {
                return { ...object };
              }
            })
          );
        }}
      />
      <button className="hidden"></button>
    </form>
  );
}

export default EducationInfo;
