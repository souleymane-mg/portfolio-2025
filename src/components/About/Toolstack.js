import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiAzuredevops,
  SiFigma,
  SiGithub,
  SiNotion,
  SiDocker,
  SiWindows,
  SiMysql,
  SiFilezilla,
  SiVisualstudio,
  SiSlack,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows /> {/* Environnement principal */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* Éditeur principal */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio /> {/* Éditeur principal */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops /> {/* CI/CD, gestion projets */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> {/* Versionning */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Tests API */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma /> {/* UX/UI Design */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack /> {/* Organisation / Documentation */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker /> {/* Conteneurisation */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* Base de données */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFilezilla /> {/* Base de données */}
      </Col>
    </Row>
  );
}

export default Toolstack;
