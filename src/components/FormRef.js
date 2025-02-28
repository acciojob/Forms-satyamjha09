import React, { useRef } from "react";
import Card from "./Card";

function FormRef() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name:", fullNameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);
    console.log("Confirm Password:", passwordConfirmRef.current.value);
  };

  return (
    <Card>
      <h2>Form (useRef)</h2>
      <form id="info-form" onSubmit={handleSubmit}>
        <label>Full Name: <input type="text" ref={fullNameRef} id="full_name" /></label><br />
        <label>Email: <input type="email" ref={emailRef} id="email" /></label><br />
        <label>Password: <input type="password" ref={passwordRef} id="password" /></label><br />
        <label>Confirm Password: <input type="password" ref={passwordConfirmRef} id="password_confirmation" /></label><br />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;
