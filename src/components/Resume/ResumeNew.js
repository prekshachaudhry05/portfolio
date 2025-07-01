import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "./resume.css";

// Correct pathing for GitHub Pages
const pdfUrl = `${process.env.PUBLIC_URL}/preksha-chaudhary-resume.pdf`;
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section" style={{ paddingBottom: "0px" }}>
        <Particle />

        

        {/* PDF Display */}
        <Row className="resume d-flex justify-content-center" style={{ marginBottom: "0px" }}>
          <div className="pdf-container">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(error) => console.error("PDF load error:", error)}
            >
              <Page
                pageNumber={1}
                scale={width > 786 ? 1.5 : 0.6}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>
          </div>
        </Row>


        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center", marginTop: "20px", marginBottom: "0px" }}>
          <Button
            variant="primary"
            href={pdfUrl}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
