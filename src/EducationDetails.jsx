import React from "react";

function EducationDetails(props) {
  const { startDate, endDate, subject, uniName } = props;
  return (
    <div className="education-details">
      <h4> {startDate} </h4>
      <h4> {endDate} </h4>

      <div>
        <h4> {subject} </h4>
        <p> {uniName} </p>
      </div>
    </div>
  );
}

export default EducationDetails;
