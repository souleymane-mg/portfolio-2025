import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particles from "react-tsparticles";

// SVG Data URIs for the dot shapes (Unified Color: Subtle Blue #4db5ff)
// Complex "Cloud of Dots" with blinking animation
// We use multiple groups <g> with different animation timings to simulate independent blinking.

const codeDots = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3Cstyle%3E .blink1 { animation: o 2s infinite; } .blink2 { animation: o 3s infinite; } .blink3 { animation: o 1.5s infinite; } @keyframes o { 0%25 { opacity: 0.3; } 50%25 { opacity: 1; } 100%25 { opacity: 0.3; } } %3C/style%3E%3C/defs%3E%3Cg fill='%234db5ff'%3E%3C!-- Left Bracket Cloud --%3E%3Cg class='blink1'%3E%3Ccircle cx='80' cy='100' r='1.5'/%3E%3Ccircle cx='78' cy='102' r='1'/%3E%3Ccircle cx='82' cy='98' r='1'/%3E%3Ccircle cx='70' cy='110' r='1.5'/%3E%3Ccircle cx='68' cy='112' r='1'/%3E%3Ccircle cx='72' cy='108' r='1'/%3E%3Ccircle cx='60' cy='120' r='1.5'/%3E%3Ccircle cx='58' cy='122' r='1'/%3E%3Ccircle cx='62' cy='118' r='1'/%3E%3Ccircle cx='50' cy='130' r='1.5'/%3E%3Ccircle cx='48' cy='132' r='1'/%3E%3Ccircle cx='52' cy='128' r='1'/%3E%3Ccircle cx='40' cy='140' r='1.5'/%3E%3Ccircle cx='38' cy='142' r='1'/%3E%3Ccircle cx='42' cy='138' r='1'/%3E%3Ccircle cx='30' cy='150' r='1.5'/%3E%3Ccircle cx='28' cy='152' r='1'/%3E%3Ccircle cx='32' cy='148' r='1'/%3E%3C/g%3E%3Cg class='blink2'%3E%3Ccircle cx='40' cy='160' r='1.5'/%3E%3Ccircle cx='38' cy='158' r='1'/%3E%3Ccircle cx='42' cy='162' r='1'/%3E%3Ccircle cx='50' cy='170' r='1.5'/%3E%3Ccircle cx='48' cy='168' r='1'/%3E%3Ccircle cx='52' cy='172' r='1'/%3E%3Ccircle cx='60' cy='180' r='1.5'/%3E%3Ccircle cx='58' cy='178' r='1'/%3E%3Ccircle cx='62' cy='182' r='1'/%3E%3Ccircle cx='70' cy='190' r='1.5'/%3E%3Ccircle cx='68' cy='188' r='1'/%3E%3Ccircle cx='72' cy='192' r='1'/%3E%3Ccircle cx='80' cy='200' r='1.5'/%3E%3Ccircle cx='78' cy='198' r='1'/%3E%3Ccircle cx='82' cy='202' r='1'/%3E%3C/g%3E%3C!-- Double Line Effect (Outer) --%3E%3Cg class='blink3'%3E%3Ccircle cx='85' cy='100' r='1'/%3E%3Ccircle cx='75' cy='110' r='1'/%3E%3Ccircle cx='65' cy='120' r='1'/%3E%3Ccircle cx='55' cy='130' r='1'/%3E%3Ccircle cx='45' cy='140' r='1'/%3E%3Ccircle cx='35' cy='150' r='1'/%3E%3Ccircle cx='45' cy='160' r='1'/%3E%3Ccircle cx='55' cy='170' r='1'/%3E%3Ccircle cx='65' cy='180' r='1'/%3E%3Ccircle cx='75' cy='190' r='1'/%3E%3Ccircle cx='85' cy='200' r='1'/%3E%3C/g%3E%3C!-- Right Bracket Cloud --%3E%3Cg class='blink1'%3E%3Ccircle cx='320' cy='100' r='1.5'/%3E%3Ccircle cx='318' cy='102' r='1'/%3E%3Ccircle cx='322' cy='98' r='1'/%3E%3Ccircle cx='330' cy='110' r='1.5'/%3E%3Ccircle cx='328' cy='112' r='1'/%3E%3Ccircle cx='332' cy='108' r='1'/%3E%3Ccircle cx='340' cy='120' r='1.5'/%3E%3Ccircle cx='338' cy='122' r='1'/%3E%3Ccircle cx='342' cy='118' r='1'/%3E%3Ccircle cx='350' cy='130' r='1.5'/%3E%3Ccircle cx='348' cy='132' r='1'/%3E%3Ccircle cx='352' cy='128' r='1'/%3E%3Ccircle cx='360' cy='140' r='1.5'/%3E%3Ccircle cx='358' cy='142' r='1'/%3E%3Ccircle cx='362' cy='138' r='1'/%3E%3Ccircle cx='370' cy='150' r='1.5'/%3E%3Ccircle cx='368' cy='152' r='1'/%3E%3Ccircle cx='372' cy='148' r='1'/%3E%3C/g%3E%3Cg class='blink2'%3E%3Ccircle cx='360' cy='160' r='1.5'/%3E%3Ccircle cx='358' cy='158' r='1'/%3E%3Ccircle cx='362' cy='162' r='1'/%3E%3Ccircle cx='350' cy='170' r='1.5'/%3E%3Ccircle cx='348' cy='168' r='1'/%3E%3Ccircle cx='352' cy='172' r='1'/%3E%3Ccircle cx='340' cy='180' r='1.5'/%3E%3Ccircle cx='338' cy='178' r='1'/%3E%3Ccircle cx='342' cy='182' r='1'/%3E%3Ccircle cx='330' cy='190' r='1.5'/%3E%3Ccircle cx='328' cy='188' r='1'/%3E%3Ccircle cx='332' cy='192' r='1'/%3E%3Ccircle cx='320' cy='200' r='1.5'/%3E%3Ccircle cx='318' cy='198' r='1'/%3E%3Ccircle cx='322' cy='202' r='1'/%3E%3C/g%3E%3Cg class='blink3'%3E%3Ccircle cx='315' cy='100' r='1'/%3E%3Ccircle cx='325' cy='110' r='1'/%3E%3Ccircle cx='335' cy='120' r='1'/%3E%3Ccircle cx='345' cy='130' r='1'/%3E%3Ccircle cx='355' cy='140' r='1'/%3E%3Ccircle cx='365' cy='150' r='1'/%3E%3Ccircle cx='355' cy='160' r='1'/%3E%3Ccircle cx='345' cy='170' r='1'/%3E%3Ccircle cx='335' cy='180' r='1'/%3E%3Ccircle cx='325' cy='190' r='1'/%3E%3Ccircle cx='315' cy='200' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

