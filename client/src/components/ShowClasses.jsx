import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import "./ShowClasses.css";

export default function ShowClasses(props) {
  let btn;
  if (props.status === "FULL") {
    btn = <Badge bg="danger ">{props.status}</Badge>;
  } else {
    btn = <Badge bg="primary ">{props.status}</Badge>;
  }

  return (
    <div className="classes-div">
      <Accordion.Item>
        <Accordion.Header variant="success">
          <div className="classes-header">
            <h5>{props.instructors[0]}</h5>
            <h6>
              {props.sectionType} {props.sectionNum}
            </h6>
            {btn}
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <p>
            Spots: {props.numCurrentlyEnrolled.totalEnrolled} /{" "}
            {props.maxCapacity}
          </p>
          <p>
            Time: {props.meetings[0].days} {props.meetings[0].time}
          </p>
          <p>Code: {props.sectionCode}</p>
          <Button
            variant="success "
            onClick={() => {
              props.setListAlert((prev) => [
                ...prev,
                {
                  sectionCode: props.sectionCode,
                  instructors: props.instructors[0],
                },
              ]);
            }}
          >
            Add
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
