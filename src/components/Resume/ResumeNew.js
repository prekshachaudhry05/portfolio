import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "../App.css";

const pdfUrl = `${process.env.PUBLIC_URL}/preksha-chaudhary-resume.pdf`;
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <Container fluid className="resume-section p-0 m-0" style={{ overflow: "hidden" }}>
        <Particle />

        {/* Top Button */}
        <Row className="justify-content-center mb-3">
          <Button variant="primary" href={pdfUrl} target="_blank">
            <AiOutlineDownload /> &nbsp;Download Resume
          </Button>
        </Row>

        {/* PDF Viewer */}
        <Row className="justify-content-center m-0">
          <div className="pdf-wrapper">
            <Document
              file={pdfUrl}
              onLoadError={(error) => console.error("PDF load error:", error)}
            >
              <Page
                pageNumber={1}
                scale={width > 786 ? 1.4 : 0.6}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>
          </div>
        </Row>

        {/* Bottom Button */}
        <Row className="justify-content-center mt-3">
          <Button variant="primary" href={pdfUrl} target="_blank">
            <AiOutlineDownload /> &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
