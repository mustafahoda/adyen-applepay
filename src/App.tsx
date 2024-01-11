import React, { useEffect, useState } from "react";

import AdyenCheckout from "@adyen/adyen-web";
import "@adyen/adyen-web/dist/adyen.css";
import Button from "@mui/material/Button";

const configuration = require("../public/adyenConfig.ts");

// @ts-ignore
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [formData, setFormData] = useState({
    sessionId: "",
    sessionData: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createAdyenCheckout = async () => {
    console.log(configuration.configuration);
    configuration.configuration.session.id = formData.sessionId
    configuration.configuration.session.sessionData = formData.sessionData

    const checkout = await AdyenCheckout(configuration.configuration);
    const dropinComponent = checkout
      .create("dropin")
      .mount("#dropin-container");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you can perform actions with the form data, such as making an API call
    console.log("Form submitted:", formData);

    await createAdyenCheckout()
  };
  

  return (
    <>
      <h1>Welcome Chi-Adyeners!</h1>
      <h2>DropInTest</h2>

      <form onSubmit={handleSubmit}>
        <label>
          sessionId
          <input
            type="text"
            name="sessionId"
            value={formData.sessionId}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>
        <label>
          sessiondata
          <input
            type="text"
            name="sessionData"
            value={formData.sessionData}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>
        <button type="submit" value="Submit">
          Update DropIn
        </button>
      </form>

      <div id="dropin-container"></div>
    </>
  );
}
