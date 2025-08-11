import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSE-MOI <span className="purple"> ME PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Passionné par la création de solutions utiles, je conçois et développe
              des applications web & desktop, avec un soin particulier pour l’UX/UI
              et la performance. Je travaille chez <b className="purple">Samina</b> à
              Bamako, où j’intègre des sites <b className="purple">WordPress</b>,
              automatise des workflows et mets en place des tableaux de bord.
              <br />
              <br />
              Côté stack, je pratique au quotidien{" "}
              <b className="purple">React.js</b>, <b className="purple">C#/.NET</b>{" "}
              (DevExpress), <b className="purple">WordPress</b> et{" "}
              <b className="purple">Azure DevOps</b>. En parallèle de mon Master en
              Data Science, j’approfondis <b className="purple">Python</b>,{" "}
              <b className="purple">SQL</b> et les bases du <b className="purple">ML</b>
              {" "} (Scikit-learn, TensorFlow/PyTorch).
              <br />
              <br />
              J’aime transformer des besoins métiers en produits concrets : intégration
              propre, composants réutilisables, CI/CD, et une expérience utilisateur
              claire et accessible.
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
              N’hésite pas à <span className="purple">me contacter</span> :
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                {/* Remplace par ton vrai GitHub */}
                <a
                  href="https://github.com/ton-github"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                {/* LinkedIn de ton profil */}
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
                {/* Remplace si tu as Instagram */}
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

export default Home2;
