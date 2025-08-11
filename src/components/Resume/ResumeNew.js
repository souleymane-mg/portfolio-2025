import React, { useState, useEffect, useCallback } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // ✅ garde uniquement celui-ci

import pdf from "../../Assets/Souleymane_Maiga_CV.pdf";

// Worker PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
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
    <div>
      <Container fluid className="resume-section">
        <Particle />

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
                renderTextLayer={false}          // ⬅️ on désactive la TextLayer
                renderAnnotationLayer={true}     // ⬅️ garde les annotations (liens…)
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
    </div>
  );
}

export default ResumeNew;
