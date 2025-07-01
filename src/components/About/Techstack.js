import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiHtml5,
  DiAws,
  DiCss3,
  DiMysql
} from "react-icons/di";

function Techstack() {
  const labelStyle = {
    fontSize: "1.75rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: "10px"
  };

  const iconStyle = {
    fontSize: "3rem",
    marginTop: "5px"
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div style={labelStyle}>
          Python
          <DiPython style={iconStyle} />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={labelStyle}>
          C++
          <CgCPlusPlus style={iconStyle} />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={labelStyle}>
          Javascript
          <DiJavascript1 style={iconStyle} />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={labelStyle}>
          React
          <DiReact style={iconStyle} />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={labelStyle}>
          AWS
          <DiAws style={iconStyle} />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={labelStyle}>
          HTML
          <DiHtml5 style={iconStyle} />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={labelStyle}>
          CSS
          <DiCss3 style={iconStyle} />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={labelStyle}>
          MYSQL
          <DiMysql style={iconStyle} />
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
