import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imgMedicali from "../../Assets/Projects/maquette-projet1.png";

function ProjectsSectionUIUX() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets UI/UX</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici une sélection de maquettes et prototypes que j'ai réalisés, mettant en avant le design d'interfaces et l'expérience utilisateur.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgMedicali}
              isBlog={false}
              title="Medicali – Application médicale"
              description="Maquette Figma complète d'une application de santé permettant la prise de rendez-vous en ligne avec des professionnels de santé, la recherche de médicaments, et la gestion du dossier médical personnel. Design moderne et intuitif avec focus sur l'accessibilité."
              ghLink="https://www.figma.com/proto/VZe1vqZd4Jr7PQETn4EEJu/MalikouraSant%C3%A9?page-id=0%3A1&node-id=6-7272&viewport=781%2C-639%2C0.24&t=KWYGRr6fljUMIQ4I-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=976%3A5675"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsSectionUIUX;

