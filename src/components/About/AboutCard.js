import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p  style={{
              textAlign: "justify",
              fontSize: "1.1rem",
              lineHeight: "1.6",
            }}>
            Hello! I am <span className="purple">Ankit Pandey</span> from 
            <span className="purple"> Indore, India</span>. 
            <br />
            I am a skilled software developer with over 3 years of experience, currently working at 
            <span className="purple"> Encanto Technologies</span>. 
            <br />
            I hold a Master’s degree in Computer Applications from 
            <span className="purple"> Mangalayatan University</span>, and I've been deeply involved in building 
            scalable and impactful web solutions.
            <br />
            <br />
            Beyond work, I am constantly honing my skills and staying updated with the latest tech trends.
            Here are a few activities that I enjoy in my free time:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Technical Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Experiencing New Cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Continuous learning and building products that make a difference is my passion!"{" "}
          </p>
          <footer className="blockquote-footer">Ankit Pandey</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
