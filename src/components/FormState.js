import React, { useState } from "react";
import Card from "./Card";

function FormState() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Card>
      <h2>Form (useState)</h2>
      <form id="info-form" onSubmit={handleSubmit}>
        <label>Full Name: <input type="text" id="full_name" value={formData.full_name} onChange={handleChange} /></label><br />
        <label>Email: <input type="email" id="email" value={formData.email} onChange={handleChange} /></label><br />
        <label>Password: <input type="password" id="password" value={formData.password} onChange={handleChange} /></label><br />
        <label>Confirm Password: <input type="password" id="password_confirmation" value={formData.password_confirmation} onChange={handleChange} /></label><br />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;
