import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kykImg from "../../Assets/Projects/kyk_logo.png";
import accompaniedImg from "../../Assets/Projects/accompanied_logo.png";
import gamersGiftImg from "../../Assets/Projects/gamersgift_logo.png";
import eduSmartImg from "../../Assets/Projects/edusmart_logo.png";
import skrImg from "../../Assets/Projects/skr_logo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ letterSpacing: "0.05em" }}>
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white", lineHeight: "1.6", letterSpacing: "0.03em" }}>
          Here are some of the projects I've worked on recently, showcasing my skills and contributions.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accompaniedImg}
              isBlog={false}
              title="Accompanied Website"
              description="Developed a social networking site for a Canada-based client, utilizing React.js for the front-end. Integrated Firebase for real-time chat, Google Maps API for event locations, and Stripe/Converge payment gateways. Enabled seamless communication and secure transactions."
              demoLink="https://accompanied.ca/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kykImg}
              isBlog={false}
              title="KYK Bearings Website"
              description="Developed the official website for KYK Bearings' New Delhi branch, utilizing Next.js for server-side rendering to enhance performance and SEO. Implemented dynamic routing for blog posts and catalog sections, and optimized the website for SEO and social media sharing."
              demoLink="https://kykbrg.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skrImg}
              isBlog={false}
              title="SKR Career Guidance Web App"
              description="Contributed as a React.js developer for SKR, a career guidance platform. Created an admin panel with CRUD operations for efficient data entry and management, supporting dynamic control over career-related content."
              demoLink="https://skrcareerguidance.com/portal/login"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamersGiftImg}
              isBlog={false}
              title="GamersGift Website"
              description="Developed an e-commerce platform offering digital products and gaming gift cards. Integrated Next.js for server-side rendering, Cashfree and PhonePe payment gateways, and Google Analytics for tracking user interaction and conversion rates."
              demoLink="https://www.gamersgift.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eduSmartImg}
              isBlog={false}
              title="Edusmart School Management"
              description="Worked as a full-stack developer (React.js and Django) for Edusmart, a school management system. Developed multiple login modules (Super Admin, Admin, Teacher, Student, Non-Teaching Staff), and implemented payroll management features."
              demoLink="https://edusmart.encantotech.in/"
            />
          </Col>

        </Row>

        <h2 className="project-heading" style={{ paddingTop: "30px", letterSpacing: "0.05em" }}>
          <strong className="purple">Admin Panels</strong>
        </h2>
        <p style={{ color: "white", lineHeight: "1.6", letterSpacing: "0.03em" }}>
          I have also developed admin panels for multiple projects including KYK Bearings, Accompanied, and GamersGift, providing robust management tools for seamless data entry, user management, and content administration.
        </p>
      </Container>
    </Container>
  );
}

export default Projects;
