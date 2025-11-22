import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imgYoobu from "../../Assets/Projects/yoobu.png";

const PLACEHOLDER =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'><rect width='100%' height='100%' fill='%23222'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23bbbbbb' font-family='Arial' font-size='28'>Image%20%C3%A0%20venir</text></svg>";

function ProjectsSectionUIUX() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets UI/UX</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici une sélection de projets UI/UX que j'ai réalisés, mettant en avant le design d'interfaces et l'expérience utilisateur.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgYoobu}
              isBlog={false}
              title="YOOBU – E-commerce WordPress"
              description="Boutique WooCommerce avec optimisation UX mobile, templates personnalisés et intégrations spécifiques. Focus sur l'expérience utilisateur et le design responsive."
              demoLink="https://yoobu.shop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PLACEHOLDER}
              isBlog={false}
              title="MHK Gestion – Interface de recrutement"
              description="Design d'interface pour plateforme de recrutement avec focus sur l'UX pour les recruteurs et candidats. Interface intuitive et moderne."
              demoLink="https://mhk-gestion.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PLACEHOLDER}
              isBlog={false}
              title="Design System & Prototypes Figma"
              description="Création d'un design system complet avec composants réutilisables, guidelines et prototypes interactifs pour applications web."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsSectionUIUX;

