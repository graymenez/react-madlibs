import React, { useState } from "react";
import "./MadlibForm.css";
const MadlibForm = ({ update, toggleFunction, toggle }) => {
  const INITIALSTATE = {
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  };
  const [formData, setFormData] = useState(INITIALSTATE);

  const handleChange = (e) => {
    // * handles form change when user is typing

    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    // * handles form submit and resets for data to inital state

    e.preventDefault();
    update(formData.noun, formData.noun2, formData.adjective, formData.color);
    setFormData(INITIALSTATE);
  };

  const noEmptyValues = () => {
    // * checks if input values are empty. Returns false if any input is empty. Returns true if no input is empty

    let notEmpty = Object.values(formData).every((value) => value.length > 0);
    return notEmpty;
  };
  return (
    <div id="MadlibForm">
      <h1>Madlib's Assessment</h1>
      <form
        style={!toggle ? { display: "none" } : null}
        onSubmit={handleSubmit}
      >
        <label htmlFor="noun"></label>
        <input
          id="noun"
          name="noun"
          type="text"
          placeholder="noun"
          value={formData.noun}
          onChange={handleChange}
        />

        <label htmlFor="noun2"></label>
        <input
          id="noun2"
          name="noun2"
          type="text"
          placeholder="noun2"
          value={formData.noun2}
          onChange={handleChange}
        />

        <label htmlFor="adjective"></label>
        <input
          id="adjective"
          name="adjective"
          type="text"
          placeholder="adjective"
          value={formData.adjective}
          onChange={handleChange}
        />

        <label htmlFor="color"></label>
        <input
          id="color"
          name="color"
          type="text"
          placeholder="color"
          value={formData.color}
          onChange={handleChange}
        />
        {noEmptyValues() ? (
          <button type="submit" onClick={toggleFunction}>
            Submit
          </button>
        ) : (
          <button disabled type="submit" onClick={toggleFunction}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default MadlibForm;
