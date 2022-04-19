import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import search from "../../Assets/Projects/search.PNG";
import ghost from "../../Assets/Projects/ghost.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={search}
              isBlog={false}
              title="AI-CSC4301-Search-algorithms"
              description="Using Unity, design a game where you can implement different types of search algorithms."
              link="https://github.com/mehdi-boujrada/AI-CSC4301-Search-algorithms"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ghost}
              isBlog={false}
              title="AI-CSC4301-Wumpus-game"
              description="We were given the task of creating a logical agent for the Wumpus game in this project. Before advancing to its room, the agent must kill the Wumpus in its matching room and find the concealed gold."
              link="https://github.com/mehdi-boujrada/AI-CSC4301-Wumpus-game"
            />
          </Col>



       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
