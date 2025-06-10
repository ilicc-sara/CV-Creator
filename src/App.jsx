import { useState } from "react";
import "./App.css";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import Button from "./Button";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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
    console.log(cv);
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
        <div className="preview-page" ref={componentRef}>
          <nav className="nav">
            <h2>
              {" "}
              {cv.personalInfo.firstName} {cv.personalInfo.lastName}{" "}
            </h2>
            <h4> {cv.personalInfo.title} </h4>
          </nav>

          <main className="main">
            <div className="details-cont">
              <div>
                <h3 className="color-green">Description</h3>
                <p> {cv.personalInfo.description} </p>
              </div>

              <div>
                <h3 className="color-green">Education</h3>

                {cv.educationInfo.map((educationObject) => {
                  return (
                    <div className="education-details">
                      <h4> {educationObject.startDate} </h4>
                      <h4> {educationObject.endDate} </h4>

                      <div>
                        <h4> {educationObject.subject} </h4>
                        <p> {educationObject.uniName} </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div>
                <h3 className="color-green">Experience</h3>

                {cv.experienceInfo.map((experienceObject) => {
                  return (
                    <div className="education-details">
                      <h4> {experienceObject.startDate} </h4>
                      <h4> {experienceObject.endDate} </h4>

                      <div>
                        <h4> {experienceObject.position} </h4>
                        <p> {experienceObject.company} </p>
                        <p> {experienceObject.city} </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="personal-details-cont">
              <span>
                {" "}
                <img src={cv.personalInfo.photo} class="profile-pic" />
              </span>

              <h3 className="color-green">Personal Details</h3>

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

      {previewCV && (
        <div className="back-and-print-btns">
          <button className="back-btn" onClick={() => setPreviewCV(false)}>
            Back
          </button>

          <button className="print-btn" onClick={handlePrint}>
            Print
          </button>
        </div>
      )}
    </>
  );
}

export default App;
