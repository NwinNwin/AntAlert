import React, { useState } from "react";
import axios from "axios";
import "./AlertForm.css";
import Button from "react-bootstrap/Button";

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
      <h1>Counting: {counter}</h1>
      <h2>Opened: {opened}</h2>
      <Button onClick={getClass}>Start Searching</Button>
    </>
  );
}
