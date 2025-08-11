import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis{" "}
            <span className="purple">Souleymane Ibrahim Maïga</span> basé à{" "}
            <span className="purple">Bamako, Mali</span>.
            <br />
            Je suis actuellement développeur web et logiciel chez{" "}
            <strong className="purple">Samina</strong>.
            <br />
            Je travaille sur l’intégration WordPress, le développement
            d’applications React.js, ainsi que sur des solutions
            C#/.NET (DevExpress) et des projets d’automatisation.
            <br />
            Je poursuis également un{" "}
            <strong className="purple">Master en Data Science</strong>
            , où je me spécialise dans l’analyse de données, le Machine Learning
            et le Big Data.
            <br />
            <br />
            En dehors du code, voici quelques activités que j’aime pratiquer :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Concevoir des interfaces et maquettes UX/UI
            </li>
            <li className="about-activity">
              <ImPointRight /> Explorer de nouvelles technologies et frameworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Lire et me former en continu
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Créer des solutions qui font la différence"{" "}
          </p>
          <footer className="blockquote-footer">
            Souleymane Ibrahim Maïga
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
