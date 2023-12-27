// Import necessary libraries and components
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import sdn from "../components/images/sdn.jpg";
import '../styles/home.css'

// Define the HomePage component
const HomePage = () => {
  return (
    <Container className="mt-5">
      <div className="home-container">
        <Row>
          <Col md={6} className="text-center">
            <h1 className="heading">ONOS Queue Management System</h1>
            <p>
              Enhance your network management with ONOS, the Open Network
              Operating System. ONOS provides a centralized and programmable
              solution for managing and controlling your network infrastructure.
              Experience the benefits of software-defined networking (SDN)
              today.
            </p>
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S1084804516303186" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Learn More</Button>
            </a>
          </Col>

          <Col md={6}>
            {/* Add an image or any other content here */}
            <img
              src={sdn}
              alt="software-defined networking imges"
              className="img-fluid"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

// Export the HomePage component
export default HomePage;
