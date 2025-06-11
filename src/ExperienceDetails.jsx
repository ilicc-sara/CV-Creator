import React from "react";

function ExperienceDetails(props) {
  const { startDate, endDate, position, company, city } = props;
  return (
    <div className="education-details">
      <h4> {startDate} </h4>
      <h4> {endDate} </h4>

      <div>
        <h4> {position} </h4>
        <p> {company} </p>
        <p> {city} </p>
      </div>
    </div>
  );
}

export default ExperienceDetails;
