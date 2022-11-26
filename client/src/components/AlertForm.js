import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AlertForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import ShowClasses from "./ShowClasses";

export default function AlertForm() {
  const [email, setEmail] = useState();
  const [department, setDepartment] = useState();
  const [courseNumber, setCourseNumber] = useState();
  const [classData, setClassData] = useState([]);
  const [validated, setValidated] = useState(false);

  let listClasses = classData.map((ele) => {
    return <ShowClasses key={ele.sectionCode} {...ele} />;
  });

  const peterPortalURL = "https://api.peterportal.org/rest/v0/schedule/soc?";
  async function getClass() {
    try {
      const result = await axios.get(
        `${peterPortalURL}term=2023 Winter&department=${department}&courseNumber=${courseNumber}`
      );
      console.log(result.data.schools[0].departments[0].courses[0].sections);
      setClassData(result.data.schools[0].departments[0].courses[0].sections);
    } catch (err) {
      console.log(err);
    }
  }

  function uploadForm(event) {
    event.preventDefault();
    console.log(`${email} ${department} ${courseNumber}`);
  }

  function updateEmail(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
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

  useEffect(() => {
    listClasses = classData.map((ele) => {
      return <ShowClasses {...ele} />;
    });
  });

  return (
    <>
      <div className="alert-form">
        <Form validated={validated} onSubmit={uploadForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={updateEmail}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Department</Form.Label>
            <Form.Select onChange={updateDepartment} required>
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
              required
            />
          </Form.Group>
          <Button onClick={getClass} variant="success" type="submit">
            +
          </Button>
        </Form>

        {/* <Button className="mt-3" variant="danger" onClick={getClass}>
          PRINT DATA
        </Button> */}

        {/* use Accordion */}

        <Accordion>
          {listClasses}
          {}
        </Accordion>
      </div>
    </>
  );
}
