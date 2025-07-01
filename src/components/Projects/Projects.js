import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import anxiety from "../../Assets/Projects/anxiety.png";
import facial from "../../Assets/Projects/facial.jpg";
import music from "../../Assets/Projects/music.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facial}
              isBlog={false}
              title="RealTime Facial Analysis System using AWS"
              description="This project is a web-based facial recognition system that uses AWS Rekognition to detect and analyze 
              faces in images uploaded by users. The frontend is built with HTML and Python (Flask), allowing users to upload images 
              which are stored in an Amazon S3 bucket. An AWS Lambda function is triggered upon each upload, which sends the image to 
              AWS Rekognition for facial detection. The detected face data, including unique face IDs and attributes, are stored in 
              Amazon DynamoDB for future reference. The system can also match new images against previously indexed faces, making it 
              suitable for applications like identity verification, attendance tracking, and secure access control. 
              This serverless architecture ensures scalability, low cost, and real-time processing."
              ghLink=""        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anxiety}
              isBlog={false}
              title="Anxiety Companion Chatbox"
              description="This project focuses on building an empathetic chatbot capable of understanding user 
              emotions and responding with emotionally appropriate messages. It uses the cardiffnlp/twitter-roberta-base-sentiment model 
              fine-tuned on the Sentiment140 dataset to classify text into positive, neutral, or negative sentiments. The fine-tuning 
              process enhances the model’s understanding of sentiment in real-world conversations, especially social media-style text. 
              The chatbot uses these predictions to generate empathetic and context-aware responses. The final system is integrated 
              with a GUI using Tkinter for an interactive user experience"
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Mood Music Recommender"
              description="This project uses an emotion recognition model trained on the FER-2013 dataset to detect seven distinct 
              emotions. It captures a live video feed from the user's webcam and analyzes facial expressions in real time to predict the 
              current emotional state. Based on the detected emotion, the system then fetches a curated playlist from Spotify 
              using the Spotipy library and displays personalized song recommendations directly on the screen."
              ghLink=""
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
