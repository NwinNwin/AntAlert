const nodeMailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async function (req, res){
  const transporter = nodeMailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  const options = {
    from: process.env.HOST,
    // put user email here
    to: `${email}`,
    subject: "Course Spot Opening",
    // put courseId and courseName of user's desire
    text: `A new spot has been opened up for your desired course, ${courseId}, ${courseName}!`
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Sent: " + info.response);
  });
})
