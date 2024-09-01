import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { FaGitSquare, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/leonardo-adami-rossato-rodrigues-670704125/">
                <FaLinkedin className="icon" />
              </a>
              <a href="https://github.com/LeonardoAdami21">
                <FaGitSquare className="icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
            <p>Designed by Leonardo Adami</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
