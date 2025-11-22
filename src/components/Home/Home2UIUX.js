import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2UIUX() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSE-MOI <span className="purple"> ME PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              En tant que <b className="purple">UI/UX Designer</b>, je crée des expériences 
              utilisateur intuitives et esthétiques. Mon approche combine design thinking, 
              recherche utilisateur et prototypage pour transformer des idées en interfaces 
              fonctionnelles et agréables.
              <br />
              <br />
              J'utilise <b className="purple">Figma</b> pour le design et le prototypage, 
              avec une attention particulière à l'accessibilité et à la responsivité. 
              Je conçois des interfaces qui allient esthétique moderne et facilité d'utilisation, 
              en pensant toujours à l'expérience utilisateur finale.
              <br />
              <br />
              Mon objectif est de créer des designs qui non seulement plaisent visuellement 
              mais qui résolvent également les problèmes réels des utilisateurs, en créant 
              des parcours fluides et engageants.
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

export default Home2UIUX;

