import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imgYoobu from "../../Assets/Projects/yoobu.png";
import imgMhkGestion from "../../Assets/Projects/mhkgestion.png";

// 🔄 Image placeholder inline (aucun fichier nécessaire)
const PLACEHOLDER =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'><rect width='100%' height='100%' fill='%23222'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23bbbbbb' font-family='Arial' font-size='28'>Image%20%C3%A0%20venir</text></svg>";

function ProjectsSection() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici une sélection de projets que j'ai réalisés : personnels, académiques et professionnels.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Projets pro et académiques supplémentaires */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgMhkGestion}
              isBlog={false}
              title="MHK Gestion – Site de gestion de recrutement"
              description="Plateforme de recrutement permettant la publication d'offres, la réception et le tri des candidatures, le suivi du pipeline (pré-sélection, entretien, décision) et des tableaux de bord pour les recruteurs."
              demoLink="https://mhk-gestion.com/"
            />
          </Col>

          {/* Projets GitHub publics */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PLACEHOLDER}
              isBlog={false}
              title="Messagerie PHP"
              description="Application de messagerie en PHP, permettant l'échange de messages en temps réel avec une interface simple et intuitive."
              ghLink="https://github.com/souleymane-mg/messagerie"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PLACEHOLDER}
              isBlog={false}
              title="Projet Elasticsearch"
              description="Projet Data Science M1 : moteur de recherche de documents basé sur Elasticsearch, avec une interface de recherche rapide."
              ghLink="https://github.com/souleymane-mg/projet_elasticsearch"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PLACEHOLDER}
              isBlog={false}
              title="EBM Application de recherche"
              description="Application développée pour un examen NoSQL, avec fonctionnalités de recherche et manipulation de données."
              ghLink="https://github.com/souleymane-mg/EBM_application_de_recherche"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PLACEHOLDER}
              isBlog={false}
              title="Air Quality Dashboard"
              description="Dashboard Python pour analyser et visualiser en temps réel les données sur la qualité de l'air."
              ghLink="https://github.com/souleymane-mg/air_quality_dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PLACEHOLDER}
              isBlog={false}
              title="SnapMeal"
              description="Application mobile en Dart/Flutter pour la gestion des repas, avec interface intuitive."
              ghLink="https://github.com/souleymane-mg/snapmeal"
            />
          </Col>

          {/* Projets pro et académiques supplémentaires */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgYoobu}
              isBlog={false}
              title="YOOBU – E-commerce WordPress"
              description="Boutique WooCommerce avec optimisation UX mobile, templates personnalisés et intégrations spécifiques."
              demoLink="https://yoobu.shop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PLACEHOLDER}
              isBlog={false}
              title="Classroom App"
              description="Application React + Node.js + MySQL pour la gestion de classes, groupes, documents et suivi de projets."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PLACEHOLDER}
              isBlog={false}
              title="Pipeline Big Data"
              description="Traitement en streaming avec Kafka, Spark, stockage MongoDB/PostgreSQL et visualisation Superset."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PLACEHOLDER}
              isBlog={false}
              title="CI/CD Azure DevOps + Inno Setup"
              description="Pipeline de build et packaging .NET avec obfuscation et génération d'installateur Inno Setup."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PLACEHOLDER}
              isBlog={false}
              title="AGFA_IA – Application Desktop"
              description="Application WinForms (C#/.NET DevExpress) avec automatisations et packaging complet."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsSection;

