import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import SpecialitySelector from "./SpecialitySelector";
import Home2Developer from "./Home2Developer";
import Home2UIUX from "./Home2UIUX";
import Home2Data from "./Home2Data";
import TypeDeveloper from "./TypeDeveloper";
import TypeUIUX from "./TypeUIUX";
import TypeData from "./TypeData";

function Home() {
  const [activeSpeciality, setActiveSpeciality] = useState("developer");

  const renderTypeComponent = () => {
    switch (activeSpeciality) {
      case "uiux":
        return <TypeUIUX />;
      case "data":
        return <TypeData />;
      default:
        return <TypeDeveloper />;
    }
  };

  const renderHome2Component = () => {
    switch (activeSpeciality) {
      case "uiux":
        return <Home2UIUX />;
      case "data":
        return <Home2Data />;
      default:
        return <Home2Developer />;
    }
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <SpecialitySelector 
          activeSpeciality={activeSpeciality}
          onSpecialityChange={setActiveSpeciality}
        />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Salut !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                JE SUIS
                <strong className="main-name"> SOULEYMANE IBRAHIM MAÏGA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                {renderTypeComponent()}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Illustration d'accueil"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {renderHome2Component()}
    </section>
  );
}

export default Home;
