import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2Data() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSE-MOI <span className="purple"> ME PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              En tant que <b className="purple">Data Scientist</b>, je transforme les données 
              en insights actionnables. Mon Master en Data Science m'a permis de maîtriser 
              l'analyse de données, le machine learning et la visualisation pour résoudre 
              des problèmes complexes.
              <br />
              <br />
              Je travaille avec <b className="purple">Python</b>, <b className="purple">SQL</b>, 
              et les bibliothèques de <b className="purple">Machine Learning</b> (Scikit-learn, 
              TensorFlow/PyTorch). J'ai également de l'expérience avec <b className="purple">Elasticsearch</b> 
              pour la recherche de documents et la création de pipelines Big Data avec 
              <b className="purple"> Kafka, Spark</b> et <b className="purple">MongoDB</b>.
              <br />
              <br />
              Mon approche combine analyse statistique rigoureuse, modélisation prédictive 
              et visualisation de données pour aider à la prise de décision basée sur les données.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVE-MOI</h1>
            <p>
              N'hésite pas à <span className="purple">me contacter</span> :
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/souleymane-mg"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/souleymane-ibrahim-maïga-69b700376/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/souleymane.mg/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2Data;

