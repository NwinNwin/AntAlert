import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Form() {
  const [email, setEmail] = useState();
  const [department, setDepartment] = useState();
  const [courseNumber, setCourseNumber] = useState();

  const peterPortalURL = "https://api.peterportal.org/rest/v0/schedule/soc?";
  async function getClass() {
    try {
      const result = await axios.get(
        `${peterPortalURL}term=2023 Winter&department=${department}&courseNumber=${courseNumber}`
      );
      console.log(result.data.schools[0].departments[0].courses[0].sections);
    } catch (err) {
      console.log(err);
    }
  }

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
          <option value="I%26C SCI ">I&C SCI</option>
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
      <button onClick={getClass}>PRINT DATA</button>
    </>
  );
}
