import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/home-main.svg";
import Particle from "./Particle";
import SpecialitySelector from "./Home/SpecialitySelector";
import Home2Developer from "./Home/Home2Developer";
import Home2UIUX from "./Home/Home2UIUX";
import Home2Data from "./Home/Home2Data";
import TypeDeveloper from "./Home/TypeDeveloper";
import TypeUIUX from "./Home/TypeUIUX";
import TypeData from "./Home/TypeData";
import AboutSticky from "./About/AboutSticky";
import ProjectsSection from "./Projects/ProjectsSection";
import ProjectsSectionUIUX from "./Projects/ProjectsSectionUIUX";
import ProjectsSectionData from "./Projects/ProjectsSectionData";
import Footer from "./Footer";
import Collaboration from "./Collaboration";
import { SpecialityContext } from "../App";

function SinglePage() {
  const { activeSpeciality, setActiveSpeciality } = useContext(SpecialityContext);

  // Changer le thème selon le métier
  useEffect(() => {
    const root = document.documentElement;
    if (activeSpeciality === "uiux") {
      root.style.setProperty("--imp-text-color", "#38635b");
      root.style.setProperty("--theme-primary", "#38635b");
      root.classList.add("theme-uiux");
      root.classList.remove("theme-data", "theme-developer");
    } else if (activeSpeciality === "data") {
      root.style.setProperty("--imp-text-color", "#c770f0");
      root.style.setProperty("--theme-primary", "#c770f0");
      root.classList.add("theme-data");
      root.classList.remove("theme-uiux", "theme-developer");
    } else {
      root.style.setProperty("--imp-text-color", "#c770f0");
      root.style.setProperty("--theme-primary", "#c770f0");
      root.classList.add("theme-developer");
      root.classList.remove("theme-uiux", "theme-data");
    }
  }, [activeSpeciality]);

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



  const renderProjectsSection = () => {
    switch (activeSpeciality) {
      case "uiux":
        return <ProjectsSectionUIUX />;
      case "data":
        return <ProjectsSectionData />;
      default:
        return <ProjectsSection />;
    }
  };

  return (
    <div className={`single-page theme-${activeSpeciality}`}>
      <SpecialitySelector />
      {/* Section Home */}
      <section id="home">
        <Container fluid className="home-section">
          <Particle />
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

      {/* Section About */}
      <section id="about">
        <AboutSticky />
      </section>

      {/* Section Collaboration */}
      <section id="collaboration">
        <Collaboration />
      </section>

      {/* Section Projects */}
      <section id="projects">
        {renderProjectsSection()}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SinglePage;
