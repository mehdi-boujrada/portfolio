import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Boujrada Mehdi </span>
            from <span className="purple"> Tanger, morocco.</span>
            <br />I am curently on my first year as a Master student, i'm majoring in software engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing American Football and basketball.
            </li>
            <li className="about-activity">
              <ImPointRight /> go to the Gym.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling, going out with frient and enjoy life.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mehdi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
