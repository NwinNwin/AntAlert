import React, { useState, useEffect } from "react";

export default function Form() {
  const [email, setEmail] = useState();
  const [department, setDepartment] = useState();
  const [courseNumber, setCourseNumber] = useState();

  function uploadForm(event) {
    event.preventDefault();
    console.log(`${email} ${department} ${courseNumber}`);
  }

  function updateEmail(event) {
    event.preventDefault();
    setEmail(event.target.value);
  }
  function updateDepartment(event) {
    event.preventDefault();
    setDepartment(event.target.value);
  }
  function updateCourseNumber(event) {
    event.preventDefault();
    setCourseNumber(event.target.value);
  }

  return (
    <>
      <h1>Welcome to AntAlert!</h1>
      <form onSubmit={uploadForm}>
        <input
          onChange={updateEmail}
          name="email"
          id="email"
          type="email"
          placeholder="email"
          required
        />
        <select
          name="department"
          id="department"
          onChange={updateDepartment}
          required
        >
          <option value="">--Please choose an option--</option>
          <option value="I&C SCI">I&C SCI</option>
          <option value="WRITING">WRITING</option>
          <option value="MATH">MATH</option>
          <option value="ANTHRO">ANTHRO</option>
        </select>
        <input
          onChange={updateCourseNumber}
          name="courseNumber"
          id="courseNumber"
          type="text"
          placeholder="Course Number (ex: 46)"
        />
        <button type="submit" value="Submit">
          Alert Me!
        </button>
      </form>
    </>
  );
}
