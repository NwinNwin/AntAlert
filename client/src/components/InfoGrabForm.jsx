import React from "react";
import "./InfoGrabForm.css"
// import Button from "react-bootstrap/esm/Button";

export default function InfoGrabForm() {
  return (
    <>
      <div className="infoForm">
        <form action="">
          <div className="personalInfo">
            <label for="name" >Name</label>
            <input type="text" placeholder="Name (ex: Jacob Sartorius)" name="name" />
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Email (ex: bob@gmail.com)"/>
          
            <label for="department">Department</label>
            <select name="department" id="department">
              <option value="">--Please choose an option--</option>
              <option value="ics">I&CS SCI</option>
              <option value="writing">WRITING</option>
              <option value="compsci">COMPSCI</option>
              <option value="inf">IN4MATX</option>
            </select>
            <label for='courseNumber'>Course Number</label>
            <input type="text" placeholder="Course Number (ex: 46)"/>
            <button type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
