import React from "react";
import Card from "./Card";

function Form() {
  return (
    <Card>
      <h2>Form (No Handling)</h2>
      <form id="info-form">
        <label>Full Name: <input type="text" id="full_name" /></label><br />
        <label>Email: <input type="email" id="email" /></label><br />
        <label>Password: <input type="password" id="password" /></label><br />
        <label>Confirm Password: <input type="password" id="password_confirmation" /></label><br />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default Form;
