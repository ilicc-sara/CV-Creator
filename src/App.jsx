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

  const [cv, setCV] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
      id: crypto.randomUUID(),
    },
    educationInfo: [
      {
        uniName: "",
        city: "",
        degree: "",
        subject: "",
        startDate: "",
        endDate: "",
        id: crypto.randomUUID(),
      },
    ],
    experienceInfo: [
      {
        position: "",
        company: "",
        city: "",
        startDate: "",
        endDate: "",
        id: crypto.randomUUID(),
      },
    ],
  });

  function handleSubmit(e) {
    e.preventDefault();

    // console.log(cv);

    setPreviewCV(true);
  }

  function reset() {
    setCV({
      personalInfo: {
        firstName: "",
        lastName: "",
        title: "",
        address: "",
        phoneNumber: "",
        email: "",
        description: "",
        id: crypto.randomUUID(),
      },
      educationInfo: [
        {
          uniName: "",
          city: "",
          degree: "",
          subject: "",
          startDate: "",
          endDate: "",
          id: crypto.randomUUID(),
        },
      ],
      experienceInfo: [
        {
          position: "",
          company: "",
          city: "",
          startDate: "",
          endDate: "",
          id: crypto.randomUUID(),
        },
      ],
    });
  }
  function handlePersonalInfoChange(e) {
    setCV((prev) => {
      return {
        ...prev,
        personalInfo: { ...prev.personalInfo, [e.target.name]: e.target.value },
      };
    });
  }

  function deleteEducation(id) {
    setCV((prev) => {
      return {
        ...prev,
        educationInfo: prev.educationInfo.filter((object) => object.id !== id),
      };
    });
  }

  function deleteExperience(id) {
    setCV((prev) => {
      return {
        ...prev,
        experienceInfo: prev.experienceInfo.filter(
          (object) => object.id !== id
        ),
      };
    });
  }

  function addEducation() {
    setCV((prev) => {
      return {
        ...prev,
        educationInfo: [
          ...prev.educationInfo,
          {
            uniName: "",
            city: "",
            degree: "",
            subject: "",
            startDate: "",
            endDate: "",
            id: crypto.randomUUID(),
          },
        ],
      };
    });
  }

  function addExperience() {
    setCV((prev) => {
      return {
        ...prev,
        experienceInfo: [
          ...prev.experienceInfo,
          {
            position: "",
            company: "",
            city: "",
            startDate: "",
            endDate: "",
            id: crypto.randomUUID(),
          },
        ],
      };
    });
  }
  return (
    <>
      {!previewCV && (
        <form onSubmit={handleSubmit} className="inputs-container">
          <PersonalInfo
            key={1}
            setCV={setCV}
            id={cv.personalInfo.id}
            personalInfo={cv.personalInfo}
            handlePersonalInfoChange={handlePersonalInfoChange}
          />

          {cv.educationInfo.map((educationInf, index) => (
            <EducationInfo
              key={index}
              id={educationInf.id}
              educationInfo={educationInf}
              // handleEducationInfoChange={handleEducationInfoChange}
              deleteEducation={deleteEducation}
              setCV={setCV}
            />
          ))}
          <button
            type="button"
            className="add-education"
            onClick={() => addEducation()}
          >
            Add Education
          </button>

          {cv.experienceInfo.map((experienceInf, index) => (
            <ExperienceInfo
              key={index}
              id={experienceInf.id}
              experienceInfo={experienceInf}
              // handleExperienceInfoChange={handleExperienceInfoChange}
              deleteExperience={deleteExperience}
              setCV={setCV}
            />
          ))}

          <button
            type="button"
            className="add-experience"
            onClick={() => addExperience()}
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
            <h2> {cv.personalInfo.firstName} </h2>
            <h4> {cv.personalInfo.title} </h4>
          </nav>

          <main className="main">
            <div className="details-cont">
              <div>
                <h3>Description</h3>
                <p> {cv.personalInfo.description} </p>
              </div>

              <div>
                <h3>Education</h3>
                <p> {cv.educationInfo[0].uniName} </p>
              </div>

              <div>
                <h3>Experience</h3>
                <p> {cv.experienceInfo[0].position} </p>
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
                <p> {cv.personalInfo.address} </p>
              </div>

              <div>
                <h4> Phone Number </h4>
                <p> {cv.personalInfo.phoneNumber} </p>
              </div>

              <div>
                <h4> Email </h4>
                <p> {cv.personalInfo.email} </p>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
