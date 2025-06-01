import React from "react";

function PersonalInfo(props) {
  const { setPersonalInfo, id } = props;
  return (
    <div
      data-id={id}
      className="personal-info-cont"
      onClick={(e) => {
        console.log(e.target.closest(".personal-info-cont").dataset.id);
      }}
    >
      <h3>Personal Information</h3>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handlePersonalInfoChange}
        // onChange={(e) =>
        //   setPersonalInfo((prev) => {
        //     return { ...prev, [e.target.name]: e.target.value };
        //   })
        // }
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
    </div>
  );
}

export default PersonalInfo;
