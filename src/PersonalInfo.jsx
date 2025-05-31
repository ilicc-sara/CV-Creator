import React from "react";

function PersonalInfo(props) {
  const { setPersonalInfo, id } = props;
  return (
    <form data-id={id} className="personal-info-cont">
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
  );
}

export default PersonalInfo;
