import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

function App() {
  return (
    <div className="app-container">
      <nav>
        <Link to="/form" id="form-link">Form (No Handling)</Link> | 
        <Link to="/form-ref" id="form-ref-link">Form (useRef)</Link> | 
        <Link to="/form-state" id="form-state-link">Form (useState)</Link>
      </nav>
      
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/form-ref" element={<FormRef />} />
        <Route path="/form-state" element={<FormState />} />
      </Routes>
    </div>
  );
}

export default App;
