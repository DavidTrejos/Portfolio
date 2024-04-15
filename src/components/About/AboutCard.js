import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">David Trejos </span>
            from <span className="purple"> Quindío, Colombia.</span>
            <br />
            I am currently employed as a software <span className="purple">Java </span>developer at 360 Marketing Services.
            <br />
            I have completed Bachellors Degree in Systems Engineer at the University of Quindío.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Poker
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Fail is progress,always better than yesterday"{" "}
          </p>
          <footer className="blockquote-footer">David Trejos</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
