import React, { useState } from "react";
import axios from "axios";
import "./AlertForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import ShowClasses from "./ShowClasses";
import AlertPage from "./AlertPage";
import ListChosenClasses from "./ListChosenClasses";
// import github from "./github.svg";

export default function AlertForm() {
  // const [email, setEmail] = useState();
  const [department, setDepartment] = useState();
  const [courseNumber, setCourseNumber] = useState();
  const [classData, setClassData] = useState([]);
  let validated = useState(false);

  const [listAlert, setListAlert] = useState([]);

  let listClasses = classData.map((ele) => {
    return (
      <ShowClasses setListAlert={setListAlert} key={ele.sectionCode} {...ele} />
    );
  });

  const peterPortalURL = "https://api.peterportal.org/rest/v0/schedule/soc?";
  async function getClass() {
    try {
      const result = await axios.get(
        `${peterPortalURL}term=2023 Spring&department=${department}&courseNumber=${courseNumber}`
      );
      console.log(result.data.schools[0].departments[0].courses[0].sections);
      setClassData(result.data.schools[0].departments[0].courses[0].sections);
    } catch (err) {
      console.log(err);
    }
  }

  function uploadForm(event) {
    event.preventDefault();
  }

  // function updateEmail(event) {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  //   setEmail(event.target.value);
  // }
  function updateDepartment(event) {
    event.preventDefault();
    setDepartment(event.target.value);
  }
  function updateCourseNumber(event) {
    event.preventDefault();
    setCourseNumber(event.target.value);
  }

  // useEffect(() => {
  //   listClasses = classData.map((ele) => {
  //     return <ShowClasses {...ele} />;
  //   });
  // }, []);

  console.log(listAlert);

  return (
    <>
      <div className="alert-form">
        <Form validated={validated} onSubmit={uploadForm}>
          {listAlert.length !== 0 && (
            <>
              <ListChosenClasses listAlert={listAlert} />
              <AlertPage
                department={department}
                courseNumber={courseNumber}
                listAlert={listAlert}
              />
            </>
          )}

          <Form.Group className="mb-3">
            <h2>Choose your Classes</h2>
            <Form.Label>Department</Form.Label>
            <Form.Select onChange={updateDepartment} required>
              <option value="">--Please choose an option--</option>
              <option value="I%26C SCI ">I&C SCI</option>
              <option value="WRITING">WRITING</option>
              <option value="COMPSCI">COMPSCI</option>
              <option value="INF">INF</option>
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
            Search
          </Button>
        </Form>

        <Accordion>{listClasses}</Accordion>
      </div>
    </>
  );
}
