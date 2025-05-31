import React from "react";

function EducationInfo(props) {
  const { setEducationInfo, handleSubmit, id } = props;
  return (
    <form data-id={id} className="education-info-cont" onSubmit={handleSubmit}>
      <h3>Education</h3>
      <input
        type="text"
        placeholder="University name"
        onChange={(e) =>
          setEducationInfo((prev) => {
            return { ...prev, uniName: e.target.value };
          })
        }
      />
      <input
        type="text"
        placeholder="City"
        onChange={(e) =>
          setEducationInfo((prev) => {
            return { ...prev, city: e.target.value };
          })
        }
      />
      <input
        type="text"
        placeholder="Degree"
        onChange={(e) =>
          setEducationInfo((prev) => {
            return { ...prev, degree: e.target.value };
          })
        }
      />
      <input
        type="text"
        placeholder="Subject"
        onChange={(e) =>
          setEducationInfo((prev) => {
            return { ...prev, subject: e.target.value };
          })
        }
      />
      <input
        type="text"
        placeholder="From (dd/mm/yy)"
        onChange={(e) =>
          setEducationInfo((prev) => {
            return { ...prev, startDate: e.target.value };
          })
        }
      />
      <input
        type="text"
        placeholder="To (dd/mm/yy)"
        onChange={(e) =>
          setEducationInfo((prev) => {
            return { ...prev, endDate: e.target.value };
          })
        }
      />
      <button className="hidden"></button>
    </form>
  );
}

export default EducationInfo;
