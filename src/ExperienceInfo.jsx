import React from "react";

function ExperienceInfo(props) {
  const { setExperienceInfo, id } = props;
  return (
    <form data-id={id} className="experience-info-cont">
      <h3>Experience</h3>
      <input
        type="text"
        placeholder="Position"
        onChange={(e) =>
          setExperienceInfo((prev) => {
            return { ...prev, position: e.target.value };
          })
        }
      />
      <input
        type="text"
        placeholder="Company"
        onChange={(e) =>
          setExperienceInfo((prev) => {
            return { ...prev, company: e.target.value };
          })
        }
      />
      <input
        type="text"
        placeholder="City"
        onChange={(e) =>
          setExperienceInfo((prev) => {
            return { ...prev, city: e.target.value };
          })
        }
      />

      <input
        type="text"
        placeholder="From (dd/mm/yy)"
        onChange={(e) =>
          setExperienceInfo((prev) => {
            return { ...prev, startDate: e.target.value };
          })
        }
      />
      <input
        type="text"
        placeholder="To (dd/mm/yy)"
        onChange={(e) =>
          setExperienceInfo((prev) => {
            return { ...prev, endDate: e.target.value };
          })
        }
      />
      <button className="hidden"></button>
    </form>
  );
}

export default ExperienceInfo;
