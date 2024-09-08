import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Ankit_Resume_2024.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1);
  const goToNextPage = () => setPageNumber(pageNumber < numPages ? pageNumber + 1 : numPages);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginBottom: "20px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center"
          >
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            onClick={goToPrevPage}
            disabled={pageNumber === 1}
            style={{ marginRight: "10px", width: "120px" }}
          >
            Previous
          </Button>
          <span style={{ margin: "0 10px", lineHeight: "38px" }}>
            Page {pageNumber} of {numPages}
          </span>
          <Button
            onClick={goToNextPage}
            disabled={pageNumber === numPages}
            style={{ marginLeft: "10px", width: "120px" }}
          >
            Next
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginTop: "20px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
