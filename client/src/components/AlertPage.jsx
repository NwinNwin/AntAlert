import React, { useState } from "react";
import axios from "axios";
import "./AlertForm.css";
import Button from "react-bootstrap/Button";

export default function AlertPage({ department, courseNumber, listAlert }) {
  const peterPortalURL = "https://api.peterportal.org/rest/v0/schedule/soc?";
  const [classData, setClassData] = useState([]);

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
      } catch (err) {
        console.log(err);
      }
    }, 3000);
  };

  listAlert.forEach((c) => {
    classData.forEach((e) => {
      if (c.sectionCode === e.sectionCode && e.status !== "FULL") {
        alert(`${c.instructors} is OPEN bitch!`);
      }
    });
  });

  console.log("running");

  return (
    <>
      <Button onClick={getClass}>Start Searching</Button>
    </>
  );
}
