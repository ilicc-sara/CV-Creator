import { useState } from "react";
import "./App.css";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import Button from "./Button";
import EducationDetails from "./EducationDetails";
import ExperienceDetails from "./ExperienceDetails";
import PersonalDetails from "./PersonalDetails";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
  // const contentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => contentRef.current,
  // });
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  // const handlePrint = () => {
  //   const content = contentRef.current.innerHTML;
  //   const printWindow = window.open("", "_blank");
  //   printWindow.document.write(`
  //   <html>
  //     <head><title>CV</title></head>
  //     <body>${content}</body>
  //   </html>
  // `);
  //   printWindow.print();
  // };
  const [previewCV, setPreviewCV] = useState(false);
  const [photo, setPhoto] = useState(null);

  const [cv, setCV] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      title: "",
      photo: photo,
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
        photo: photo,
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
            return object;
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
            return object;
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
      {!previewCV && <h1>CV CREATOR</h1>}
      {!previewCV && (
        <form onSubmit={handleSubmit} className="inputs-container">
          <PersonalInfo
            setCV={setCV}
            id={cv.personalInfo.id}
            personalInfo={cv.personalInfo}
            handlePersonalInfoChange={handlePersonalInfoChange}
            setPhoto={setPhoto}
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
            typeProp="AddBtn"
            handleClick={addEducation}
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
            type="button"
            typeProp="AddBtn"
            handleClick={addExperience}
            text="Add Experience"
          />

          <Button type="submit" typeProp="PreviewBtn" text="Preview" />

          <Button
            type="button"
            typeProp="ResetBtn"
            handleClick={reset}
            text="Reset"
          />
        </form>
      )}

      {previewCV && (
        <div ref={contentRef} className="preview-page">
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
                    <EducationDetails
                      startDate={educationObject.startDate}
                      endDate={educationObject.endDate}
                      subject={educationObject.subject}
                      uniName={educationObject.uniName}
                    />
                  );
                })}
              </div>

              <div>
                <h3 className="color-green">Experience</h3>

                {cv.experienceInfo.map((experienceObject) => {
                  return (
                    <ExperienceDetails
                      startDate={experienceObject.startDate}
                      endDate={experienceObject.endDate}
                      position={experienceObject.position}
                      company={experienceObject.company}
                      city={experienceObject.city}
                    />
                  );
                })}
              </div>
            </div>

            <PersonalDetails photo={photo} personalInfo={cv.personalInfo} />
          </main>
        </div>
      )}

      {previewCV && (
        <div className="back-and-print-btns">
          <Button
            type="button"
            typeProp="BackBtn"
            handleClick={() => setPreviewCV(false)}
            text="Back"
          />
          <Button
            type="button"
            typeProp="PrintBtn"
            handleClick={reactToPrintFn}
            text="Print"
          />
        </div>
      )}
    </>
  );
}

export default App;
