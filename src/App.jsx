import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="inputs-container">
        <div className="personal-info-cont">
          <h3>Personal Information</h3>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Address" />
          <input type="tel" placeholder="Phone number" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Description" />
        </div>
      </div>
    </>
  );
}

export default App;
