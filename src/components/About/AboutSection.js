import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/Souleymane_Maiga_CV.pdf";

// Worker PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function AboutSection() {
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
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="À propos" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Compétences</strong> techniques
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Outils</strong> que j'utilise
        </h1>
        <Toolstack />

        <Github />

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

export default AboutSection;

