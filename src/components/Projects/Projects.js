import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import delivery from "../../Assets/Projects/delivery.png";
import chatify from "../../Assets/Projects/chatify.png";
import codeEditor from "../../Assets/Projects/codeEditor.png";

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
              imgPath={codeEditor}
              isBlog={false}
              title="Spring Ecommerce"
              description="Java and Angular Spring e-commerce platform showcasing user authentication, product management, shopping cart, and secure payments."
              ghLink="https://github.com/DavidTrejos/spring-ecommerce"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Customer Relationship Management"
              description="Developed a JavaScript-based customer management software enabling efficient client tracking, data organization, and interaction management."
              demoLink="https://crudcrmwithindexdb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={delivery}
              isBlog={false}
              title="Delivery App"
              description="Developed a cross-platform delivery application for both iOS and Android using Clean Architecture and MVVM design patterns. The application was built using React Native, Node.js, and MySQL."
              ghLink="https://github.com/DavidTrejos/DeliveryAppBackend"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
