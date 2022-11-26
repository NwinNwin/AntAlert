import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import "./ShowClasses.css";

export default function ShowClasses(props) {
  let btn;
  if (props.status === "FULL") {
    btn = <Button variant="danger ">{props.status}</Button>;
  } else {
    btn = <Button variant="success ">{props.status}</Button>;
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
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
