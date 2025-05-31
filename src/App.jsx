import { useState } from "react";
import "./App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    uniName: "",
    city: "",
    degree: "",
    subject: "",
    startDate: "",
    endDate: "",
  });

  const [educationInfoList, setEducationInfoList] = useState([]);

  let day = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  let date = `${day}.${month}.${year}`;

  function handleSubmit(e) {
    e.preventDefault();

    console.log(educationInfo);

    setEducationInfoList((prev) => [...prev, educationInfo]);

    console.log(educationInfoList);
  }
  return (
    <>
      <div className="inputs-container">
        <form className="education-info-cont">
          <h3>Personal Information</h3>
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) =>
              setPersonalInfo((prev) => {
                return { ...prev, firstName: e.target.value };
              })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) =>
              setPersonalInfo((prev) => {
                return { ...prev, lastName: e.target.value };
              })
            }
          />
          <input
            type="text"
            placeholder="Title"
            onChange={(e) =>
              setPersonalInfo((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
          />
          <input
            type="text"
            placeholder="Address"
            onChange={(e) =>
              setPersonalInfo((prev) => {
                return { ...prev, address: e.target.value };
              })
            }
          />
          <input
            type="tel"
            placeholder="Phone number"
            onChange={(e) =>
              setPersonalInfo((prev) => {
                return { ...prev, phoneNumber: e.target.value };
              })
            }
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setPersonalInfo((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) =>
              setPersonalInfo((prev) => {
                return { ...prev, description: e.target.value };
              })
            }
          />
          <button className="hidden"></button>
        </form>
        <form className="personal-info-cont" onSubmit={handleSubmit}>
          <h3>Education</h3>
          <input
            type="text"
            placeholder="University name"
            onChange={(e) =>
              setEducationInfo((prev) => {
                return { ...prev, uniName: e.target.value };
              })
            }
          />
          <input
            type="text"
            placeholder="City"
            onChange={(e) =>
              setEducationInfo((prev) => {
                return { ...prev, city: e.target.value };
              })
            }
          />
          <input
            type="text"
            placeholder="Degree"
            onChange={(e) =>
              setEducationInfo((prev) => {
                return { ...prev, degree: e.target.value };
              })
            }
          />
          <input
            type="text"
            placeholder="Subject"
            onChange={(e) =>
              setEducationInfo((prev) => {
                return { ...prev, subject: e.target.value };
              })
            }
          />
          <input
            type="text"
            placeholder="From (dd/mm/yy)"
            onChange={(e) =>
              setEducationInfo((prev) => {
                return { ...prev, startDate: e.target.value };
              })
            }
          />
          <input
            type="text"
            placeholder="To (dd/mm/yy)"
            onChange={(e) =>
              setEducationInfo((prev) => {
                return { ...prev, endDate: e.target.value };
              })
            }
          />
          <button className="hidden"></button>
        </form>
      </div>
    </>
  );
}

export default App;