const envelopeDots = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3Cstyle%3E .blink1 { animation: o 2s infinite; } .blink2 { animation: o 3s infinite; } .blink3 { animation: o 1.5s infinite; } @keyframes o { 0%25 { opacity: 0.3; } 50%25 { opacity: 1; } 100%25 { opacity: 0.3; } } %3C/style%3E%3C/defs%3E%3Cg fill='%234db5ff'%3E%3C!-- Envelope Cloud --%3E%3Cg class='blink1'%3E%3C!-- Top Flap --%3E%3Ccircle cx='50' cy='80' r='1.5'/%3E%3Ccircle cx='70' cy='90' r='1.5'/%3E%3Ccircle cx='90' cy='100' r='1.5'/%3E%3Ccircle cx='110' cy='110' r='1.5'/%3E%3Ccircle cx='130' cy='120' r='1.5'/%3E%3Ccircle cx='150' cy='130' r='1.5'/%3E%3Ccircle cx='170' cy='140' r='1.5'/%3E%3Ccircle cx='190' cy='150' r='1.5'/%3E%3Ccircle cx='210' cy='150' r='1.5'/%3E%3Ccircle cx='230' cy='140' r='1.5'/%3E%3Ccircle cx='250' cy='130' r='1.5'/%3E%3Ccircle cx='270' cy='120' r='1.5'/%3E%3Ccircle cx='290' cy='110' r='1.5'/%3E%3Ccircle cx='310' cy='100' r='1.5'/%3E%3Ccircle cx='330' cy='90' r='1.5'/%3E%3Ccircle cx='350' cy='80' r='1.5'/%3E%3C/g%3E%3Cg class='blink2'%3E%3C!-- Bottom Line --%3E%3Ccircle cx='50' cy='220' r='1.5'/%3E%3Ccircle cx='80' cy='220' r='1.5'/%3E%3Ccircle cx='110' cy='220' r='1.5'/%3E%3Ccircle cx='140' cy='220' r='1.5'/%3E%3Ccircle cx='170' cy='220' r='1.5'/%3E%3Ccircle cx='200' cy='220' r='1.5'/%3E%3Ccircle cx='230' cy='220' r='1.5'/%3E%3Ccircle cx='260' cy='220' r='1.5'/%3E%3Ccircle cx='290' cy='220' r='1.5'/%3E%3Ccircle cx='320' cy='220' r='1.5'/%3E%3Ccircle cx='350' cy='220' r='1.5'/%3E%3C/g%3E%3Cg class='blink3'%3E%3C!-- Sides --%3E%3Ccircle cx='50' cy='100' r='1.5'/%3E%3Ccircle cx='50' cy='130' r='1.5'/%3E%3Ccircle cx='50' cy='160' r='1.5'/%3E%3Ccircle cx='50' cy='190' r='1.5'/%3E%3Ccircle cx='350' cy='100' r='1.5'/%3E%3Ccircle cx='350' cy='130' r='1.5'/%3E%3Ccircle cx='350' cy='160' r='1.5'/%3E%3Ccircle cx='350' cy='190' r='1.5'/%3E%3C/g%3E%3C!-- Scattered Dots for Cloud Effect --%3E%3Cg class='blink1'%3E%3Ccircle cx='55' cy='85' r='1'/%3E%3Ccircle cx='75' cy='95' r='1'/%3E%3Ccircle cx='95' cy='105' r='1'/%3E%3Ccircle cx='115' cy='115' r='1'/%3E%3Ccircle cx='135' cy='125' r='1'/%3E%3Ccircle cx='155' cy='135' r='1'/%3E%3Ccircle cx='175' cy='145' r='1'/%3E%3Ccircle cx='195' cy='155' r='1'/%3E%3Ccircle cx='215' cy='155' r='1'/%3E%3Ccircle cx='235' cy='145' r='1'/%3E%3Ccircle cx='255' cy='135' r='1'/%3E%3Ccircle cx='275' cy='125' r='1'/%3E%3Ccircle cx='295' cy='115' r='1'/%3E%3Ccircle cx='315' cy='105' r='1'/%3E%3Ccircle cx='335' cy='95' r='1'/%3E%3Ccircle cx='355' cy='85' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

