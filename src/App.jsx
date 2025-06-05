import { useState } from "react";
import "./App.css";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";

function App() {
  const [previewCV, setPreviewCV] = useState(false);
  // const [cv, setCV]
  // react comp input, primi prop type, ako ne primi , po defaultu je text
  // napraviti componentu input text treba primiti prop type , handluje : text, tel, mail, photo
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

    setPreviewCV(true);
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

    // const inputs = document.querySelectorAll("input");

    // inputs.forEach((input) => (input.value = ""));
  }
  return (
    <>
      {!previewCV && (
        <form onSubmit={handleSubmit} className="inputs-container">
          <PersonalInfo
            key={1}
            setPersonalInfo={setPersonalInfo}
            id={personalInfo.id}
            personalInfo={personalInfo}
          />

          {educationInfo.map((educationInf, index) => (
            <EducationInfo
              key={index}
              id={educationInf.id}
              setEducationInfo={setEducationInfo}
              educationInfo={educationInfo}
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
            Add Education
          </button>

          {experienceInfo.map((experienceInf, index) => (
            <ExperienceInfo
              key={index}
              id={experienceInf.id}
              setExperienceInfo={setExperienceInfo}
              experienceInfo={experienceInfo}
            />
          ))}

          <button
            type="button"
            className="add-experience"
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
            Add Experience
          </button>

          <button className="finish-btn btn-preview" type="submit">
            Preview
          </button>
          <button
            className="finish-btn btn-reset"
            type="button"
            onClick={() => reset()}
          >
            Reset
          </button>
        </form>
      )}

      {previewCV && (
        <div className="preview-page">
          <nav className="nav">
            <h2> {personalInfo.firstName} </h2>
            <h4> {personalInfo.title} </h4>
          </nav>

          <main className="main">
            <div className="details-cont">
              <div>
                <h3>Description</h3>
                <p> {personalInfo.description} </p>
              </div>

              <div>
                <h3>Education</h3>
                <p> {educationInfo[0].uniName} </p>
              </div>

              <div>
                <h3>Experience</h3>
                <p> {experienceInfo[0].position} </p>
              </div>
            </div>

            <div className="personal-details-cont">
              <span>
                {" "}
                <img scr="./profilePhoto.jpeg" />
              </span>

              <h3>Personal Details</h3>

              <div>
                <h4> Addrress </h4>
                <p> {personalInfo.address} </p>
              </div>

              <div>
                <h4> Phone Number </h4>
                <p> {personalInfo.phoneNumber} </p>
              </div>

              <div>
                <h4> Email </h4>
                <p> {personalInfo.email} </p>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
