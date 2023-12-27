// Import necessary libraries and components
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import team from "../components/images/team.jpg";
import '../styles/about.css'

// Define the AboutMePage component
const About = () => {
  return (
    <Container className="mt-5">
      <div className="about-container">
        <Row>
          <Col md={6} className="text-box">
            <h1>About Us</h1>
            <p>Hi there! We are </p>
            <ul>
              <li>Chinthana S.K.G. - 200093M</li>
              <li>Janith H.M.K. - 200236G</li>
              <li>Jayasinghe A.I. - 200255M</li>
              <li>Kavinda K.A.A.L. - 200300A</li>
              <li>Muaadh M.N.M. - 200401J</li>
            </ul>
          </Col>
          <Col md={6}>
            {/* Add an image or any other content here */}
            <img src={team} alt="group photo" className="img-fluid" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

// Export the AboutMePage component
export default About;