function Collaboration() {
  return (
    <Container fluid className="collaboration-section" style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}>
      {/* Particles Background - Confined to this section */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <Particles
          id="collab-particles"
          params={{
            particles: {
              number: {
                value: 100, // High density
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
                random: true,
              },
              size: {
                value: 2,
                random: true,
              },
              move: {
                enable: true,
                speed: 1, // "Flying" effect
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
              },
              modes: {
                bubble: {
                  distance: 200,
                  size: 4,
                  duration: 2,
                  opacity: 0.8,
                },
              },
            },
            retina_detect: true,
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <Container style={{ position: "relative", zIndex: 1 }}>
        <Row>
          {/* Collaborate Section */}
          <Col md={6} className="collab-column">
            <div className="collab-content-wrapper">
              <div className="dots-container">
                {/* Shape appears on hover */}
                <div className="dots-shape" style={{ backgroundImage: codeDots }}></div>
              </div>
              
              <div className="text-content">
                <span className="badge-pill">Pour les développeurs</span>
                <h2 className="collab-title">
                  Collaborer<br/>
                  <span className="subtitle">Construisons ensemble</span>
                </h2>
                <Button 
                  variant="primary" 
                  href="mailto:souleymane.maiga@example.com?subject=Proposition de Collaboration"
                  className="collab-btn"
                >
                  Proposer une collaboration
                </Button>
              </div>
            </div>
          </Col>

          {/* Contact Section */}
          <Col md={6} className="collab-column">
            <div className="collab-content-wrapper">
              <div className="dots-container">
                {/* Shape appears on hover */}
                <div className="dots-shape" style={{ backgroundImage: envelopeDots }}></div>
              </div>

              <div className="text-content">
                <span className="badge-pill">Pour les entreprises et les particuliers </span>
                <h2 className="collab-title">
                  Me Contacter<br/>
                  <span className="subtitle">Réalisons votre projet</span>
                </h2>
                <Button 
                  variant="outline-primary" 
                  href="mailto:souleymane.maiga@example.com?subject=Nouveau Projet"
                  className="collab-btn outline-btn"
                >
                  Démarrer un projet
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Collaboration;
