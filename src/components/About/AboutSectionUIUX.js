import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/Souleymane_Maiga_CV.pdf";

// Worker PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function AboutSectionUIUX() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
  }, []);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scale = width > 1200 ? 1.4 : width > 992 ? 1.2 : width > 768 ? 0.9 : 0.65;

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              À propos de <strong className="purple">MOI</strong>
            </h1>
            <p className="home-about-body" style={{ color: "white", fontSize: "1.2em", textAlign: "justify" }}>
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
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="À propos" className="img-fluid" />
          </Col>
        </Row>

        {/* Section CV */}
        <h1 className="project-heading" style={{ marginTop: "80px" }}>
          <strong className="purple">Mon CV</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: 16 }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            download
            style={{ maxWidth: "260px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télécharger mon CV (PDF)
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div style={{ color: "#bbb", padding: 20 }}>Chargement du CV…</div>}
            error={<div style={{ color: "#f88", padding: 20 }}>Impossible de charger le PDF. Vérifie le fichier.</div>}
            className="d-flex flex-column align-items-center"
          >
            {Array.from(new Array(numPages || 0), (_, i) => (
              <Page
                key={`page_${i + 1}`}
                pageNumber={i + 1}
                scale={scale}
                renderTextLayer={false}
                renderAnnotationLayer={true}
              />
            ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: 16 }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            download
            style={{ maxWidth: "260px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télécharger mon CV (PDF)
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutSectionUIUX;

