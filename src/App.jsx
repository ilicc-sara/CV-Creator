import { useState } from "react";
import "./App.css";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
    id: crypto.randomUUID(),
  });

  const [educationInfo, setEducationInfo] = useState({
    uniName: "",
    city: "",
    degree: "",
    subject: "",
    startDate: "",
    endDate: "",
    id: crypto.randomUUID(),
  });

  const [experienceInfo, setExperienceInfo] = useState({
    position: "",
    company: "",
    city: "",
    startDate: "",
    endDate: "",
    id: crypto.randomUUID(),
  });

  const [educationInfoList, setEducationInfoList] = useState([educationInfo]);
  // prettier-ignore
  const [experienceInfoList, setExperienceInfoList] = useState([experienceInfo]);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(educationInfo);

    setEducationInfoList((prev) => [...prev, educationInfo]);

    console.log(educationInfoList);
  }
  return (
    <>
      <div className="inputs-container">
        <PersonalInfo
          key={1}
          setPersonalInfo={setPersonalInfo}
          id={personalInfo.id}
        />

        {educationInfoList.map((educationInfo, index) => (
          <EducationInfo
            key={index}
            id={educationInfo.id}
            setEducationInfo={setEducationInfo}
            handleSubmit={handleSubmit}
          />
        ))}
        <button
          className="add-education"
          onClick={() => setEducationInfoList((prev) => [...prev, prev])}
        >
          ADD EDUCATION
        </button>

        {experienceInfoList.map((experienceInfo, index) => (
          <ExperienceInfo
            key={index}
            id={experienceInfo.id}
            setExperienceInfo={setExperienceInfo}
          />
        ))}

        <button
          className="add-education"
          onClick={() => setExperienceInfoList((prev) => [...prev, prev])}
        >
          ADD EXPERIENCE
        </button>
      </div>
    </>
  );
}

export default App;
