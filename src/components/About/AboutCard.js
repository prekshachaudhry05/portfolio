import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  const sectionStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "30px"
  };

  const innerCardStyle = {
    width: "80%",
    backgroundColor: "#1e1e2f",
    padding: "20px",
    borderRadius: "12px",
    color: "white",
    textAlign: "center"
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="purple">Preksha Chaudhary </span>
            from <span className="purple">Roorkee, Uttarakhand</span>.
            <br />
            I am currently a fresher looking for an opportunity to start my career in tech.
            <br />
            <br />
            A passionate and curious software developer with a strong foundation in web
            development and a keen interest in building clean, responsive, and user-friendly
            applications.
            <br />
            <br />
            I am pursuing my <span className="purple">B.Tech in Computer Science and Engineering</span> at
            VIT Chennai (Final Year).
            <br />
            <br />
            My goal is to contribute to innovative projects, grow as a developer, and make a
            positive impact through code.
          </p>
        </blockquote>

    </Card.Body>
    </Card>
  );
}

export default AboutCard;
