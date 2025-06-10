import { useState } from "react";
import "./App.css";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import Button from "./Button";

function App() {
  const [previewCV, setPreviewCV] = useState(false);

  const [cv, setCV] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      title: "",
      photo: "./profilePic.png",
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

  function handleEducationInfoChange(e, id) {
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

  function handleExperienceInfoChange(e, id) {
    setCV((prev) => {
      return {
        ...prev,
        experienceInfo: prev.experienceInfo.map((object) => {
          if (object.id === id) {
            return { ...object, [e.target.name]: e.target.value };
          } else {
            return { ...object };
          }
        }),
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
            cv={cv}
          />

          {cv.educationInfo.map((educationInf, index) => (
            <EducationInfo
              key={index}
              id={educationInf.id}
              educationInfo={educationInf}
              handleEducationInfoChange={handleEducationInfoChange}
              deleteEducation={deleteEducation}
            />
          ))}

          <Button
            type={"button"}
            className={"add-education"}
            func={addEducation}
            text={"Add Education"}
          />

          {cv.experienceInfo.map((experienceInf, index) => (
            <ExperienceInfo
              key={index}
              id={experienceInf.id}
              experienceInfo={experienceInf}
              handleExperienceInfoChange={handleExperienceInfoChange}
              deleteExperience={deleteExperience}
            />
          ))}

          <Button
            type={"button"}
            className={"add-experience"}
            func={addExperience}
            text={"Add Experience"}
          />

          <Button
            type={"submit"}
            className={"finish-btn btn-preview"}
            text={"Preview"}
          />

          <Button
            type={"button"}
            className={"finish-btn btn-reset"}
            func={reset}
            text={"Reset"}
          />
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
                <img src={cv.personalInfo.photo} class="profile-pic" />
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
