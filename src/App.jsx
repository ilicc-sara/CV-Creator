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

  const [educationInfo, setEducationInfo] = useState([
    {
      uniName: "",
      city: "",
      degree: "",
      subject: "",
      startDate: "",
      endDate: "",
      id: crypto.randomUUID(),
    },
  ]);

  const [experienceInfo, setExperienceInfo] = useState([
    {
      position: "",
      company: "",
      city: "",
      startDate: "",
      endDate: "",
      id: crypto.randomUUID(),
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(personalInfo, educationInfo, experienceInfo);
  }

  function reset() {
    setPersonalInfo({
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
      id: crypto.randomUUID(),
    });
    setEducationInfo([
      {
        uniName: "",
        city: "",
        degree: "",
        subject: "",
        startDate: "",
        endDate: "",
        id: crypto.randomUUID(),
      },
    ]);
    setExperienceInfo([
      {
        position: "",
        company: "",
        city: "",
        startDate: "",
        endDate: "",
        id: crypto.randomUUID(),
      },
    ]);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="inputs-container">
        <PersonalInfo
          key={1}
          setPersonalInfo={setPersonalInfo}
          id={personalInfo.id}
        />

        {educationInfo.map((educationInfo, index) => (
          <EducationInfo
            key={index}
            id={educationInfo.id}
            setEducationInfo={setEducationInfo}
          />
        ))}
        <button
          type="button"
          className="add-education"
          onClick={() =>
            setEducationInfo((prev) => [
              ...prev,
              {
                uniName: "",
                city: "",
                degree: "",
                subject: "",
                startDate: "",
                endDate: "",
                id: crypto.randomUUID(),
              },
            ])
          }
        >
          ADD EDUCATION
        </button>

        {experienceInfo.map((experienceInfo, index) => (
          <ExperienceInfo
            key={index}
            id={experienceInfo.id}
            setExperienceInfo={setExperienceInfo}
          />
        ))}

        <button
          type="button"
          className="add-education"
          onClick={() =>
            setExperienceInfo((prev) => [
              ...prev,
              {
                position: "",
                company: "",
                city: "",
                startDate: "",
                endDate: "",
                id: crypto.randomUUID(),
              },
            ])
          }
        >
          ADD EXPERIENCE
        </button>

        <button type="submit">Preview</button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
      </form>
    </>
  );
}

export default App;
