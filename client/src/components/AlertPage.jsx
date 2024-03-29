import React, { useState } from "react";
import axios from "axios";
import "./AlertForm.css";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export default function AlertPage({ department, courseNumber, listAlert }) {
  const peterPortalURL = "https://api.peterportal.org/rest/v0/schedule/soc?";
  const [classData, setClassData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [opened, setOpened] = useState(0);

  async function getClass() {
    start();
  }

  const start = () => {
    setInterval(async () => {
      try {
        const result = await axios.get(
          `${peterPortalURL}term=2023 Spring&department=${department}&courseNumber=${courseNumber}`
        );
        setClassData(result.data.schools[0].departments[0].courses[0].sections);
        setCounter((prev) => prev + 1);
      } catch (err) {
        console.log(err);
      }
    }, 3000);
  };

  listAlert.forEach((c) => {
    classData.forEach((e) => {
      if (c.sectionCode === e.sectionCode && e.status !== "FULL") {
        alert(`${c.instructors} is OPEN bitch!`);
        setOpened((prev) => prev + 1);
      } else if (c.sectionCode === e.sectionCode) {
        console.log(e.status);
      }
    });
  });

  console.log("running");

  return (
    <>
      <hr />
      <h2>Counts: {counter}</h2>
      <h4>Opened: {opened}</h4>
      <p>Time: {counter * 3} secs</p>
      {counter === 0 ? (
        <Button variant="danger" onClick={getClass}>
          Scan
        </Button>
      ) : (
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </Button>
      )}
      <hr />
    </>
  );
}
