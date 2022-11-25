import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AlertForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AlertForm() {
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
      <Form onSubmit={uploadForm}>
        h
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={updateEmail}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Select onChange={updateDepartment}>
            <option value="">--Please choose an option--</option>
            <option value="I%26C SCI ">I&C SCI</option>
            <option value="WRITING">WRITING</option>
            <option value="MATH">MATH</option>
            <option value="ANTHRO">ANTHRO</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Course Number</Form.Label>
          <Form.Control
            onChange={updateCourseNumber}
            type="text"
            placeholder="Course Number (ex: 46)"
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Alert Me!
        </Button>
      </Form>
      <Button variant="danger" onClick={getClass}>
        PRINT DATA
      </Button>
    </>
  );
}
