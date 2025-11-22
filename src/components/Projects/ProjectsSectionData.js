import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const PLACEHOLDER =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'><rect width='100%' height='100%' fill='%23222'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23bbbbbb' font-family='Arial' font-size='28'>Image%20%C3%A0%20venir</text></svg>";

function ProjectsSectionData() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets Data</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici une sélection de projets Data Science que j'ai réalisés, incluant analyse de données, machine learning et visualisation.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PLACEHOLDER}
              isBlog={false}
              title="Projet Elasticsearch"
              description="Projet Data Science M1 : moteur de recherche de documents basé sur Elasticsearch, avec une interface de recherche rapide et analyse de données."
              ghLink="https://github.com/souleymane-mg/projet_elasticsearch"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PLACEHOLDER}
              isBlog={false}
              title="EBM Application de recherche"
              description="Application développée pour un examen NoSQL, avec fonctionnalités de recherche et manipulation de données massives."
              ghLink="https://github.com/souleymane-mg/EBM_application_de_recherche"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PLACEHOLDER}
              isBlog={false}
              title="Air Quality Dashboard"
              description="Dashboard Python pour analyser et visualiser en temps réel les données sur la qualité de l'air avec machine learning pour prédictions."
              ghLink="https://github.com/souleymane-mg/air_quality_dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PLACEHOLDER}
              isBlog={false}
              title="Pipeline Big Data"
              description="Traitement en streaming avec Kafka, Spark, stockage MongoDB/PostgreSQL et visualisation Superset pour analyse de données en temps réel."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsSectionData;

